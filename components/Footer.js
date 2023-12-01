import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useDialog } from "@/globalContext/DialogContext";

export default function Footer() {
    const { currentDialog, setCurrentDialog } = useDialog();
    const typingTimeoutRef = useRef(null)

    useEffect(() => {
        const textElement = document.getElementById("dialogs");

        const fullText = currentDialog;
        let currentIndex = 0;
        
        if(typingTimeoutRef.current){
            clearTimeout(typingTimeoutRef.current)
        }
        
        textElement.innerHTML = "";

        function typeEffect() {
            if (currentIndex < fullText.length) {
                textElement.innerHTML += fullText.charAt(currentIndex);
                currentIndex++;
                typingTimeoutRef.current = setTimeout(typeEffect, 50); // Adjust typing speed
            }
        }

        typeEffect();

        return()=>{
            if(typingTimeoutRef.current){
                clearTimeout(typingTimeoutRef.current)
            }
        }
    }, [currentDialog]);

    return (
        <>
            <div className="footer-container">
                <div className="image-container">
                    <Image
                        className="myImg"
                        src="/images/myImg.png"
                        height={400}
                        width={400}
                    />
                </div>

                <div className="main-dialogs-container">
                    <div class="dialogs-container">
                        <p class="dialogs" id="dialogs"></p>
                    </div>
                </div>
            </div>
        </>
    );
}
