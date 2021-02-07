<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Entity/Semestre.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 07/02/2021 11:20
 */

namespace App\Entity;

use App\Classes\Tools;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

/**
 * @ORM\Entity(repositoryClass="App\Repository\SemestreRepository")
 * @ORM\HasLifecycleCallbacks()
 */
class Semestre extends BaseEntity
{
    /**
     * @ORM\Column(type="string", length=255)
     * @Groups({"article_administration", "date_administration", "semestre",
     *                                    "etudiants_administration","document_administration"})
     */
    private $libelle;

    /**
     * @var string
     *
     * @ORM\Column(type="string", length=20, nullable=true)
     */
    private $couleur;

    /**
     * @var int
     *
     * @ORM\Column(type="integer")
     */
    private $ordreAnnee; //dans l'année

    /**
     * @var int
     *
     * @ORM\Column(type="integer")
     */
    private $ordreLmd; //dans le LMD

    /**
     * @var bool
     *
     * @ORM\Column(type="boolean")
     */
    private $actif = false;

    /**
     * @var Semestre
     *
     * @ORM\ManyToOne(targetEntity="App\Entity\Semestre")
     */
    private $precedent;

    /**
     * @var Semestre
     *
     * @ORM\ManyToOne(targetEntity="App\Entity\Semestre")
     */
    private $suivant;

    /**
     * @var Semestre
     *
     * @ORM\ManyToOne(targetEntity="App\Entity\Semestre")
     */
    private $decale; //semestre equivalent en décalé

    /**
     * @var int
     *
     * @ORM\Column(type="integer")
     */
    private $nbGroupesCm = 1;

    /**
     * @var int
     *
     * @ORM\Column(type="integer")
     */
    private $nbGroupesTd = 1;

    /**
     * @var int
     *
     * @ORM\Column(type="integer")
     */
    private $nbGroupesTP = 2;

    /**
     * @var
     * @ORM\OneToMany(targetEntity="App\Entity\Etudiant", mappedBy="semestre")
     * @ORM\OrderBy({"nom" = "ASC", "prenom" = "ASC"})
     */
    private $etudiants;

    /**
     * @var bool
     *
     * @ORM\Column(type="boolean")
     */
    private $optMailReleve = false;

    /**
     * @var bool
     *
     * @ORM\Column(type="boolean")
     */
    private $optMailModificationNote = false;

    /**
     * @var Personnel
     *
     * @ORM\ManyToOne(targetEntity="App\Entity\Personnel")
     */
    private $optDestMailReleve;

    /**
     * @var Personnel
     *
     * @ORM\ManyToOne(targetEntity="App\Entity\Personnel")
     */
    private $optDestMailModifNote;

    /**
     * @var bool
     *
     * @ORM\Column(type="boolean")
     */
    private $optEvaluationVisible = true;

    /**
     * @var bool
     *
     * @ORM\Column(type="boolean")
     */
    private $optEvaluationModifiable = true;

    /**
     * @var bool
     *
     * @ORM\Column(type="boolean")
     */
    private $optPenaliteAbsence = true;

    /**
     * @var bool
     *
     * @ORM\Column(type="boolean")
     */
    private $optMailAbsenceResp = false;

    /**
     * @var Personnel
     *
     * @ORM\ManyToOne(targetEntity="App\Entity\Personnel")
     */
    private $optDestMailAbsenceResp;

    /**
     * @var bool
     *
     * @ORM\Column(type="boolean")
     */
    private $optMailAbsenceEtudiant = false;

    /**
     * @var float
     *
     * @ORM\Column(type="float")
     */
    private $optPointPenaliteAbsence = 0.5;

    /**
     * @ORM\ManyToMany(targetEntity="App\Entity\Article", mappedBy="semestres")
     */
    private $articles;

    /**
     * @ORM\ManyToMany(targetEntity="App\Entity\Document", mappedBy="semestres")
     */
    private $documents;

    /**
     * @ORM\ManyToMany(targetEntity="App\Entity\Date", mappedBy="semestres")
     */
    private $dates;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Hrs", mappedBy="semestre")
     */
    private $hrs;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Parcour", mappedBy="semestre")
     */
    private $parcours;

    /**
     * @ORM\ManyToMany(targetEntity="App\Entity\Borne", mappedBy="semestres")
     */
    private $bornes;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\CahierTexte", mappedBy="semestre")
     */
    private $cahierTextes;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Ue", mappedBy="semestre")
     * @ORM\OrderBy({"numeroUe" = "ASC"})
     */
    private $ues;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\TypeGroupe", mappedBy="semestre")
     * @ORM\OrderBy({"libelle" = "ASC"})
     */
    private $typeGroupes;

