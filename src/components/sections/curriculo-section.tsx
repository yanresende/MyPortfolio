import Section from "@/components/layout/section"
import Reveal from "@/components/layout/reveal"
import { useLanguage } from "@/contexts/language-context"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"
const curriculo = "/arquivos/curriculo-yan-resende.pdf"

interface CurriculoSectionProps {
    sectionRef: React.RefObject<HTMLElement>
}

export default function CurriculoSection({ sectionRef }: CurriculoSectionProps) {
    const { t } = useLanguage()

    return (
        <Section id="curriculo" ref={sectionRef}>
            <Reveal>
                <header className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                        <h2 className="text-3xl font-bold">{t('curriculo.title')}</h2>
                        <p className="text-white/70">{t('curriculo.description')}</p>
                    </div>
                    <Button 
                        variant="outline" 
                        className="border-violet-500/50 text-white hover:bg-white/10 bg-transparent w-fit" 
                        asChild
                    >
                        <a href={curriculo} download="Yan_Resende_Curriculo.pdf">
                            <Download className="mr-2 h-4 w-4" />
                            {t('curriculo.download')}
                        </a>
                    </Button>
                </header>
                
                <div className="w-full h-[80vh] min-h-[500px] rounded-xl overflow-hidden border border-white/10 bg-white/5">
                     <iframe
                        src={curriculo}
                        title="Currículo"
                        className="w-full h-full"
                    />
                </div>
            </Reveal>
        </Section>
    )
}
