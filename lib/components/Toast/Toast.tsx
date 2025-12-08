import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ToastProps } from './Toast.types';
import { CheckCircleIcon, XCircleIcon, InformationCircleIcon, ExclamationTriangleIcon } from '@heroicons/react/24/outline';
import { XMarkIcon } from '@heroicons/react/24/solid';
import { cn } from '../../utils/cn';

const icons = {
    success: CheckCircleIcon,
    error: XCircleIcon,
    info: InformationCircleIcon,
    warning: ExclamationTriangleIcon,
};

const styles = {
    success: 'bg-white border-green-200 text-green-800 dark:bg-stone-900 dark:border-green-900 dark:text-green-400',
    error: 'bg-white border-red-200 text-red-800 dark:bg-stone-900 dark:border-red-900 dark:text-red-400',
    info: 'bg-white border-blue-200 text-blue-800 dark:bg-stone-900 dark:border-blue-900 dark:text-blue-400',
    warning: 'bg-white border-yellow-200 text-yellow-800 dark:bg-stone-900 dark:border-yellow-900 dark:text-yellow-400',
};

export default function Toast({ id, type, message, duration = 3000, onDismiss }: Readonly<ToastProps>) {
    useEffect(() => {
        if (duration === Infinity) return;

        const timer = setTimeout(() => {
            onDismiss(id);
        }, duration);

        return () => clearTimeout(timer);
    }, [id, duration, onDismiss]);

    const Icon = icons[type];

    return (
        <motion.div
            layout
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
            className={cn(
                'flex items-center gap-3 px-4 py-3 rounded-lg border shadow-lg w-full',
                styles[type]
            )}
        >
            <Icon className="w-5 h-5 flex-shrink-0" />
            <p className="text-sm font-medium flex-1">{message}</p>
            <button
                onClick={() => onDismiss(id)}
                className="p-1 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
            >
                <XMarkIcon className="w-4 h-4" />
            </button>
        </motion.div>
    );
}
