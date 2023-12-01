import Footer from "@/components/Footer";
import About from "@/components/About";
import Contact from "@/components/Contact";
import DashBoard from "@/components/DashBoard";
import Project from "@/components/Project";
import Skills from "@/components/Skills";
import { useEffect, useState } from "react";
import { useDialog } from "@/globalContext/DialogContext";
import dialogsArray from "@/storage/dialogsArray";

export default function Home() {
    const [view, setView] = useState("dashboard");
    const { currentDialog, setCurrentDialog } = useDialog();

    useEffect(() => {
        renderView();
    }, [view]);

    function renderView() {
        switch (view) {
            case "dashboard":
                return (
                    <>
                        {setCurrentDialog(dialogsArray.dashBoardDialogs[0])}
                        <DashBoard setView={setView} />
                    </>
                );
            case "about":
                return (
                    <>
                        {setCurrentDialog(dialogsArray.about[0])}
                        <About setView={setView} />
                    </>
                );
            case "contact":
                return (
                    <>
                        <Contact setView={setView} />
                    </>
                );
            case "project":
                return (
                    <>
                        {setCurrentDialog(dialogsArray.projects[0])}
                        <Project setView={setView} />
                    </>
                );
            case "skills":
                return (
                    <>
                        {setCurrentDialog(dialogsArray.skills[0])}
                        <Skills setView={setView} />
                    </>
                );
            default:
                return null;
        }
    }
    return (
        <>
            {renderView(view)}
            <Footer />
        </>
    );
}
