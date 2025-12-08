import type { Meta, StoryObj } from '@storybook/react';
import { ToastProvider, useToast } from './index';
import Button from '../Button';

const ToastDemo = () => {
    const { toast } = useToast();

    return (
        <div className="flex flex-col gap-4">
            <div className="flex gap-2">
                <Button
                    type="button"
                    onClick={() =>
                        toast({
                            type: 'success',
                            message: 'Action completed successfully!',
                        })
                    }
                >
                    Success Toast
                </Button>
                <Button
                    type="button"
                    onClick={() =>
                        toast({
                            type: 'error',
                            message: 'Something went wrong.',
                        })
                    }
                >
                    Error Toast
                </Button>
            </div>
            <div className="flex gap-2">
                <Button
                    type="button"
                    onClick={() =>
                        toast({
                            type: 'info',
                            message: 'Here is some information for you.',
                        })
                    }
                >
                    Info Toast
                </Button>
                <Button
                    type="button"
                    onClick={() =>
                        toast({
                            type: 'warning',
                            message: 'Warning: Proceed with caution.',
                        })
                    }
                >
                    Warning Toast
                </Button>
            </div>
        </div>
    );
};

const meta: Meta<typeof ToastProvider> = {
    title: 'Components/Toast',
    component: ToastProvider,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ToastProvider>;

export const Default: Story = {
    render: () => (
        <ToastProvider>
            <div className="h-[200px] flex items-center justify-center bg-stone-50 dark:bg-stone-900 rounded-lg border border-stone-200 dark:border-stone-800">
                <ToastDemo />
            </div>
        </ToastProvider>
    ),
};
