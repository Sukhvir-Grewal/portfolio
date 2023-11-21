import Style from "@/styles/Home.module.css";
import Image from "next/image";

export default function Project({setView}){
    return(
        <>
            <div className={Style.goBackContainer}>
                    <div onClick={() => setView("dashboard")} className={Style.goBack}>
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
                    <div className={Style.goBack}>
                        <Image 
                            className="expand"
                            src="/images/expand.png"
                            height={40}
                            width={40}
                        />
                    </div>
                </div>
                
                <div className="projects-container">
                    <div className="project">a</div>
                    <div className="project">b</div>
                    <div className="project">c</div>
                    <div className="project">d</div>
                    <div className="project">e</div>
                    <div className="project">f</div>
                    <div className="project">g</div>
                </div>

                <div className="name-tag-container">
                    <div className="name-tag">&lt;/projects&gt;</div>
                </div>
            </div>
        </>
    )
}