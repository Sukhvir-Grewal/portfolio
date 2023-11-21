import Style from "@/styles/Home.module.css";
import Image from "next/image";

export default function Contact({setView}){
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
                    <div className="name-tag">&lt;contact&gt;</div>
                </div>
                
                <div className="contact-container">
                    <div className="contact">Email: &nbsp;<a href="mailto:namedsukhvir@gmail.com">namedsukhvir@gmail.com</a></div>
                    <div className="contact">Phone: &nbsp;<a href="tel:+16479143066">+1&nbsp;(647)&nbsp;914&nbsp;3066</a></div>
                    <div className="contact">LinkedIn: &nbsp;<a href="https://www.linkedin.com/in/sukhvir-dev/">https://www.linkedin.com/in/sukhvir-dev/</a></div>
                    <div className="contact">Git HUB: &nbsp;<a href="https://github.com/Sukhvir-Grewal">https://github.com/Sukhvir-Grewal</a></div>
                </div>

                <div className="name-tag-container">
                    <div className="name-tag">&lt;/contact&gt;</div>
                </div>
            </div>
        </>
    )
}