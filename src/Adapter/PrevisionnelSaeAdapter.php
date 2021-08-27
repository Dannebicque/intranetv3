<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Adapter/PrevisionnelSaeAdapter.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 27/08/2021 11:53
 */

namespace App\Adapter;

use App\Classes\Previsionnel\PrevisionnelSaeManager;
use App\DTO\Previsionnel;
use App\DTO\PrevisionnelCollection;

class PrevisionnelSaeAdapter implements PrevisionnelAdapterInterface
{
    public function collection(array $previsionnels): PrevisionnelCollection
    {
        $collection = new PrevisionnelCollection();
        /** @var \App\Entity\Previsionnel $previ */
        foreach ($previsionnels as $previ) {
            $collection->add($this->single($previ));
        }

        return $collection;
    }

    public function single($previ): Previsionnel
    {
        //utiliser optionresolver????
        $p = new Previsionnel();
        $p->id = $previ['id_previsionnel'];
        $p->annee = $previ['annee'];
        $p->referent = $previ['referent'];
        $p->type_matiere = PrevisionnelSaeManager::TYPE;
        $p->nbHCm = $previ['nbHCm'];
        $p->nbHTd = $previ['nbHTd'];
        $p->nbHTp = $previ['nbHTp'];
        $p->nbGrCm = $previ['nbGrCm'];
        $p->nbGrTd = $previ['nbGrTd'];
        $p->nbGrTp = $previ['nbGrTp'];
        $p->matiere_id = $previ['id_sae'];
        $p->matiere_libelle = $previ['libelle'];
        $p->matiere_code = $previ['codeMatiere'];
        $p->matiere_code_element = $previ['matiere_code_element'];
        $p->personnel_id = $previ['id_personnel'] ?? 0;
        $p->personnel_nom = $previ['nom'] ?? '-';
        $p->personnel_prenom = $previ['prenom'] ?? '-';
        $p->personnel_numeroHarpege = $previ['numeroHarpege'] ?? 0;
        $p->personnel_mail = $previ['mailUniv'] ?? '-';
        $p->nbHeuresService = $previ['nbHeuresService'] ?? 0;
        $p->semestre_id = $previ['id_semestre'] ?? 0;
        $p->semestre_libelle = $previ['libelle_semestre'] ?? '-';
        $p->annee_id = $previ['id_annee'] ?? 0;
        $p->annee_libelle = $previ['libelle_annee'] ?? '-';
        $p->annee_code_etape = $previ['annee_code_etape'] ?? '-';
        $p->annee_libelle_long = $previ['annee_libelle_long'] ?? '-';
        $p->diplome_id = $previ['id_diplome'] ?? 0;
        $p->diplome_libelle = $previ['libelle_diplome'] ?? '-';

        return $p;
    }
}
