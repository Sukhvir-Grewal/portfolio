export default function DashBoard() {
    return (
        <>
            <div className="main-dashBoard-container">
                <div className="left-particles"></div>
                <div className="dashboard-container">
                    <div className="name-tag-container">
                        <span>&lt;menu&gt;</span>
                    </div>
                    <div className="menu-container">
                        <div className="options option-about"><span>About Me</span></div>
                        <div className="options option-skills"><span>Skills</span></div>
                        <div className="options option-projects"><span>Projects</span></div>
                        <div className="options option-contact"><span>Contact</span></div>
                    </div>
                    <div className="name-tag-container">
                        <span>&lt;menu&gt;</span>
                    </div>
                </div>
            </div>
        </>
    );
}
