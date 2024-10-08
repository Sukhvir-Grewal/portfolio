import ImagesArray from "@/storage/ImagesArray";
import { Card, CardGroup } from "react-bootstrap";
import { Image } from "react-bootstrap";
import Style from "@/styles/Home.module.css";

export default function SingleExpandable({ setIsSingleExpanded, index }) {

    return (
        <>
            <div className={Style.backDrop} />

            <div className={Style.mainExpandedContainer}>
                <div className={Style.crossContainer}>
                    <Image
                        onClick={() => setIsSingleExpanded(false)}
                        className={Style.cross}
                        src="/images/icons/cross.png"
                        height={50}
                        width={50}
                        alt=""
                    />
                </div>
                <div className={`pattern-container3 ${Style.expandedContainer}`}>
                    <Card className={Style.singleCustomCard}>
                        <div className={Style.imageLanguageContainer}>
                            <div className={Style.singleImageContainer}>
                                <Card.Img
                                    className={Style.singleCustomCardImage}
                                    src={`/images/projects/${ImagesArray[index].image}`}
                                />
                            </div>
                            <div className={Style.mainLanguageBarContainer}>
                                {ImagesArray[index].languages.map(
                                    (language, languageIndex) => (
                                        <div
                                            key={languageIndex}
                                            style={{
                                                width: `${language.percentage}%`,
                                                backgroundColor: "gray",
                                                margin: "5px",
                                                padding: "2px",
                                                paddingLeft: "4px",
                                                animation: `barAnimation${languageIndex} 2s ease`,
                                            }}
                                            className="pattern-container3"
                                        >
                                            <style>
                                                {`@keyframes barAnimation${languageIndex}{
                                                        from{width: 0},
                                                        to{width: ${language.percentage}}
                                                    }`}
                                            </style>
                                            <span key={languageIndex}>
                                                {language.name}
                                            </span>
                                        </div>
                                    )
                                )}
                            </div>
                        </div>
                        <Card.Body className={Style.customCardBody}>
                            <Card.Title style={{ display: "inline-block" }}>
                                <h3 style={{ display: "inline-block" }}>
                                    {ImagesArray[index].name}
                                </h3>
                            </Card.Title>
                            <Card.Text>{ImagesArray[index].about}</Card.Text>
                            <br/>
                            <span><a href={ImagesArray[index].git} target="_blank">Git</a> | <a href={ImagesArray[index].website} target="_blank">Website</a></span>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </>
    );
}
