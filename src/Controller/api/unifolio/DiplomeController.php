<?php

namespace App\Controller\api\unifolio;

use App\Controller\BaseController;
use App\Entity\Departement;
use App\Repository\DiplomeRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

class DiplomeController extends BaseController
{
    #[Route(path: '/api/unifolio/diplome/{departement}', name: 'api_diplome_liste')]
    public function listeDiplome(
        Request     $request,
        Departement $departement
    )
    {
        $this->checkAccessApi($request);

        $tabDiplome = [];

        foreach ($departement->getDiplomes() as $diplome) {
            $tabDiplome[$diplome->getId()] = [
                'id' => $diplome->getId(),
                'libelle' => $diplome->getLibelle(),
                'sigle' => $diplome->getSigle(),
                'departement' => $diplome->getDepartement()->getId(),
            ];
        }

        return $this->json($tabDiplome);
    }

    #[Route(path: '/api/unifolio/diplome/', name: 'api_diplome_all')]
    public function allDiplome(
        Request     $request,
        DiplomeRepository $diplomeRepository
    )
    {
//        $this->checkAccessApi($request);

        $diplomes = $diplomeRepository->findAll();

        $tabDiplome = [];

        foreach ($diplomes as $diplome) {

            //TODO: a corriger
            if ($diplome->getApcParcours() != null) {
                $parcours = $diplome->getApcParcours();
                $apcParcours = [];
                $apcParcours[] = [
                    'id' => $parcours->getId(),
                    'libelle' => $parcours->getLibelle(),
                ];


                $tabDiplome[$diplome->getId()] = [
                    'id' => $diplome->getId(),
                    'libelle' => $diplome->getLibelle(),
                    'sigle' => $diplome->getSigle(),
                    'departement' => $diplome->getDepartement()->getLibelle(),
                    'type' => $diplome->getTypeDiplome()->getId(),
                    'parcours' => $apcParcours,
                ];
            }
        }
        return $this->json($tabDiplome);
    }
}