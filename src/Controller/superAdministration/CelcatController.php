<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Controller/superAdministration/CelcatController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 07/02/2021 10:36
 */

namespace App\Controller\superAdministration;

use App\Classes\Celcat\MyCelcat;
use App\Controller\BaseController;
use App\Entity\Diplome;
use App\Repository\CelcatEventsRepository;
use App\Repository\DiplomeRepository;
use Exception;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/administratif/celcat")
 */
class CelcatController extends BaseController
{
    private MyCelcat $myCelcat;

    /**
     * CelcatController constructor.
     */
    public function __construct(MyCelcat $myCelcat)
    {
        $this->myCelcat = $myCelcat;
    }

    /**
     * @Route("/", methods={"GET"}, name="sa_celcat_index")
     * @IsGranted("ROLE_SUPER_ADMIN")
     */
    public function index(DiplomeRepository $diplomeRepository): Response
    {
        return $this->render('super-administration/celcat/index.html.twig', [
            'diplomes' => $diplomeRepository->findAll(),
        ]);
    }

    /**
     * @Route("/extraction", methods={"GET"}, name="sa_celcat_extraction_code")
     * @IsGranted("ROLE_SUPER_ADMIN")
     */
    public function extraction(): Response
    {
        return $this->render('super-administration/celcat/extraction.html.twig', [
            'diplomes' => $this->myCelcat->getDiplomes(),
        ]);
    }

    /**
     * @Route("/update/{id}", methods={"GET"}, name="sa_celcat_update_events")
     * @IsGranted("ROLE_SUPER_ADMIN")
     *
     * @throws Exception
     */
    public function update(
        CelcatEventsRepository $celcatEventsRepository,
        Diplome $diplome
    ): RedirectResponse {
        //suppression des events existants pour le département
        $celcatEventsRepository->deleteDepartement($diplome->getCodeCelcatDepartement(),
            $diplome->getAnneeUniversitaire());

        //récupération et ajouts des events.
        $this->myCelcat->getEvents($diplome->getCodeCelcatDepartement(), $diplome->getAnneeUniversitaire());

        return $this->redirectToRoute('sa_celcat_index');
    }
}
