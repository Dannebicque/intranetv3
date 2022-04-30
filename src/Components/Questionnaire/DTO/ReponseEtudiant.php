<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Components/Questionnaire/DTO/ReponseEtudiant.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 02/12/2021 12:09
 */

namespace App\Components\Questionnaire\DTO;

class ReponseEtudiant
{
    public ?int $questionnaire_etudiant_id = null;
    public mixed $valeur;
    public ?int $question_id = null;
    public ?int $etudiant_id = null;
    public ?string $cle_question = null;
    public ?string $complementValeur = null;
    public ?string $cle_reponse = null; // todo: est-ce que c'est utile ?
}
