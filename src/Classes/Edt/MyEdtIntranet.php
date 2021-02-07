<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Classes/Edt/MyEdtIntranet.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 07/02/2021 11:11
 */

/*
 * Pull your hearder here, for exemple, Licence header.
 */

namespace App\Classes\Edt;

use App\Entity\AnneeUniversitaire;
use App\Entity\Constantes;
use App\Entity\EdtPlanning;
use App\Entity\Etudiant;
use App\Entity\Groupe;
use App\Entity\Personnel;
use App\Entity\Semestre;
use App\Entity\TypeGroupe;
use App\Repository\CalendrierRepository;
use App\Repository\EdtPlanningRepository;
use App\Repository\GroupeRepository;
use App\Repository\MatiereRepository;
use App\Repository\PersonnelRepository;
use App\Repository\SemestreRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;

class MyEdtIntranet extends BaseEdt implements EdtInterface
{
    protected EdtPlanningRepository $edtPlanningRepository;

    private SemestreRepository $semestreRepository;

    private GroupeRepository $groupeRepository;

    private MatiereRepository $matiereRepository;
    private PersonnelRepository $personnelRepository;
    private EntityManagerInterface $entityManager;
    private array $tab = [];

    /**
     * MyEdt constructor.
     */
    public function __construct(
        CalendrierRepository $celcatCalendrierRepository,
        EdtPlanningRepository $edtPlanningRepository,
        SemestreRepository $semestreRepository,
        GroupeRepository $groupeRepository,
        MatiereRepository $matiereRepository,
        PersonnelRepository $personnelRepository,
        EntityManagerInterface $entityManager
    ) {
        parent::__construct($celcatCalendrierRepository);
        $this->edtPlanningRepository = $edtPlanningRepository;
        $this->semestreRepository = $semestreRepository;
        $this->groupeRepository = $groupeRepository;
        $this->matiereRepository = $matiereRepository;
        $this->personnelRepository = $personnelRepository;
        $this->entityManager = $entityManager;
    }

    /**
     * @param int $semaine
     */
    public function initPersonnel(
        Personnel $personnel,
        AnneeUniversitaire $anneeUniversitaire,
        $semaine = 0
    ): self {
        $this->user = $personnel;
        $this->init($anneeUniversitaire, 'prof', $personnel->getId(), $semaine);
        $this->semaines = $this->calculSemaines();
        $this->calculEdt(); //todo: pour des datas en BDD sans scelcat. Ajouter test.

        return $this;
    }

    /**
     * @param int $semaine
     */
    public function initEtudiant(
        Etudiant $etudiant,
        AnneeUniversitaire $anneeUniversitaire,
        $semaine = 0
    ): self {
        $this->user = $etudiant;
        $this->init($anneeUniversitaire, 'etudiant', $etudiant->getId(), $semaine);
        $this->calculEdt();

        return $this;
    }

    public function calculEdt(): bool
    {
        if ('' !== $this->semaineFormationIUT) {
            switch ($this->filtre) {
                case 'promo':
                    $this->semestre = $this->semestreRepository->find($this->valeur);
                    $this->groupes = $this->groupeRepository->findAllGroupes($this->semestre);
                    $pl = $this->edtPlanningRepository->findEdtSemestre($this->semestre, $this->semaineFormationIUT);
                    $this->planning = $this->transformePromo($pl);
                    break;
                case 'prof':
                    $pl = $this->edtPlanningRepository->findEdtProf($this->valeur, $this->semaineFormationIUT);
                    $this->planning = $this->transformeProf($pl);
                    break;
                case 'etudiant':
                    $this->groupes();
                    $pl = $this->edtPlanningRepository->findEdtEtu($this->user, $this->semaineFormationIUT);
                    if (null !== $pl) {
                        $this->planning = $this->transformeEtudiant($pl);
                        $this->semestre = $this->user->getSemestre();
                    } else {
                        return false;
                    }
                    break;
                case 'module':
                    $this->module = $this->matiereRepository->find($this->valeur);
                    $this->semestre = $this->module->getSemestre();
                    $this->groupes = $this->groupeRepository->findAllGroupes($this->semestre);

                    $pl = $this->edtPlanningRepository->findEdtModule($this->valeur, $this->semaineFormationIUT);
                    $this->planning = $this->transformeModule($pl);
                    break;
                case 'salle':
                    $pl = $this->edtPlanningRepository->findEdtSalle($this->valeur, $this->semaineFormationIUT);
                    $this->salle = $this->valeur;
                    $this->planning = $this->transformeSalle($pl);
                    break;

                case 'jour':
                    $pl = $this->edtPlanningRepository->findEdtJour($this->valeur,
                        $this->semaineFormationIUT);

                    $this->jour = $this->valeur;
                    $this->planning = $this->transformeJour($pl);
                    break;
            }
        }

        return false;
    }

