<?php

namespace App\Controller;

use App\Entity\Etudiant;
use App\Repository\ScolariteRepository;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\ParamConverter;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;

/**
 * Class UserController
 * @package App\Controller
 * @Route({"fr":"etudiant",
 *         "en":"student"})
 */
class ProfilEtudiantController extends Controller
{
    /**
     * @Route("/profil/{slug}/timeline", name="profil_etudiant_timeline")
     * @ParamConverter("etudiant", options={"mapping": {"slug": "slug"}})
     * @param Etudiant $etudiant
     *
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function timeline(Etudiant $etudiant): Response
    {
        return $this->render('user/composants/timeline.html.twig', [

        ]);
    }

    /**
     * @Route("/profil/{slug}/actions", name="profil_etudiant_action")
     * @param Etudiant $etudiant
     * @ParamConverter("etudiant", options={"mapping": {"slug": "slug"}})
     *
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function actions(Etudiant $etudiant): Response
    {
        return $this->render('user/composants/actions.html.twig', [

        ]);
    }

    /**
     * @Route("/profil/{slug}/scolarite", name="profil_etudiant_scolarite")
     * @param ScolariteRepository $scolariteRepository
     * @ParamConverter("etudiant", options={"mapping": {"slug": "slug"}})
     * @param Etudiant            $etudiant
     *
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function scolarite(ScolariteRepository $scolariteRepository, Etudiant $etudiant): Response
    {
        $scolarite = $scolariteRepository->findBy(array('etudiant' => $etudiant));

        return $this->render('user/composants/scolarite.html.twig', [
            'scolarite' => $scolarite
        ]);
    }

    /**
     * @Route("/profil/{slug}/notes", name="profil_etudiant_notes")
     * @param Etudiant $etudiant
     * @ParamConverter("etudiant", options={"mapping": {"slug": "slug"}})
     *
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function notes(Etudiant $etudiant): Response
    {
        return $this->render('user/composants/notes.html.twig', [
            'notes' => $etudiant->getNotes()
        ]);
    }

    /**
     * @Route("/profil/{slug}/absences", name="profil_etudiant_absences")
     * @ParamConverter("etudiant", options={"mapping": {"slug": "slug"}})
     * @param Etudiant $etudiant
     *
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function absences(Etudiant $etudiant): Response
    {
        return $this->render('user/composants/absences.html.twig', [
            'absences' => $etudiant->getAbsences()
        ]);
    }

    /**
     * @Route("/profil/{slug}/stages", name="profil_etudiant_stages")
     * @ParamConverter("etudiant", options={"mapping": {"slug": "slug"}})
     * @param Etudiant $etudiant
     *
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function stages(Etudiant $etudiant): Response
    {
        return $this->render('user/composants/stages.html.twig', [
            'stages' => $etudiant->getAbsences()
        ]);
    }

    /**
     * @Route("/profil/{slug}/about", name="profil_etudiant_about")
     * @param Etudiant $etudiant
     *
     * @ParamConverter("etudiant", options={"mapping": {"slug": "slug"}})
     *
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function about(Etudiant $etudiant): Response
    {
        return $this->render('user/composants/about.html.twig', [
            'user' => $etudiant,
        ]);
    }
}