    /**
     * @ORM\Column(type="integer")
     */
    private $moisDebut;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Annee", inversedBy="semestres")
     * @Groups({"semestre"})
     */
    private $annee;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\StagePeriode", mappedBy="semestre")
     */
    private $stagePeriodes;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\ScolaritePromo", mappedBy="semestre")
     */
    private $scolaritePromos;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Ppn", inversedBy="semestres")
     */
    private $ppn_actif;

    /**
     * @ORM\Column(type="string", length=20)
     */
    private $codeElement;

    /**
     * @ORM\Column(type="boolean")
     */
    private $optEvaluationPreInitialisee = false;

    /**
     * @ORM\OneToMany(targetEntity="QuestionnaireQualite", mappedBy="semestre")
     */
    private $qualiteQuestionnaires;

    /**
     * @ORM\Column(type="integer")
     */
    private $optNbJoursSaisieAbsence = 10;

    /**
     * @ORM\OneToMany(targetEntity=ProjetPeriode::class, mappedBy="semestre")
     */
    private $projetPeriodes;

    public function __construct()
    {
        $this->articles = new ArrayCollection();
        $this->documents = new ArrayCollection();
        $this->dates = new ArrayCollection();
        $this->hrs = new ArrayCollection();
        $this->parcours = new ArrayCollection();
        $this->bornes = new ArrayCollection();
        $this->cahierTextes = new ArrayCollection();
        $this->ues = new ArrayCollection();
        $this->typeGroupes = new ArrayCollection();
        $this->stagePeriodes = new ArrayCollection();
        $this->scolaritePromos = new ArrayCollection();
        $this->etudiants = new ArrayCollection();
        $this->qualiteQuestionnaires = new ArrayCollection();
        $this->projetPeriodes = new ArrayCollection();
    }

    public function getLibelle()
    {
        return $this->libelle;
    }

    public function setLibelle($libelle): void
    {
        $this->libelle = $libelle;
    }

    /**
     * @return string
     */
    public function getCouleur(): ?string
    {
        return $this->couleur;
    }

    public function setCouleur(string $couleur): void
    {
        $this->couleur = $couleur;
    }

    /**
     * @return int
     */
    public function getOrdreAnnee(): ?int
    {
        return $this->ordreAnnee;
    }

    public function setOrdreAnnee(int $ordreAnnee = 1): void
    {
        $this->ordreAnnee = $ordreAnnee;
    }

    /**
     * @return int
     */
    public function getOrdreLmd(): ?int
    {
        return $this->ordreLmd;
    }

    public function setOrdreLmd(int $ordreLmd): void
    {
        $this->ordreLmd = $ordreLmd;
    }

    public function isActif(): bool
    {
        return $this->actif;
    }

    public function setActif(bool $actif): void
    {
        $this->actif = $actif;
    }

    /**
     * @return Semestre
     */
    public function getPrecedent(): ?self
    {
        return $this->precedent;
    }

    public function setPrecedent(?self $precedent): void
    {
        $this->precedent = $precedent;
    }

    /**
     * @return Semestre
     */
    public function getSuivant(): ?self
    {
        return $this->suivant;
    }

    public function setSuivant(?self $suivant): void
    {
        $this->suivant = $suivant;
    }

    /**
     * @return Semestre
     */
    public function getDecale(): ?self
    {
        return $this->decale;
    }

    public function setDecale(?self $decale): void
    {
        $this->decale = $decale;
    }

    public function getNbGroupesTd(): int
    {
        return $this->nbGroupesTd;
    }

    public function setNbGroupesTd(int $nbGroupesTd): void
    {
        $this->nbGroupesTd = $nbGroupesTd;
    }

    public function getNbGroupesTP(): int
    {
        return $this->nbGroupesTP;
    }

    public function setNbGroupesTP(int $nbGroupesTP): void
    {
        $this->nbGroupesTP = $nbGroupesTP;
    }

    public function isOptMailReleve(): bool
    {
        return $this->optMailReleve;
    }

    public function setOptMailReleve(bool $optMailReleve): void
    {
        $this->optMailReleve = $optMailReleve;
    }

    public function isOptMailModificationNote(): bool
    {
        return $this->optMailModificationNote;
    }