    public function initAdministration(
        $departement,
        $semaine,
        $filtre,
        $valeur,
        AnneeUniversitaire $anneeUniversitaire
    ): self {
        if ('' === $valeur) {
            $semestres = $this->semestreRepository->findByDepartementActif($departement);
            if (\count($semestres) > 0) {
                $valeur = $semestres[0]->getId();
            }
            //erreur
        }

        $this->init($anneeUniversitaire, $filtre, $valeur, $semaine);
        $this->semaines = $this->calculSemaines();
        $this->calculEdt();

        return $this;
    }

    /**
     * @param $pl
     */
    private function transformeProf($pl): array
    {
        $this->tab = [];

        /** @var EdtPlanning $p */
        foreach ($pl as $p) {
            $dbtEdt = $this->convertEdt($p->getDebut());
            $finEdt = $this->convertEdt($p->getFin());

            $this->tab[$p->getJour()][$dbtEdt]['duree'] = $p->getFin() - $p->getDebut();

            for ($i = $dbtEdt; $i < $finEdt; ++$i) {
                $this->tab[$p->getJour()][$i]['texte'] = 'xx';
            }

            $this->tab[$p->getJour()][$dbtEdt]['texte'] = $p->getSalle() . '<br />' . $this->isEvaluation($p,
                    'long') . '<br />' . $p->getSemestre()->getLibelle() . ' |  ' . $p->getDisplayGroupe();

            $this->tab[$p->getJour()][$dbtEdt]['couleur'] = $this->getCouleur($p);
            $this->tab[$p->getJour()][$dbtEdt]['pl'] = $p->getId();
            $this->tab[$p->getJour()][$dbtEdt]['couleurTexte'] = $this->getCouleurTexte($p);
            $this->tab[$p->getJour()][$dbtEdt]['format'] = 'ok';
            $this->valideFormat($p);
            $this->calculTotal($p);
        }

        return $this->tab;
    }

    /**
     * @param $pl
     */
    private function transformeEtudiant($pl): array
    {
        $this->tab = [];
        $this->groupes();

        /** @var EdtPlanning $p */
        foreach ($pl as $p) {
            if ((TypeGroupe::TYPE_GROUPE_CM === $p->getType()) || (TypeGroupe::TYPE_GROUPE_TD === $p->getType() && $p->getGroupe() === $this->groupetd) || (TypeGroupe::TYPE_GROUPE_TP === $p->getType() && $p->getGroupe() === $this->groupetp)) {
                $dbtEdt = $this->convertEdt($p->getDebut());
                $finEdt = $this->convertEdt($p->getFin());
                $debut = $p->getDebut();
                $this->tab[$p->getJour()][$dbtEdt] = [];
                $this->tab[$p->getJour()][$dbtEdt]['duree'] = $p->getFin() - $debut;
                $this->tab[$p->getJour()][$dbtEdt]['fin'] = $p->getFin();

                $this->tab[$p->getJour()][$dbtEdt]['texte'] = $this->isEvaluation($p,
                        'long') . '<br />' . $p->getSalle() . ' | ' . $p->getDisplayGroupe() . ' <br /> ' . $p->getIntervenantEdt();

                $this->tab[$p->getJour()][$dbtEdt]['couleur'] = $this->getCouleur($p);
                $this->tab[$p->getJour()][$dbtEdt]['id'] = $p->getId();
                $this->tab[$p->getJour()][$dbtEdt]['couleurTexte'] = $this->getCouleurTexte($p);
                $this->tab[$p->getJour()][$dbtEdt]['commentaire'] = $this->hasCommentaire($p);
                $this->valideFormat($p);
            }
        }

        return $this->tab;
    }

