import Style from "@/styles/Home.module.css";
import Image from "next/image";
import { useForm } from "react-hook-form";
import axios from "axios";

export default function Contact({ setView }) {
    const { register, handleSubmit } = useForm({
        defaultValues: {
            gmail: "",
            message: "",
        },
    });

    function submitForm(data) {
        
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
                            className="input-box"
                            placeholder="Enter Gmail"
                            {...register("gmail")}
                        />
                        <textarea
                            className="tet-box"
                            placeholder="Ask Me Anything"
                            {...register("message")}
                        />
                        <button className="submit-button" type="submit">
                            Send ^^
                        </button>
                    </form>
                </div>

                <div className="name-tag-container">
                    <div className="name-tag">&lt;/contact&gt;</div>
                </div>
            </div>
        </>
    );
}
