<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Controller/administration/AlternanceFicheSuiviController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 07/10/2021 12:14
 */

namespace App\Controller\administration;

use App\Classes\MyAlternanceFicheSuivi;
use App\Controller\BaseController;
use App\Entity\Alternance;
use App\Entity\AlternanceFicheSuivi;
use App\Entity\Constantes;
use App\Form\AlternanceFicheSuiviType;
use Exception;
use Knp\Bundle\SnappyBundle\Snappy\Response\PdfResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

#[Route(path: '/administration/alternance/fiche/suivi')]
class AlternanceFicheSuiviController extends BaseController
{
    /**
     * @throws Exception
     */
    #[Route(path: '/new/{alternance}', name: 'administration_alternance_fiche_suivi_new', methods: ['GET', 'POST'])]
    public function new(Request $request, Alternance $alternance): Response
    {
        $this->denyAccessUnlessGranted('MINIMAL_ROLE_ASS', $alternance->getAnnee());
        $alternanceFicheSuivi = new AlternanceFicheSuivi($alternance);
        $form = $this->createForm(AlternanceFicheSuiviType::class, $alternanceFicheSuivi);
        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {
            $this->entityManager->persist($alternanceFicheSuivi);
            $this->entityManager->flush();
            $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'fiche_suivi.new.success.flash');

            return $this->redirectToRoute('administration_alternance_show', ['alternance' => $alternance->getId()]);
        }

        return $this->render('administration/alternance_fiche_suivi/new.html.twig', [
            'alternance_fiche_suivi' => $alternanceFicheSuivi,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @throws \Twig\Error\LoaderError
     * @throws \Twig\Error\RuntimeError
     * @throws \Twig\Error\SyntaxError
     */
    #[Route(path: '/imprimer/{id}', name: 'administration_alternance_fiche_suivi_export', methods: ['GET'])]
    public function print(MyAlternanceFicheSuivi $myAlternanceFicheSuivi, AlternanceFicheSuivi $alternanceFicheSuivi): PdfResponse
    {
        $this->denyAccessUnlessGranted('MINIMAL_ROLE_ASS', $alternanceFicheSuivi->getAlternance()?->getAnnee());

        return $myAlternanceFicheSuivi->print($alternanceFicheSuivi);
    }

    #[Route(path: '/{id}', name: 'administration_alternance_fiche_suivi_show', methods: ['GET'])]
    public function show(AlternanceFicheSuivi $alternanceFicheSuivi): Response
    {
        $this->denyAccessUnlessGranted('MINIMAL_ROLE_ASS', $alternanceFicheSuivi->getAlternance()?->getAnnee());

        return $this->render('administration/alternance_fiche_suivi/show.html.twig', [
            'alternance_fiche_suivi' => $alternanceFicheSuivi,
        ]);
    }

    #[Route(path: '/{id}/edit', name: 'administration_alternance_fiche_suivi_edit', methods: ['GET', 'POST'])]
    public function edit(Request $request, AlternanceFicheSuivi $alternanceFicheSuivi): Response
    {
        $this->denyAccessUnlessGranted('MINIMAL_ROLE_ASS', $alternanceFicheSuivi->getAlternance()?->getAnnee());
        $form = $this->createForm(AlternanceFicheSuiviType::class, $alternanceFicheSuivi);
        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {
            $this->entityManager->flush();
            $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'fiche_suivi.edit.success.flash');

            if (null !== $request->request->get('btn_update') && null !== $alternanceFicheSuivi->getAlternance()) {
                return $this->redirectToRoute('administration_alternance_show',
                    ['alternance' => $alternanceFicheSuivi->getAlternance()->getId()]);
            }

            return $this->redirectToRoute('administration_alternance_fiche_suivi_edit',
                ['id' => $alternanceFicheSuivi->getId()]);
        }

        return $this->render('administration/alternance_fiche_suivi/edit.html.twig', [
            'alternance_fiche_suivi' => $alternanceFicheSuivi,
            'form' => $form->createView(),
        ]);
    }

    #[Route(path: '/{id}', name: 'administration_alternance_fiche_suivi_delete', methods: ['DELETE'])]
    public function delete(Request $request, AlternanceFicheSuivi $alternanceFicheSuivi): Response
    {
        $this->denyAccessUnlessGranted('MINIMAL_ROLE_ASS', $alternanceFicheSuivi->getAlternance()?->getAnnee());
        $alternance = $alternanceFicheSuivi->getAlternance();
        if ($this->isCsrfTokenValid('delete'.$alternanceFicheSuivi->getId(), $request->request->get('_token'))) {
            $this->entityManager->remove($alternanceFicheSuivi);
            $this->entityManager->flush();
            $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'fiche_suivi.delete.success.flash');
        }
        if (null !== $alternance) {
            return $this->redirectToRoute('administration_alternance_show', ['alternance' => $alternance->getId()]);
        }

        return $this->redirectToRoute('administration_index');
    }
}