    /**
     * @param $pl
     */
    private function transformePromo($pl): array
    {
        $tab = [];
        /** @var EdtPlanning $p */
        foreach ($pl as $p) {
            $debut = $p->getDebut();
            $fin = $p->getFin();

            $tab[$p->getJour()][$debut][$p->getGroupe()]['duree'] = $fin - $debut;

            $tab[$p->getJour()][$debut][$p->getGroupe()]['couleur'] = $this->getCouleur($p);
            $tab[$p->getJour()][$debut][$p->getGroupe()]['couleurTexte'] = $this->getCouleurTexte($p);
            $tab[$p->getJour()][$debut][$p->getGroupe()]['planning'] = $p;
            $taille = 0;
            switch ($p->getType()) {
                case 'CM':
                case 'cm':
                    $tab[$p->getJour()][$debut][$p->getGroupe()]['largeur'] = $this->semestre->getNbgroupeTPEDT();
                    $taille = 0;
                    break;
                case 'TP':
                case 'tp':
                    $tab[$p->getJour()][$debut][$p->getGroupe()]['largeur'] = 1;
                    $taille = 4;
                    break;
                case 'TD':
                case 'td':
                    $tab[$p->getJour()][$debut][$p->getGroupe()]['largeur'] = 2;
                    $taille = 12;
                    break;
            }

            $groupe = $p->getGroupe();
            $groupefin = $groupe + $tab[$p->getJour()][$debut][$p->getGroupe()]['largeur'];
            for ($i = $debut; $i < $fin; ++$i) {
                for ($j = $groupe; $j < $groupefin; ++$j) {
                    $tab[$p->getJour()][$i][$j]['texte'] = 'xx';
                }
            }

            if (null === $p->getIntervenant()) {
                $inter = '';
            } elseif (0 === $taille) {
                $inter = $p->getIntervenant()->getNom();
            } else {
                $inter = mb_substr($p->getIntervenant()->getNom(), 0, $taille);
            }

            $tab[$p->getJour()][$debut][$p->getGroupe()]['texte'] = $this->isEvaluation($p) . '<br />' . $p->getSalle() . '<br />' . $inter . '<br />' . $p->getDisplayGroupe();
            $tab[$p->getJour()][$debut][$p->getGroupe()]['commentaire'] = $this->hasCommentaire($p);
        }

        return $tab;
    }

    /**
     * @param $p
     *
     * @return string
     */
    private function getCouleur(EdtPlanning $p): ?string
    {
        switch (mb_strtolower($p->getType())) {
            case 'cm':
            case 'td':
            case 'tp':
                return mb_strtolower($p->getType()) . '_' . $p->getSemestre()->getAnnee()->getCouleur();
            default:
                return 'CCCCCC';
        }
    }

    /**
     * @param $p
     */
    private function getCouleurTexte(EdtPlanning $p): string
    {
        switch ($p->getSemestre()->getAnnee()->getCouleur()) {
            case 'pink':
            case 'red':
            case 'orange':
                return 'black';
            default:
                return 'white';
        }
    }

    /**
     * @param string $type
     */
    private function isEvaluation(EdtPlanning $p, $type = 'short'): string
    {
        if ($p->getEvaluation()) {
            if (null !== $p->getMatiere()) {
                if ('short' === $type) {
                    return '** ' . $p->getMatiere()->getCodeMatiere() . ' **';
                }

                return '** ' . $p->getMatiere()->getLibelle() . ' (' . $p->getMatiere()->getCodeMatiere() . ') **';
            }

            return '** ' . $p->getTexte() . ' **';
        }

        if (null !== $p->getMatiere()) {
            if ('short' === $type) {
                return $p->getMatiere()->getCodeMatiere();
            }

            return $p->getMatiere()->getLibelle() . ' (' . $p->getMatiere()->getCodeMatiere() . ')';
        }

        return $p->getTexte();
    }

    /**
     * @param $p
     */
    private function hasCommentaire(EdtPlanning $p): bool
    {
        return '' !== $p->getCommentaire() && null !== $p->getCommentaire();
    }

