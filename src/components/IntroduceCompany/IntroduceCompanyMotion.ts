export const leftArticle = {
    initial: { x: -20, opacity: 0 },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1.7,
            ease: [0.6, -0.05, 0.01, 0.99],
        },
    },
};

export const rightArticle = {
    initial: { x: +20, opacity: 0 },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1.7,
            ease: [0.6, -0.05, 0.01, 0.99],
        },
    },
};