import { Renderable, Toast, ValueFunction, toast } from 'react-hot-toast';
import { PiWarning } from 'react-icons/pi';

const useWarningToast = () => {
    const showWarningToast = (message: Renderable | ValueFunction<Renderable, Toast>) => {
        toast.error(message, {
            icon: <PiWarning/>, // Optionally, you can add an icon to the toast
            style: {
                background: '#FFA500', // Set the background color to a warning color (e.g., orange)
                color: '#000', // Set the text color to white
            },
            duration: 4000, // Optional: Set the duration of the toast (in milliseconds)
        });
    };

    return showWarningToast;
};

export default useWarningToast;
