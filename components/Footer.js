import Image from "next/image";
export default function Footer() {
    
    return (
        <>
            <div className="footer-container">
                <div className="image-container">
                    <Image
                    className="myImg"
                        src="/images/myImg.png"
                        height={400}
                        width={400}
                    />
                </div>

                <div className="dialogs-container">
                    <div className="dialogs">
                        <p>
                            Hey, Myself Sukhvir as you can see from domain-name, Nice to meet You Stranger!<br />
                            Think you here to know about me
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}