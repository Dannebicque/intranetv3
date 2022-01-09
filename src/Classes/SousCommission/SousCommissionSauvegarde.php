<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Classes/SousCommission/SousCommissionSauvegarde.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 29/06/2021 17:48
 */

/*
 * Pull your hearder here, for exemple, Licence header.
 */

namespace App\Classes\SousCommission;

use App\DTO\SousCommissionTravail;
use App\Entity\AnneeUniversitaire;
use App\Entity\Scolarite;
use App\Entity\ScolaritePromo;
use App\Entity\Semestre;
use App\Repository\ScolaritePromoRepository;
use App\Repository\ScolariteRepository;
use Carbon\Carbon;
use Doctrine\ORM\EntityManagerInterface;
use function array_key_exists;

class SousCommissionSauvegarde
{
    private ScolaritePromoRepository $scolaritePromoRepository;

    private ScolariteRepository $scolariteRepository;

    private EntityManagerInterface $entityManager;

    /**
     * SousCommissionSauvegarde constructor.
     */
    public function __construct(
        ScolaritePromoRepository $scolaritePromoRepository,
        ScolariteRepository $scolariteRepository,
        EntityManagerInterface $entityManager
    ) {
        $this->scolaritePromoRepository = $scolaritePromoRepository;
        $this->scolariteRepository = $scolariteRepository;
        $this->entityManager = $entityManager;
    }

    public function sauvegardeTravail(SousCommissionInterface $sousCommission, array $matieres): SousCommissionTravail
    {
        $semestre = $sousCommission->getSemestre();
        $anneeUniversitaire = $sousCommission->getAnneeUniversitaire();
        $ssComm = $this->scolaritePromoRepository->findOneBy([
            'anneeUniversitaire' => $anneeUniversitaire,
            'semestre' => $semestre,
        ]);
        $etudiants = $semestre->getEtudiants();
        $ues = $semestre->getUes();

        if (null === $ssComm) {
            //N'existe pas on ajoute
            $ssComm = new ScolaritePromo();
            $ssComm->setAnneeUniversitaire($anneeUniversitaire);
            $ssComm->setSemestre($semestre);
            $this->entityManager->persist($ssComm);

            //sauvegarde des données
            foreach ($etudiants as $etudiant) {
                $scEtudiant = $sousCommission->getSousCommissionEtudiant($etudiant->getId());
                if (null !== $scEtudiant) {
                    $scSemestre = $this->getOrCreateScolariteEtudiant($etudiant, $semestre, $anneeUniversitaire);
                    $scSemestre->setScolaritePromo($ssComm);
                    if ($sousCommission instanceof SousCommission) {
                        if (true === $semestre->isOptPenaliteAbsence()) {
                            $scSemestre->setMoyenne($scEtudiant->moyenneSemestrePenalisee);
                        } else {
                            $scSemestre->setMoyenne($scEtudiant->moyenneSemestre);
                        }
                    }

                    $scSemestre->setDecision($scEtudiant->decision);
                    $scSemestre->setProposition($scEtudiant->proposition);
                    $scSemestre->setNbAbsences($scEtudiant->nbAbsences());
                    $tUe = [];
                    foreach ($ues as $ue) {
                        if (true === $semestre->isOptPenaliteAbsence()) {

                            if ($sousCommission instanceof SousCommissionApc) {
                                $tUe[$ue->getId()]['decision'] = $scEtudiant->moyenneUes[$ue->getId()]->decisionPenalisee;
                                $tUe[$ue->getId()]['moyenne'] = $scEtudiant->moyenneUes[$ue->getId()]->moyennePenalisee;
                            } else {
                                $tUe[$ue->getId()]['moyenne'] = $scEtudiant->moyenneUes[$ue->getNumeroUe()]->getMoyennePenalisee();
                            }
                        } else {
                            if ($sousCommission instanceof SousCommissionApc) {
                                $tUe[$ue->getId()]['decision'] = $scEtudiant->moyenneUes[$ue->getId()]->decision;
                                $tUe[$ue->getId()]['moyenne'] = $scEtudiant->moyenneUes[$ue->getId()]->moyenne;
                            } else {
                                $tUe[$ue->getId()]['moyenne'] = $scEtudiant->moyenneUes[$ue->getNumeroUe()]->getMoyenne();
                            }
                        }
                        $tUe[$ue->getId()]['rang'] = -1;
                    }
                    $scSemestre->setMoyennesUes($tUe);

                    $tMatiere = [];
                    foreach ($matieres as $matiere) {
                        if (array_key_exists($matiere->getTypeIdMatiere(), $scEtudiant->moyenneMatieres)) {
                            if (true === $scEtudiant->moyenneMatieres[$matiere->getTypeIdMatiere()]->optionFaite) {
                                if (true === $semestre->isOptPenaliteAbsence()) {
                                    $tMatiere[$matiere->getTypeIdMatiere()]['moyenne'] = $scEtudiant->moyenneMatieres[$matiere->getTypeIdMatiere()]->getMoyennePenalisee();
                                } else {
                                    $tMatiere[$matiere->getTypeIdMatiere()]['moyenne'] = $scEtudiant->moyenneMatieres[$matiere->getTypeIdMatiere()]->getMoyenne();
                                }
                                $tMatiere[$matiere->getTypeIdMatiere()]['rang'] = -1;
                            } else {
                                $tMatiere[$matiere->getTypeIdMatiere()]['pasoption'] = true;
                                $tMatiere[$matiere->getTypeIdMatiere()]['rang'] = -1;
                            }
                        }
                    }
                    $scSemestre->setMoyennesMatieres($tMatiere);
                }
            }
            $this->entityManager->flush();
        }

        return new SousCommissionTravail($semestre, $anneeUniversitaire,
            $ues->getValues(), $matieres, $etudiants->getValues(), $ssComm);
    }

    private function getOrCreateScolariteEtudiant(
        $etudiant,
        Semestre $semestre,
        AnneeUniversitaire $anneeUniversitaire
    ): ?Scolarite {
        $ssEtudiant = $this->scolariteRepository->findOneBy([
            'semestre' => $semestre->getId(),
            'anneeUniversitaire' => $anneeUniversitaire->getId(),
        ]);
        if (null === $ssEtudiant) {
            $max = $this->entityManager->getRepository(Scolarite::class)->findOrdreMax($etudiant);
            ++$max;
            $ssEtudiant = new Scolarite($etudiant, $semestre, $anneeUniversitaire);
            $ssEtudiant->setOrdre($max);
            $this->entityManager->persist($ssEtudiant);
        }

        return $ssEtudiant;
    }

    public function efface(ScolaritePromo $ssComm): void
    {
        foreach ($ssComm->getScolarites() as $scolarite) {
            $this->entityManager->remove($scolarite);
        }
        $this->entityManager->remove($ssComm);
        $this->entityManager->flush();
    }

    public function visibilite(ScolaritePromo $ssComm, $visibilite = true): void
    {
        foreach ($ssComm->getScolarites() as $scolarite) {
            $scolarite->setDiffuse($visibilite);
        }
        $ssComm->setPublie($visibilite);
        if (false === $visibilite) {
            $ssComm->setDatePublication(null);
        } else {
            $ssComm->setDatePublication(Carbon::now());
        }

        $this->entityManager->flush();
    }
}
