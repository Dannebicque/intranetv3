<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Repository/ApcRessourceCompetenceRepository.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 01/03/2021 18:49
 */

namespace App\Repository;

use App\Entity\ApcRessourceCompetence;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method ApcRessourceCompetence|null find($id, $lockMode = null, $lockVersion = null)
 * @method ApcRessourceCompetence|null findOneBy(array $criteria, array $orderBy = null)
 * @method ApcRessourceCompetence[]    findAll()
 * @method ApcRessourceCompetence[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 * @extends ServiceEntityRepository<ApcRessourceCompetence>
 */
class ApcRessourceCompetenceRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, ApcRessourceCompetence::class);
    }
}
