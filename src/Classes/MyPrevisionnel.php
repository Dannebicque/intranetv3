<?php
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/src/Classes/MyPrevisionnel.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 21/12/2020 12:51

namespace App\Classes;

use App\Entity\AnneeUniversitaire;
use App\Entity\Departement;
use App\Entity\Diplome;
use App\Entity\Hrs;
use App\Entity\Matiere;
use App\Entity\Personnel;
use App\Entity\Previsionnel;
use App\Entity\Semestre;
use App\Classes\Excel\MyExcelWriter;
use App\Repository\CelcatEventsRepository;
use App\Repository\EdtPlanningRepository;
use App\Repository\HrsRepository;
use App\Repository\PersonnelRepository;
use App\Repository\PrevisionnelRepository;
use Doctrine\ORM\EntityManagerInterface;
use Exception;
use PhpOffice\PhpSpreadsheet\Writer\Xlsx;
use Symfony\Component\HttpFoundation\StreamedResponse;

/**
 * Class MyPrevisionnel
 * @package App\Classes
 */
class MyPrevisionnel
{
    private Personnel $personnel;

    private $previsionnelRepository;

    private EntityManagerInterface $entityManager;

    private HrsRepository $hrsRepository;

    /**
     * @var Previsionnel[]
     */
    private $servicePrevisionnelBySemestre;

    /**
     * @var Previsionnel[]
     */
    private $servicePrevisionnelByDepartement;

    /** @var Hrs[] */
    private $hrs;

    private $ligne = 0;

    /**
     * @var Semestre[]
     */
    private $semestres = [];

    /**
     * @var Departement[]
     */
    private $departements = [];

    private $totalCm = 0.0;
    private $totalTd = 0.0;
    private $totalTp = 0.0;
    private $totalEtuCm = 0.0;
    private $totalEtuTd = 0.0;
    private $totalEtuTp = 0.0;
    private $totalHrs = 0.0;

    /** @var Matiere */
    private $matiere;

    /** @var Semestre */
    private $semestre;
    /**
     * @var MyUpload
     */
    private $myUpload;

    private $anneePrevi;

    /**
     * @var PersonnelRepository
     */
    private $personnelRepository;
    /**
     * @var Personnel[]|mixed
     */
    private $personnels;

    /**
     * @return mixed
     */
    public function getAnneePrevi()
    {
        return $this->anneePrevi;
    }

    /**
     * @return Departement[]
     */
    public function getDepartements(): array
    {
        return $this->departements;
    }

    /** @var Previsionnel[] */
    private $previsionnels;

    /** @var MyExcelWriter */
    private $myExcelWriter;

    /**
     * MyPrevisionnel constructor.
     *
     * @param EntityManagerInterface $entityManager
     * @param PrevisionnelRepository $previsionnelRepository
     * @param PersonnelRepository    $personnelRepository
     * @param HrsRepository          $hrsRepository
     * @param MyExcelWriter          $myExcelWriter
     * @param EdtPlanningRepository  $edtPlanningRepository
     * @param CelcatEventsRepository $celcatEventsRepository
     * @param MyUpload               $myUpload
     */
    public function __construct(
        EntityManagerInterface $entityManager,
        PrevisionnelRepository $previsionnelRepository,
        PersonnelRepository $personnelRepository,
        HrsRepository $hrsRepository,
        MyExcelWriter $myExcelWriter,
        EdtPlanningRepository $edtPlanningRepository,
        CelcatEventsRepository $celcatEventsRepository,
        MyUpload $myUpload
    ) {
        $this->previsionnelRepository = $previsionnelRepository;
        $this->personnelRepository = $personnelRepository;
        $this->edtPlanningRepository = $edtPlanningRepository;
        $this->celcatEventsRepository = $celcatEventsRepository;
        $this->hrsRepository = $hrsRepository;
        $this->entityManager = $entityManager;
        $this->myExcelWriter = $myExcelWriter;
        $this->myUpload = $myUpload;
    }

    /**
     * @return Personnel[]|mixed
     */
    public function getPersonnels()
    {
        return $this->personnels;
    }

    /**
     * @return Semestre
     */
    public function getSemestre(): Semestre
    {
        return $this->semestre;
    }


    /**
     * @return Matiere
     */
    public function getMatiere(): Matiere
    {
        return $this->matiere;
    }

    /**
     * @return Previsionnel[]
     */
    public function getPrevisionnels(): array
    {
        return $this->previsionnels;
    }

    /**
     * @return Semestre[]
     */
    public function getSemestres(): array
    {
        return $this->semestres;
    }

