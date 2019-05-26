<?php
/**
 * *
 *  *  Copyright (C) $month.$year | David annebicque | IUT de Troyes - All Rights Reserved
 *  *
 *  *
 *  * @file /Users/davidannebicque/htdocs/intranetv3/src/Controller/administration/structure/DepartementController.php
 *  * @author     David annebicque
 *  * @project intranetv3
 *  * @date 4/28/19 8:47 PM
 *  * @lastUpdate 4/28/19 8:42 PM
 *  *
 *
 */

namespace App\Controller\administration\structure;

use App\Controller\BaseController;
use App\Entity\Departement;
use App\Form\DepartementType;
use Symfony\Component\Form\Exception\LogicException;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/administration/structure/departement")
 */
class DepartementController extends BaseController
{
    /**
     * @Route("/{id}", name="administration_structure_departement_show", methods="GET")
     * @param Departement $departement
     *
     * @return Response
     */
    public function show(Departement $departement): Response
    {
        return $this->render('structure/departement/show.html.twig', ['departement' => $departement]);
    }

    /**
     * @Route("/{id}/edit", name="administration_structure_departement_edit", methods="GET|POST")
     * @param Request     $request
     * @param Departement $departement
     *
     * @return Response
     * @throws LogicException
     */
    public function edit(Request $request, Departement $departement): Response
    {
        $form = $this->createForm(DepartementType::class, $departement, [
            'attr' => [
                'data-provide' => 'validation'
            ]
        ]);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->entityManager->flush();

            return $this->redirectToRoute('administration_structure_departement_edit', ['id' => $departement->getId()]);
        }

        return $this->render('structure/departement/edit.html.twig', [
            'departement' => $departement,
            'form'      => $form->createView(),
        ]);
    }
}
