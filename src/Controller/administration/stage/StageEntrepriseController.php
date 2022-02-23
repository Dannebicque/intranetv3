<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Controller/administration/stage/StageEntrepriseController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 07/10/2021 12:14
 */

namespace App\Controller\administration\stage;

use App\Classes\MyExport;
use App\Controller\BaseController;
use App\Entity\Entreprise;
use App\Entity\StageEtudiant;
use App\Entity\StagePeriode;
use App\Repository\StageEtudiantRepository;
use function array_key_exists;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\ParamConverter;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class StageEntrepriseController.
 */
#[Route(path: '/administration/stage/entreprise')]
class StageEntrepriseController extends BaseController
{
    /**
     * @ParamConverter("stagePeriode", options={"mapping": {"uuid": "uuid"}})
     */
    #[Route(path: '/{uuid}', name: 'administration_stage_entreprise_index')]
    public function index(StageEtudiantRepository $stageEtudiantRepository, StagePeriode $stagePeriode): Response
    {
        $this->denyAccessUnlessGranted('MINIMAL_ROLE_STAGE', $stagePeriode->getSemestre());
        $entreprises = $stageEtudiantRepository->findEntreprisesByPeriode($stagePeriode);
        $tEntreprises = [];
        /** @var StageEtudiant $entreprise */
        foreach ($entreprises as $entreprise) {
            if (null !== $entreprise->getEntreprise()) {
                if (array_key_exists(mb_strtolower($entreprise->getEntreprise()->getRaisonSociale()), $tEntreprises)) {
                    $tEntreprises[mb_strtolower($entreprise->getEntreprise()->getRaisonSociale())]['entreprise'] = $entreprise->getEntreprise();
                    ++$tEntreprises[mb_strtolower($entreprise->getEntreprise()->getRaisonSociale())]['nbstagiaire'];
                } else {
                    $tEntreprises[mb_strtolower($entreprise->getEntreprise()->getRaisonSociale())]['entreprise'] = $entreprise->getEntreprise();
                    $tEntreprises[mb_strtolower($entreprise->getEntreprise()->getRaisonSociale())]['nbstagiaire'] = 1;
                }
            }
        }

        return $this->render('administration/stage/stage_entreprise/index.html.twig', [
            'entreprises' => $tEntreprises,
            'stagePeriode' => $stagePeriode,
        ]);
    }

    #[Route(path: '/details/{entreprise}', name: 'administration_stage_entreprise_detail', methods: 'GET')]
    public function details(Entreprise $entreprise): Response
    {
        return $this->render('administration/stage/stage_entreprise/details.html.twig', [
            'entreprise' => $entreprise,
        ]);
    }

    /**
     * @ParamConverter("stagePeriode", options={"mapping": {"uuid": "uuid"}})
     */
    #[Route(path: '/{uuid}/export.{_format}', name: 'administration_stage_entreprise_export', requirements: ['_format' => 'csv|xlsx|pdf'], methods: 'GET')]
    public function export(StageEtudiantRepository $stageEtudiantRepository, MyExport $myExport, StagePeriode $stagePeriode, $_format): Response
    {
        $this->denyAccessUnlessGranted('MINIMAL_ROLE_STAGE', $stagePeriode->getSemestre());
        $entreprises = $stageEtudiantRepository->findEntreprisesByPeriode($stagePeriode);

        return $myExport->genereFichierGenerique(
            $_format,
            $entreprises,
            'Entreprises',
            ['stage_entreprise_administration', 'adresse'],
            [
                'entreprise' => ['raisonSociale', 'responsable' => ['nom', 'prenom', 'fonction', 'telephone', 'email']],
                'tuteur' => ['nom', 'prenom', 'fonction', 'telephone', 'email'],
                'serviceStageEntreprise',
                'type',
                'personnel' => ['nom', 'prenom'],
                'dateDebutStage',
                'dateFinStage',
            ]
        );
    }
}
