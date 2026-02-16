"use client"

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react'

export type Language = 'pt' | 'en'

interface LanguageContextType {
    language: Language
    setLanguage: (lang: Language) => void
    t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

// Dicionários de tradução
const translations = {
    pt: {
        // Navbar
        'nav.about': 'Sobre',
        'nav.projects': 'Projetos',
        'nav.videos': 'Vídeos',
        'nav.articles': 'Artigos',
        'nav.experience': 'Experiência',
        'nav.curriculum': 'Currículo',
        'nav.contact': 'Contato',
        'nav.menu': 'Menu',
        'nav.close': 'Fechar',
        'nav.profile.title': 'Software Engineer and Developer',

        // Hero Section
        'hero.badge': 'Olá, eu sou',
        'hero.description': 'Estudante de Engenharia de Software na PUC Minas e desenvolvedor full-stack. Apaixonado por programação, otimização e design de aplicações web modernas. Buscando sempre aprender e compartilhar conhecimento.',
        'hero.view.projects': 'Ver projetos',
        'hero.contact': 'Entrar em contato',
        'hero.puc.course': 'Engenharia de Software',
        'hero.ebac.role': 'Desenvolvedor FullStack Java',
        'curriculo.title': 'Currículo',
        'curriculo.description': 'Visualize ou baixe meu currículo completo.',
        'curriculo.download': 'Baixar PDF',
        'efect.typewriter.1': 'Engenheiro de Software',
        'efect.typewriter.2': 'Full Stack Java',

        // Projects Section
        'projects.title': 'Projetos',
        'projects.description': 'Meus projetos desenvolvidos durante a minha jornada:',
        'projects.view.project': 'Ver Projeto',
        'projects.view.code': 'Ver Codigo',
        'projects.about.title': 'Sobre o Projeto',
        'projects.technologies': 'Tecnologias',

        // Project Details
        'project.contagem-niver.description': 'Sistema de convite para festa de aniversário com contagem regressiva.',
        'project.contagem-niver.details': 'Sistema completo de convite para festa de aniversário com contagem regressiva, desenvolvido com tecnologias web fundamentais (HTML, CSS e JavaScript).',

        'project.disneyplus-tematica.description': 'Plataforma de cursos voltada para compartilhamento de conteúdos de tecnologia.',
        'project.disneyplus-tematica.details': 'Plataforma educacional completa para cursos de tecnologia, organizada em módulos e aulas. Sistema robusto desenvolvido com React.js no frontend e Java Spring Boot no backend, proporcionando uma experiência de aprendizado estruturada e intuitiva.',

        'project.my-portfolio.description': 'Meu portfólio pessoal, apresentando meus projetos, vídeos, artigos e experiência.',
        'project.my-portfolio.details': 'Meu portfólio pessoal, desenvolvido com React.js e Next.js, apresentando meus projetos, vídeos, artigos e experiência de forma organizada e visualmente atraente. O site é responsivo e otimizado para uma excelente experiência do usuário em diferentes dispositivos.',

        // Videos Section
        'videos.title': 'Vídeos',
        'videos.description': 'Meu conteúdo produzido no YouTube:',
        'videos.youtube': 'YouTube',
        'videos.fabiana.title': 'Vídeo de apresentação - Fabiana Móveis',
        'videos.fabiana.description': 'Vídeo de apresentação do projeto Fabiana Móveis, mostrando as funcionalidades principais da aplicação desenvolvida para otimizar as rotas de entrega da empresa.',
        'videos.disneyplus-tematica.title': 'Vídeo de apresentação - Disney + Temática',
        'videos.disneyplus-tematica.description': 'Vídeo de apresentação do projeto Disney + Temática, mostrando as principais funcionalidades do desenvolvimento da landing page temática.',
        'videos.gruposcheilla.title': 'Vídeo de apresentação - Grupo Espírita Scheilla',
        'videos.gruposcheilla.description': 'Vídeo de apresentação do projeto Grupo Espírita Scheilla, detalhando as funcionalidades e o impacto do software desenvolvido para a gestão e promoção do centro espírita.',

        // Articles Section
        'articles.title': 'Artigos',
        'articles.description': 'Artigos científicos e trabalhos de pesquisa que participei:',
        'articles.view': 'Visualizar',
        'articles.pdf': 'PDF',
        'articles.open.tab': 'Abrir PDF em nova aba',
        'articles.ai.title': 'Análise da Precisão de IAs Generativas na Resolução de Equações Matemáticas',
        'articles.ai.description': 'Este trabalho investiga o desempenho de sistemas de inteligência artificial generativa na resolução de equações matemáticas, com foco em integrais de diferentes níveis de dificuldade',

        // Experience Section
        'experience.title': 'Experiência',
        'experience.description': 'Linguagens, ferramentas e plataformas que utilizo:',

        // Contact Section
        'contact.title': 'Contato',
        'contact.description': 'Vamos conversar? Envie uma mensagem.',
        'contact.form.title': 'Fale comigo',
        'contact.form.description': 'Envie uma mensagem diretamente para meu email.',
        'contact.form.name': 'Seu nome',
        'contact.form.email': 'Seu e-mail',
        'contact.form.message': 'Sua mensagem',
        'contact.form.send': 'Enviar Mensagem',
        'contact.form.sending': 'Enviando...',
        'contact.form.email.link': 'ou envie por e-mail',
        'contact.social.title': 'Redes Sociais',
        'contact.social.description': 'Links diretos',
        'contact.social.instagram': 'Instagram',
        'contact.social.github': 'GitHub',
        'contact.social.linkedin': 'LinkedIn',
        'contact.social.email': 'E-mail',

        // Footer
        'footer.developer': 'Desenvolvedor Full Stack Java • Ebac',
        'footer.student': 'Engenharia de Software • PUC Minas',
        'footer.rights': 'Todos os direitos reservados.',

        // Toast Messages
        'toast.message.sent': 'Mensagem enviada com sucesso!',
        'toast.message.thanks': 'Obrigado, {name}! Entrarei em contato em breve.',
        'toast.message.thanks.default': 'Obrigado! Entrarei em contato em breve.',
        'toast.error.title': 'Erro',
        'toast.error.required.fields': 'Por favor, preencha todos os campos obrigatórios.',
        'toast.error.invalid.email': 'Por favor, insira um email válido.',
        'toast.error.send.failed': 'Erro ao enviar mensagem. Tente novamente ou use o email direto.',

        // Back to Top
        'back.to.top': 'Voltar ao topo',

        // Language Selector
        'language.portuguese': 'Português',
        'language.english': 'English',
    },
    en: {
        // Navbar
        'nav.about': 'About',
        'nav.projects': 'Projects',
        'nav.videos': 'Videos',
        'nav.articles': 'Articles',
        'nav.experience': 'Experience',
        'nav.curriculum': 'Curriculum',
        'nav.contact': 'Contact',
        'nav.menu': 'Menu',
        'nav.close': 'Close',
        'nav.profile.title': 'Software Engineer and Developer',

        // Hero Section
        'hero.badge': 'Hello, I am',
        'hero.description': 'Software Engineering student at PUC Minas and full-stack developer at EBAC. Passionate about programming, optimization and modern web application design. Always seeking to learn and share knowledge.',
        'hero.view.projects': 'View projects',
        'hero.contact': 'Get in touch',
        'hero.puc.course': 'Software Engineering',
        'hero.ebac.role': 'FullStack Developer',
        'curriculo.title': 'Resume',
        'curriculo.description': 'View or download my full resume.',
        'curriculo.download': 'Download PDF',
        'efect.typewriter.1': 'Software Engineer',
        'efect.typewriter.2': 'Full Stack Java',

        // Projects Section
        'projects.title': 'Projects',
        'projects.description': 'My projects developed during my journey:',
        'projects.view.project': 'View Project',
        'projects.view.code': 'View Code',
        'projects.about.title': 'About the Project',
        'projects.technologies': 'Technologies',

        // Project Details
        'project.contagem-niver.description': 'Birthday party invitation system with countdown timer.',
        'project.contagem-niver.details': 'Complete birthday party invitation system with countdown timer, developed using fundamental web technologies (HTML, CSS, and JavaScript).',

        'project.disneyplus-tematica.description': 'Landing page theme for Disney +.',
        'project.disneyplus-tematica.details': 'Complete landing page for a Disney + theme, developed using fundamental web technologies (HTML, CSS and JavaScript).',

        'project.my-portfolio.description': 'My personal portfolio, showcasing my projects, videos, articles and experience.',
        'project.my-portfolio.details': 'My personal portfolio, developed with React.js and Next.js, showcasing my projects, videos, articles and experience in an organized and visually appealing way. The site is responsive and optimized for an excellent user experience across different devices.',

        // Videos Section
        'videos.title': 'Videos',
        'videos.description': 'My content produced on YouTube:',
        'videos.youtube': 'YouTube',
        'videos.fabiana.title': 'Presentation video - Fabiana Móveis',
        'videos.fabiana.description': 'Presentation video of the Fabiana Móveis project, showing the main functionalities of the application developed to optimize the company\'s delivery routes.',
        'videos.gnosi.title': 'Presentation video - Gnosi',
        'videos.gnosi.description': 'Presentation video of the Gnosi project, showing the main functionalities of the software development of the free online teaching and courses platform.',
        'videos.gruposcheilla.title': 'Presentation video - Grupo Espírita Scheilla',
        'videos.gruposcheilla.description': 'Presentation video of the Grupo Espírita Scheilla project, detailing the functionalities and impact of the software developed for the management and promotion of the spiritist center.',

        // Articles Section
        'articles.title': 'Articles',
        'articles.description': 'Scientific articles and research papers I participated in:',
        'articles.view': 'View',
        'articles.pdf': 'PDF',
        'articles.open.tab': 'Open PDF in new tab',
        'articles.ai.title': 'Analysis of Generative AI Accuracy in Mathematical Equation Solving',
        'articles.ai.description': 'This work investigates the performance of generative artificial intelligence systems in solving mathematical equations, focusing on integrals of different difficulty levels',

        // Experience Section
        'experience.title': 'Experience',
        'experience.description': 'Languages, tools and platforms I use:',

        // Contact Section
        'contact.title': 'Contact',
        'contact.description': 'Let\'s talk? Send a message.',
        'contact.form.title': 'Talk to me',
        'contact.form.description': 'Send a message directly to my email.',
        'contact.form.name': 'Your name',
        'contact.form.email': 'Your email',
        'contact.form.message': 'Your message',
        'contact.form.send': 'Send Message',
        'contact.form.sending': 'Sending...',
        'contact.form.email.link': 'or send by email',
        'contact.social.title': 'Social Networks',
        'contact.social.description': 'Direct links',
        'contact.social.instagram': 'Instagram',
        'contact.social.github': 'GitHub',
        'contact.social.linkedin': 'LinkedIn',
        'contact.social.email': 'Email',

        // Footer
        'footer.developer': 'Developer Full Stack Java • Ebac',
        'footer.student': 'Software Engineering • PUC Minas',
        'footer.rights': 'All rights reserved.',

        // Toast Messages
        'toast.message.sent': 'Message sent successfully!',
        'toast.message.thanks': 'Thank you, {name}! I\'ll get back to you soon.',
        'toast.message.thanks.default': 'Thank you! I\'ll get back to you soon.',
        'toast.error.title': 'Error',
        'toast.error.required.fields': 'Please fill in all required fields.',
        'toast.error.invalid.email': 'Please enter a valid email address.',
        'toast.error.send.failed': 'Error sending message. Please try again or use direct email.',

        // Back to Top
        'back.to.top': 'Back to top',

        // Language Selector
        'language.portuguese': 'Português',
        'language.english': 'English',
    }
}

interface LanguageProviderProps {
    children: ReactNode
}

export function LanguageProvider({ children }: LanguageProviderProps) {
    const [language, setLanguageState] = useState<Language>('pt')

    useEffect(() => {
        const savedLanguage = localStorage.getItem('language') as Language
        if (savedLanguage && (savedLanguage === 'pt' || savedLanguage === 'en')) {
            setLanguageState(savedLanguage)
        }
    }, [])

    const setLanguage = (lang: Language) => {
        setLanguageState(lang)
        localStorage.setItem('language', lang)
    }

    const t = (key: string, variables?: Record<string, string>): string => {
        let translation = translations[language][key as keyof typeof translations[typeof language]] || key

        if (variables && typeof translation === 'string') {
            Object.entries(variables).forEach(([variable, value]) => {
                translation = translation.replace(`{${variable}}`, value)
            })
        }

        return translation
    }

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    )
}

export function useLanguage() {
    const context = useContext(LanguageContext)
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider')
    }
    return context
}