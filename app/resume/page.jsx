'use client'

import { FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs, FaJava } from 'react-icons/fa'
import { SiTailwindcss, SiNextdotjs, SiMysql, SiMongodb, SiExpress, SiLinux, SiKalilinux, SiVite, SiWireshark, SiXcode, SiMetasploit, SiAndroidstudio, SiFigma, SiVercel } from 'react-icons/si'

const about = {
    title: 'Sobre mí',
    description: 'Soy José Molina, un joven de 18 años de Guatemala, apasionado por la informática y la ciberseguridad. Hablo español e inglés.',
    info: [
        {
            fieldName: 'Nombre',
            fieldValue: 'José Molina',
        },
        {
            fieldName: 'Teléfono',
            fieldValue: '(+502) 3856-5476',
        },
        {
            fieldName: 'Experiencia',
            fieldValue: '3 años',
        },
        {
            fieldName: 'Lenguajes',
            fieldValue: 'Español',
        },
        {
            fieldName: 'Nacionalidad',
            fieldValue: 'Guatemala',
        },
        {
            fieldName: 'Correo',
            fieldValue: 'jose.molina020925@gmail.com',
        },
        {
            fieldName: 'Edad',
            fieldValue: '18 años',
        },
    ]
}

const experience = {
    icon: '/assets/resume/badge.svg',
    title: 'Mi experiencia',
    description: 'Experto en ciberseguridad con experiencia en identificación y mitigación de riesgos, implementación de políticas de seguridad y auditorías de sistemas.',
    items: [
        {
            company: 'GBM Corp',
            position: 'Ciberseguridad',
            duration: '2024 - Present',
        },
    ]
}

const education = {
    icon: '/assets/resume/cap.svg',
    title: 'Mi formación',
    description: 'Mi formación incluye un Diploma en Perito en Informática y certificados en Hacker Ético, Técnico en Redes y Seguridad de Terminales, todos obtenidos con Skills for All with Cisco.',
    items: [
        {
            institution: 'Centro Educativo Técnico Laboral Kinal',
            degree: 'Diploma en Perito en Informática',
            duration: '2022 - 2024',
        },
        {
            institution: 'Skills for All with Cisco',
            degree: 'Certificado Hacker Ético',
            duration: '2024',
        },
        {
            institution: 'Skills fot All with Cisco',
            degree: 'Certificado Técnico en Redes',
            duration: '2024',
        },
        {
            institution: 'Skills fot All with Cisco',
            degree: 'Certificado Seguridad de Terminales',
            duration: '2024',
        },
        {
            institution: 'Skills fot All with Cisco',
            degree: 'Certificado Dispositivos de Red',
            duration: '2024',
        },
        {
            institution: 'Skills fot All with Cisco',
            degree: 'Certificado Conceptos de Redes',
            duration: '2024',
        },
    ]
}

const skills = {
    title: 'Mis habilidades',
    description: 'Tengo habilidades en HTML, CSS, JavaScript, React, Next.js, Tailwind CSS, Node.js, Express, MongoDB, MySQL y Java. Esto me permite crear soluciones completas y eficientes para diversos proyectos.',
    skillList: [
        {
            icon: <FaHtml5 />,
            name: 'html 5',
        }, {
            icon: <FaCss3 />,
            name: 'css 3',
        },
        {
            icon: <FaJs />,
            name: 'javascript',
        },
        {
            icon: <SiMetasploit />,
            name: 'metasploit',
        },
        {
            icon: <FaReact />,
            name: 'react.js',
        },
        {
            icon: <SiNextdotjs />,
            name: 'next.js',
        },
        {
            icon: <SiTailwindcss />,
            name: 'tailwind.css',
        },
        {
            icon: <FaNodeJs />,
            name: 'node.js',
        },
        {
            icon: <SiExpress />,
            name: 'express.js',
        },
        {
            icon: <SiMongodb />,
            name: 'mongodb',
        },
        {
            icon: <SiMysql />,
            name: 'mysql',
        },
        {
            icon: <FaJava />,
            name: 'java',
        },
        {
            icon: <SiKalilinux />,
            name: 'kali linux',
        },
        {
            icon: <SiLinux />,
            name: 'linux',
        },
        {
            icon: <SiWireshark />,
            name: 'wireshark',
        },
        {
            icon: <SiXcode />,
            name: 'xcode',
        },
        {
            icon: <SiAndroidstudio />,
            name: 'android studio',
        },
        {
            icon: <SiFigma />,
            name: 'figma',
        },
        {
            icon: <SiVercel />,
            name: 'vercel',
        },
        {
            icon: <SiVite />,
            name: 'vite',
        },
    ]
}

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { ScrollArea } from '@/components/ui/scroll-area'

