<?php
/**
 * Created by PhpStorm.
 * User: davidannebicque
 * Date: 01/04/2018
 * Time: 19:30
 */

namespace App\MesClasses;

use App\Entity\Annee;
use App\Entity\Diplome;
use App\Entity\Formation;
use App\Entity\Semestre;
use App\Repository\AnneeRepository;
use App\Repository\DiplomeRepository;
use App\Repository\FormationRepository;
use App\Repository\NotificationRepository;
use App\Repository\PersonnelRepository;
use App\Repository\SemestreRepository;
use Symfony\Component\Security\Core\Authentication\Token\Storage\TokenStorageInterface;
use Symfony\Component\Security\Core\Security;

/**
 * Récupère les données d'une session utilisateur
 * Par exemple les données d'une formation pour un permanent
 */
class DataUserSession
{
    //todo: séparer mes données communes quelque soit le type, des données issues des types d'user

    /**
     * @var Semestre[]
     */
    protected $semestres; //semestres actifs de la formation

    /**
     * @var Diplome[]
     */
    protected $diplomes;

    /**
     * @var Annee[]
     */
    protected $annees;

    /**
     * @var Formation
     */
    protected $formation;

    protected $user;

    /** @var SemestreRepository */
    protected $semestreRepository;

    /** @var AnneeRepository */
    protected $anneeRepository;

    /** @var DiplomeRepository */
    protected $diplomeRepository;

    /** @var PersonnelRepository */
    protected $personnelRepository;

    /** @var FormationRepository */
    protected $formationRepository;

    /** @var NotificationRepository */
    protected $notificationRepository;

    protected $security;

    public function __construct(
        SemestreRepository $semestreRepository,
        AnneeRepository $anneeRepository,
        DiplomeRepository $diplomeRepository,
        PersonnelRepository $personnelRepository,
        FormationRepository $formationRepository,
        NotificationRepository $notificationRepository,
        TokenStorageInterface $user,
        Security $security
    ) {
        $this->semestreRepository = $semestreRepository;
        $this->anneeRepository = $anneeRepository;
        $this->diplomeRepository = $diplomeRepository;
        $this->personnelRepository = $personnelRepository;
        $this->formationRepository = $formationRepository;
        $this->notificationRepository = $notificationRepository;

        $this->user = $user;
        $this->security = $security;

        //if ($this->security->isGranted('ROLE_PERMANENT') || $this->security->isGranted('ROLE_ETUDIANT')) {
        $this->semestres = $semestreRepository->findAll(); //todo à filter selon la formation
        $this->diplomes = $diplomeRepository->findAll(); //todo à filter selon la formation
        $this->annees = $anneeRepository->findAll(); //todo à filter selon la formation
        $this->formation = $formationRepository->find(1); //todo: récuéprer selon le user et la formation choisie
        //}
    }

    /**
     * @return Semestre[]
     */
    public function getSemestres(): array
    {
        return $this->semestres;
    }

    /**
     * @return Diplome[]
     */
    public function getDiplomes(): array
    {
        return $this->diplomes;
    }

    /**
     * @return Annee[]
     */
    public function getAnnees(): array
    {
        return $this->annees;
    }

    /**
     * @return Formation
     */
    public function getFormation(): ?Formation
    {
        return $this->formation;
    }

    public function semestresByDiplome($diplome)
    {
        return $this->semestreRepository->findByDiplome($diplome);
    }

    public function getPersonnels()
    {
        return $this->personnelRepository->findByFormation($this->formation->getId());
    }

    /**
     */
    public function getNotifications()
    {
        if ($this->getUser() !== null) {
            return $this->getUser()->getNotifications();
        }

        return null;
    }

    /**
     * @return \App\Entity\Personnel|\App\Entity\Etudiant|null
     */
    public function getUser()
    {
        return $this->user->getToken()->getUser();
    }

    public function getAnneeUniversitaire()
    {
        return $this->formation->getAnneeCourante();
    }
}