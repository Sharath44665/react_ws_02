import Modal from '../components/Modal';
import Button from '../components/Button';
import { useState } from 'react';

const ModalPage = () => {
    const [showModal, SetShowModal] = useState(false);

    const handleClick = () => {
        SetShowModal(true) 
    }

    const handleClose = () => {
        SetShowModal(false);
    }
    return <>
    <Button primary onClick={handleClick} > Open Modal</Button>
    {showModal && <Modal onClose={handleClose} />}
    
    </>
}


export default ModalPage;