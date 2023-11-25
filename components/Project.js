import Style from "@/styles/Home.module.css";
import Image from "next/image";
import { useState } from "react";
import ImagesArray from "@/storage";
import Expandable from "./reusable/Expandable";
import SingleExpandable from "./reusable/SingleExpandable";

export default function Project({ setView }) {
    const [isExpanded, setIsExpanded] = useState(false);
    const [isSingleExpanded, setIsSingleExpanded] = useState(false);
    const [singleExpandIndex, setSingleExpandIndex] = useState(0);

    function renderProjectImages(count) {
        // Create an array with `count` elements and map over it
        return Array.from({ length: count }, (_, index) => (
            <div key={index} className="project">
                <h2>{ImagesArray[index].name}</h2>
                <Image
                    onClick={() => {
                        setIsSingleExpanded(true);
                        setSingleExpandIndex(index);
                    }}
                    src={`/images/projects/${ImagesArray[index].image}`}
                    layout="fill"
                    objectFit="cover"
                    alt={`Project ${index + 1}`}
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
                        className={Style.back}
                        src="/images/back.png"
                        height={50}
                        width={50}
                    />
                </div>
            </div>

            {isExpanded && (
                <>
                    <Expandable
                        setIsExpanded={setIsExpanded}
                        isSingleExpanded={isSingleExpanded}
                        setIsSingleExpanded={setIsSingleExpanded}
                    />
                </>
            )}

            {isSingleExpanded && (
                <>
                    <SingleExpandable
                        setIsSingleExpanded={setIsSingleExpanded}
                        index={singleExpandIndex}
                    />
                </>
            )}

            <div className="main-about-container">
                <div className="name-tag-container">
                    <div className="name-tag">&lt;projects&gt;</div>
                    <div className={Style.goBack}>
                        <Image
                            onClick={() => setIsExpanded(true)}
                            className="expand"
                            src="/images/expand.png"
                            height={40}
                            width={40}
                        />
                    </div>
                </div>

                <div className="projects-container">
                    {renderProjectImages(ImagesArray.length)}
                </div>

                <div className="name-tag-container">
                    <div className="name-tag">&lt;/projects&gt;</div>
                </div>
            </div>
        </>
    );
}
