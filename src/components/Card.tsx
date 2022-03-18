import { motion, useAnimation } from 'framer-motion';
import { FC } from 'react';
import { Link } from 'react-router-dom';

type cardProps = {
    textOverlay: string;
    img: string;
    href: string;
};

const Card: FC<cardProps> = ({ textOverlay, img, href }) => {
    const overlay = useAnimation();
    const text = useAnimation();
    const handleHoverStart = () => {
        overlay.start({
            backgroundColor: 'rgba(0,0,0,.6)',
        });
        text.start({
            opacity: 1,
            y: -20,
            transition: { duration: 0.2 },
        });
    };
    const handleHoverEnd = () => {
        overlay.start({
            backgroundColor: 'rgba(0,0,0,0)',
        });
        text.start({
            opacity: 0,
            y: 0,
            transition: { duration: 0.2 },
        });
    };

    const item = {
        hidden: { scale: 0.7, opacity: 0 },
        show: {
            scale: 1,
            opacity: 1,
            transition: { duration: 0.3, ease: 'easeOut' },
        },
    };

    return (
        <motion.div>
            <motion.div
                className='relative overflow-hidden rounded-3xl'
                onHoverStart={handleHoverStart}
                onHoverEnd={handleHoverEnd}
                variants={item}
            >
                <img
                    className='h-full w-full object-cover'
                    src={img}
                    alt={textOverlay}
                />
                <Link to={href}>
                    <motion.div
                        className='absolute inset-0 bg-[rgba(0,0,0,0)]'
                        animate={overlay}
                    >
                        {' '}
                        <motion.span
                            className='absolute bottom-0 left-7 text-2xl font-semibold text-white opacity-0'
                            animate={text}
                        >
                            {textOverlay}
                        </motion.span>
                    </motion.div>
                </Link>
            </motion.div>
        </motion.div>
    );
};

export default Card;
