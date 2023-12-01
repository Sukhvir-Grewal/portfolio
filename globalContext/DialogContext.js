import { useContext, createContext, useState } from "react";

const DialogContext = createContext();

export const useDialog = () => useContext(DialogContext);

export function DialogProvider({ children }) {
    const [currentDialog, setCurrentDialog] = useState("");

    return (
        <DialogContext.Provider value={{ currentDialog, setCurrentDialog }}>
            {children}
        </DialogContext.Provider>
    );
}
