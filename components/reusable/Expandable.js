import ImagesArray from "@/storage";
import { Card, CardGroup } from "react-bootstrap";
import { Image } from "react-bootstrap";
import Style from "@/styles/Home.module.css";

export default function Expandable({ setIsExpanded }) {
    return (
        <>
            <div className={Style.backDrop} />

            <div className={Style.mainExpandedContainer}>
                <div className={Style.crossContainer}>
                    <Image
                        onClick={() => setIsExpanded(false)}
                        className={Style.cross}
                        src="/images/icons/cross.png"
                        height={50}
                        width={50}
                    />
                </div>
                <div className={Style.expandedContainer}>
                    <CardGroup style={{ display: "flex", flexWrap: "wrap" }}>
                        {Array.from(
                            { length: ImagesArray.length },
                            (_, index) => (
                                <Card className={Style.customCard}>
                                    <Card.Img
                                        style={{
                                            objectFit: "cover",
                                            objectPosition: "center",
                                            height: "200px",
                                            width: "100%",
                                        }}
                                        src={`/images/projects/${ImagesArray[index].image}`}
                                    />
                                    <Card.Body className={Style.customCardBody}>
                                        <Card.Title>
                                            <h3>{ImagesArray[index].name}</h3>
                                        </Card.Title>
                                        <Card.Text>
                                            {ImagesArray[index].about}
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            )
                        )}
                    </CardGroup>
                </div>
            </div>
        </>
    );
}
