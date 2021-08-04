<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Components/Questionnaire/TypeQuestion/TypeLibre.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 03/08/2021 15:32
 */

namespace App\Components\Questionnaire\TypeQuestion;


use Symfony\Component\OptionsResolver\OptionsResolver;

class TypeLibre extends AbstractQuestion
{
    public function configureOptions(OptionsResolver $resolver)
    {
        parent::configureOptions($resolver);
        $resolver
            ->setDefault('block_name', 'type_libre');
    }

    public function getOrGenereReponses()
    {

    }
}
