import Style from "@/styles/Home.module.css";
import Image from "next/image";
import { useEffect, useState } from "react";
import ImagesArray from "@/storage/ImagesArray";
import Expandable from "./reusable/Expandable";
import SingleExpandable from "./reusable/SingleExpandable";
import { useDialog } from "@/globalContext/DialogContext";
import dialogsArray from "@/storage/dialogsArray";

export default function Project({ setView , view}) {
    const { setCurrentDialog, setCurrentImage } = useDialog();
    const [isExpanded, setIsExpanded] = useState(false);
    const [isSingleExpanded, setIsSingleExpanded] = useState(false);
    const [singleExpandIndex, setSingleExpandIndex] = useState(0);

    useEffect(() => {
        let isMounted = true;
    
        const timeoutId = setTimeout(() => {
            if (isMounted) {
                setCurrentDialog(dialogsArray["project"]["visitIt"]);
                setCurrentImage(dialogsArray["project"]["visitItImage"]);
            }
        }, 3000);
    
        return () => {
            isMounted = false;
            clearTimeout(timeoutId);
        };
    }, []);
    

    function renderProjectImages(count) {
        // Create an array with `count` elements and map over it
        return Array.from({ length: count }, (_, ImageIndex) => (
            <div key={ImageIndex} className="project">
                <h2>{ImagesArray[ImageIndex].name}</h2>
                <Image
                    onClick={() => {
                        setIsSingleExpanded(true);
                        setSingleExpandIndex(ImageIndex);
                    }}
                    src={`/images/projects/${ImagesArray[ImageIndex].image}`}
                    height={1000}
                    width={1000}
                    alt={`Project ${ImageIndex + 1}`}
                    style={{
                        objectFit: "cover",
                        objectPosition: "center",
                        height: "200px",
                        width: "100%",
                        cursor: "pointer",
                    }}
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
                        alt=""
                    />
                </div>
            </div>

            {isExpanded && (
                <>
                    <Expandable setIsExpanded={setIsExpanded} />
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
                            alt=""
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
