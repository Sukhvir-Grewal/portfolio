import Image from "next/image";
import { useEffect, useRef } from "react";

export default function DashBoard({ setView }) {
    const menuOptions = [
        { label: "About Me", view: "about" },
        { label: "Skills", view: "skill" },
        { label: "Project", view: "project" },
        { label: "Contact", view: "contact" },
    ];

    const cloudRefs = useRef([]);

    useEffect(() => {
            spawnClouds(4);
    }, []);

    function renderOptions() {
        return menuOptions.map((option) => (
            <div key={option.view} className={`option option-${option.view}`}>
                <span
                    style={{ cursor: "pointer" }}
                    onClick={() => setView(option.view)}
                >
                    {option.label}
                </span>
            </div>
        ));
    }

    function spawnClouds(numberOfClouds) {
        for (let i = 0; i < numberOfClouds; i++) {
            setTimeout(() => {
                const cloudElement = document.createElement("div");
                cloudElement.className = "cloud";
                cloudElement.style.position = "absolute";
                cloudElement.style.top = `${Math.random() * window.innerHeight}px`;
                cloudElement.style.left = `${Math.random() * window.innerWidth}px`; 
                cloudElement.style.zIndex = "-1";
    
                const img = document.createElement("img");
                img.src = "/images/pixelArts/dashBoard/cloudA.png";
                img.style.height = "100px";
                img.style.width = "100px";
    
                cloudElement.appendChild(img);
                const container = document.querySelector(".main-dashBoard-container");
                if (container) {
                        document.querySelector(".main-dashBoard-container").appendChild(cloudElement);
                }
    
                cloudRefs.current.push(cloudElement);
    
                animateCloud(cloudElement);
            }, i * 500); 
        }
    }
    
    

    function animateCloud(cloud) {
        let currentLeft = parseInt(cloud.style.left, 10) || 0;

        function moveCloud() {
            currentLeft += 1;
            cloud.style.left = `${currentLeft}px`;

            if (currentLeft >= window.innerWidth) {
                currentLeft = -100; 
                cloud.style.top = `${Math.random() * window.innerHeight}px`; 
            }

            requestAnimationFrame(moveCloud);
        }

        moveCloud();
    }

    return (
        <>
            <div className="main-dashBoard-container">
                <div className="dashboard-container">
                    <div className="name-tag-container">
                        <span>&lt;menu&gt;</span>
                    </div>
                    <div className="menu-container">{renderOptions()}</div>
                    <div className="name-tag-container">
                        <span>&lt;/menu&gt;</span>
                    </div>
                </div>
            </div>
        </>
    );
}