    /**
     * @return Previsionnel[]
     */
    public function getServicePrevisionnelBySemestre(): array
    {
        return $this->servicePrevisionnelBySemestre;
    }

    /**
     * @return Previsionnel[]
     */
    public function getServicePrevisionnelByDepartement(): array
    {
        return $this->servicePrevisionnelByDepartement;
    }

    /**
     * @return float
     */
    public function getTotalCm(): float
    {
        return $this->totalCm;
    }

    /**
     * @return float
     */
    public function getTotalTd(): float
    {
        return $this->totalTd;
    }

    /**
     * @return float
     */
    public function getTotalTp(): float
    {
        return $this->totalTp;
    }

    /**
     * @return float
     */
    public function getTotalEtu(): float
    {
        return $this->totalEtuCm + $this->totalEtuTd + $this->totalEtuTp;
    }

    /**
     * @return Hrs[]
     */
    public function getHrs(): array
    {
        return $this->hrs;
    }

    /**
     * @return Personnel
     */
    public function getPersonnel(): Personnel
    {
        return $this->personnel;
    }

    /**
     * @param Personnel $personnel
     */
    public function setPersonnel(Personnel $personnel): void
    {
        $this->personnel = $personnel;
    }

    /**
     * @return float
     */
    public function getTotalEtuCm(): float
    {
        return $this->totalEtuCm;
    }

    /**
     * @return float
     */
    public function getTotalEtuTd(): float
    {
        return $this->totalEtuTd;
    }

    /**
     * @return float
     */
    public function getTotalEtuTp(): float
    {
        return $this->totalEtuTp;
    }

    /**
     * @return float
     */
    public function getTotalHrs(): float
    {
        return $this->totalHrs;
    }

    /**
     * @return float
     */
    public function getNbHeuresComplementaires(): float
    {
        $tot = $this->getTotalService() - $this->personnel->getNbHeuresService();

        return $tot < 0 ? 0 : $tot;
    }

    /**
     * @return float
     */
    public function getTotalService(): float
    {
        return $this->totalCm + $this->totalTd + $this->totalTp;
    }

    /**
     * @return float
     */
    public function getTotalHrsService(): float
    {
        return $this->totalHrs + $this->getTotalService();
    }

    /**
     * @param Personnel   $personnel
     * @param Departement $departement
     *
     * @return mixed
     */
    public function getPrevisionnelEnseignantDepartement(
        Personnel $personnel,
        Departement $departement
    ) {
        return $this->previsionnelRepository->findPrevisionnelEnseignantDepartement($personnel, $departement);
    }

    /**
     * @param Personnel $personnel
     * @param           $annee
     *
     * @return array
     */
    public function getPrevisionnelEnseignantComplet(Personnel $personnel, $annee): array
    {
        return $this->previsionnelRepository->findPrevisionnelEnseignantComplet($personnel, $annee);
    }

    /**
     * @param $annee
     *
     */
    public function getPrevisionnelEnseignantByDepartement($annee): void
    {
        $previsionnels = $this->previsionnelRepository->findPrevisionnelEnseignantComplet($this->personnel, $annee);

        $tprev = [];
        /** @var Previsionnel $pr */
        foreach ($previsionnels as $pr) {
            $departement = $pr->getDepartement() ? $pr->getDepartement()->getId() : null;
            if ($departement !== null) {
                if (!array_key_exists($departement, $tprev)) {
                    $tprev[$departement] = [];
                    $this->departements[] = $pr->getDepartement();
                }
                $tprev[$departement][] = $pr;
                $this->totalCm += $pr->getTotalHCm();
                $this->totalTd += $pr->getTotalHTd();
                $this->totalTp += $pr->getTotalHTp();
            }
        }

        $this->servicePrevisionnelByDepartement = $tprev;
    }

    /**
     * @param $annee
     *
     */
    public function getPrevisionnelEnseignantBySemestre($annee): void
    {
        $this->anneePrevi = $annee;
        $previsionnels = $this->previsionnelRepository->findPrevisionnelEnseignantComplet($this->personnel, $annee);

        $tprev = [];
        /** @var Previsionnel $pr */
        foreach ($previsionnels as $pr) {
            $sem = $pr->getSemestre() ? $pr->getSemestre()->getId() : null;

            if ($sem !== null) {
                if (!array_key_exists($sem, $tprev)) {
                    $tprev[$sem] = [];
                    $this->semestres[] = $pr->getSemestre();
                }
                $tprev[$sem][] = $pr;
                $this->totalCm += $pr->getTotalHCm();
                $this->totalTd += $pr->getTotalHTd();
                $this->totalTp += $pr->getTotalHTp();
            }
        }

        $this->servicePrevisionnelBySemestre = $tprev;
    }

