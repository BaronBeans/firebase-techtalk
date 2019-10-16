import { Modal as MaterialModal } from "@material-ui/core";
import React, { ReactNode } from "react";

interface ModalProps {
    open: boolean;
    handleClose: () => void;
    children: ReactNode;
}

const Modal = ({ open, handleClose, children }: ModalProps) => {
    return (
        <MaterialModal
            open={open}
            onClose={handleClose}>
            <div className="modal-container">
                <div className="modal">
                    {children}
                </div>
            </div>
        </MaterialModal>
    );
};

export { Modal };

