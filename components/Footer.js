import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useDialog } from "@/globalContext/DialogContext";

export default function Footer({
    view,
    scriptNumber,
    handleDialogUpdateOnClick,
}) {
    const { currentDialog, setCurrentDialog } = useDialog();
    const typingTimeoutRef = useRef(null);

    useEffect(() => {
        const clickAbleContainer = document.querySelector(
            ".main-dialogs-container"
        );
        const textElement = document.getElementById("dialogs");

        const fullText = currentDialog;
        let currentIndex = 0;


        if (typingTimeoutRef.current) {
            clearTimeout(typingTimeoutRef.current);
        }

        textElement.innerHTML = "";
        clickAbleContainer.style.cursor = "auto";

        const handleClick = () => {
            handleDialogUpdateOnClick(view);
        };

        function typeEffect() {
            if (currentIndex < fullText.length) {
                textElement.innerHTML += fullText.charAt(currentIndex);
                currentIndex++;
                typingTimeoutRef.current = setTimeout(typeEffect, 30); // Adjust typing speed
            } else {
                clickAbleContainer.addEventListener("click", handleClick);
                clickAbleContainer.style.cursor = "pointer";
            }
        }

        typeEffect();

        return () => {
            if (typingTimeoutRef.current) {
                clearTimeout(typingTimeoutRef.current);
            }
            clickAbleContainer.removeEventListener("click", handleClick);
        };
    }, [currentDialog, handleDialogUpdateOnClick, view]);

    return (
        <>
            <div className="footer-container">
                <div className="image-container">
                    {/* <Image
                        className="myImg"
                        src="/images/myImg.png"
                        height={400}
                        width={400}
                        alt=""
                        priority
                    /> */}
                </div>

                <div className="main-dialogs-container">
                    <div className="dialogs-container">
                        <p className="dialogs" id="dialogs"></p>
                    </div>
                </div>
            </div>
        </>
    );
}
