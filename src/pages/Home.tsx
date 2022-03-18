import ProjectList from '../components/ProjectList';
import { motion } from 'framer-motion';
import Connect from '../components/Connect';
import Writing from '../components/Writing';

const App = () => {
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
            initial='hidden'
            animate='show'
            exit='exit'
            variants={container}
        >
            <motion.div className='text-center'>
                <motion.h1
                    variants={item}
                    className='mt-5 mb-2 text-2xl font-semibold text-gray-400'
                >
                    Dong
                </motion.h1>
                <motion.h2 variants={item} className=' text-[32px]'>
                    I’m a freelance deverloper from VietNam.
                </motion.h2>
            </motion.div>
            <motion.div variants={item}>
                <ProjectList />
            </motion.div>
            <div className='space-y-5'>
                <h2 className='text-lg font-semibold text-gray-400'>About</h2>
                <p className='text-lg font-normal'>
                    I’m a digital product designer working at Framer in the
                    lovely Amsterdam, where I help lead the Product team. I’m
                    passionate about design tooling and high-fidelity
                    prototyping—and I’ve published several interactive
                    components as Framer packages.
                </p>
            </div>
            <div className=' mt-[72px] w-full space-y-5'>
                <h2 className='text-lg font-semibold text-gray-400'>Writing</h2>
                <Writing />
            </div>
            <Connect />
        </motion.div>
    );
};

export default App;
