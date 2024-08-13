import { useDialog } from "@/globalContext/DialogContext";
import Footer from "@/components/Footer";
import About from "@/components/About";
import Contact from "@/components/Contact";
import DashBoard from "@/components/DashBoard";
import Project from "@/components/Project";
import Skills from "@/components/Skills";
import { useCallback, useEffect, useState } from "react";
import dialogsArray from "@/storage/dialogsArray";

export default function Home() {
    const [view, setView] = useState("dashboard");
    const [lastView, setLastView] = useState("");
    const { setCurrentDialog, setCurrentImage } = useDialog();

    const [numberOfVisits, setNumberOfVisits] = useState({
        dashboard: 1,
        skill: 1,
        contact: 1,
        project: 1,
        about: 1,
    });
    const [numberOfVisitsForImages, setNumberOfVisitsForImages] = useState({
        dashboard: 1,
        skill: 1,
        contact: 1,
        project: 1,
        about: 1,
    });

    // For Future use to add more dialogs
    const [scriptNumber, setScriptNumber] = useState(0);

    useEffect(() => {
        setLastView(view);
        handleDialogUpdate(view);
    }, [view]);

    // This function is to reset the Script whenever we came back from another view
    // and add some other dialogs on return
    function handleDialogUpdate(type) {
        if (
            dialogsArray[type]["script1"] &&
            dialogsArray[type]["script1"].length > 0
        ) {
            setCurrentDialog(dialogsArray[type]["script1"][0]);
            setCurrentImage(dialogsArray[type]["images"][0]);

        }
        if (lastView != "" && view == "dashboard") {
            setCurrentDialog(dialogsArray[lastView]["lastVisit"]);
            setCurrentImage(dialogsArray[lastView]["lastVisitImage"]);
        }
    }

    /*  This function is to handle the different Dialogs update on same views
        and it uses ( CallBack ) function to prevent to add multiple eventlistener
        to same view
    */
    const handleDialogUpdateOnClick = useCallback(
        (type) => {
            const newNumberOfVisits = { ...numberOfVisits };
            const newNumberOfVisitsForImages = { ...numberOfVisitsForImages };
            let dialog = "";
            let image = "";

            if (dialogsArray[type] && dialogsArray[type]["script1"]) {
                dialog = dialogsArray[type]["script1"][newNumberOfVisits[type]];
                image =
                    dialogsArray[type]["images"][
                        newNumberOfVisitsForImages[type]
                    ];

                newNumberOfVisits[type] =
                    (newNumberOfVisits[type] + 1) %
                    dialogsArray[type]["script1"].length;

                newNumberOfVisitsForImages[type] =
                    (newNumberOfVisitsForImages[type] + 1) %
                    dialogsArray[type]["images"].length;
            }

            setNumberOfVisits(newNumberOfVisits);
            setNumberOfVisitsForImages(newNumberOfVisitsForImages);

            setCurrentDialog(dialog);
            // setTimeout(() => {
                setCurrentImage(image);
            // }, 2000);
        },
        [numberOfVisits]
    );

    /*  This optimization was from Chat-GTP 4.0 it removes my logic for using switch
        statement to check which view are we in, now it uses the mapping object to 
        check the view and set it interesting!
    */
    function renderView() {
        const ViewComponent = {
            dashboard: DashBoard,
            about: About,
            contact: Contact,
            project: Project,
            skill: Skills,
        }[view];

        return ViewComponent ? (
            <ViewComponent setView={setView} view={view} />
        ) : null;
    }

    return (
        <>
            {renderView(view)}
            <Footer
                view={view}
                // This is for future use if i want to make more scripts to show
                scriptNumber={scriptNumber}
                handleDialogUpdateOnClick={handleDialogUpdateOnClick}
            />
        </>
    );
}
