<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Form/ApcSaeType.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 19/05/2021 15:29
 */

namespace App\Form;

use App\Entity\ApcCompetence;
use App\Entity\ApcSae;
use App\Entity\Semestre;
use App\Repository\ApcComptenceRepository;
use App\Repository\SemestreRepository;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class ApcSaeType extends AbstractType
{
    protected $diplome;

    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $this->diplome = $options['diplome'];

        $builder
            ->add('codeElement', TextType::class, ['label' => 'label.code_element'])
            ->add('codeMatiere', TextType::class, ['label' => 'label.codeSae'])
            ->add('libelle', TextType::class, ['label' => 'label.libelle'])
            ->add('description', TextareaType::class,
                ['attr' => ['rows' => 20], 'label' => 'label.description', 'required' => false])
            ->add('tdPpn', TextType::class, ['label' => 'label.cmtd_ppn'])
            ->add('tpPpn', TextType::class, ['label' => 'label.tp_ppn'])
            ->add('projetPpn', TextType::class, ['label' => 'label.projet_ppn'])
            ->add('cmFormation', TextType::class, ['label' => 'label.cm_formation'])
            ->add('tdFormation', TextType::class, ['label' => 'label.td_formation'])
            ->add('tpFormation', TextType::class, ['label' => 'label.tp_formation'])
            ->add('projetFormation', TextType::class, ['label' => 'label.projet_formation'])
            ->add('livrables', TextareaType::class,
                ['label' => 'label.livrables', 'attr' => ['rows' => 20], 'required' => false])
            ->add('semestre', EntityType::class, [
                'class' => Semestre::class,
                'attr' => ['class' => 'semestreSae'],
                'required' => true,
                'choice_label' => 'display',
                'query_builder' => function(SemestreRepository $semestreRepository) {
                    return $semestreRepository->findByDiplomeBuilder($this->diplome);
                },
                'label' => 'label.semestre',
                'expanded' => true,
            ])
            ->add('competences', EntityType::class, [
                'class' => ApcCompetence::class,
                'choice_label' => 'nomCourt',
                'label' => 'label.nomCourt.competence',
                'attr' => ['class' => 'competencesSae'],
                'expanded' => true,
                'multiple' => true,
                'query_builder' => function(ApcComptenceRepository $apcComptenceRepository) {
                    return $apcComptenceRepository->findByDiplomeBuilder($this->diplome);
                },
                'help' => 'Ajoutez les compétences couvertes par la SAÉ.',
            ])
            ->add('exemples', TextareaType::class,
                ['label' => 'label.exemples', 'required' => false])
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => ApcSae::class,
            'diplome' => null,
            'translation_domain' => 'form',
        ]);
    }
}
