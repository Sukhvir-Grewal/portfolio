import { languageArray } from "@/storage";
import Style from "@/styles/Home.module.css";
import Image from "next/image";
import { useEffect } from "react";

export default function Skills({ setView }) {
    useEffect(() => {
        const positionSkills = () => {
            const container = document.querySelector(".skills-container");
            const skills = document.querySelectorAll(".skill");
            const containerRadius = container.offsetWidth / 2;
            const skillOffset = 30; // Adjust this value to reduce the radius
            const radius = containerRadius - skillOffset; // Reduced radius
            const center = { x: containerRadius, y: containerRadius };

            skills.forEach((skill, index) => {
                const total = skills.length;
                const angle = (index / total) * Math.PI * 2; // Angle in radians
                const skillRadius = skill.offsetWidth / 2;

                const skillX =
                    center.x + radius * Math.cos(angle) - skillRadius;
                const skillY =
                    center.y + radius * Math.sin(angle) - skillRadius;

                skill.style.left = skillX + "px";
                skill.style.top = skillY + "px";
            });
            const perContainer = document.querySelector(
                ".percentage-container"
            );

            const perContainerRadius = perContainer.offsetWidth / 2;
            perContainer.style.left = center.x - perContainerRadius + "px";
            perContainer.style.top = center.y - perContainerRadius + "px";
            perContainer.style.position = "absolute"; // Ensure it's positioned absolutely
        };

        positionSkills();
    }, []);

    function handleLanguageClick(name) {
        const perContainer = document.querySelector(".percentage-container");
        const percentage = languageArray.find(
            (language) => language.name === name
        )?.percentage;
        perContainer.innerHTML = `${percentage}%`;

        const skill = document.querySelectorAll(".skill");
        // Remove skill-shadow class from all images
        document.querySelectorAll(".skill-shadow").forEach((img) => {
            img.classList.remove("skill-shadow");
            img.style.transform  = "scale(1)"
        });

        // Add skill-shadow class to the clicked image
        const clickedImage = document.querySelector(
            `.skill img[data-name="${name}"]`
        );
        if (clickedImage) {
            clickedImage.classList.add("skill-shadow");
            clickedImage.style.transform  = "scale(1.5)"
        }
    }

    return (
        <>
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
                    />
                </div>
            </div>

            <div className="main-about-container">
                <div className="name-tag-container">
                    <div className="name-tag">&lt;skills&gt;</div>
                </div>

                <div className="skills-container">
                    <div className="skill">
                        <Image
                            onClick={() => handleLanguageClick("c")}
                            src="/images/skills/c.png"
                            data-name="c"
                            height={50}
                            width={50}
                        />
                    </div>
                    <div className="skill">
                        <Image
                            onClick={() => handleLanguageClick("c++")}
                            src="/images/skills/c++.png"
                            data-name="c++"
                            height={50}
                            width={50}
                        />
                    </div>
                    <div className="skill">
                        <Image
                            onClick={() => handleLanguageClick("python")}
                            src="/images/skills/python.png"
                            data-name="python"
                            height={50}
                            width={50}
                        />
                    </div>
                    <div className="skill">
                        <Image
                            onClick={() => handleLanguageClick("javaScript")}
                            src="/images/skills/javaScript.png"
                            data-name="javaScript"
                            height={50}
                            width={50}
                        />
                    </div>
                    <div className="skill">
                        <Image
                            onClick={() => handleLanguageClick("nodeJs")}
                            src="/images/skills/nodeJs.png"
                            data-name="nodeJs"
                            height={50}
                            width={50}
                        />
                    </div>

                    <div className="skill">
                        <Image
                            onClick={() => handleLanguageClick("reactJs")}
                            src="/images/skills/reactJs.png"
                            data-name="reactJs"
                            height={50}
                            width={50}
                        />
                    </div>
                    <div className="skill">
                        <Image
                            onClick={() => handleLanguageClick("nextJs")}
                            src="/images/skills/nextJs.png"
                            data-name="nextJs"
                            height={50}
                            width={50}
                        />
                    </div>
                    <div className="skill">
                        <Image
                            onClick={() => handleLanguageClick("html")}
                            src="/images/skills/html.png"
                            data-name="html"
                            height={50}
                            width={50}
                        />
                    </div>
                    <div className="skill">
                        <Image
                            onClick={() => handleLanguageClick("css")}
                            src="/images/skills/css.png"
                            data-name="css"
                            height={50}
                            width={50}
                        />
                    </div>
                    <div className="skill">
                        <Image
                            onClick={() => handleLanguageClick("sql")}
                            src="/images/skills/sql.png"
                            data-name="sql"
                            height={50}
                            width={50}
                        />
                    </div>

                    <div className="percentage-container">Loading..</div>
                </div>

                <div className="name-tag-container">
                    <div className="name-tag">&lt;/skills&gt;</div>
                </div>
            </div>
        </>
    );
}