    private function calculTotal(EdtPlanning $p): void
    {
        switch ($p->getType()) {
            case 'cm':
            case 'CM':
                $this->total['CM'] += $p->getDureeInt();
                break;
            case 'td':
            case 'TD':
                $this->total['TD'] += $p->getDureeInt();
                break;
            case 'tp':
            case 'TP':
                $this->total['TP'] += $p->getDureeInt();
                break;
        }
    }

    private function groupes(): void
    {
        /** @var Groupe $groupe */
        foreach ($this->user->getGroupes() as $groupe) {
            if (null !== $groupe->getTypegroupe()) {
                if ($groupe->getTypegroupe()->isTd()) {
                    $this->groupetd = $groupe->getOrdre();
                } elseif ($groupe->getTypegroupe()->isTp()) {
                    $this->groupetp = $groupe->getOrdre();
                }
            }
        }
    }

    /**
     * @param $pl
     */
    private function transformeModule($pl): array
    {
        $tab = [];

        /** @var EdtPlanning $p */
        foreach ($pl as $p) {
            $debut = $p->getDebut();
            $tab[$p->getJour()][$debut][$p->getGroupe()]['duree'] = $p->getFin() - $debut;
            $fin = $p->getFin();

            $tab[$p->getJour()][$debut][$p->getGroupe()]['couleur'] = $this->getCouleur($p);
            $tab[$p->getJour()][$debut][$p->getGroupe()]['couleurTexte'] = $this->getCouleurTexte($p);
            $tab[$p->getJour()][$debut][$p->getGroupe()]['planning'] = $p;
            $taille = 0;
            switch ($p->getType()) {
                case 'CM':
                case 'cm':
                    $tab[$p->getJour()][$debut][$p->getGroupe()]['largeur'] = $this->semestre->getNbgroupeTpEdt();
                    $taille = 0;
                    break;
                case 'TP':
                case 'tp':
                    $tab[$p->getJour()][$debut][$p->getGroupe()]['largeur'] = 1;
                    $taille = 4;
                    break;
                case 'TD':
                case 'td':
                    $tab[$p->getJour()][$debut][$p->getGroupe()]['largeur'] = 2;
                    $taille = 8;
                    break;
            }

            $groupe = $p->getGroupe();
            $groupefin = $groupe + $tab[$p->getJour()][$debut][$p->getGroupe()]['largeur'];
            for ($i = $debut; $i < $fin; ++$i) {
                for ($j = $groupe; $j < $groupefin; ++$j) {
                    $tab[$p->getJour()][$i][$j]['texte'] = 'xx';
                }
            }

            if (null === $p->getIntervenant()) {
                $inter = '';
            } elseif (0 === $taille) {
                $inter = $p->getIntervenant()->getNom();
            } else {
                $inter = mb_substr($p->getIntervenant()->getNom(), 0, $taille);
            }

            $tab[$p->getJour()][$debut][$p->getGroupe()]['texte'] = $this->isEvaluation($p) . '<br />' . $p->getSalle() . '<br />' . $inter . '<br />' . $p->getDisplayGroupe();
            $tab[$p->getJour()][$debut][$p->getGroupe()]['commentaire'] = $this->hasCommentaire($p);
        }

        return $tab;
    }

    /**
     * @param $pl
     */
    private function transformeSalle($pl): array
    {
        $tab = [];

        /** @var EdtPlanning $p */
        foreach ($pl as $p) {
            $debut = $p->getDebut();
            $tab[$p->getJour()][$debut]['duree'] = $p->getFin() - $debut;
            $fin = $p->getFin();
            for ($i = $debut; $i < $fin; ++$i) {
                $tab[$p->getJour()][$i]['texte'] = 'xx';
            }

            $tab[$p->getJour()][$debut]['texte'] = $this->isEvaluation($p) . '<br />' . $p->getSemestre()->getAnnee()->getLibelle() . ' <br /> ' . $p->getDisplayGroupe();

            if (null !== $p->getIntervenant()) {
                $tab[$p->getJour()][$debut]['texte'] .= ' <br /> ' . $p->getIntervenant()->getNom();
            }

            $tab[$p->getJour()][$debut]['couleur'] = $this->getCouleur($p);
            $tab[$p->getJour()][$debut]['pl'] = $p->getId();
            $tab[$p->getJour()][$debut]['couleurTexte'] = $this->getCouleurTexte($p);
        }

        return $tab;
    }

