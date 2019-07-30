<?php
/**
 * Copyright (C) 7 / 2019 | David annebicque | IUT de Troyes - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetv3/src/Repository/AbsenceRepository.php
 * @author     David Annebicque
 * @project intranetv3
 * @date 30/07/2019 14:14
 * @lastUpdate 30/07/2019 14:14
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
use Symfony\Bridge\Doctrine\RegistryInterface;

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
     *
     * @param RegistryInterface $registry
     */
    public function __construct(RegistryInterface $registry)
    {
        parent::__construct($registry, Absence::class);
    }

    /**
     * @param $matiere
     * @param $anneeCourante
     *
     * @return array
     */
    public function getByMatiereArray($matiere, $anneeCourante): array
    {
        $absences = $this->getByMatiere($matiere, $anneeCourante);

        $tab = array();
        //dump($absences);
        /** @var Absence $absence */
        foreach ($absences as $absence) {
            $date = $absence->getDate() !== null ? $absence->getDate()->format('Y-m-d') : '';
            $heure = $absence->getHeure() !== null ? $absence->getHeure()->format('H:i') : '';

            if (!array_key_exists($date, $tab)) {
                $tab[$date] = array();
                //echo 'date';
            }

            if (!array_key_exists($heure, $tab[$date])) {
                $tab[$date][$heure] = array();
                //echo 'heure';
            }

            $tab[$date][$heure][] = $absence->getEtudiant() !== null ? $absence->getEtudiant()->getId() : '';
        }

        return $tab;
    }

    /**
     * @param Matiere $matiere
     * @param         $anneeCourante
     *
     * @return mixed
     */
    public function getByMatiere(Matiere $matiere, int $anneeCourante)
    {
        return $this->createQueryBuilder('m')
            ->innerJoin(AnneeUniversitaire::class, 'a', 'WITH', 'm.anneeUniversitaire = a.id')
            ->where('m.matiere = :matiere')
            ->andWhere('a.annee = :annee')
            ->setParameter('matiere', $matiere->getId())
            ->setParameter('annee', $anneeCourante)
            ->orderBy('m.date', 'DESC')
            ->orderBy('m.heure', 'DESC')
            ->getQuery()
            ->getResult();
    }

    public function findBySemestreRattrapage(Semestre $semestre, $anneeCourante): array
    {
        $absences = $this->findBySemestre($semestre, $anneeCourante);

        $trattrapages = array();

        /** @var Absence $absence */
        foreach ($absences as $absence) {
            if ($absence->getEtudiant() !== null &&
                $absence->getDate() !== null &&
                $absence->getHeure() !== null &&
                array_key_exists($absence->getEtudiant()->getId(), $trattrapages) &&
                array_key_exists($absence->getDate()->format('Ymd'), $trattrapages[$absence->getEtudiant()->getId()]
                )) {
                    if (!array_key_exists(
                        $absence->getHeure()->format('Hi'),
                        $trattrapages[$absence->getEtudiant()->getId()][$absence->getDate()->format('Ymd')]
                    )) {
                        $trattrapages[$absence->getEtudiant()->getId()][$absence->getDate()->format('Ymd')][$absence->getHeure()->format('Hi')] = $absence->isJustifie();
                    }
                } else {
                $trattrapages[$absence->getEtudiant()->getId()][$absence->getDate()->format('Ymd')][$absence->getHeure()->format('Hi')] = $absence->isJustifie();
            }
        }

        return $trattrapages;
    }

    /**
     * @param Semestre $semestre
     * @param          $anneeCourante
     *
     * @return mixed
     */
    public function findBySemestre(Semestre $semestre, int $anneeCourante)
    {
        return $this->createQueryBuilder('a')
            ->innerJoin(Etudiant::class, 'e', 'WITH', 'a.etudiant =e.id')
            ->innerJoin(AnneeUniversitaire::class, 'u', 'WITH', 'a.anneeUniversitaire = u.id')
            ->where('e.semestre = :semestre')
            ->andWhere('u.annee = :annee')
            ->setParameter('semestre', $semestre->getId())
            ->setParameter('annee', $anneeCourante)
            ->orderBy('a.date', 'DESC')
            ->orderBy('a.heure', 'DESC')
            ->getQuery()
            ->getResult();
    }

    public function findByEtudiantSemestre(Etudiant $etudiant, Semestre $semestre, int $anneeUniversitaire)
    {
        return $this->createQueryBuilder('a')
            ->innerJoin(Matiere::class, 'm', 'WITH', 'a.matiere = m.id')
            ->innerJoin(Ue::class, 'u', 'WITH', 'm.ue = u.id')
            ->innerJoin(AnneeUniversitaire::class, 'e', 'WITH', 'a.anneeUniversitaire = e.id')
            ->where('e.annee = :annee')
            ->andWhere('a.etudiant = :etudiant')
            ->andWhere('u.semestre = :semestre')
            ->setParameter('annee', $anneeUniversitaire)
            ->setParameter('etudiant', $etudiant->getId())
            ->setParameter('semestre', $semestre->getId())
            ->getQuery()
            ->getResult();
    }

    public function findAbsencesAJustifer(AbsenceJustificatif $justificatif)
    {
        //recherche toutes les absences sur la période du justificatif

        //todo: a tester. Prise en compte de l'heure sur le justificatif ? Peut être juste un champs ? Idem pour absence... reconstruire un champs date-heure
        return $this->createQueryBuilder('a')
            ->where('a.date')
            ->where('a.date <= :dateFin')
            ->setParameter('dateDebut', $justificatif->getDateDebut())
            ->setParameter('dateFin', $justificatif->getDateFin())
            ->getQuery()
            ->getResult();
    }
}
