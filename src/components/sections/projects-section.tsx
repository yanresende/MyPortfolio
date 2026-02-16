// src/components/sections/projects-section.tsx
import Section from "@/components/layout/section"
import Reveal from "@/components/layout/reveal"
import ProjectCard from "../cards/project-card"
import { useLanguage } from "@/contexts/language-context"
import logoEasyTraining from '../../../public/projects/logo-easytraining.png'
import logoDisneyplusTematica from "../../../public/projects/logo-disneyplus-tematica.png"
import logoContagemNiver from "../../../public/projects/logo-contagem-niver.png"
import logoMyPortfolio from "../../../public/projects/logo-my-portfolio.png"
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
    github?: string
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
            title: "Contagem Niver",
            description: t('project.contagem-niver.description'),
            tags: ["Scss", "Html", "JavaScript"],
            image: logoContagemNiver,
            details: t('project.contagem-niver.details'),
            link: "https://contagem-niver-delta.vercel.app",
            github: "https://github.com/yanresende/contagem_niver",
        },
        {
            id: "proj-2",
            title: "Landing Page Tematica Para Disney +",
            description: t('project.disneyplus-tematica.description'),
            tags: ["Scss", "Html", "JavaScript"],
            image: logoDisneyplusTematica,
            details: t('project.disneyplus-tematica.details'),
            link: "https://landingpage-tematica.vercel.app",
            github: "https://github.com/yanresende/landingpage_tematica",
        },
        {
            id: "proj-3",
            title: "My portfolio",
            description: t('project.my-portfolio.description'),
            tags: ["React.js", "Next.js", "TypeScript"],
            image: logoMyPortfolio,
            details: t('project.my-portfolio.details'),
            link: "https://my-portfolio-lac-seven-28.vercel.app",
            github: "https://github.com/yanresende/MyPortfolio",
        },

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