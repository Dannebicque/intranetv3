<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Repository/AbsenceRepository.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 07/02/2021 11:08
 */

namespace App\Repository;

use App\Entity\Absence;
use App\Entity\AbsenceJustificatif;
use App\Entity\AnneeUniversitaire;
use App\Entity\Etudiant;
use App\Entity\Matiere;
use App\Entity\Semestre;
use App\Entity\Ue;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method Absence|null find($id, $lockMode = null, $lockVersion = null)
 * @method Absence|null findOneBy(array $criteria, array $orderBy = null)
 * @method Absence[]    findAll()
 * @method Absence[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class AbsenceRepository extends ServiceEntityRepository
{
    /**
     * AbsenceRepository constructor.
     */
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Absence::class);
    }

    /**
     * @param $matiere
     */
    public function getByMatiereArray($matiere, AnneeUniversitaire $anneeUniversitaire): array
    {
        $absences = $this->getByMatiere($matiere, $anneeUniversitaire);

        $tab = [];
        /** @var Absence $absence */
        foreach ($absences as $absence) {
            $date = null !== $absence->getDateHeure() ? $absence->getDateHeure()->format('Y-m-d') : '';
            $heure = null !== $absence->getDateHeure() ? $absence->getDateHeure()->format('H:i') : '';

            if (!\array_key_exists($date, $tab)) {
                $tab[$date] = [];
            }

            if (!\array_key_exists($heure, $tab[$date])) {
                $tab[$date][$heure] = [];
            }

            $tab[$date][$heure][] = null !== $absence->getEtudiant() ? $absence->getEtudiant()->getId() : '';
        }

        return $tab;
    }

    public function getByMatiere(Matiere $matiere, AnneeUniversitaire $anneeUniversitaire)
    {
        return $this->createQueryBuilder('m')
            ->innerJoin(AnneeUniversitaire::class, 'a', 'WITH', 'm.anneeUniversitaire = a.id')
            ->where('m.matiere = :matiere')
            ->andWhere('a.annee = :annee')
            ->setParameter('matiere', $matiere->getId())
            ->setParameter('annee', $anneeUniversitaire->getAnnee())
            ->orderBy('m.dateHeure', 'DESC')
            ->getQuery()
            ->getResult();
    }

    public function findBySemestreRattrapage(Semestre $semestre, AnneeUniversitaire $anneeCourante): array
    {
        $absences = $this->getBySemestre($semestre, $anneeCourante);

        $trattrapages = [];

        /** @var Absence $absence */
        foreach ($absences as $absence) {
            if (null !== $absence->getEtudiant() &&
                null !== $absence->getDateHeure() &&
                \array_key_exists($absence->getEtudiant()->getId(), $trattrapages) &&
                \array_key_exists($absence->getDateHeure()->format('Ymd'),
                    $trattrapages[$absence->getEtudiant()->getId()]
                )) {
                if (!\array_key_exists(
                    $absence->getDateHeure()->format('Hi'),
                    $trattrapages[$absence->getEtudiant()->getId()][$absence->getDateHeure()->format('Ymd')]
                )) {
                    $trattrapages[$absence->getEtudiant()->getId()][$absence->getDateHeure()->format('Ymd')][$absence->getDateHeure()->format('Hi')] = $absence->isJustifie();
                }
            } else {
                $trattrapages[$absence->getEtudiant()->getId()][$absence->getDateHeure()->format('Ymd')][$absence->getDateHeure()->format('Hi')] = $absence->isJustifie();
            }
        }

        return $trattrapages;
    }

    /**
     * @param $anneeCourante
     */
    public function getBySemestre(Semestre $semestre, AnneeUniversitaire $anneeCourante)
    {
        return $this->createQueryBuilder('a')
            ->innerJoin(Etudiant::class, 'e', 'WITH', 'a.etudiant =e.id')
            ->innerJoin(AnneeUniversitaire::class, 'u', 'WITH', 'a.anneeUniversitaire = u.id')
            ->where('e.semestre = :semestre')
            ->andWhere('u.annee = :annee')
            ->setParameter('semestre', $semestre->getId())
            ->setParameter('annee', $anneeCourante->getAnnee())
            ->orderBy('a.dateHeure', 'DESC')
            ->getQuery()
            ->getResult();
    }

    public function getByEtudiantAndSemestre(
        Etudiant $etudiant,
        Semestre $semestre,
        AnneeUniversitaire $anneeUniversitaire
    ) {
        return $this->createQueryBuilder('a')
            ->innerJoin(Matiere::class, 'm', 'WITH', 'a.matiere = m.id')
            ->innerJoin(Ue::class, 'u', 'WITH', 'm.ue = u.id')
            ->innerJoin(AnneeUniversitaire::class, 'e', 'WITH', 'a.anneeUniversitaire = e.id')
            ->where('e.id = :annee')
            ->andWhere('a.etudiant = :etudiant')
            ->andWhere('u.semestre = :semestre')
            ->setParameter('annee', $anneeUniversitaire->getId())
            ->setParameter('etudiant', $etudiant->getId())
            ->setParameter('semestre', $semestre->getId())
            ->orderBy('a.dateHeure', 'DESC')
            ->getQuery()
            ->getResult();
    }

    public function getAJustifier(AbsenceJustificatif $justificatif)
    {
        //recherche toutes les absences sur la période du justificatif
        return $this->createQueryBuilder('a')
            ->where('a.dateHeure >= :dateDebut')
            ->andWhere('a.etudiant = :etudiant')
            ->andWhere('a.dateHeure <= :dateFin')
            ->setParameter('dateDebut', $justificatif->getDateHeureDebut())
            ->setParameter('dateFin', $justificatif->getDateHeureFin())
            ->setParameter('etudiant', $justificatif->getEtudiant()->getId())
            ->getQuery()
            ->getResult();
    }
}
