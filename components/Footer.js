import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useDialog } from "@/globalContext/DialogContext";

export default function Footer({
    view,
    scriptNumber,
    handleDialogUpdateOnClick,
}) {
    const { currentDialog, currentImage, imageRef } = useDialog();
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
            // imageRef.current.classList.add("fadeOut");
            handleDialogUpdateOnClick(view);
            // setTimeout(() => {
                // imageRef.current.classList.remove("fadeOut");
                // imageRef.current.classList.add("fadeIn");
                // setTimeout(() => {
                    // imageRef.current.classList.remove("fadeIn");
                // }, 5000);
            // }, 5000);
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
            <div className="footer-container pattern-container1">

                {currentImage && ( // Render Image only if currentImage is ready to Go
                    <div className="image-container">
                        <Image
                            ref={imageRef}
                            className="myImg"
                            src={currentImage}
                            height={1000}
                            width={1000}
                            alt=""
                            priority
                            />
                    </div>
                )}

                <div className="main-dialogs-container ">
                    <div className="dialogs-container ">
                        <p className="dialogs" id="dialogs"></p>
                    </div>
                </div>
            </div>
        </>
    );
}
