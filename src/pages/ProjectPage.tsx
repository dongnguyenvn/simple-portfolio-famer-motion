import { useParams } from 'react-router-dom';
import { projectListData } from '../components/ProjectList';
import { motion } from 'framer-motion';

const ProjectPage = () => {
    const { projectName } = useParams<'projectName'>();
    const project = projectListData.filter((p) => p.name === projectName);

    const container = {
        hidden: {},
        show: {
            transition: {
                staggerChildren: 0.2,
            },
        },
        exit: {
            y: 60,
            opacity: 0,
            transition: {
                duration: 0.5,
            },
        },
    };
    const item = {
        hidden: { opacity: 0, y: 35 },
        show: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.3, ease: 'easeOut' },
        },
    };

    return (
        <motion.div
            variants={container}
            exit='exit'
            initial='hidden'
            animate='show'
        >
            <motion.h1
                variants={item}
                className='text-3xl font-semibold capitalize text-gray-400 '
            >
                {projectName}
            </motion.h1>
            <motion.h2 variants={item} className='mt-2 text-xl'>
                A set of SVG {projectName} I drew
            </motion.h2>
            <motion.div variants={item} className='mt-14'>
                <img
                    src={project[0].background}
                    alt={project[0].name}
                    className='max-h-[450px] rounded-lg object-cover'
                    width={900}
                    height={450}
                />
            </motion.div>
            <div className='mt-16 flex flex-col gap-8 md:flex-row md:gap-10'>
                <div className='space-y-4'>
                    <h2 className='text-lg font-semibold text-gray-400'>
                        Overview
                    </h2>
                    <p className='text-lg font-normal'>
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem. Ut enim ad minima veniam, quis nostrum
                        exercitationem ullam corporis suscipit laboriosam. Neque
                        porro quisquam est, qui dolorem ipsum quia dolor sit
                        amet, consectetur, adipisci velit.
                    </p>
                </div>
                <div className='space-y-4'>
                    <h2 className='text-lg font-semibold text-gray-400'>
                        Approach
                    </h2>
                    <p className='text-lg font-normal'>
                        Nam libero tempore, cum soluta nobis est eligendi optio
                        cumque nihil impedit quo minus id quod maxime placeat.
                        Nihil molestiae consequatur, vel illum qui dolorem eum.
                        Architecto beatae vitae dicta sunt explicabo.
                    </p>
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectPage;