    /**
     * @param $pl
     */
    private function transformeJour($pl): array
    {
        $tab = [];
        /** @var EdtPlanning $p */
        foreach ($pl as $p) {
            $debut = $p->getDebut();
            $tab[$p->getSemestre()->getId()][$debut][$p->getGroupe()]['duree'] = $p->getFin() - $debut;
            $fin = $p->getFin();

            $tab[$p->getSemestre()->getId()][$debut][$p->getGroupe()]['couleur'] = $this->getCouleur($p);
            $tab[$p->getSemestre()->getId()][$debut][$p->getGroupe()]['couleurTexte'] = $this->getCouleurTexte($p);
            $tab[$p->getSemestre()->getId()][$debut][$p->getGroupe()]['planning'] = $p;
            $taille = 0;
            switch ($p->getType()) {
                case TypeGroupe::TYPE_GROUPE_CM:
                    $tab[$p->getSemestre()->getId()][$debut][$p->getGroupe()]['largeur'] = $p->getSemestre()->getNbgroupeTpEdt();
                    $taille = 0;
                    break;
                case TypeGroupe::TYPE_GROUPE_TP:
                    $tab[$p->getSemestre()->getId()][$debut][$p->getGroupe()]['largeur'] = 1;
                    $taille = 4;
                    break;
                case TypeGroupe::TYPE_GROUPE_TD:
                    $tab[$p->getSemestre()->getId()][$debut][$p->getGroupe()]['largeur'] = 2;
                    $taille = 8;
                    break;
            }

            $groupe = $p->getGroupe();
            $groupefin = $groupe + $tab[$p->getSemestre()->getId()][$debut][$p->getGroupe()]['largeur'];
            for ($i = $debut; $i < $fin; ++$i) {
                for ($j = $groupe; $j < $groupefin; ++$j) {
                    $tab[$p->getSemestre()->getId()][$i][$j]['texte'] = 'xx';
                }
            }

            if (null === $p->getIntervenant()) {
                $inter = '';
            } elseif (0 === $taille) {
                $inter = $p->getIntervenant()->getNom();
            } else {
                $inter = mb_substr($p->getIntervenant()->getNom(), 0, $taille);
            }

            $tab[$p->getSemestre()->getId()][$debut][$p->getGroupe()]['texte'] = $this->isEvaluation($p) . '<br />' . $p->getSalle() . '<br />' . $inter . '<br />' . $p->getDisplayGroupe();
            $tab[$p->getSemestre()->getId()][$debut][$p->getGroupe()]['commentaire'] = $this->hasCommentaire($p);
        }

        return $tab;
    }

    public function transformeDetails(?EdtPlanning $pl): ?array
    {
        if (null !== $pl) {
            $t = [];
            $t['matiere'] = null !== $pl->getMatiere() ? $pl->getMatiere()->getDisplay() : $pl->getTexte();

            if (null !== $pl->getIntervenant()) {
                $t['enseignant'] = $pl->getIntervenant()->getDisplayPr();
            } else {
                $t['enseignant'] = '';
            }

            $t['horaires'] = Constantes::TAB_HEURES[$pl->getDebut()] . ' - ' . Constantes::TAB_HEURES[$pl->getFin()];
            $t['commentaire'] = $pl->getCommentaire();
            $t['salle'] = $pl->getSalle();

            switch ($pl->getType()) {
                case TypeGroupe::TYPE_GROUPE_CM:
                    $t['type'] = 'Cours Magistral';
                    $t['groupes'] = 'Tous';
                    break;
                case TypeGroupe::TYPE_GROUPE_TD:
                    $t['type'] = 'Travaux Dirigés';
                    $t['groupes'] = \chr($pl->getGroupe() + 64) . \chr($pl->getGroupe() + 65);
                    break;
                case TypeGroupe::TYPE_GROUPE_TP:
                    $t['type'] = 'Travaux Pratiques';
                    $t['groupes'] = \chr($pl->getGroupe() + 64);
                    break;
            }

            if ('O' === $pl->getEvaluation()) {
                $t['evaluation'] = 'Ce cours est une évaluation !';
            } else {
                $t['evaluation'] = '';
            }

            return $t;
        }

        return [];
    }

