<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Controller/superAdministration/OriginauxAccesController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 25/08/2022 12:10
 */

namespace App\Controller\superAdministration;

use App\Controller\BaseController;
use App\Entity\Personnel;
use App\Table\PersonnelTableType;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Contracts\EventDispatcher\EventDispatcherInterface;

#[Route('/administratif/qualite/originaux/acces', name: 'sa_qualite_originaux_acces_')]
class OriginauxAccesController extends BaseController
{
    #[Route('/', name: 'index', methods: ['GET', 'POST'])]
    public function index(
        Request $request,
    ): Response {
        $table = $this->createTable(PersonnelTableType::class, [
            'typeAccess' => 'qualite',
        ]);

        $table->handleRequest($request);

        if ($table->isCallback()) {
            return $table->getCallbackResponse();
        }

        return $this->render('super-administration/originaux/acces/index.html.twig', [
            'table' => $table,
        ]);
    }

    #[Route(path: '/change-etat/{personnel}/{etat}', name: 'change_etat', options: ['expose' => true], methods: 'GET')]
    public function changeEtat(EventDispatcherInterface $eventDispatcher, Personnel $personnel, $etat): Response
    {
        if ('a' === $etat || 'r' === $etat) {
            $personnel->setAccessOriginaux('a' === $etat);
            $this->entityManager->flush();

//            $event = new RattrapageEvent($rattrapage);
//            $eventDispatcher->dispatch($event, RattrapageEvent::DECISION);

            return new Response('', Response::HTTP_OK);
        }

        return new Response('', Response::HTTP_INTERNAL_SERVER_ERROR);
    }
}
