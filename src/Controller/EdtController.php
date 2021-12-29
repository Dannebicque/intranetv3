<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Controller/EdtController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 08/10/2021 07:01
 */

namespace App\Controller;

use App\Classes\Edt\MyEdtCelcat;
use App\Classes\Edt\MyEdtExport;
use App\Classes\Edt\MyEdtIntranet;
use App\Classes\Matieres\TypeMatiereManager;
use App\Classes\Pdf\MyPDF;
use App\Entity\Constantes;
use App\Entity\Semestre;
use App\Repository\EdtPlanningRepository;
use Exception;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Routing\Generator\UrlGeneratorInterface;
use Twig\Error\LoaderError;
use Twig\Error\RuntimeError;
use Twig\Error\SyntaxError;

/**
 * Class EdtController.
 */
#[Route(path: '/emploi-du-temps')]
class EdtController extends BaseController
{
    public function __construct(
        private TypeMatiereManager $typeMatiereManager,
        private MyEdtIntranet $myEdtIntranet,
        private MyEdtCelcat $myEdtCelcat
    ) {
    }

    /**
     * @throws Exception
     */
    public function dashboardPersonnel(int $semaine = 0): Response
    {
        //todo: passer le lien semestre-> couleur plutôt que les matières ??
        if (null !== $this->dataUserSession->getDepartement() && $this->dataUserSession->getDepartement()->isOptUpdateCelcat()) {
            $matieres = $this->typeMatiereManager->tableauMatieresCodeApogee($this->getDepartement());
            $this->myEdtCelcat->initPersonnel($this->getUser(),
                $this->dataUserSession->getAnneeUniversitaire(), $semaine, $matieres);

            return $this->render('edt/_intervenant2.html.twig', [
                'edt' => $this->myEdtCelcat,
                'filtre' => 'prof',
                'valeur' => $this->getUser()->getId(),
                'tabHeures' => Constantes::TAB_HEURES_EDT_2,
            ]);
        }
        $matieres = $this->typeMatiereManager->findByDepartementArray($this->getDepartement());
        $this->myEdtIntranet->initPersonnel($this->getUser(),
            $this->dataUserSession->getAnneeUniversitaire(),
            $semaine, $matieres);

        return $this->render('edt/_intervenant2.html.twig', [
            'edt' => $this->myEdtIntranet,
            'filtre' => 'prof',
            'valeur' => $this->getUser()->getId(),
            'tabHeures' => Constantes::TAB_HEURES_EDT_2,
        ]);
    }

    public function personnelSemestre(Semestre $semestre, $semaine = 0): Response
    {
        if (null !== $semestre->getDiplome() && $semestre->getDiplome()->isOptUpdateCelcat()) {
            $this->myEdtCelcat->initSemestre($semaine, $semestre, $this->getAnneeUniversitaire());

            return $this->render('edt/_semestre.html.twig', [
                'edt' => $this->myEdtCelcat,
                'semestre' => $semestre,
                'filtre' => 'promo',
                'valeur' => $semestre->getId(),
                'tabHeures' => Constantes::TAB_HEURES_EDT,
            ]);
        }

        $this->myEdtIntranet->initSemestre($semaine, $semestre, $this->getAnneeUniversitaire());

        return $this->render('edt/_semestre.html.twig', [
            'edt' => $this->myEdtIntranet,
            'semestre' => $semestre,
            'filtre' => 'promo',
            'valeur' => $semestre->getId(),
            'tabHeures' => Constantes::TAB_HEURES_EDT,
        ]);
    }

    /**
     * @throws Exception
     */
    public function dashboardEtudiant(int $semaine = 0): Response
    {
        $matieres = $this->typeMatiereManager->tableauMatieresSemestreCodeApogee($this->getUser()->getSemestre());

        if (null !== $this->getUser()->getDiplome() && $this->getUser()->getDiplome()?->isOptUpdateCelcat()) {
            $this->myEdtCelcat->initEtudiant($this->getUser(),
                $this->getAnneeUniversitaire(), $semaine, $matieres);

            return $this->render('edt/_etudiant2.html.twig', [
                'edt' => $this->myEdtCelcat,
                'tabHeures' => Constantes::TAB_HEURES_EDT_2,
            ]);
        }
        $this->myEdtIntranet->initEtudiant($this->getUser(),
            $this->getAnneeUniversitaire(),
            $semaine);

        return $this->render('edt/_etudiant.html.twig', [
            'edt' => $this->myEdtIntranet,
            'tabHeures' => Constantes::TAB_HEURES_EDT,
        ]);
    }