    public function setOptMailModificationNote(bool $optMailModificationNote): void
    {
        $this->optMailModificationNote = $optMailModificationNote;
    }

    /**
     * @return Personnel
     */
    public function getOptDestMailReleve(): ?Personnel
    {
        return $this->optDestMailReleve;
    }

    /**
     * @param Personnel|null $optDestMailReleve
     */
    public function setOptDestMailReleve($optDestMailReleve): void
    {
        $this->optDestMailReleve = $optDestMailReleve;
    }

    /**
     * @return Personnel
     */
    public function getOptDestMailModifNote(): ?Personnel
    {
        return $this->optDestMailModifNote;
    }

    /**
     * @param Personnel|null $optDestMailModifNote
     */
    public function setOptDestMailModifNote($optDestMailModifNote): void
    {
        $this->optDestMailModifNote = $optDestMailModifNote;
    }

    public function isOptEvaluationVisible(): bool
    {
        return $this->optEvaluationVisible;
    }

    public function setOptEvaluationVisible(bool $optEvaluationVisible): void
    {
        $this->optEvaluationVisible = $optEvaluationVisible;
    }

    public function isOptEvaluationModifiable(): bool
    {
        return $this->optEvaluationModifiable;
    }

    public function setOptEvaluationModifiable(bool $optEvaluationModifiable): void
    {
        $this->optEvaluationModifiable = $optEvaluationModifiable;
    }

    public function isOptPenaliteAbsence(): bool
    {
        return $this->optPenaliteAbsence;
    }

    public function setOptPenaliteAbsence(bool $optPenaliteAbsence): void
    {
        $this->optPenaliteAbsence = $optPenaliteAbsence;
    }

    public function isOptMailAbsenceResp(): bool
    {
        return $this->optMailAbsenceResp;
    }

    public function setOptMailAbsenceResp(bool $optMailAbsenceResp): void
    {
        $this->optMailAbsenceResp = $optMailAbsenceResp;
    }

    /**
     * @return Personnel
     */
    public function getOptDestMailAbsenceResp(): ?Personnel
    {
        return $this->optDestMailAbsenceResp;
    }

    /**
     * @param Personnel|null $optDestMailAbsenceResp
     */
    public function setOptDestMailAbsenceResp($optDestMailAbsenceResp): void
    {
        $this->optDestMailAbsenceResp = $optDestMailAbsenceResp;
    }

    public function isOptMailAbsenceEtudiant(): bool
    {
        return $this->optMailAbsenceEtudiant;
    }

    public function setOptMailAbsenceEtudiant(bool $optMailAbsenceEtudiant): void
    {
        $this->optMailAbsenceEtudiant = $optMailAbsenceEtudiant;
    }

    public function getOptPointPenaliteAbsence(): float
    {
        return $this->optPointPenaliteAbsence;
    }

    public function setOptPointPenaliteAbsence(float $optPointPenaliteAbsence): void
    {
        $this->optPointPenaliteAbsence = $optPointPenaliteAbsence;
    }

    public function getEtudiants()
    {
        return $this->etudiants;
    }

    public function setEtudiants($etudiants): void
    {
        $this->etudiants = $etudiants;
    }

    public function display(): string
    {
        if (null !== $this->getAnnee()) {
            return $this->libelle . ' | ' . $this->getAnnee()->getLibelle();
        }

        return $this->libelle;
    }

    /**
     * @return Annee
     */
    public function getAnnee(): ?Annee
    {
        return $this->annee;
    }

    public function setAnnee(Annee $annee): void
    {
        $this->annee = $annee;
    }

    /**
     * @return Collection|Article[]
     */
    public function getArticles(): Collection
    {
        return $this->articles;
    }

    /**
     * @return Semestre
     */
    public function addArticle(Article $article): self
    {
        if (!$this->articles->contains($article)) {
            $this->articles[] = $article;
            $article->addSemestre($this);
        }

        return $this;
    }

    /**
     * @return Semestre
     */
    public function removeArticle(Article $article): self
    {
        if ($this->articles->contains($article)) {
            $this->articles->removeElement($article);
            $article->removeSemestre($this);
        }

        return $this;
    }

    /**
     * @return Collection|Document[]
     */
    public function getDocuments(): Collection
    {
        return $this->documents;
    }

    /**
     * @return Semestre
     */
    public function addDocument(Document $document): self
    {
        if (!$this->documents->contains($document)) {
            $this->documents[] = $document;
            $document->addSemestre($this);
        }

        return $this;
    }

