<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Controller/administration/apc/ApcRessourceController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 15/09/2021 20:34
 */

namespace App\Controller\administration\apc;

use App\Classes\Matieres\RessourceManager;
use App\Classes\Pdf\MyPDF;
use App\Controller\BaseController;
use App\Entity\ApcRessource;
use App\Entity\ApcRessourceApprentissageCritique;
use App\Entity\ApcSaeRessource;
use App\Entity\Constantes;
use App\Entity\Diplome;
use App\Form\ApcRessourceType;
use App\Repository\ApcApprentissageCritiqueRepository;
use App\Repository\ApcRessourceApprentissageCritiqueRepository;
use App\Repository\ApcSaeRepository;
use App\Repository\ApcSaeRessourceRepository;
use App\Repository\SemestreRepository;
use Knp\Bundle\SnappyBundle\Snappy\Response\PdfResponse;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

#[Route(path: '/administration/apc/ressource', name: 'administration_')]
class ApcRessourceController extends BaseController
{
    /**
     * @throws \Twig\Error\SyntaxError
     * @throws \Twig\Error\RuntimeError
     * @throws \Twig\Error\LoaderError
     */
    #[Route(path: '/imprime/{id}.pdf', name: 'apc_ressource_export_one', methods: 'GET')]
    public function exportOne(MyPDF $myPDF, ApcRessource $apcRessource): PdfResponse
    {
        return $myPDF::generePdf(
            'pdf/apc/fiche_ressource.html.twig',
            ['apc_sae' => $apcRessource],
            'ressource',
            $this->getDepartement()
        );
    }

    #[Route(path: '/ajax-edit/{id}', name: 'apc_ressources_ajax_edit', options: ['expose' => true], methods: ['POST'])]
    public function ajaxEdit(RessourceManager $ressourceManager, Request $request, ApcRessource $apcRessource): JsonResponse
    {
        $name = $request->request->get('field');
        $value = $request->request->get('value');
        $update = $ressourceManager->update($name, $value, $apcRessource);

        return $update ? new JsonResponse('', Response::HTTP_OK) : new JsonResponse('erreur',
            Response::HTTP_INTERNAL_SERVER_ERROR);
    }

    #[Route(path: '/ajax-ac', name: 'apc_ressources_ajax_ac', options: ['expose' => true], methods: ['POST'])]
    public function ajaxAc(SemestreRepository $semestreRepository, ApcRessourceApprentissageCritiqueRepository $apcRessourceApprentissageCritiqueRepository, ApcApprentissageCritiqueRepository $apcApprentissageCritiqueRepository, Request $request): Response
    {
        $semestre = $semestreRepository->find($request->request->get('semestre'));
        $competences = $request->request->get('competences');
        if (null !== $semestre && (null === $competences ? 0 : count($competences)) > 0) {
            if (null !== $request->request->get('ressource')) {
                $tabAcSae = $apcRessourceApprentissageCritiqueRepository->findArrayIdAc($request->request->get('ressource'));
            } else {
                $tabAcSae = [];
            }

            $datas = $apcApprentissageCritiqueRepository->findBySemestreAndCompetences($semestre->getAnnee(),
                $competences);

            $t = [];
            foreach ($datas as $d) {
                $b = [];

                $b['id'] = $d->getId();
                $b['libelle'] = $d->getLibelle();
                $b['code'] = $d->getCode();
                $b['checked'] = true === in_array($d->getId(), $tabAcSae) ? 'checked="checked"' : '';
                if (null !== $d->getNiveau() && null !== $d->getNiveau()->getCompetence() && !array_key_exists($d->getNiveau()->getCompetence()->getNomCourt(),
                        $t)) {
                    $t[$d->getNiveau()->getCompetence()->getNomCourt()] = [];
                }
                $t[$d->getNiveau()->getCompetence()->getNomCourt()][] = $b;
            }

            return $this->json($t);
        }

        return $this->json(false);
    }

    #[Route(path: '/ajax-sae', name: 'apc_sae_ajax', options: ['expose' => true], methods: ['POST'])]
    public function ajaxSae(SemestreRepository $semestreRepository, ApcSaeRessourceRepository $apcSaeRessourceRepository, ApcSaeRepository $apcSaeRepository, Request $request): Response
    {
        $semestre = $semestreRepository->find($request->request->get('semestre'));
        if (null !== $semestre) {
            if (null !== $request->request->get('ressource')) {
                $tabAcSae = $apcSaeRessourceRepository->findArrayIdSae($request->request->get('ressource'));
            } else {
                $tabAcSae = [];
            }

            $datas = $apcSaeRepository->findBySemestre($semestre);

            $t = [];
            foreach ($datas as $d) {
                $b = [];

                $b['id'] = $d->getId();
                $b['libelle'] = $d->getLibelle();
                $b['code'] = $d->getCodeMatiere();
                $b['checked'] = true === in_array($d->getId(), $tabAcSae) ? 'checked="checked"' : '';
                $t[] = $b;
            }

            return $this->json($t);
        }

        return $this->json(false);
    }

