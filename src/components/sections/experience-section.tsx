// src/components/sections/experience-section.tsx
import Section from "@/components/layout/section"
import Reveal from "@/components/layout/reveal"
import SkillCard from "../cards/skill-card"
import { useLanguage } from "@/contexts/language-context"

const skills = [
    { name: "Node.js", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg", level: 70 },
    { name: "Nest.js", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nestjs/nestjs-original.svg", level: 70 },
    { name: "React.js", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg", level: 70 },
    { name: "Next.js", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg", level: 70 },
    { name: "Java", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg", level: 80 },
    { name: "Java SpringBoot", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg", level: 70 },
    { name: "Python", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg", level: 40 },
    { name: "C", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg", level: 60 },
    { name: "HTML5", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg", level: 90 },
    { name: "CSS3", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg", level: 90 },
    { name: "JavaScript", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg", level: 75 },
    { name: "TypeScript", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg", level: 70 },
    { name: "PostgreSQL", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg", level: 75 },
    { name: "MySQL", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg", level: 65 },
    { name: "Figma", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg", level: 75 },
    { name: "Git", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg", level: 80 },
    { name: "GitHub", url: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/github.svg", level: 85 },
    { name: "Draw.io", url: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/diagramsdotnet.svg", level: 70 },
]

interface ExperienceSectionProps {
    sectionRef: React.RefObject<HTMLElement>
}

export default function ExperienceSection({ sectionRef }: ExperienceSectionProps) {
    const {t} = useLanguage()

    return (
        <Section id="experiencia" ref={sectionRef}>
            <Reveal>
                <header className="mb-6">
                    <h2 className="text-3xl font-bold">{t('experience.title')}</h2>
                    <p className="text-white/70">{t('experience.description')}</p>
                </header>
                <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4">
                    {skills.map((s) => (
                        <SkillCard key={s.name} name={s.name} logoUrl={s.url} level={s.level}/>
                    ))}
                </div>
            </Reveal>
        </Section>
    )
}