
import { useEffect } from 'react';
import { Bounce, toast, ToastContainer } from 'react-toastify';

interface toastifyProps {
    message: string
    type?: "error" | "success" | "info"
}

export function Toastify({ type, message }: toastifyProps) {

    useEffect(() => {
        if (!message) return
        if (type === "error") {
            toast.error(message)
        } else if (type === "success") {
            toast.success(message)
        } else {
            toast.info(message)
        }

    }, [message, type])

    return (
        <ToastContainer
            position="bottom-left"
            autoClose={5000}
            hideProgressBar
            newestOnTop={false}
            closeOnClick={false}
            rtl={false}
            pauseOnFocusLoss
            draggable={false}
            pauseOnHover
            theme="light"
            transition={Bounce}
        />
    );
}