<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Table/ColumnType/MatiereColumnType.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 10/09/2021 20:28
 */

namespace App\Table\ColumnType;

use App\Components\Table\Column\PropertyColumnType;
use Symfony\Component\OptionsResolver\OptionsResolver;

class MatiereColumnType extends PropertyColumnType
{
    public function renderProperty(mixed $value, array $options): string
    {
        $matieres = $options['matieres'];

        if (array_key_exists($value, $matieres)) {
            return $matieres[$value]->display;
        }

        return '-err matière-';
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        parent::configureOptions($resolver);
        $resolver->setDefault('is_safe_html', true);
        $resolver->setRequired('matieres');
        $resolver->setAllowedTypes('matieres', ['array']);
    }
}