    /**
     * @param $annee
     */
    public function getHrsEnseignant($annee): void
    {
        $this->hrs = $this->hrsRepository->findByEnseignant($this->personnel, $annee);

        foreach ($this->hrs as $hr) {
            $this->totalHrs += $hr->getNbHeuresTd();
        }
    }

    /**
     * @param Matiere $matiere
     * @param         $annee
     */
    public function getPrevisionnelMatiere(Matiere $matiere, $annee): void
    {
        $this->matiere = $matiere;
        $this->previsionnels = $this->previsionnelRepository->findPrevisionnelMatiere($matiere, $annee);

        /** @var Previsionnel $previ */
        foreach ($this->previsionnels as $previ) {
            $this->totalCm += $previ->getTotalHCm();
            $this->totalTp += $previ->getTotalHTp();
            $this->totalTd += $previ->getTotalHTd();

            $this->totalEtuCm += $previ->getNbHCm();
            $this->totalEtuTd += $previ->getNbHTd();
            $this->totalEtuTp += $previ->getNbHTp();
        }
    }

    /**
     * @param Semestre $semestre
     * @param          $annee
     */
    public function getPrevisionnelSemestre(Semestre $semestre, $annee): void
    {
        $this->semestre = $semestre;
        $this->previsionnels = $this->previsionnelRepository->findPrevisionnelSemestre($semestre, $annee);

        /** @var Previsionnel $previ */
        foreach ($this->previsionnels as $previ) {
            $this->totalCm += $previ->getTotalHCm();
            $this->totalTp += $previ->getTotalHTp();
            $this->totalTd += $previ->getTotalHTd();

            $this->totalEtuCm += $previ->getNbHCm();
            $this->totalEtuTd += $previ->getNbHTd();
            $this->totalEtuTp += $previ->getNbHTp();
        }
    }

    public function update(Previsionnel $previ, $name, $value): bool
    {
        if ($previ) {
            if ($name === 'personnel') {
                if ($value === '') {
                    $previ->setPersonnel(null);
                    $this->entityManager->flush();

                    return true;
                }
                $personnel = $this->personnelRepository->find($value);
                if ($personnel !== null) {
                    $previ->setPersonnel($personnel);
                    $this->entityManager->flush();

                    return true;
                }

                return false;
            } else {
                $method = 'set' . $name;
                if (method_exists($previ, $method)) {
                    $previ->$method(Tools::convertToFloat($value));
                    $this->entityManager->flush();

                    return true;
                }
            }
        }

        return false;
    }

    /**
     * @param Departement $departement
     * @param int         $anneePrevisionnel
     *
     * @return StreamedResponse
     */
    public function exportOmegaDepartement(Departement $departement, int $anneePrevisionnel): StreamedResponse
    {
        $previsionnels = $this->previsionnelRepository->findByDepartement($departement, $anneePrevisionnel);
        $hrs = $this->hrsRepository->findByDepartement($departement, $anneePrevisionnel);

        $this->myExcelWriter->createSheet('omega');
        $this->myExcelWriter->writeHeader([
            'CODE VET',
            'LIBELLE VET',
            'CODE ELEMENT*',
            'LIBELLE ELEMENT',
            'CODE HARPEGE*',
            'NOM PRENOM',
            'H CM PREVU*',
            'GP CM PREVU*',
            'H TD PREVU*',
            'GP TD PREVU*',
            'H TP PREVU*',
            'GP TP PREVU*'
        ]);
        $this->ligne = 2;
        $this->ecritPrevisionnel($previsionnels);
        $this->ecritHRS($hrs);

        $writer = new Xlsx($this->myExcelWriter->getSpreadsheet());

        return new StreamedResponse(
            static function() use ($writer) {
                $writer->save('php://output');
            },
            200,
            [
                'Content-Type'        => 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
                'Content-Disposition' => 'attachment;filename="export-omega' . $departement->getLibelle() . '.xlsx"'
            ]
        );
    }

