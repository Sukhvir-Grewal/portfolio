import { useContext, createContext, useState, useRef } from "react";

const DialogContext = createContext();

export const useDialog = () => useContext(DialogContext);

export function DialogProvider({ children }) {
    const [currentDialog, setCurrentDialog] = useState("");
    const [currentImage, setCurrentImage] = useState("");
    const imageRef = useRef(null);

    return (
        <DialogContext.Provider
            value={{
                currentDialog,
                setCurrentDialog,
                currentImage,
                setCurrentImage,
                imageRef,
            }}
        >
            {children}
        </DialogContext.Provider>
    );
}
