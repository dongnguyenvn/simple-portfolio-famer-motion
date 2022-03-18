import Card from './Card';
import {
    EmojisImage,
    ArtImage,
    MavisFontImage,
    FramerImage,
    ClayDivicesImage,
    PhotographyImage,
} from '../public/images';
import { motion } from 'framer-motion';

export const projectListData = [
    {
        name: 'emojis',
        textOverlay: 'Emojis',
        background: EmojisImage,
        href: `project/emojis`,
    },
    {
        name: 'art',
        textOverlay: 'Art',
        background: ArtImage,
        href: 'project/art',
    },
    {
        name: 'marvis-font',
        textOverlay: 'Mavis Font',
        background: MavisFontImage,
        href: 'project/marvis-font',
    },
    {
        name: 'framer',
        textOverlay: 'Framer',
        background: FramerImage,
        href: 'project/framer',
    },
    {
        name: 'clay-divices',
        textOverlay: 'Clay Divices',
        background: ClayDivicesImage,
        href: 'project/clay-divices',
    },
    {
        name: 'photography',
        textOverlay: 'Photography',
        background: PhotographyImage,
        href: 'project/photography',
    },
];

const ProjectList = () => {
    const container = {
        hidden: {},
        show: {
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.2,
            },
        },
    };
    return (
        <motion.div
            className=' my-28 grid grid-cols-3 gap-4'
            variants={container}
            initial='hidden'
            animate='show'
        >
            {projectListData.map((p) => (
                <Card
                    textOverlay={p.textOverlay}
                    img={p.background}
                    href={p.href}
                    key={p.name}
                />
            ))}
        </motion.div>
    );
};

export default ProjectList;
