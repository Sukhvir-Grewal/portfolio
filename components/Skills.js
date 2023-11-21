import Style from "@/styles/Home.module.css";
import Image from "next/image";

export default function Skills({setView}){
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

                    <div className="expand-container">
                    <Image 
                            className="expand"
                            src="/images/expand.png"
                            height={40}
                            width={40}
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
                </div>

                <div className="name-tag-container">
                    <div className="name-tag">&lt;/skills&gt;</div>
                </div>
            </div>
        </>
    )
}