<?php

namespace App\Controller\administration\stage;

use App\Controller\BaseController;
use App\Entity\StagePeriode;
use App\MesClasses\MyStage;
use App\Repository\StagePeriodeRepository;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\ParamConverter;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class StagePeriodeGestionController
 * @package App\Controller\administration
 * @Route("/administration/stage/periode/gestion")
 *
 */
class StagePeriodeGestionController extends BaseController
{
    /**
     * @Route("/{uuid}", name="administration_stage_periode_gestion")
     * @ParamConverter("stagePeriode", options={"mapping": {"uuid": "uuid"}})
     * @param StagePeriodeRepository $stagePeriodeRepository
     * @param MyStage                $myStage
     * @param StagePeriode           $stagePeriode
     *
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function periode(
        StagePeriodeRepository $stagePeriodeRepository,
        MyStage $myStage,
        StagePeriode $stagePeriode
    ): Response {
        $periodes = [];
        foreach ($this->dataUserSession->getDiplomes() as $diplome) {
            $pers = $stagePeriodeRepository->findByDiplome($diplome, $diplome->getAnneeUniversitaire()->getAnnee());
            foreach ($pers as $periode) {
                $periodes[] = $periode;
            }
        }

        return $this->render('administration/stage/stage_periode_gestion/index.html.twig', [
            'stagePeriode' => $stagePeriode,
            'periodes'     => $periodes,
            'myStage'      => $myStage->getDataPeriode($stagePeriode)
        ]);
    }
}
