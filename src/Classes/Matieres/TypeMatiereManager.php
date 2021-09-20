<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Classes/Matieres/TypeMatiereManager.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 18/09/2021 20:02
 */

namespace App\Classes\Matieres;

use App\Entity\ApcRessource;
use App\Entity\ApcSae;
use App\Entity\Departement;
use App\Entity\Diplome;
use App\Entity\Matiere;
use App\Entity\Semestre;

class TypeMatiereManager
{
    private array $managers;

    public function __construct(
        SaeManager $saeManager,
        RessourceManager $ressourceManager,
        MatiereManager $matiereManager
    ) {
        $this->managers[Matiere::SOURCE] = $matiereManager;
        $this->managers[ApcSae::SOURCE] = $saeManager;
        $this->managers[ApcRessource::SOURCE] = $ressourceManager;
    }

    public function getLibelleMatiere($value): string
    {
        $mat = $this->getMatiereFromSelect($value);

        return null !== $mat ? $mat->display : 'err';
    }

    public function getMatiereFromSelect($data): ?\App\DTO\Matiere
    {
        $d = explode('_', $data);

        if (2 === count($d) && '' !== $d[0]) {
            return $this->typeDeMatiere($d[0])->find($d[1]);
        }

        return null;
    }

    public function typeDeMatiere($type)
    {
        return $this->managers[$type];
    }

    public function getMatiere($id, $type): ?\App\DTO\Matiere
    {
        return $this->typeDeMatiere($type)->find($id);
    }

    public function findByCodeApogee(string $code): ?\App\DTO\Matiere
    {
        $matiere = null;
        foreach ($this->managers as $manager) {
            $matiere = $manager->findByCodeApogee($code);
        }

        return $matiere;
    }

    public function tableauMatieres(Departement $departement): array
    {
        $matieres = $this->findByDepartement($departement);
        $t = [];
        foreach ($matieres as $matiere) {
            $t[$matiere->codeMatiere] = $matiere;
        }

        return $t;
    }

    public function tableauMatieresCodeApogee(Departement $departement): array
    {
        $matieres = $this->findByDepartement($departement);
        $t = [];
        foreach ($matieres as $matiere) {
            $t[$matiere->codeElement] = $matiere;
        }

        return $t;
    }

    public function tableauMatieresEdt(): array
    {
        $matieres = $this->findAllArray();
        $t = [];
        foreach ($matieres as $matiere) {
            $t[$matiere->codeMatiere] = $matiere;
        }

        return $t;
    }

    public function findByDepartement(Departement $departement): array
    {
        $t = [];
        foreach ($this->managers as $manager) {
            $matieres = $manager->findByDepartement($departement);
            $t[] = $matieres->toArray();
        }

        return array_merge(...$t);
    }

    public function findBySemestreChoiceType(Semestre $semestre): array
    {
        $matieres = $this->findBySemestre($semestre);
        $t = [];
        foreach ($matieres as $matiere) {
            $t[$matiere->display] = $matiere->getTypeIdMatiere();
        }

        return $t;
    }

    public function findBySemestre(Semestre $semestre): array
    {
        $t = [];
        foreach ($this->managers as $manager) {
            $matieres = $manager->findBySemestre($semestre);
            $t[] = $matieres->toArray();
        }

        return array_merge(...$t);
    }

    public function findBySemestreArray(Semestre $semestre): array
    {
        $matieres = $this->findBySemestre($semestre);
        $t = [];
        foreach ($matieres as $matiere) {
            $t[$matiere->getTypeIdMatiere()] = $matiere;
        }

        return $t;
    }

    public function findByDepartementArray(Departement $departement): array
    {
        $matieres = $this->findByDepartement($departement);
        $t = [];
        foreach ($matieres as $matiere) {
            $t[$matiere->getTypeIdMatiere()] = $matiere;
        }

        return $t;
    }

    public function findByDiplomeArray(Diplome $diplome): array
    {
        $matieres = $this->findByDiplome($diplome);
        $t = [];
        foreach ($matieres as $matiere) {
            $t[$matiere->getTypeIdMatiere()] = $matiere;
        }

        return $t;
    }

    public function findByDiplome(mixed $diplome): array
    {
        $t = [];
        foreach ($this->managers as $manager) {
            $matieres = $manager->findByDiplome($diplome);
            $t[] = $matieres->toArray();
        }

        return array_merge(...$t);
    }

    public function tableauApogeeDiplome(mixed $diplome): array
    {
        $matieres = $this->findByDiplome($diplome);
        $t = [];
        foreach ($matieres as $matiere) {
            $t[$matiere->codeElement] = $matiere;
        }

        return $t;
    }

    public function tableauMatieresSemestreCodeApogee(Semestre $semestre)
    {
        $matieres = $this->findBySemestre($semestre);
        $t = [];
        foreach ($matieres as $matiere) {
            $t[$matiere->codeElement] = $matiere;
        }

        return $t;
    }
}
