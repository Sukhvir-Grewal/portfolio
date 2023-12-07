import { useEffect, useRef, useState } from "react";
import { useDialog } from "@/globalContext/DialogContext";
import dialogsArray from "@/storage/dialogsArray";
import { languageArray } from "@/storage/languageArray";
import Style from "@/styles/Home.module.css";
import Image from "next/image";
import { createRef } from "react";

export default function Skills({ setView, view }) {
    const { setCurrentDialog, setCurrentImage } = useDialog();
    const containerRef = useRef(null);

    const skillData = [
        { name: "c", image: "/images/skills/c.png" },
        { name: "c++", image: "/images/skills/c++.png" },
        { name: "python", image: "/images/skills/python.png" },
        { name: "javaScript", image: "/images/skills/javaScript.png" },
        { name: "nodeJs", image: "/images/skills/nodeJs.png" },
        { name: "reactJs", image: "/images/skills/reactJs.png" },
        { name: "nextJs", image: "/images/skills/nextJs.png" },
        { name: "html", image: "/images/skills/html.png" },
        { name: "css", image: "/images/skills/css.png" },
        { name: "sql", image: "/images/skills/sql.png" },
        { name: "mongoDb", image: "/images/skills/mongoDb.png" },
    ];

    // Create an array of refs
    const skillRefs = useRef(skillData.map(() => createRef()));

    useEffect(() => {
        // Create a flag to check if the component is still mounted
        let isMounted = true;

        const timeoutId = setTimeout(() => {
            if (isMounted && view === "skill") {
                setCurrentDialog(dialogsArray["skill"]["howToOperate"]);
                setCurrentImage(dialogsArray["skill"]["howToOperateImage"]);
            }
        }, 2500);

        /*  Math Stuff which i cant do by myself so used Chat-Gtp to put the images
            at the corner of the circle, i tried to understand it for 3 hours but
            no luck so positionSkills function is good but not mine, i guess that's
            why we have AI now..
        */
        const positionSkills = () => {
            const containerRadius = containerRef.current.offsetWidth / 2;
            const skillOffset = 30; // Adjust this value to reduce the radius
            const radius = containerRadius - skillOffset; // Reduced radius
            const center = { x: containerRadius, y: containerRadius };

            skillRefs.current.forEach((ref, index) => {
                if (!ref.current) return;

                const total = skillData.length;
                const angle = (index / total) * Math.PI * 2;
                const skillRadius = ref.current.offsetWidth / 2;

                const skillX =
                    center.x + radius * Math.cos(angle) - skillRadius;
                const skillY =
                    center.y + radius * Math.sin(angle) - skillRadius;

                ref.current.style.left = `${skillX}px`;
                ref.current.style.top = `${skillY}px`;
            });

            const perContainer = containerRef.current.querySelector(
                ".percentage-container"
            );
            if (perContainer) {
                const perContainerRadius = perContainer.offsetWidth / 2;
                const center = {
                    x: containerRef.current.offsetWidth / 2,
                    y: containerRef.current.offsetHeight / 2,
                };

                perContainer.style.left = `${center.x - perContainerRadius}px`;
                perContainer.style.top = `${center.y - perContainerRadius}px`;
                perContainer.style.position = "absolute";
            }
        };

        positionSkills();

        return () => {
            isMounted = false;
            clearTimeout(timeoutId);
        };
    }, [view]);

    function handleLanguageClick(name) {
        setCurrentDialog(dialogsArray["skill"]["ohh"]);
        setCurrentImage(dialogsArray["skill"]["ohhImage"]);
        const perContainer = document.querySelector(".percentage-container");
        const percentage = languageArray.find(
            (language) => language.name === name
        )?.percentage;
        perContainer.innerHTML = `${percentage}%`;

        const skill = document.querySelectorAll(".skill");
        // Remove skill-shadow class from all images
        document.querySelectorAll(".skill-shadow").forEach((img) => {
            img.classList.remove("skill-shadow");
            img.style.transform = "scale(1)";
        });

        // Add skill-shadow class to the clicked image
        const clickedImage = document.querySelector(
            `.skill img[data-name="${name}"]`
        );
        if (clickedImage) {
            clickedImage.classList.add("skill-shadow");
            clickedImage.style.transform = "scale(1.5)";
        }
    }

    function renderSkills() {
        return skillData.map((skill, index) => (
            <div ref={skillRefs.current[index]} className="skill" key={index}>
                <Image
                    alt={skill.name}
                    onClick={() => handleLanguageClick(skill.name)}
                    src={skill.image}
                    data-name={skill.name}
                    height={50}
                    width={50}
                />
            </div>
        ));
    }

    return (
        <>
            <div className={Style.goBackContainer}>
                <div
                    onClick={() => setView("dashboard")}
                    className={Style.goBack}
                >
                    <Image
                        alt=""
                        className={Style.back}
                        src="/images/back.png"
                        height={50}
                        width={50}
                    />
                </div>
            </div>

            <div className="main-about-container">
                <div className="name-tag-container">
                    <div className="name-tag">&lt;skills&gt;</div>
                </div>

                <div ref={containerRef} className="skills-container">
                    {renderSkills()}
                    <div className="percentage-container">Loading..</div>
                </div>

                <div className="name-tag-container">
                    <div className="name-tag">&lt;/skills&gt;</div>
                </div>
            </div>
        </>
    );
}
