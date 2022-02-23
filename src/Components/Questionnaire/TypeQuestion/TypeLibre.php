<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Components/Questionnaire/TypeQuestion/TypeLibre.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 28/10/2021 19:08
 */

namespace App\Components\Questionnaire\TypeQuestion;

use App\Components\Questionnaire\Form\QuestionnaireQuestionTypeLibre;
use App\Entity\QuestionnaireQuestion;
use Symfony\Component\OptionsResolver\OptionsResolver;

class TypeLibre extends AbstractQuestion
{
    public const LABEL = 'type_libre';
    public const BADGE = 'bg-success';
    public const ICON = 'fas fa-input-text';
    public const FORM = QuestionnaireQuestionTypeLibre::class;

    public function configureOptions(OptionsResolver $resolver): void
    {
        parent::configureOptions($resolver);
        $resolver
            ->setDefault('block_name', 'type_libre')
            ->setDefault('type_question', 'text');
    }

    public function getOrGenereReponses(QuestionnaireQuestion $question): void
    {
    }
}
