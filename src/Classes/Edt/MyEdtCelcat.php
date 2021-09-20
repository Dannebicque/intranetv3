<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Classes/Edt/MyEdtCelcat.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 20/09/2021 22:06
 */

/*
 * Pull your hearder here, for exemple, Licence header.
 */

namespace App\Classes\Edt;

use App\DTO\EvenementEdt;
use App\Entity\Annee;
use App\Entity\AnneeUniversitaire;
use App\Entity\CelcatEvent;
use App\Entity\Constantes;
use App\Entity\Etudiant;
use App\Entity\Groupe;
use App\Entity\Personnel;
use App\Entity\Semestre;
use App\Repository\CalendrierRepository;
use App\Repository\CelcatEventsRepository;
use App\Repository\GroupeRepository;
use function array_key_exists;

class MyEdtCelcat extends BaseEdt
{
    protected CelcatEventsRepository $celcatEventsRepository;
    private ?Annee $annee;
    private GroupeRepository $groupeRepository;

    private array $matieres;

    public function __construct(
        CalendrierRepository $celcatCalendrierRepository,
        CelcatEventsRepository $celcatEventsRepository,
        GroupeRepository $groupeRepository
    ) {
        parent::__construct($celcatCalendrierRepository);
        $this->celcatEventsRepository = $celcatEventsRepository;
        $this->groupeRepository = $groupeRepository;
    }

    public function initPersonnel(
        Personnel $personnel,
        AnneeUniversitaire $anneeUniversitaire,
        int $semaine = 0,
        array $matieres = []
    ): self {
        $this->user = $personnel;
        $this->matieres = $matieres;
        $this->init($anneeUniversitaire, 'prof', $personnel->getId(), $semaine);
        $this->semaines = $this->calculSemaines();
        $this->calculEdt();

        return $this;
    }

    public function initEtudiant(
        Etudiant $etudiant,
        AnneeUniversitaire $anneeUniversitaire,
        int $semaine = 0,
        array $matieres
    ): self {
        $this->matieres = $matieres;
        $this->user = $etudiant;
        $this->init($anneeUniversitaire, 'etudiant', $etudiant->getId(), $semaine);
        $this->calculEdt();

        return $this;
    }

    public function initAdministration(): void
    {
    }

    public function calculEdt(): bool
    {
        if ('' !== $this->semaineFormationIUT) {
            switch ($this->filtre) {
                case Constantes::FILTRE_EDT_PROMO:
                    $this->groupes = $this->groupeRepository->findAllGroupes($this->semestre);
                    $pl = $this->celcatEventsRepository->findEdtSemestre($this->semestre, $this->semaineFormationIUT);
                    $this->planning = $this->transformePromo($pl);
                    break;
                case Constantes::FILTRE_EDT_PROF:
                    $pl = $this->celcatEventsRepository->findEdtProf($this->user->getNumeroHarpege(),
                        $this->semaineFormationIUT);
                    $this->planning = $this->transformeIndividuel($pl);
                    break;
                case Constantes::FILTRE_EDT_ETUDIANT:
                    $pl = $this->celcatEventsRepository->findEdtEtu($this->user, $this->semaineFormationIUT);
                    if (null !== $pl) {
                        $this->planning = $this->transformeIndividuel($pl);
                    } else {
                        return false;
                    }
                    break;
            }
        }

        return false;
    }

