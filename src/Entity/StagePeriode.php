<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Entity/StagePeriode.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 21/08/2021 12:37
 */

namespace App\Entity;

use App\Entity\Traits\LifeCycleTrait;
use App\Entity\Traits\UuidTrait;
use Carbon\CarbonInterface;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Exception;
use Ramsey\Uuid\Uuid;
use Serializable;
use Symfony\Component\HttpFoundation\File\File;
use Symfony\Component\Serializer\Annotation\Groups;
use Vich\UploaderBundle\Mapping\Annotation as Vich;

/**
 * @ORM\Entity(repositoryClass="App\Repository\StagePeriodeRepository")
 * @Vich\Uploadable
 * @ORM\HasLifecycleCallbacks()
 */
class StagePeriode extends BaseEntity implements Serializable
{
    use UuidTrait;
    use LifeCycleTrait;

    /**
     * @ORM\Column(type="string", length=50)
     */
    private ?string $documentName = '';

    /**
     * @Vich\UploadableField(mapping="ficheRenseignement", fileNameProperty="documentName")
     */
    private $documentFile;

    /**
     * @ORM\Column(type="integer")
     * @Groups({"stage_periode_administration"})
     */
    private int $numeroPeriode = 1;

    /**
     * @ORM\Column(type="string", length=100)
     * @Groups({"stage_periode_administration"})
     */
    private string $libelle = 'stage';

    /**
     * @ORM\Column(type="integer")
     * @Groups({"stage_periode_administration"})
     */
    private int $nbSemaines = 10;

    /**
     * @ORM\Column(type="integer")
     * @Groups({"stage_periode_administration"})
     */
    private int $nbJours = 40;

    /**
     * @ORM\Column(type="date")
     * @Groups({"stage_periode_administration"})
     */
    private ?CarbonInterface $dateDebut = null;

    /**
     * @ORM\Column(type="date")
     * @Groups({"stage_periode_administration"})
     */
    private ?CarbonInterface $dateFin = null;

    /**
     * @ORM\Column(type="text", nullable=true)
     */
    private ?string $competencesVisees;

    /**
     * @ORM\Column(type="text", nullable=true)
     */
    private ?string $modaliteEvaluation;

    /**
     * @ORM\Column(type="text", nullable=true)
     */
    private ?string $modaliteEvaluationPedagogique;

    /**
     * @ORM\Column(type="text", nullable=true)
     */
    private ?string $modaliteEncadrement;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private ?string $documentRendre;
    /**
     * @ORM\Column(type="float")
     * @Groups({"stage_periode_administration"})
     */
    private float $nbEcts = 12;
    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Semestre", inversedBy="stagePeriodes")
     */
    private ?Semestre $semestre;
    /**
     * @ORM\Column(type="boolean")
     */
    private bool $datesFlexibles = false;
    /**
     * @ORM\Column(type="boolean")
     */
    private bool $copieAssistant = true;

