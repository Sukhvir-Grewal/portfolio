export default function DashBoard({ setView }) {
    return (
        <>
            <div className="main-dashBoard-container">
                <div className="left-particles"></div>
                <div className="dashboard-container">
                    <div className="name-tag-container">
                        <span>&lt;menu&gt;</span>
                    </div>
                    <div className="menu-container">
                        <div className="options option-about">
                            <span
                                style={{ cursor: "pointer" }}
                                onClick={() => setView("about")}
                            >
                                About Me
                            </span>
                        </div>
                        <div className="options option-skills">
                            <span
                                style={{ cursor: "pointer" }}
                                onClick={() => setView("skills")}
                            >
                                Skills
                            </span>
                        </div>
                        <div className="options option-projects">
                            <span
                                style={{ cursor: "pointer" }}
                                onClick={() => setView("project")}
                            >
                                Projects
                            </span>
                        </div>
                        <div className="options option-contact">
                            <span
                                style={{ cursor: "pointer" }}
                                onClick={() => setView("contact")}
                            >
                                Contact
                            </span>
                        </div>
                    </div>
                    <div className="name-tag-container">
                        <span>&lt;menu&gt;</span>
                    </div>
                </div>
            </div>
        </>
    );
}
