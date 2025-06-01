import { toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const assets = {
    position: "bottom-center",
    autoClose: 5000,
    hideProgressBar: true,
    closeOnClick: false,
    pauseOnHover: false,
    draggable: true,
    progress: 0,
    theme: "light",
    transition: Bounce,
}


export const textIsEmoty=()=>{
    toast.warning('Please enter a text',assets);
}

export const noteCreated=()=>{
    toast.info('Note has been created',assets);
}

export const noteSaved=()=>{
    toast.info('Note has been saved',assets);
}

export const noteDeleted=()=>{
    toast.info('Note has been deleted',assets);
}

