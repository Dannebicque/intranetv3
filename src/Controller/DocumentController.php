<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Controller/DocumentController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 13/05/2022 18:57
 */

namespace App\Controller;

use App\Classes\MyDocument;
use App\Entity\Document;
use App\Repository\DocumentRepository;
use App\Repository\TypeDocumentRepository;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\ParamConverter;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

#[Route('/document', name: 'document_')]
class DocumentController extends BaseController
{
    #[Route('/', name: 'index')]
    public function index(): Response
    {
        return $this->render('document/public/index.html.twig', []);
    }

    #[Route('/ajax/typedocument', name: 'typedocument_ajax', options: ['expose' => true])]
    public function typeDocument(TypeDocumentRepository $typeDocumentRepository): Response
    {
        $typeDocuments = $typeDocumentRepository->findByDepartement($this->getDepartement());

        return $this->render('document/public/_typedocument.html.twig', [
            'typedocuments' => $typeDocuments,
            'nbDocumentsFavoris' => is_countable($this->getUser()->getDocumentsFavoris()) ? count($this->getUser()->getDocumentsFavoris()) : 0,
        ]);
    }

    #[Route('/ajax/document/favori', name: 'ajax_favori', options: ['expose' => true])]
    public function documentsFavoris(MyDocument $myDocument): Response
    {
        $documents = $myDocument->mesDocumentsFavoris($this->getUser());
        $idDocuments = $myDocument->idMesDocumentsFavoris($this->getUser());

        return $this->render('document/public/_documents.html.twig', [
            'documents' => $documents,
            'listesFavoris' => $idDocuments,
        ]);
    }

    #[Route('/ajax/document', name: 'ajax', options: ['expose' => true])]
    public function documents(Request $request, MyDocument $myDocument, DocumentRepository $documentRepository): Response
    {
        $typedocument = $request->query->get('typedocument');
        $documents = $documentRepository->findByTypeDocument($typedocument, $this->isEtudiant());
        $idDocuments = $myDocument->idMesDocumentsFavoris($this->getUser());

        return $this->render('document/public/_documents.html.twig', [
            'documents' => $documents,
            'listesFavoris' => $idDocuments,
        ]);
    }

    /**
     * @ParamConverter("document", options={"mapping": {"document": "uuid"}})
     */
    #[Route(path: '/ajax/add-favori/{document}', name: 'add_favori', options: ['expose' => true])]
    public function addFavori(MyDocument $myDocument, Document $document): Response
    {
        $myDocument->setDocument($document);
        $etat = $myDocument->addOrRemoveFavori($this->getUser());

        return $this->json($etat, Response::HTTP_OK);
    }
}
