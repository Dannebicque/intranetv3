<?php
/**
 * Copyright (C) 8 / 2019 | David annebicque | IUT de Troyes - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetv3/src/Controller/RgpdController.php
 * @author     David Annebicque
 * @project intranetv3
 * @date 21/08/2019 12:32
 * @lastUpdate 20/08/2019 10:08
 */

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class RgpdController
 * @package App\Controller
 * @Route("/mentions-legales/rgpd")
 */
class RgpdController extends AbstractController
{
    /**
     * @Route("/", name="rgpd_index")
     */
    public function index(): Response
    {
        return $this->render('rgpd/index.html.twig', [
        ]);
    }
}
