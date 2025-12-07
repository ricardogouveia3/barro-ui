/* eslint-disable @typescript-eslint/no-explicit-any */
declare module 'framer-motion' {
    import * as React from 'react';

    export interface MotionProps extends React.HTMLAttributes<HTMLElement> {
        animate?: any;
        initial?: any;
        exit?: any;
        transition?: any;
        whileHover?: any;
        whileTap?: any;
        whileFocus?: any;
        whileDrag?: any;
        whileInView?: any;
        variants?: any;
        [key: string]: any;
    }

    export const motion: {
        [K in keyof JSX.IntrinsicElements]: React.ForwardRefExoticComponent<
            MotionProps & JSX.IntrinsicElements[K]
        >;
    };

    export function AnimatePresence(props: any): JSX.Element;
}

export { };
