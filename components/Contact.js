import { useDialog } from "@/globalContext/DialogContext";
import Style from "@/styles/Home.module.css";
import Image from "next/image";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useEffect, useState } from "react";
import dialogsArray from "@/storage/dialogsArray";

export default function Contact({ setView }) {
    const [showLoading, setShowLoading] = useState(false);
    const { setCurrentDialog } = useDialog();

    useEffect(() => {
        if (showLoading) {
            const loadingContainer =
                document.querySelector(".loading-container");
            const formContainer = document.querySelector(".form-container");

            const loadingIcon = document.querySelector(".loadingIcon");
            const tickIcon = document.querySelector(".tick");

            loadingContainer.style.display = "block";
            loadingContainer.style.display = "grid";
            formContainer.style.filter = "blur(5px)";
            setCurrentDialog(dialogsArray.contact['loading'])
            
            setTimeout(() => {
                loadingIcon.style.display = "none";
                tickIcon.style.display = "block";
                tickIcon.classList.add("tickExplosion");
                setCurrentDialog(dialogsArray.contact['sent'])
            }, 1500);
            
            setTimeout(() => {
                loadingIcon.style.display = "block";
                tickIcon.style.display = "none";
                loadingContainer.style.display = "none";
                formContainer.style.filter = "blur(0px)";
            }, 3000);
            setShowLoading(false);
        }
    }, [showLoading]);

    const { register, handleSubmit, reset } = useForm({
        defaultValues: {
            gmail: "",
            message: "",
        },
    });

    function submitForm(data) {
        reset();
        setShowLoading(true);
        axios
            .post("/api/sendEmail", data)
            .then((response) => {
                console.log("email send successfully");
            })
            .catch((error) => {
                console.log("Error sending email", error);
            });
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

            <div className="main-about-container">
                <div className="name-tag-container">
                    <div className="name-tag">&lt;contact&gt;</div>
                </div>

                <div className="main-form-container">
                    <form
                        className="form-container"
                        onSubmit={handleSubmit(submitForm)}
                    >
                        <input
                            required
                            className="input-box"
                            placeholder="Enter Gmail"
                            {...register("gmail")}
                        />
                        <textarea
                            required
                            className="tet-box"
                            placeholder="Ask Me Anything"
                            {...register("message")}
                        />
                        <button className="submit-button" type="submit">
                            Send ^^
                        </button>
                    </form>
                    <div className="loading-container">
                        <i
                            class="loadingIcon fa-solid fa-circle-notch fa-spin "
                            style={{
                                fontSize: "40px",
                                color: "lightgreen",
                                textShadow:
                                    "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000",
                            }}
                        ></i>
                        <i
                            class="tick fa-solid fa-check"
                            style={{
                                fontSize: "40px",
                                color: "lightgreen",
                                display: "none",
                                textShadow:
                                    "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000",
                            }}
                        ></i>
                    </div>
                </div>

                <div className="name-tag-container">
                    <div className="name-tag">&lt;/contact&gt;</div>
                </div>
            </div>
        </>
    );
}
