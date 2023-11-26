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
                            src="/images/skills/c.png"
                            height={50}
                            width={50}
                        />
                    </div>
                    <div className="skill">
                        <Image
                            src="/images/skills/c++.png"
                            height={50}
                            width={50}
                        />
                    </div>
                    <div className="skill">
                        <Image
                            src="/images/skills/python.png"
                            height={50}
                            width={50}
                        />
                    </div>
                    <div className="skill">
                        <Image
                            src="/images/skills/javaScript.png"
                            height={50}
                            width={50}
                        />
                    </div>
                    <div className="skill">
                        <Image
                            src="/images/skills/nodeJs.png"
                            height={50}
                            width={50}
                        />
                    </div>

                    <div className="skill">
                        <Image
                            src="/images/skills/reactJs.png"
                            height={50}
                            width={50}
                        />
                    </div>
                    <div className="skill">
                        <Image
                            src="/images/skills/nextJs.png"
                            height={50}
                            width={50}
                        />
                    </div>
                    <div className="skill">
                        <Image
                            src="/images/skills/html.png"
                            height={50}
                            width={50}
                        />
                    </div>
                    <div className="skill">
                        <Image
                            src="/images/skills/css.png"
                            height={50}
                            width={50}
                        />
                    </div>
                    <div className="skill">
                        <Image
                            src="/images/skills/sql.png"
                            height={50}
                            width={50}
                        />
                    </div>
                    <div className="percentage-container"></div>
                </div>

                <div className="name-tag-container">
                    <div className="name-tag">&lt;/skills&gt;</div>
                </div>
            </div>
        </>
    );
}
