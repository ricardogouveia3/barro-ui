import { createContext, useContext, useState, useCallback } from 'react';
import { Toast, ToastContextValue, ToastProviderProps } from './Toast.types';
import ToastComponent from './Toast';
import { AnimatePresence } from 'framer-motion';

const ToastContext = createContext<ToastContextValue | undefined>(undefined);

export function ToastProvider({ children }: Readonly<ToastProviderProps>) {
    const [toasts, setToasts] = useState<Toast[]>([]);

    const toast = useCallback((props: Omit<Toast, 'id'>) => {
        const id = Math.random().toString(36).substring(2, 9);
        setToasts((prev) => [...prev, { ...props, id }]);
    }, []);

    const dismiss = useCallback((id: string) => {
        setToasts((prev) => prev.filter((t) => t.id !== id));
    }, []);

    return (
        <ToastContext.Provider value={{ toast, dismiss }}>
            {children}
            <div className="fixed bottom-0 right-0 z-50 p-4 flex flex-col gap-2 w-full max-w-sm pointer-events-none">
                <AnimatePresence mode="popLayout">
                    {toasts.map((t) => (
                        <div key={t.id} className="pointer-events-auto">
                            <ToastComponent {...t} onDismiss={dismiss} />
                        </div>
                    ))}
                </AnimatePresence>
            </div>
        </ToastContext.Provider>
    );
}

export function useToast() {
    const context = useContext(ToastContext);
    if (!context) {
        throw new Error('useToast must be used within a ToastProvider');
    }
    return context;
}