    /**
     * @ORM\OneToMany(targetEntity="StagePeriodeInterruption", mappedBy="stagePeriode", cascade={"persist", "remove"})
     */
    private Collection $stagePeriodeInterruptions;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\StagePeriodeSoutenance", mappedBy="stagePeriode", cascade={"persist",
     *                                                                  "remove"})
     */
    private Collection $stagePeriodeSoutenances;

    /**
     * @ORM\ManyToMany(targetEntity="App\Entity\Personnel", inversedBy="stagePeriodes")
     * @Groups({"stage_periode_administration"})
     */
    private Collection $responsables;

    /**
     * @ORM\Column(type="text", nullable=true)
     */
    private ?string $texteLibre;

    /**
     * @ORM\ManyToMany(targetEntity="App\Entity\StagePeriodeOffre", mappedBy="stagePeriodes")
     */
    private Collection $stagePeriodeOffres;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\StageEtudiant", mappedBy="stagePeriode", cascade={"persist", "remove"})
     */
    private Collection $stageEtudiants;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\StageMailTemplate", mappedBy="stagePeriode", cascade={"persist",
     *                                                             "remove"})
     */
    private Collection $stageMailTemplates;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\AnneeUniversitaire", inversedBy="stagePeriodes")
     */
    private ?AnneeUniversitaire $anneeUniversitaire;

    public function __construct()
    {
        $this->stagePeriodeInterruptions = new ArrayCollection();
        $this->stagePeriodeSoutenances = new ArrayCollection();
        $this->responsables = new ArrayCollection();
        $this->setUuid(Uuid::uuid4());
        $this->stagePeriodeOffres = new ArrayCollection();
        $this->stageEtudiants = new ArrayCollection();
        $this->stageMailTemplates = new ArrayCollection();
    }

    public function __clone()
    {
        $this->setUuid(Uuid::uuid4());
    }

    public function getNumeroPeriode(): ?int
    {
        return $this->numeroPeriode;
    }

    public function setNumeroPeriode(int $numeroPeriode): self
    {
        $this->numeroPeriode = $numeroPeriode;

        return $this;
    }

    public function getLibelle(): ?string
    {
        return $this->libelle;
    }

    public function setLibelle(string $libelle): self
    {
        $this->libelle = $libelle;

        return $this;
    }

    public function getNbSemaines(): ?int
    {
        return $this->nbSemaines;
    }

    public function setNbSemaines(int $nbSemaines): self
    {
        $this->nbSemaines = $nbSemaines;

        return $this;
    }

    public function getNbJours(): ?int
    {
        return $this->nbJours;
    }

    public function setNbJours(int $nbJours): self
    {
        $this->nbJours = $nbJours;

        return $this;
    }

    public function getDateDebut(): ?CarbonInterface
    {
        return $this->dateDebut;
    }

    public function setDateDebut(CarbonInterface $dateDebut): self
    {
        $this->dateDebut = $dateDebut;

        return $this;
    }

    public function getDateFin(): ?CarbonInterface
    {
        return $this->dateFin;
    }

    public function setDateFin(CarbonInterface $dateFin): self
    {
        $this->dateFin = $dateFin;

        return $this;
    }

    public function getCompetencesVisees(): ?string
    {
        return $this->competencesVisees;
    }

    public function setCompetencesVisees(string $competencesVisees): self
    {
        $this->competencesVisees = $competencesVisees;

        return $this;
    }

    public function getModaliteEvaluation(): ?string
    {
        return $this->modaliteEvaluation;
    }

    public function setModaliteEvaluation(string $modaliteEvaluation): self
    {
        $this->modaliteEvaluation = $modaliteEvaluation;

        return $this;
    }

    public function getModaliteEvaluationPedagogique(): ?string
    {
        return $this->modaliteEvaluationPedagogique;
    }

    public function setModaliteEvaluationPedagogique(string $modaliteEvaluationPedagogique): self
    {
        $this->modaliteEvaluationPedagogique = $modaliteEvaluationPedagogique;

        return $this;
    }

    public function getModaliteEncadrement(): ?string
    {
        return $this->modaliteEncadrement;
    }

    public function setModaliteEncadrement(string $modaliteEncadrement): self
    {
        $this->modaliteEncadrement = $modaliteEncadrement;

        return $this;
    }

    public function getDocumentRendre(): ?string
    {
        return $this->documentRendre;
    }

    public function setDocumentRendre(string $documentRendre): self
    {
        $this->documentRendre = $documentRendre;

        return $this;
    }

    public function getNbEcts(): ?float
    {
        return $this->nbEcts;
    }

    public function setNbEcts(float $nbEcts): self
    {
        $this->nbEcts = $nbEcts;

        return $this;
    }

    public function getSemestre(): ?Semestre
    {
        return $this->semestre;
    }

    public function setSemestre(?Semestre $semestre): self
    {
        $this->semestre = $semestre;

        return $this;
    }

    public function getDatesFlexibles(): ?bool
    {
        return $this->datesFlexibles;
    }

    public function setDatesFlexibles(bool $datesFlexibles): self
    {
        $this->datesFlexibles = $datesFlexibles;

        return $this;
    }

    public function getCopieAssistant(): ?bool
    {
        return $this->copieAssistant;
    }

    public function setCopieAssistant(bool $copieAssistant): self
    {
        $this->copieAssistant = $copieAssistant;

        return $this;
    }

    /**
     * @return Collection|StagePeriodeInterruption[]
     */
    public function getStagePeriodeInterruptions(): Collection
    {
        return $this->stagePeriodeInterruptions;
    }

    public function addStagePeriodeInterruption(StagePeriodeInterruption $periodeInterruptionStage): self
    {
        if (!$this->stagePeriodeInterruptions->contains($periodeInterruptionStage)) {
            $this->stagePeriodeInterruptions[] = $periodeInterruptionStage;
            $periodeInterruptionStage->setStagePeriode($this);
        }

        return $this;
    }

    public function removeStagePeriodeInterruption(StagePeriodeInterruption $periodeInterruptionStage): self
    {
        if ($this->stagePeriodeInterruptions->contains($periodeInterruptionStage)) {
            $this->stagePeriodeInterruptions->removeElement($periodeInterruptionStage);
            // set the owning side to null (unless already changed)
            if ($periodeInterruptionStage->getStagePeriode() === $this) {
                $periodeInterruptionStage->setStagePeriode(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|StagePeriodeSoutenance[]
     */
    public function getStagePeriodeSoutenances(): Collection
    {
        return $this->stagePeriodeSoutenances;
    }

    public function addStagePeriodeSoutenance(StagePeriodeSoutenance $stagePeriodeSoutenance): self
    {
        if (!$this->stagePeriodeSoutenances->contains($stagePeriodeSoutenance)) {
            $this->stagePeriodeSoutenances[] = $stagePeriodeSoutenance;
            $stagePeriodeSoutenance->setStagePeriode($this);
        }

        return $this;
    }

    public function removeStagePeriodeSoutenance(StagePeriodeSoutenance $stagePeriodeSoutenance): self
    {
        if ($this->stagePeriodeSoutenances->contains($stagePeriodeSoutenance)) {
            $this->stagePeriodeSoutenances->removeElement($stagePeriodeSoutenance);
            // set the owning side to null (unless already changed)
            if ($stagePeriodeSoutenance->getStagePeriode() === $this) {
                $stagePeriodeSoutenance->setStagePeriode(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|Personnel[]
     */
    public function getResponsables(): Collection
    {
        return $this->responsables;
    }

    public function addResponsable(Personnel $responsable): self
    {
        if (!$this->responsables->contains($responsable)) {
            $this->responsables[] = $responsable;
        }

        return $this;
    }

    public function removeResponsable(Personnel $responsable): self
    {
        if ($this->responsables->contains($responsable)) {
            $this->responsables->removeElement($responsable);
        }

        return $this;
    }

    public function getTexteLibre(): ?string
    {
        return $this->texteLibre;
    }

    public function setTexteLibre(string $texteLibre): self
    {
        $this->texteLibre = $texteLibre;

        return $this;
    }

    public function getDocumentFile(): ?File
    {
        return $this->documentFile;
    }

    /**
     * @throws Exception
     */
    public function setDocumentFile(?File $document = null): void
    {
        $this->documentFile = $document;

        if (null !== $document) {
            // It is required that at least one field changes if you are using doctrine
            // otherwise the event listeners won't be called and the file is lost
            $this->setUpdatedValue();
        }
    }

    /**
     * @return string
     */
    public function getDocumentName(): ?string
    {
        return $this->documentName;
    }

    public function setDocumentName(?string $documentName): void
    {
        $this->documentName = $documentName;
    }

    /**
     * @return Collection|StagePeriodeOffre[]
     */
    public function getStagePeriodeOffres(): Collection
    {
        return $this->stagePeriodeOffres;
    }

    public function addStagePeriodeOffre(StagePeriodeOffre $stagePeriodeOffre): self
    {
        if (!$this->stagePeriodeOffres->contains($stagePeriodeOffre)) {
            $this->stagePeriodeOffres[] = $stagePeriodeOffre;
            $stagePeriodeOffre->addStagePeriode($this);
        }

        return $this;
    }

    public function removeStagePeriodeOffre(StagePeriodeOffre $stagePeriodeOffre): self
    {
        if ($this->stagePeriodeOffres->contains($stagePeriodeOffre)) {
            $this->stagePeriodeOffres->removeElement($stagePeriodeOffre);
            $stagePeriodeOffre->removeStagePeriode($this);
        }

        return $this;
    }

    /**
     * @return Collection|StageEtudiant[]
     */
    public function getStageEtudiants(): Collection
    {
        return $this->stageEtudiants;
    }

    public function addStageEtudiant(StageEtudiant $stageEtudiant): self
    {
        if (!$this->stageEtudiants->contains($stageEtudiant)) {
            $this->stageEtudiants[] = $stageEtudiant;
            $stageEtudiant->setStagePeriode($this);
        }

        return $this;
    }

    public function removeStageEtudiant(StageEtudiant $stageEtudiant): self
    {
        if ($this->stageEtudiants->contains($stageEtudiant)) {
            $this->stageEtudiants->removeElement($stageEtudiant);
            // set the owning side to null (unless already changed)
            if ($stageEtudiant->getStagePeriode() === $this) {
                $stageEtudiant->setStagePeriode(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|StageMailTemplate[]
     */
    public function getStageMailTemplates(): Collection
    {
        return $this->stageMailTemplates;
    }

    public function addStageMailTemplate(StageMailTemplate $stageMailTemplate): self
    {
        if (!$this->stageMailTemplates->contains($stageMailTemplate)) {
            $this->stageMailTemplates[] = $stageMailTemplate;
            $stageMailTemplate->setStagePeriode($this);
        }

        return $this;
    }

    public function removeStageMailTemplate(StageMailTemplate $stageMailTemplate): self
    {
        if ($this->stageMailTemplates->contains($stageMailTemplate)) {
            $this->stageMailTemplates->removeElement($stageMailTemplate);
            // set the owning side to null (unless already changed)
            if ($stageMailTemplate->getStagePeriode() === $this) {
                $stageMailTemplate->setStagePeriode(null);
            }
        }

        return $this;
    }

    public function getMailAssistant(): ?array
    {
        if (null !== $this->getSemestre() && null !== $this->getSemestre()->getDiplome() && null !== $this->getSemestre()->getDiplome()->getAssistantDiplome() && null !== $this->getSemestre()->getDiplome()->getAssistantDiplome()->getMailUniv()) {
            return [$this->getSemestre()->getDiplome()->getAssistantDiplome()->getMailUniv()];
        }

        return null;
    }

    public function getAnneeUniversitaire(): ?AnneeUniversitaire
    {
        return $this->anneeUniversitaire;
    }

    public function setAnneeUniversitaire(?AnneeUniversitaire $anneeUniversitaire): self
    {
        $this->anneeUniversitaire = $anneeUniversitaire;

        return $this;
    }

    public function setUuid($uuid): self
    {
        $this->uuid = $uuid;

        return $this;
    }

    public function serialize(): ?string
    {
        return serialize($this->getId());
    }

    public function unserialize($data): void
    {
        $this->uuid = unserialize($data);
    }
}