    private
    function ecritPrevisionnel(
        $previsionnels
    ): void {
        /** @var Previsionnel $previ */
        foreach ($previsionnels as $previ) {
            $colonne = 1;
            if ($previ->getMatiere() !== null) {
                if ($previ->getMatiere()->getSemestre() !== null && $previ->getMatiere()->getSemestre()->getAnnee() !== null) {
                    //CODE VET
                    $this->myExcelWriter->writeCellXY($colonne, $this->ligne,
                        $previ->getMatiere()->getSemestre()->getAnnee()->getCodeEtape());
                    $colonne++;
                    //LIBELLE VET
                    $this->myExcelWriter->writeCellXY($colonne, $this->ligne,
                        $previ->getMatiere()->getSemestre()->getAnnee()->getLibelleLong());
                } else {
                    $this->myExcelWriter->writeCellXY($colonne, $this->ligne,
                        'ERR');
                    $colonne++;
                    //LIBELLE VET
                    $this->myExcelWriter->writeCellXY($colonne, $this->ligne,
                        'ERR');
                }
                $colonne++;
                //CODE ELEMENT*
                $this->myExcelWriter->writeCellXY($colonne, $this->ligne, $previ->getMatiere()->getCodeElement());
                $colonne++;
                //LIBELLE ELEMENT
                $this->myExcelWriter->writeCellXY($colonne, $this->ligne, $previ->getMatiere()->getLibelle());
                $colonne++;
            } else {
                $this->myExcelWriter->writeCellXY($colonne, $this->ligne,
                    'ERR');
                $colonne++;
                //LIBELLE VET
                $this->myExcelWriter->writeCellXY($colonne, $this->ligne,
                    'ERR');
                $colonne++;
                //CODE ELEMENT*
                $this->myExcelWriter->writeCellXY($colonne, 'ERR');
                $colonne++;
                //LIBELLE ELEMENT
                $this->myExcelWriter->writeCellXY($colonne, 'ERR');
                $colonne++;
            }

            if ($previ->getPersonnel() !== null) {
                //CODE HARPEGE*
                $this->myExcelWriter->writeCellXY($colonne, $this->ligne,
                    $previ->getPersonnel()->getNumeroHarpege());
                $colonne++;
                //NOM PRENOM
                $this->myExcelWriter->writeCellXY($colonne, $this->ligne,
                    strtoupper(Tools::supprimeAccent($previ->getPersonnel()->getNom())) . ' ' . strtoupper(Tools::supprimeAccent($previ->getPersonnel()->getPrenom())));
            } else {
                $this->myExcelWriter->writeCellXY($colonne, $this->ligne, 'ERR-XXX');
                $colonne++;
                $this->myExcelWriter->writeCellXY($colonne, $this->ligne,
                    'ERR-XXX');
            }
            $colonne++;
            //H CM PREVU*
            $this->myExcelWriter->writeCellXY($colonne, $this->ligne, $previ->getNbHCm());
            $colonne++;
            //GP CM PREVU*
            $this->myExcelWriter->writeCellXY($colonne, $this->ligne, $previ->getNbGrCm());
            $colonne++;
            // H TD PREVU*
            $this->myExcelWriter->writeCellXY($colonne, $this->ligne, $previ->getNbHTd());
            $colonne++;
            //GP TD PREVU*
            $this->myExcelWriter->writeCellXY($colonne, $this->ligne, $previ->getNbGrTd());
            $colonne++;
            //H TP PREVU*
            $this->myExcelWriter->writeCellXY($colonne, $this->ligne, $previ->getNbHTp());
            $colonne++;
            //GP TP PREVU*
            $this->myExcelWriter->writeCellXY($colonne, $this->ligne, $previ->getNbGrTp());
            $this->ligne++;
        }
    }