    public function initSemestre(
        int $semaine,
        Semestre $semestre,
        AnneeUniversitaire $anneeUniversitaire
    ): self {
        $this->semestre = $semestre;
        $this->init($anneeUniversitaire, 'promo', $semestre->getId(), $semaine);
        $this->semaines = $this->calculSemaines();
        $this->calculEdt(); //todo: pour des datas en BDD sasn scelcat. Ajouter test.

        return $this;
    }

    public function addCours(Request $request): EdtPlanning
    {
        $pl = new EdtPlanning();
        $semestre = $this->semestreRepository->find($request->request->get('promo'));
        $pl->setSemestre($semestre);
        $pl->setSemaine($request->request->get('semaine'));

        return $this->updatePl($request, $pl);
    }

    public function updateCours(Request $request, EdtPlanning $plann)
    {
        return $this->updatePl($request, $plann);
    }

    private function updatePl($request, EdtPlanning $plann)
    {
        if ('' !== $request->request->get('texte')) {
            $plann->setTexte($request->request->get('texte'));
            $plann->setMatiere(null);
        } else {
            $module = $this->matiereRepository->find($request->request->get('selectmatiere'));
            $plann->setMatiere($module);
        }

        if ('' !== $request->request->get('selectenseignant') && null !== $request->request->get('selectenseignant')) {
            $pr = $this->personnelRepository->find($request->request->get('selectenseignant'));
        } else {
            $pr = null;
        }

        $plann->setDebut($request->request->get('hdbt'));
        $plann->setFin($request->request->get('hfin'));
        $plann->setIntervenant($pr);
        $plann->setSalle($request->request->get('salle'));
        $plann->setJour($request->request->get('jourc'));
        $plann->setEvaluation($request->request->get('evaluation'));

        $tc = explode('-', $request->request->get('typecours'));
        $plann->setType($tc[0]);

        switch ($tc[0]) {
            case TypeGroupe::TYPE_GROUPE_CM:
                $plann->setGroupe(1);
                break;
            case TypeGroupe::TYPE_GROUPE_TD:
            case TypeGroupe::TYPE_GROUPE_TP:
                $plann->setGroupe(trim($tc[1]));
                break;
        }

        $this->entityManager->persist($plann);
        $this->entityManager->flush();

        return $plann;
    }

    private function valideFormat(EdtPlanning $p)
    {
        $casedebut = $p->getDebut();
        $idDebut = $this->convertEdt($casedebut);
        $casefin = $p->getFin();
        $duree = $casefin - $casedebut;
        $this->tab[$p->getJour()][$this->convertEdt($casedebut)]['debut'] = $casedebut;
        $this->tab[$p->getJour()][$this->convertEdt($casedebut)]['format'] = 'aie';

        //regarde si le format entre dans une case ou dépasse. retourne 'ok' ou 'nok'
        if (\array_key_exists($casedebut, Constantes::TAB_CRENEAUX) && 0 === $duree % 3) {
            $this->tab[$p->getJour()][$idDebut]['format'] = 'ok';

            if (0 === $duree % 3) {
                for ($i = 1; $i < $duree / 3; ++$i) {
                    $this->tab[$p->getJour()][$this->convertEdt($casedebut + ($i * 3))] = $this->tab[$p->getJour()][$idDebut];
                }
            }
        } else {
            //pas sur un créneau classique pour le début
            if (11 === $casedebut || 12 === $casedebut) {
                $casedebut = 10;
            } elseif (2 === $casedebut || 3 === $casedebut) {
                $casedebut = 1;
            } elseif (!\array_key_exists($casedebut, Constantes::TAB_CRENEAUX)) {
                $casedebut -= ($duree % 3);
            }

            if (null !== $idDebut) {
                $this->tab[$p->getJour()][$this->convertEdt($casedebut)] = $this->tab[$p->getJour()][$idDebut];
            }

            $this->tab[$p->getJour()][$this->convertEdt($casedebut)]['debut'] = $p->getDebut();
            $this->tab[$p->getJour()][$this->convertEdt($casedebut)]['format'] = 'nok';
            $this->tab[$p->getJour()][$this->convertEdt($casedebut)]['fin'] = $casefin;
        }
    }
}
