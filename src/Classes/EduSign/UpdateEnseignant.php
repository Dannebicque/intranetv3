<?php
/*
 * Copyright (c) 2023. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Classes/EduSign/UpdateEnseignant.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 01/08/2023 15:09
 */

namespace App\Classes\EduSign;

use App\Classes\EduSign\Adapter\IntranetEnseignantEduSignAdapter;

class UpdateEnseignant
{
    public function __construct(private readonly ApiEduSign $apiEduSign)
    {
    }

    public function update()
    {
        //récupére les éléments du diplôme
        //construit les objets associés selon le modèle EduSign
        $enseignant = null;
        $enseignant = (new IntranetEnseignantEduSignAdapter($enseignant))->getEnseignant();

        //envoi une requete pour ajouter les éléments
        $this->apiEduSign->addEnseignant($enseignant);
    }
}