import { motion } from 'framer-motion'

const Resume = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: { delay: 2.4, duration: 0.4, ease: 'easeIn' },
            }}
            className='min-h-[80px] flex items-center justify-center py-12 xl:py-0'
        >
            <div className='container mx-auto'>
                <Tabs
                    defaultValue='experience'
                    className='flex flex-col xl:flex-row gap-[60px]'
                >
                    <TabsList className='flex flex-col  w-full max-w-[380px] mx-auto xl:mx-0 gap-6'>
                        <TabsTrigger value='experience'>Experiencia</TabsTrigger>
                        <TabsTrigger value='education'>Formación</TabsTrigger>
                        <TabsTrigger value='skills'>Habilidades</TabsTrigger>
                        <TabsTrigger value='about'>Sobre mí</TabsTrigger>
                    </TabsList>
                    {/* content */}
                    <div className='min-h-[70vh] w-full'>
                        {/* experience */}
                        <TabsContent value='experience' className='w-full'>
                            <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                                <h3 className='text-4xl font-bold'>{experience.title}</h3>
                                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>
                                    {experience.description}
                                </p>
                                <ScrollArea className='h-[400px]'>
                                    <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                                        {experience.items.map((item, index) => {
                                            return (
                                                <li key={index} className='bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1'>
                                                    <span className='text-accent'>{item.duration}</span>
                                                    <h3 className='text-xl max-w-[260px] min-h-[60px] text-center lg:text-left'>
                                                        {item.position}
                                                    </h3>
                                                    <div className='flex items-center gap-3'>
                                                        {/* dot */}
                                                        <span className='w-[6px] h-[6px] rounded-full bg-accent'></span>
                                                        <p className='text-white/60'>{item.company}</p>
                                                    </div>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>
                        {/* education */}
                        <TabsContent value='education' className='w-full'>
                            <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                                <h3 className='text-4xl font-bold'>{education.title}</h3>
                                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>
                                    {education.description}
                                </p>
                                <ScrollArea className='h-[400px]'>
                                    <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                                        {education.items.map((item, index) => {
                                            return (
                                                <li key={index} className='bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1'>
                                                    <span className='text-accent'>{item.duration}</span>
                                                    <h3 className='text-xl max-w-[260px] min-h-[60px] text-center lg:text-left'>
                                                        {item.degree}
                                                    </h3>
                                                    <div className='flex items-center gap-3'>
                                                        {/* dot */}
                                                        <span className='w-[6px] h-[6px] rounded-full bg-accent'></span>
                                                        <p className='text-white/60'>{item.institution}</p>
                                                    </div>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>
                        {/* skills */}
                        <TabsContent value='skills' className='w-full h-full'>
                            <div className='flex flex-col gap-[30px]'>
                                <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                                    <h3 className='text-4xl font-bold'>{skills.title}</h3>
                                    <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>
                                        {skills.description}
                                    </p>
                                </div>
                                <ScrollArea className='h-[350px]'>
                                    <ul className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]'>
                                        {skills.skillList.map((skill, index) => {
                                            return (
                                                <li key={index}>
                                                    <TooltipProvider delayDuration={100}>
                                                        <Tooltip>
                                                            <TooltipTrigger className='w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group:'>
                                                                <div className='text-6xl group-hover:text-accent transition-all duration-300'>
                                                                    {skill.icon}
                                                                </div>
                                                            </TooltipTrigger>
                                                            <TooltipContent>
                                                                <p className='capitalize'>{skill.name}</p>
                                                            </TooltipContent>
                                                        </Tooltip>
                                                    </TooltipProvider>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>
                        {/* about */}
                        <TabsContent value='about' className='w-full text-center xl:text-left'>
                            <div className='flex flex-col gap-[30px]'>
                                <h3 className='text-4xl font-bold'>{about.title}</h3>
                                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>
                                    {about.description}
                                </p>
                                <ul className='grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0'>
                                    {about.info.map((item, index) => {
                                        return (
                                            <li key={index} className='flex items-center justify-center xl:justify-start gap-4'>
                                                <span className='text-white/60'>{item.fieldName}</span>
                                                <span className='text-xl'>{item.fieldValue}</span>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>
                        </TabsContent>
                    </div>
                </Tabs>
            </div>
        </motion.div>
    )
}

export default Resume