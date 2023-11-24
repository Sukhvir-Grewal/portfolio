import Footer from "@/components/Footer";
import About from "@/components/About";
import Contact from "@/components/Contact";
import DashBoard from "@/components/DashBoard";
import Project from "@/components/Project";
import Skills from "@/components/Skills";
import { useEffect, useState } from "react";

export default function Home() {
    const [view, setView] = useState("dashboard");

    useEffect(()=>{
        renderView();
    }, [view])

    function renderView() {
        switch (view) {
            case "dashboard":
                return <DashBoard setView={setView}/>;
            case "about":
                return <About setView={setView}/>;
            case "contact":
                return <Contact setView={setView}/>;
            case "project":
                return <Project setView={setView}/>;
            case "skills":
                return <Skills setView={setView}/>;
            default:
                return null;
        }
    }
    return (
        <>
            {renderView(view)}
            {/* <Footer /> */}
        </>
    );
}
