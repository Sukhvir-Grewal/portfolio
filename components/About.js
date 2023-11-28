import Style from "@/styles/Home.module.css";
import Image from "next/image";
import { useEffect } from "react";

export default function About({ setView }) {
    useEffect(() => {
        function makeItRain() {
            const dropsContainer = document.querySelector(".drops-container");
            const bodyWidth = document.body.offsetWidth;

            setInterval(() => {
                // Adjust the number of drops as needed
                for (var i = 0; i < 10; i++) {
                    const drop = document.createElement("div");
                    drop.classList.add("drop");
                    drop.style.left = Math.random() * bodyWidth + "px";
                    drop.style.animation =
                        "dropAnimation " + (Math.random() * 3 + 2) + "s linear";

                    // Attach an event listener to remove the drop when animation ends
                    drop.addEventListener("animationend", function () {
                        this.remove();
                    });

                    dropsContainer.appendChild(drop);
                }
            }, 500);
        }

        makeItRain();
    }, []);
    return (
        <>
            <div class="drops-container"></div>
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
                    <div className="name-tag">&lt;about&gt;</div>
                </div>
                <div className="about-container">
                    <p>
                        Hello! As you may already know, my name is Sukhvir
                        Singh. At 21 years old, my life revolves around
                        computers and programming - a passion that extends
                        beyond my academic studies into my everyday life.
                        <br />
                        <br />
                        My journey began back in India, where I first discovered
                        programming. I vividly recall the thrill of running my
                        first 'Hello, World!' program in C language. This early
                        experience sparked my interest, especially in web
                        development, as it offers a tangible way to see the
                        results of my code in real time. Night after night, I
                        immersed myself in learning, gradually becoming a
                        nocturnal enthusiast, driven by my fascination with
                        coding.
                        <br />
                        <br />
                        Over the past four years, I've dedicated myself to
                        programming, working on multiple projects. These
                        experiences, ranging from collaborative college
                        assignments to online ventures with friends, have honed
                        my skills and deepened my understanding of the digital
                        world.
                        <br />
                        <br />
                        My ambition is lofty yet grounded – to excel in my
                        field. I'm well aware that perfection in the
                        ever-evolving realm of technology might be a moving
                        target, but my commitment to strive for excellence is
                        unwavering. My dream is not just to secure my ideal job
                        but to live a life that reflects my passion for
                        programming and continuous learning.
                        <br />
                        <br />
                        Through this portfolio, I invite you to witness my
                        journey, my growth, and my aspirations in the world of
                        computer programming. Let's explore and innovate
                        together.
                        <br />
                        <br />
                    </p>
                </div>
                <div className="name-tag-container">
                    <div className="name-tag">&lt;/about&gt;</div>
                </div>
            </div>
        </>
    );
}
