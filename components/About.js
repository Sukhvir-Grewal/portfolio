import { useDialog } from "@/globalContext/DialogContext";
import aboutArray from "@/storage/aboutArray";
import dialogsArray from "@/storage/dialogsArray";
import Style from "@/styles/Home.module.css";
import Image from "next/image";
import { useEffect, useRef } from "react";

export default function About({ setView }) {
    const { setCurrentDialog } = useDialog();
    const dropsContainerRef = useRef(null);
    const aboutContainerRef = useRef(null);

    /*  This does few thing from rendering rain to handle the
        scroll on about container for different dialog
    */
    useEffect(() => {
        let makeItRainInterval;
        let drops = [];

        const makeItRain = () => {
            const bodyWidth = document.body.offsetWidth;

            // Adjust the number of drops as needed
            for (var i = 0; i < 10; i++) {
                const drop = document.createElement("div");
                drop.classList.add("drop");
                drop.style.left = Math.random() * bodyWidth + "px";
                drop.style.animation =
                    "dropAnimation " + (Math.random() * 3 + 2) + "s linear";

                const onAnimationEnd = () => drop.remove();

                drop.addEventListener("animationend", onAnimationEnd);

                dropsContainerRef.current.appendChild(drop);

                drops.push({ element: drop, listener: onAnimationEnd });
            }
        };

        const startRain = () => {
            makeItRain();
            makeItRainInterval = setInterval(makeItRain, 500);
        };

        const stopRain = () => {
            clearInterval(makeItRainInterval);
            drops.forEach(({ element, listener }) => {
                element.removeEventListener("animationend", listener);
                element.remove();
            });
            drops = [];
        };

        const handleVisibilityChange = () => {
            if (document.hidden) {
                stopRain();
            } else {
                startRain();
            }
        };
        const handleScroll = () => {
            const totalScroll =
                aboutContainerRef.current.scrollTop +
                aboutContainerRef.current.clientHeight;
            const maxScrollableHeight = aboutContainerRef.current.scrollHeight;

            if (totalScroll >= maxScrollableHeight) {
                setCurrentDialog(dialogsArray.about["finish"]);
            }
        };

        startRain();
        document.addEventListener("visibilitychange", handleVisibilityChange);

        aboutContainerRef.current.addEventListener("scroll", handleScroll);

        return () => {
            stopRain();

            document.removeEventListener(
                "visibilitychange",
                handleVisibilityChange
            );
            if (aboutContainerRef.current) {
                aboutContainerRef.current.removeEventListener(
                    "scroll",
                    handleScroll
                );
            }
        };
    }, []);

    return (
        <>
            <div ref={dropsContainerRef} className="drops-container"></div>
            <div className={Style.goBackContainer}>
                <div
                    onClick={() => setView("dashboard")}
                    className={Style.goBack}
                >
                    <Image
                        className={Style.back}
                        src="/images/back.png"
                        height={50}
                        width={50}
                        alt=""
                    />
                </div>
            </div>

            <div className="main-about-container">
                <div className="name-tag-container">
                    <div className="name-tag">&lt;about&gt;</div>
                </div>
                <div ref={aboutContainerRef} className="about-container">
                    {aboutArray.map((about, index) => (
                        <p key={index}>
                            {about}
                            <br />
                            <br />
                        </p>
                    ))}
                </div>
                <div className="name-tag-container">
                    <div className="name-tag">&lt;/about&gt;</div>
                </div>
            </div>
        </>
    );
}
