// src/components/sections/projects-section.tsx
import Section from "@/components/layout/section"
import Reveal from "@/components/layout/reveal"
import ProjectCard from "../cards/project-card"
import { useLanguage } from "@/contexts/language-context"
import logoEasyTraining from '../../../public/projects/logo-easytraining.png'
import logoGnosi from "../../../public/projects/logo-gnosi.png"
import logoFabianaMoveis from "../../../public/projects/logo-fabianam.png"
import logoM2CPainel from "../../../public/projects/logo-m2c.png"
import logoXulambs from "../../../public/projects/logo-xulambs.png"
import logoHuni from "../../../public/projects/logo-huni.png"
import logoGrupoScheilla from "../../../public/projects/logo-scheilla.png"
import logoVirtus from "../../../public/projects/logo-virtus.png"
import logoRentalCar from "../../../public/projects/logo-rentalcar.png"
import type { StaticImageData } from "next/image"

type Project = {
    id: string
    title: string
    description: string
    tags: string[]
    image: string | StaticImageData
    link?: string
    details: string
}

interface ProjectsSectionProps {
    sectionRef: React.RefObject<HTMLElement>
}

export default function ProjectsSection({ sectionRef }: ProjectsSectionProps) {
    const { t } = useLanguage()

    const projects: Project[] = [
        {
            id: "proj-1",
            title: "Fabiana Móveis",
            description: t('project.fabiana.description'),
            tags: ["Next.js", "Nest.js", "Google Maps API", "PostgreSQL", "Amazon AWS"],
            image: logoFabianaMoveis,
            details: t('project.fabiana.details'),
        },
        {
            id: "proj-2",
            title: "Gnosi",
            description: t('project.gnosi.description'),
            tags: ["React.js", "Java SpringBoot", "PostgreSQL", "Microsoft Azure"],
            image: logoGnosi,
            details: t('project.gnosi.details'),
        },
        {
            id: "proj-3",
            title: "Grupo Espírita Scheilla",
            description: t('project.scheilla.description'),
            tags: ["Next.js", "Python Django", "TypeScript", "PostgreSQL", "Amazon AWS"],
            image: logoGrupoScheilla,
            link: "https://grupoespiritascheillapl.com/",
            details: t('project.scheilla.details'),
        }

    ]

    return (
        <Section id="projetos" ref={sectionRef}>
            <Reveal>
                <header className="mb-6">
                    <h2 className="text-3xl font-bold">{t('projects.title')}</h2>
                    <p className="text-white/70">{t('projects.description')}</p>
                </header>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {projects.map((p) => (
                        <ProjectCard key={p.id} project={p} />
                    ))}
                </div>
            </Reveal>
        </Section>
    )
}