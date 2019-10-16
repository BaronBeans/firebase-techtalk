import { useState } from "react";

const useModal = (initialMode = false) => {
    const [modalOpen, setModalOpen] = useState(initialMode)
    // const toggle = () => setModalOpen(!modalOpen)
    return { modalOpen, setModalOpen }
};

export { useModal };