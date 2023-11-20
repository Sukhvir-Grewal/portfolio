import Style from "@/styles/Home.module.css";
import Image from "next/image";

export default function Project(){
    return(
        <>
            <div className={Style.goBackContainer}>
                    <div className={Style.goBack}>
                        <Image 
                            className={Style.back}
                            src='/images/back.png'
                            height={50}
                            width={50}
                        />
                    </div>
            </div>

            <div className="main-about-container">
                <div className="name-tag-container">
                    <div className="name-tag">&lt;projects&gt;</div>
                </div>
                
                <div className="projects-container">
                    <div className="project"></div>
                    <div className="project"></div>
                    <div className="project"></div>
                </div>

                <div className="name-tag-container">
                    <div className="name-tag">&lt;/projects&gt;</div>
                </div>
            </div>
        </>
    )
}