    #[Route(path: '/intervenant/export/semaine/{semaine}', name: 'edt_intervenant_export_semaine_courante')]
    public function exportIntervenantSemaine(): void
    {
    }

    /**
     * @throws LoaderError
     * @throws RuntimeError
     * @throws SyntaxError
     */
    #[Route(path: '/semestre/export/semaine/{semaine}/{semestre}', name: 'edt_semestre_export_semaine_courante')]
    public function exportSemestreSemaine(MyEdtExport $myEdtExport, $semaine, Semestre $semestre)
    {
        $myEdtExport->exportSemestre($semaine, $semestre);
    }

    #[Route(path: '/intervenant/export/annee', name: 'edt_intervenant_export_annee')]
    public function exportIntervenantAnnee(): void
    {
    }

    #[Route(path: '/intervenant/export/ical', name: 'edt_intervenant_export_ical')]
    public function exportIntervenantIcal(MyEdtExport $myEdtExport): Response
    {
        $ical = $myEdtExport->export($this->getUser(), 'ics', 'personnel');

        return new Response($ical, 200, [
            'Content-Type' => 'application/force-download',
            'Content-Disposition' => 'attachment; filename="export.ics"',
        ]);
    }

    #[Route(path: '/intervenant/affiche/ical', name: 'edt_affiche_ical')]
    public function afficheLienIcal(): Response
    {
        if ($this->isEtudiant()) {
            return $this->render('edt/modal_lien_ical.html.twig', [
                'lienIcal' => $this->generateUrl('edt_etudiant_synchro_ical', [
                    'code' => md5($this->getUser()->getSlug()),
                    '_format' => 'ics',
                ],
                    UrlGeneratorInterface::ABSOLUTE_URL),
            ]);
        }

        return $this->render('edt/modal_lien_ical.html.twig', [
            'lienIcal' => $this->generateUrl('edt_intervenant_synchro_ical', [
                'code' => md5($this->getUser()->getSlug()),
                '_format' => 'ics',
            ],
                UrlGeneratorInterface::ABSOLUTE_URL),
        ]);
    }

    /**
     * @throws LoaderError
     * @throws RuntimeError
     * @throws SyntaxError
     * @throws Exception
     */
    #[Route(path: '/etudiant/export/semaine/{semaine}', name: 'edt_etudiant_export_semaine_courante')]
    public function exportEtudiantSemaine(MyPDF $myPDF, int $semaine = 0): RedirectResponse
    {
        if (0 === $semaine) {
            $semaine = (int)date('W');
        }
        if ($semaine !== (int)date('W') && $semaine !== ((int)date('W') + 1)) {
            return $this->redirect($this->generateUrl('erreur_666'));
        }
        if (null !== $this->getUser()->getDiplome() && $this->getUser()->getDiplome()->isOptUpdateCelcat()) {
            $edt = $this->myEdtCelcat->initEtudiant($this->getUser(),
                $this->getAnneeUniversitaire(), $semaine);
        } else {
            $edt = $this->myEdtIntranet->initEtudiant($this->getUser(),
                $this->getAnneeUniversitaire(), $semaine);
        }

        return $myPDF->generePdf('pdf/edt/edtPersoSemaine.html.twig',
            ['edt' => $edt, 'tabHeures' => Constantes::TAB_HEURES],
            'export-semaine-edt', $this->dataUserSession->getDepartement()->getLibelle());
    }

    #[Route(path: '/etudiant/export/ical', name: 'edt_etudiant_export_ical')]
    public function exportEtudiantIcal(MyEdtExport $myEdtExport): Response
    {
        //Le nombre de semaine selon la configuraiton
        $ical = $myEdtExport->export($this->getUser(), 'ics', 'etudiant');

        return new Response($ical, 200, [
            'Content-Type' => 'application/force-download',
            'Content-Disposition' => 'attachment; filename="export.ics"',
        ]);
    }

    #[Route(path: '/etudiant/details/{event}/{type}', name: 'edt_etudiant_detail_event')]
    public function detailEvent(
        MyEdtIntranet $myEdt,
        EdtPlanningRepository $edtPlanningRepository,
        $event,
        $type
    ): ?Response {
        if ('planning' === $type) {
            $pl = $edtPlanningRepository->find($event);

            return $this->render('edt/_details.html.twig', ['event' => $myEdt->transformeDetails($pl)]);
        }

        return null;
    }
}