    #[Route(path: '/new/{diplome}', name: 'apc_ressource_new', methods: ['GET', 'POST'])]
    public function new(ApcApprentissageCritiqueRepository $apcApprentissageCritiqueRepository, ApcSaeRepository $apcSaeRepository, Request $request, Diplome $diplome): Response
    {
        $apcRessource = new ApcRessource();
        $form = $this->createForm(ApcRessourceType::class, $apcRessource, [
            'diplome' => $diplome,
        ]);
        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {
            $this->entityManager->persist($apcRessource);

            $acs = $request->request->get('ac');
            if (is_array($acs)) {
                foreach ($acs as $idAc) {
                    $ac = $apcApprentissageCritiqueRepository->find($idAc);
                    $saeAc = new ApcRessourceApprentissageCritique($apcRessource, $ac);
                    $this->entityManager->persist($saeAc);
                }
            }

            $saes = $request->request->get('saes');
            if (is_array($saes)) {
                foreach ($saes as $idAc) {
                    $apcSae = $apcSaeRepository->find($idAc);
                    $saeRes = new ApcSaeRessource($apcSae, $apcRessource);
                    $this->entityManager->persist($saeRes);
                }
            }

            $this->entityManager->flush();
            $this->addFlashBag(
                Constantes::FLASHBAG_SUCCESS,
                'apc.ressource.new.success.flash'
            );

            return $this->redirectToRoute('administration_matiere_index', ['diplome' => $diplome->getId()]);
        }

        return $this->render('apc/apc_ressource/new.html.twig', [
            'apc_ressource' => $apcRessource,
            'diplome' => $diplome,
            'form' => $form->createView(),
        ]);
    }

    #[Route(path: '/{id}', name: 'apc_ressource_show', methods: ['GET'])]
    public function show(ApcRessource $apcRessource): Response
    {
        return $this->render('apc/apc_ressource/show.html.twig', [
            'apc_ressource' => $apcRessource,
        ]);
    }

    #[Route(path: '/{id}/edit', name: 'apc_ressource_edit', methods: ['GET', 'POST'])]
    public function edit(ApcApprentissageCritiqueRepository $apcApprentissageCritiqueRepository, ApcSaeRepository $apcSaeRepository, Request $request, ApcRessource $apcRessource): Response
    {
        $form = $this->createForm(ApcRessourceType::class, $apcRessource, [
            'diplome' => $apcRessource->getDiplome(),
        ]);
        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {
            foreach ($apcRessource->getApcRessourceApprentissageCritiques() as $ac) {
                $this->entityManager->remove($ac);
            }

            $acs = $request->request->get('ac');
            if (is_array($acs)) {
                foreach ($acs as $idAc) {
                    $ac = $apcApprentissageCritiqueRepository->find($idAc);
                    $saeAc = new ApcRessourceApprentissageCritique($apcRessource, $ac);
                    $this->entityManager->persist($saeAc);
                }
            }

            foreach ($apcRessource->getApcSaeRessources() as $ac) {
                $this->entityManager->remove($ac);
            }
            $saes = $request->request->get('saes');
            if (is_array($saes)) {
                foreach ($saes as $idAc) {
                    $apcSae = $apcSaeRepository->find($idAc);
                    $saeRes = new ApcSaeRessource($apcSae, $apcRessource);
                    $this->entityManager->persist($saeRes);
                }
            }

            $this->entityManager->flush();

            $this->addFlashBag(
                Constantes::FLASHBAG_SUCCESS,
                'apc.ressource.edit.success.flash'
            );

            if (null !== $request->request->get('btn_update') && null !== $apcRessource->getDiplome()) {
                return $this->redirectToRoute('administration_matiere_index',
                    ['diplome' => $apcRessource->getDiplome()->getId()]);
            }

            return $this->redirectToRoute('administration_apc_ressource_edit',
                ['id' => $apcRessource->getId()]);
        }

        return $this->render('apc/apc_ressource/edit.html.twig', [
            'apc_ressource' => $apcRessource,
            'form' => $form->createView(),
            'diplome' => $apcRessource->getDiplome(),
        ]);
    }

    #[Route(path: '/{id}', name: 'apc_ressource_delete', methods: 'DELETE')]
    public function delete(Request $request, ApcRessource $apcRessource): Response
    {
        $id = $apcRessource->getId();
        if ($this->isCsrfTokenValid('delete'.$id, $request->request->get('_token'))) {
            //todo: vérifier si pas d'évaluation ou d'absence (idem SAE)
            $this->entityManager->remove($apcRessource);
            $this->entityManager->flush();
            $this->addFlashBag(
                Constantes::FLASHBAG_SUCCESS,
                'apc.ressource.delete.success.flash'
            );

            return $this->json($id, Response::HTTP_OK);
        }
        $this->addFlashBag(Constantes::FLASHBAG_ERROR, 'apc.ressource.delete.error.flash');

        return $this->json(false, Response::HTTP_INTERNAL_SERVER_ERROR);
    }

    #[Route(path: '/{id}/duplicate', name: 'apc_ressource_duplicate', methods: 'GET|POST')]
    public function duplicate(ApcRessource $apcRessource): Response
    {
        $newApcRessource = clone $apcRessource;
        $this->entityManager->persist($newApcRessource);
        $this->entityManager->flush();
        $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'apc.ressource.duplicate.success.flash');

        return $this->redirectToRoute('administration_apc_ressource_edit', ['id' => $newApcRessource->getId()]);
    }
}