    /**
     * @return Semestre
     */
    public function removeDocument(Document $document): self
    {
        if ($this->documents->contains($document)) {
            $this->documents->removeElement($document);
            $document->removeSemestre($this);
        }

        return $this;
    }

    /**
     * @return Collection|Date[]
     */
    public function getDates(): Collection
    {
        return $this->dates;
    }

    /**
     * @return Semestre
     */
    public function addDate(Date $date): self
    {
        if (!$this->dates->contains($date)) {
            $this->dates[] = $date;
            $date->addSemestre($this);
        }

        return $this;
    }

    /**
     * @return Semestre
     */
    public function removeDate(Date $date): self
    {
        if ($this->dates->contains($date)) {
            $this->dates->removeElement($date);
            $date->removeSemestre($this);
        }

        return $this;
    }

    /**
     * @return Collection|Hrs[]
     */
    public function getHrs(): Collection
    {
        return $this->hrs;
    }

    /**
     * @return Semestre
     */
    public function addHrs(Hrs $hrs): self
    {
        if (!$this->hrs->contains($hrs)) {
            $this->hrs[] = $hrs;
            $hrs->setSemestre($this);
        }

        return $this;
    }

    /**
     * @return Semestre
     */
    public function removeHrs(Hrs $hrs): self
    {
        if ($this->hrs->contains($hrs)) {
            $this->hrs->removeElement($hrs);
            // set the owning side to null (unless already changed)
            if ($hrs->getSemestre() === $this) {
                $hrs->setSemestre(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|Parcour[]
     */
    public function getParcours(): Collection
    {
        return $this->parcours;
    }

    /**
     * @return Semestre
     */
    public function addParcour(Parcour $option): self
    {
        if (!$this->parcours->contains($option)) {
            $this->parcours[] = $option;
            $option->setSemestre($this);
        }

        return $this;
    }

    /**
     * @return Semestre
     */
    public function removeParcour(Parcour $option): self
    {
        if ($this->parcours->contains($option)) {
            $this->parcours->removeElement($option);
            // set the owning side to null (unless already changed)
            if ($option->getSemestre() === $this) {
                $option->setSemestre(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|Borne[]
     */
    public function getBornes(): Collection
    {
        return $this->bornes;
    }

    /**
     * @return Semestre
     */
    public function addBorne(Borne $borne): self
    {
        if (!$this->bornes->contains($borne)) {
            $this->bornes[] = $borne;
            $borne->addSemestre($this);
        }

        return $this;
    }

    /**
     * @return Semestre
     */
    public function removeBorne(Borne $borne): self
    {
        if ($this->bornes->contains($borne)) {
            $this->bornes->removeElement($borne);
            $borne->removeSemestre($this);
        }

        return $this;
    }

    /**
     * @param $name
     * @param $value
     */
    public function update($name, $value): void
    {
        Tools::updateFields($name, $value, $this);
    }

    /**
     * @return Collection|CahierTexte[]
     */
    public function getCahierTextes(): Collection
    {
        return $this->cahierTextes;
    }

    /**
     * @return Semestre
     */
    public function addCahierTexte(CahierTexte $cahierTexte): self
    {
        if (!$this->cahierTextes->contains($cahierTexte)) {
            $this->cahierTextes[] = $cahierTexte;
            $cahierTexte->setSemestre($this);
        }

        return $this;
    }

    /**
     * @return Semestre
     */
    public function removeCahierTexte(CahierTexte $cahierTexte): self
    {
        if ($this->cahierTextes->contains($cahierTexte)) {
            $this->cahierTextes->removeElement($cahierTexte);
            // set the owning side to null (unless already changed)
            if ($cahierTexte->getSemestre() === $this) {
                $cahierTexte->setSemestre(null);
            }
        }

        return $this;
    }

    public function getUes()
    {
        return $this->ues;
    }

    /**
     * @return Semestre
     */
    public function addUe(Ue $ue): self
    {
        if (!$this->ues->contains($ue)) {
            $this->ues[] = $ue;
            $ue->setSemestre($this);
        }

        return $this;
    }

    /**
     * @return Semestre
     */
    public function removeUe(Ue $ue): self
    {
        if ($this->ues->contains($ue)) {
            $this->ues->removeElement($ue);
            // set the owning side to null (unless already changed)
            if ($ue->getSemestre() === $this) {
                $ue->setSemestre(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|TypeGroupe[]
     */
    public function getTypeGroupes(): Collection
    {
        return $this->typeGroupes;
    }

    /**
     * @return Semestre
     */
    public function addTypeGroupe(TypeGroupe $typeGroupe): self
    {
        if (!$this->typeGroupes->contains($typeGroupe)) {
            $this->typeGroupes[] = $typeGroupe;
            $typeGroupe->setSemestre($this);
        }

        return $this;
    }

    /**
     * @return Semestre
     */
    public function removeTypeGroupe(TypeGroupe $typeGroupe): self
    {
        if ($this->typeGroupes->contains($typeGroupe)) {
            $this->typeGroupes->removeElement($typeGroupe);
            // set the owning side to null (unless already changed)
            if ($typeGroupe->getSemestre() === $this) {
                $typeGroupe->setSemestre(null);
            }
        }

        return $this;
    }

    public function getMoisDebut(): ?int
    {
        return $this->moisDebut;
    }

    /**
     * @return Semestre
     */
    public function setMoisDebut(int $moisDebut): self
    {
        $this->moisDebut = $moisDebut;

        return $this;
    }

    /**
     * @return Collection|StagePeriode[]
     */
    public function getStagePeriodes(): Collection
    {
        return $this->stagePeriodes;
    }

    public function addStagePeriode(StagePeriode $stagePeriode): self
    {
        if (!$this->stagePeriodes->contains($stagePeriode)) {
            $this->stagePeriodes[] = $stagePeriode;
            $stagePeriode->setSemestre($this);
        }

        return $this;
    }

    public function removeStagePeriode(StagePeriode $stagePeriode): self
    {
        if ($this->stagePeriodes->contains($stagePeriode)) {
            $this->stagePeriodes->removeElement($stagePeriode);
            // set the owning side to null (unless already changed)
            if ($stagePeriode->getSemestre() === $this) {
                $stagePeriode->setSemestre(null);
            }
        }

        return $this;
    }

    public function getDiplome()
    {
        if (null !== $this->getAnnee() && null !== $this->getAnnee()->getDiplome()) {
            return $this->getAnnee()->getDiplome();
        }

        return null;
    }

    /**
     * @return AnneeUniversitaire
     */
    public function getAnneeUniversitaire(): ?AnneeUniversitaire
    {
        if (null !== $this->getDiplome() && null !== $this->getDiplome()->getAnneeUniversitaire()) {
            return $this->getDiplome()->getAnneeUniversitaire();
        }

        return null;
    }

    /**
     * @return Collection|ScolaritePromo[]
     */
    public function getScolaritePromos(): Collection
    {
        return $this->scolaritePromos;
    }

    public function addScolaritePromo(ScolaritePromo $scolaritePromo): self
    {
        if (!$this->scolaritePromos->contains($scolaritePromo)) {
            $this->scolaritePromos[] = $scolaritePromo;
            $scolaritePromo->setSemestre($this);
        }

        return $this;
    }

    public function removeScolaritePromo(ScolaritePromo $scolaritePromo): self
    {
        if ($this->scolaritePromos->contains($scolaritePromo)) {
            $this->scolaritePromos->removeElement($scolaritePromo);
            // set the owning side to null (unless already changed)
            if ($scolaritePromo->getSemestre() === $this) {
                $scolaritePromo->setSemestre(null);
            }
        }

        return $this;
    }

    public function getPpnActif(): ?Ppn
    {
        return $this->ppn_actif;
    }

    public function setPpnActif(?Ppn $ppn_actif): self
    {
        $this->ppn_actif = $ppn_actif;

        return $this;
    }

    /**
     * Get nbgroupeTP.
     */
    public function getNbgroupeTpEdt(): int
    {
        if (0 === $this->nbGroupesTP % 2) {
            return $this->nbGroupesTP;
        }

        return $this->nbGroupesTP + 1;
    }

    public function getActif(): ?bool
    {
        return $this->actif;
    }

    public function getNbGroupesCm(): ?int
    {
        return $this->nbGroupesCm;
    }

    public function setNbGroupesCm(int $nbGroupesCm): self
    {
        $this->nbGroupesCm = $nbGroupesCm;

        return $this;
    }

    public function getOptMailReleve(): ?bool
    {
        return $this->optMailReleve;
    }

    public function getOptMailModificationNote(): ?bool
    {
        return $this->optMailModificationNote;
    }

    public function getOptEvaluationVisible(): ?bool
    {
        return $this->optEvaluationVisible;
    }

    public function getOptEvaluationModifiable(): ?bool
    {
        return $this->optEvaluationModifiable;
    }

    public function getOptPenaliteAbsence(): ?bool
    {
        return $this->optPenaliteAbsence;
    }

    public function getOptMailAbsenceResp(): ?bool
    {
        return $this->optMailAbsenceResp;
    }

    public function getOptMailAbsenceEtudiant(): ?bool
    {
        return $this->optMailAbsenceEtudiant;
    }

    public function addEtudiant(Etudiant $etudiant): self
    {
        if (!$this->etudiants->contains($etudiant)) {
            $this->etudiants[] = $etudiant;
            $etudiant->setSemestre($this);
        }

        return $this;
    }

    public function removeEtudiant(Etudiant $etudiant): self
    {
        if ($this->etudiants->contains($etudiant)) {
            $this->etudiants->removeElement($etudiant);
            // set the owning side to null (unless already changed)
            if ($etudiant->getSemestre() === $this) {
                $etudiant->setSemestre(null);
            }
        }

        return $this;
    }

    public function addHr(Hrs $hr): self
    {
        if (!$this->hrs->contains($hr)) {
            $this->hrs[] = $hr;
            $hr->setSemestre($this);
        }

        return $this;
    }

    public function removeHr(Hrs $hr): self
    {
        if ($this->hrs->contains($hr)) {
            $this->hrs->removeElement($hr);
            // set the owning side to null (unless already changed)
            if ($hr->getSemestre() === $this) {
                $hr->setSemestre(null);
            }
        }

        return $this;
    }

    public function getCodeElement(): ?string
    {
        return $this->codeElement;
    }

    public function setCodeElement(string $codeElement): self
    {
        $this->codeElement = $codeElement;

        return $this;
    }

    public function getOptEvaluationPreInitialisee(): ?bool
    {
        return $this->optEvaluationPreInitialisee;
    }

    public function setOptEvaluationPreInitialisee(bool $optEvaluationPreInitialisee): self
    {
        $this->optEvaluationPreInitialisee = $optEvaluationPreInitialisee;

        return $this;
    }

    /**
     * @return Collection|QuestionnaireQualite[]
     */
    public function getQualiteQuestionnaires(): ?Collection
    {
        return $this->qualiteQuestionnaires;
    }

    public function addQualiteQuestionnaire(QuestionnaireQualite $qualiteQuestionnaire): self
    {
        if (!$this->qualiteQuestionnaires->contains($qualiteQuestionnaire)) {
            $this->qualiteQuestionnaires[] = $qualiteQuestionnaire;
            $qualiteQuestionnaire->setSemestre($this);
        }

        return $this;
    }

    public function removeQualiteQuestionnaire(QuestionnaireQualite $qualiteQuestionnaire): self
    {
        if ($this->qualiteQuestionnaires->contains($qualiteQuestionnaire)) {
            $this->qualiteQuestionnaires->removeElement($qualiteQuestionnaire);
            // set the owning side to null (unless already changed)
            if ($qualiteQuestionnaire->getSemestre() === $this) {
                $qualiteQuestionnaire->setSemestre(null);
            }
        }

        return $this;
    }

    public function getOptNbJoursSaisieAbsence(): ?int
    {
        return $this->optNbJoursSaisieAbsence;
    }

    public function setOptNbJoursSaisieAbsence(int $optNbJoursSaisieAbsence): self
    {
        $this->optNbJoursSaisieAbsence = $optNbJoursSaisieAbsence;

        return $this;
    }

    /**
     * @return Collection|ProjetPeriode[]
     */
    public function getProjetPeriodes(): Collection
    {
        return $this->projetPeriodes;
    }

    public function addProjetPeriode(ProjetPeriode $projetPeriode): self
    {
        if (!$this->projetPeriodes->contains($projetPeriode)) {
            $this->projetPeriodes[] = $projetPeriode;
            $projetPeriode->setSemestre($this);
        }

        return $this;
    }

    public function removeProjetPeriode(ProjetPeriode $projetPeriode): self
    {
        if ($this->projetPeriodes->contains($projetPeriode)) {
            $this->projetPeriodes->removeElement($projetPeriode);
            // set the owning side to null (unless already changed)
            if ($projetPeriode->getSemestre() === $this) {
                $projetPeriode->setSemestre(null);
            }
        }

        return $this;
    }
}
