export default function DashBoard({ setView }) {
    const menuOptions = [
        { label: "About Me", view: "about" },
        { label: "Skills", view: "skill" },
        { label: "Project", view: "project" },
        { label: "Contact", view: "contact" },
    ];

    /*  Very simple logic to create options for my menu option-view class will 
        be used for future version to add styling for individual option
    */
        function renderOptions() {
            return menuOptions.map((option) => (
                <div key={option.view} className={`option option-${option.view}`}>
                    <span
                        style={{ cursor: "pointer" }}
                        onClick={() => setView(option.view)}
                    >
                        {option.label}
                    </span>
                </div>
            ));
        }
        

    return (
        <>
            <div className="main-dashBoard-container">
                <div className="dashboard-container">
                    <div className="name-tag-container">
                        <span>&lt;menu&gt;</span>
                    </div>
                    <div className="menu-container">{renderOptions()}</div>
                    <div className="name-tag-container">
                        <span>&lt;/menu&gt;</span>
                    </div>
                </div>
            </div>
        </>
    );
}
