import ImagesArray from "@/storage";
import { Card, CardGroup } from "react-bootstrap";
import { Image } from "react-bootstrap";
import Style from "@/styles/Home.module.css";
import { useEffect, useRef, useState } from "react";

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
                    />
                </div>
                <div className={Style.expandedContainer}>
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
                                            style={{
                                                width: `${language.percentage}%`,
                                                backgroundColor: "gray",
                                                margin: "5px",
                                                padding: "2px",
                                                animation: "barAnimation 10s ease",
                                            }}
                                        >
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
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </>
    );
}
