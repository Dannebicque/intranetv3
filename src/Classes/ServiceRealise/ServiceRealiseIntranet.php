<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Classes/ServiceRealise/ServiceRealiseIntranet.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 07/02/2021 11:11
 */

/*
 * Pull your hearder here, for exemple, Licence header.
 */

namespace App\Classes\ServiceRealise;

use App\DTO\EvenementEdt;
use App\Entity\Constantes;
use App\Entity\EdtPlanning;
use App\Entity\Matiere;
use App\Entity\Personnel;
use App\Repository\EdtPlanningRepository;

class ServiceRealiseIntranet implements ServiceRealiseInterface
{
    private EdtPlanningRepository $edtPlanningRepository;

    public function __construct(EdtPlanningRepository $edtPlanningRepository)
    {
        $this->edtPlanningRepository = $edtPlanningRepository;
    }

    public function getServiceRealiseParMatiere(Matiere $matiere): array
    {
        $events = $this->edtPlanningRepository->findBy(['matiere' => $matiere->getId()],
            ['semaine' => 'ASC', 'jour' => 'ASC', 'debut' => 'ASC']);
        $tabEvent = [];
        foreach ($events as $event) {
            $tabEvent[] = $this->convertToEvenementEdt($event);
        }

        return $tabEvent;
    }

    public function getServiceRealiseParPersonnelMatiere(Personnel $personnel, Matiere $matiere): array
    {
        $events = $this->edtPlanningRepository->findBy([
            'intervenant' => $personnel->getId(),
            'matiere'     => $matiere->getId(),
        ],
            ['semaine' => 'ASC', 'jour' => 'ASC', 'debut' => 'ASC']);
        $tabEvent = [];
        foreach ($events as $event) {
            $tabEvent[] = $this->convertToEvenementEdt($event);
        }

        return $tabEvent;
    }

    public function getServiceRealiserParEnseignant(Personnel $personnel): array
    {
        $events = $this->edtPlanningRepository->findBy(['intervenant' => $personnel->getId()],
            ['matiere' => 'ASC', 'semaine' => 'ASC', 'jour' => 'ASC', 'debut' => 'ASC']);
        $tabEvent = [];
        foreach ($events as $event) {
            $tabEvent[] = $this->convertToEvenementEdt($event);
        }

        return $tabEvent;
    }

    /**
     * @param EdtPlanning $event
     */
    public function convertToEvenementEdt($event): EvenementEdt
    {
        $date = $event->getDate();
        $date->locale('fr');

        $ev = new EvenementEdt();
        $ev->groupe = $event->getDisplayGroupe();
        $ev->jour = $date->dayName;
        $ev->duree = $event->getDureeInt();
        $ev->date = $date->isoFormat('L');
        $ev->heure = Constantes::TAB_HEURES[$event->getDebut()] . ' à ' . Constantes::TAB_HEURES[$event->getFin()];
        $ev->matiere = null !== $event->getMatiere() ? $event->getMatiere()->getDisplay() : $event->getTexte();
        $ev->type_cours = $event->getType();
        $ev->personnel = null !== $event->getIntervenant() ? $event->getIntervenantEdt() : '';

        return $ev;
    }

    public function statistiques(array $chronologique)
    {
        $tab['nbCM'] = 0;
        $tab['nbTD'] = 0;
        $tab['nbTP'] = 0;
        $tab['nbHCM'] = 0;
        $tab['nbHTD'] = 0;
        $tab['nbHTP'] = 0;
        $tab['total'] = 0;
        $tab['totalH'] = 0;

        /** @var EvenementEdt $event */
        foreach ($chronologique as $event) {
            ++$tab['nb' . $event->type_cours];
            $tab['nbH' . $event->type_cours] += $event->duree;
            ++$tab['total'];
            $tab['totalH'] += $event->duree;
        }

        return $tab;
    }
}
