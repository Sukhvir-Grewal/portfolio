import "@/styles/globals.css";
import "@/styles/footer.css";
import "@/styles/dashboard.css";
import "@/styles/about.css";
import "@/styles/project.css";
import "@/styles/contact.css";
import "@/styles/skills.css";

import { DialogProvider } from "@/globalContext/DialogContext";

export default function App({ Component, pageProps }) {
    return (
        <DialogProvider>
            <Component {...pageProps} />
        </DialogProvider>
    );
}
