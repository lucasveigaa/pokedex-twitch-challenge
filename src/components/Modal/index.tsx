import { type ReactNode } from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import { XIcon } from '@heroicons/react/outline'

interface ModalProps {
    children: ReactNode
    modalTrigger?: ReactNode
    title: string
}

export const Modal = ({ children, modalTrigger, title }: ModalProps) => {
    return (
        <Dialog.Root>
            <Dialog.Trigger asChild>{modalTrigger}</Dialog.Trigger>
            <Dialog.Overlay className="fixed inset-0 bg-sun-500/80" />
            <Dialog.Content>
                <div className="p-8 md:p-12 fixed container w-fit min-h-[400px] mx-auto top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-sun-400">
                    <Dialog.Title className="flex justify-center md:justify-start text-base md:text-2xl capitalize">
                        {title}
                    </Dialog.Title>

                    {children}
                    <Dialog.Close className="absolute top-5 right-5">
                        <XIcon className="w-5 h-5" />
                    </Dialog.Close>
                </div>
            </Dialog.Content>
        </Dialog.Root>
    )
}
