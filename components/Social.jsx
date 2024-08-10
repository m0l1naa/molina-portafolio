import Link from 'next/link'

import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa'

const socials = [
    { icon: <FaGithub />, path: 'https://github.com/jmolina-2022408' },
    { icon: <FaLinkedin />, path: 'https://www.linkedin.com/in/jos%C3%A9-molina-657604303/' },
    { icon: <FaInstagram />, path: 'https://www.instagram.com/andres.mh_/' },
]

const Social = ({ containerStyles, iconStyles }) => {
    return (
        <div className={containerStyles}>
            {socials.map((item, index) => {
                return (
                    <Link key={index} href={item.path} className={iconStyles} target='_blank'>
                        {item.icon}
                    </Link>
                )
            })}
        </div>
    )
}

export default Social