    /**
     * @param $hrs
     */
    private function ecritHRS($hrs): void
    {

        /** @var Hrs $previ */
        foreach ($hrs as $previ) {
            $colonne = 1;
            //CODE VET
            if ($previ->getSemestre() !== null && $previ->getSemestre()->getAnnee() !== null) {
                $this->myExcelWriter->writeCellXY($colonne, $this->ligne,
                    $previ->getSemestre()->getAnnee()->getCodeEtape());
                $colonne++;
                $this->myExcelWriter->writeCellXY($colonne, $this->ligne,
                    $previ->getSemestre()->getAnnee()->getLibelleLong());
            } elseif ($previ->getDiplome() !== null) {
                $this->myExcelWriter->writeCellXY($colonne, $this->ligne,
                    $previ->getDiplome()->getCodeEtape());
                $colonne++;
                $this->myExcelWriter->writeCellXY($colonne, $this->ligne,
                    $previ->getDiplome()->getLibelle());
            } else {
                $this->myExcelWriter->writeCellXY($colonne, $this->ligne, '');
                $colonne++;
                $this->myExcelWriter->writeCellXY($colonne, $this->ligne, '');
            }
            $colonne++;
//CODE ELEMENT*
            $this->myExcelWriter->writeCellXY($colonne, $this->ligne,
                $previ->getTypeHrs() ? $previ->getTypeHrs()->getType() : 'non défini');
            $colonne++;
//LIBELLE ELEMENT
            if ($previ->getTypeHrs() !== null) {
                $this->myExcelWriter->writeCellXY($colonne, $this->ligne,
                    $previ->getTypeHrs()->getLibelle() . ' ' . $previ->getLibelle());
            } else {
                $this->myExcelWriter->writeCellXY($colonne, $this->ligne,
                    'ERR');
            }
            $colonne++;

            if ($previ->getPersonnel() !== null) {
                //CODE HARPEGE*
                $this->myExcelWriter->writeCellXY($colonne, $this->ligne,
                    $previ->getPersonnel()->getNumeroHarpege());
                $colonne++;
                //NOM PRENOM
                $this->myExcelWriter->writeCellXY($colonne, $this->ligne,
                    strtoupper(Tools::supprimeAccent($previ->getPersonnel()->getNom())) . ' ' . strtoupper(Tools::supprimeAccent($previ->getPersonnel()->getPrenom())));
            } else {
                $this->myExcelWriter->writeCellXY($colonne, $this->ligne, 'ERR-XXX');
                $colonne++;
                $this->myExcelWriter->writeCellXY($colonne, $this->ligne,
                    'ERR-XXX');
            }
            $colonne++;
//H CM PREVU*
            $this->myExcelWriter->writeCellXY($colonne, $this->ligne, 0);
            $colonne++;
//GP CM PREVU*
            $this->myExcelWriter->writeCellXY($colonne, $this->ligne, 1);
            $colonne++;
// H TD PREVU*
            $this->myExcelWriter->writeCellXY($colonne, $this->ligne, $previ->getNbHeuresTd());
            $colonne++;
//GP TD PREVU*
            $this->myExcelWriter->writeCellXY($colonne, $this->ligne, 1);
            $colonne++;
//H TP PREVU*
            $this->myExcelWriter->writeCellXY($colonne, $this->ligne, 0);
            $colonne++;
//GP TP PREVU*
            $this->myExcelWriter->writeCellXY($colonne, $this->ligne, 1);
            $this->ligne++;
        }
    }

    /**
     * @param $data
     *
     * @return bool
     * @throws Exception
     */
    public function importCsv($data): bool
    {
        $file = $this->myUpload->upload($data['fichier'], 'temp');

        if ($data['diplome'] !== null) {
            $matieres = $this->entityManager->getRepository(Matiere::class)->tableauMatieresApogees($data['diplome']);
            $personnels = $this->entityManager->getRepository(Personnel::class)->tableauPersonnelHarpege($data['diplome']);

            $handle = fopen($file, 'rb');

            /*Si on a réussi à ouvrir le fichier*/
            if ($handle) {
                /* suppression des données de prévi */
                $this->supprPrevisionnel($data['diplome'], $data['annee']);

                /* supprime la première ligne */
                fgetcsv($handle, 1024, ';');
                $annee = $data['annee'];
                /*Tant que l'on est pas à la fin du fichier*/
                while (!feof($handle)) {
                    /*On lit la ligne courante*/
                    $ligne = fgetcsv($handle, 1024, ';');

                    if (array_key_exists($ligne[2], $matieres)) {
                        $personnel = $personnels[$ligne[4]] ?? null;

                        $pr = new Previsionnel($matieres[$ligne[2]], $annee, $personnel);
                        $pr->setNbHCm(Tools::convertToFloat($ligne[6]));
                        $pr->setNbGrCm(Tools::convertToInt($ligne[7]));
                        $pr->setNbHTd(Tools::convertToFloat($ligne[8]));
                        $pr->setNbGrTd(Tools::convertToInt($ligne[9]));
                        $pr->setNbHTp(Tools::convertToFloat($ligne[10]));
                        $pr->setNbGrTp(Tools::convertToInt($ligne[11]));
                        $this->entityManager->persist($pr);
                    }
                }
                $this->entityManager->flush();

                /*On ferme le fichier*/
                fclose($handle);
                unlink($file); //suppression du fichier

                return true;
            }
            return false;
        }
        return false;
    }

    private function supprPrevisionnel(Diplome $diplome, $annee): void
    {
        $pr = $this->previsionnelRepository->findByDiplome($diplome, $annee);
        /** @var Previsionnel $p */
        foreach ($pr as $p) {
            $this->entityManager->remove($p);
        }

        $this->entityManager->flush();
    }

    public function export(?Departement $getDepartement, $annee, $type, $data, $_format): void
    {
        //todo: a faire.
    }

    public function getRealiseChronologique(
        Personnel $personnel,
        AnneeUniversitaire $anneeUniversitaire
    ) {

    }
}