    public function transformePromo($pl): array
    {
        $gr = [];
        $groupes = $this->groupeRepository->getGroupesTP($this->semestre->getId());

        /** @var Groupe $groupe */
        foreach ($groupes as $groupe) {
            $gr[$groupe->getCodeapogee()] = $groupe->getOrdre();
        }

        $tab = [];
        /** @var CelcatEvent $p */
        foreach ($pl as $p) {
            if (array_key_exists($p->getCodeGroupe(), $gr)) {
                $groupe = $gr[$p->getCodeGroupe()];
                $jour = $p->getJour() + 1;
                $dbtEdt = $p->getDebut();

                $tab[$jour][$dbtEdt][$groupe]['duree'] = $p->getFin()->sub($p->getDebut());

                $tab[$jour][$dbtEdt][$groupe]['couleur'] = $this->getCouleur($p);
                $tab[$jour][$dbtEdt][$groupe]['couleurTexte'] = $this->annee->getCouleurTexte(); //todo: le code est dans le semestre...

                switch ($p->getType()) {
                    case 'CM':
                    case 'cm':
                        $tab[$jour][$dbtEdt][$groupe]['largeur'] = $this->semestre->getNbgroupeTPEDT();
                        break;
                    case 'TP':
                    case 'tp':
                        $tab[$jour][$dbtEdt][$groupe]['largeur'] = 1;
                        break;
                    case 'TD':
                    case 'td':
                        $tab[$jour][$dbtEdt][$groupe]['largeur'] = 2;
                        break;
                }

                $groupefin = $groupe + $tab[$jour][$dbtEdt][$groupe]['largeur'];
                $fin = $p->getFin();
                for ($i = $dbtEdt; $i < $fin; ++$i) {
                    for ($j = $groupe; $j < $groupefin; ++$j) {
                        $tab[$jour][$i][$j]['texte'] = 'xx';
                    }
                }

                $tab[$jour][$dbtEdt][$groupe]['texte'] = $p->getLibModule() . '<br />' . $p->getLibSalle() . '<br />' . $p->getLibPersonnel() . ' |  ' . $p->getType() . ' |  ' . $p->getLibGroupe();
            }
        }

        return $tab;
    }

    private function transformeIndividuel(array $pl): array
    {
        //prof ou étudiant
        $tab = [];

        /** @var CelcatEvent $p */
        foreach ($pl as $p) {
            $evt = new EvenementEdt();
            $evt->source = AbstractEdt::SOURCE_EDT_CELCAT;
            $evt->id = $p->getId();
            $evt->jour = $p->getJour() + 1;
            $evt->heureDebut = $p->getDebut();
            $evt->heureFin = $p->getFin();
            $evt->matiere = $p->getLibModule();
            $evt->salle = $p->getLibSalle();
            $evt->personnel = $p->getLibPersonnel();
            $evt->groupe = $p->getLibGroupe();
            $evt->typeIdMatiere = $this->getTypeIdMatiere($p);
            $evt->type_cours = $p->getType();

            $evt->gridStart = $p->getDebut()?->format('Hi');
            $evt->gridEnd = $p->getFin()?->format('Hi');

            $evt->couleur = $this->getCouleurFromModule($p);
            $dbtEdt = Constantes::TAB_HEURES_EDT_LIGNE_2[$p->getDebut()->format('Hi')];
            $tab[$evt->jour][$dbtEdt] = $evt;
        }

        return $tab;
    }

    private function getCouleurFromModule(CelcatEvent $p): string
    {
        if (array_key_exists($p->getCodeModule(), $this->matieres)) {
            $matiere = $this->matieres[$p->getCodeModule()];
            if (null !== $matiere && null !== $matiere->semestre) {
                $annee = $matiere->semestre->getAnnee();
                if (null !== $annee) {
                    return $annee->getCouleur();
                }
            }
        }

        return 'CCCCCC';
    }

    public function initSemestre(int $semaine, Semestre $semestre, AnneeUniversitaire $anneeUniversitaire): self
    {
        $this->semestre = $semestre;
        $this->init($anneeUniversitaire, 'promo', $semestre->getId(), $semaine);
        $this->semaines = $this->calculSemaines();
        $this->calculEdt();

        return $this;
    }

    private function getTypeIdMatiere(CelcatEvent $p)
    {
        if (array_key_exists($p->getCodeModule(), $this->matieres)) {
            $matiere = $this->matieres[$p->getCodeModule()];

            return $matiere->getTypeIdMatiere();
        }

        return null;
    }
}
