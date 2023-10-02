import EarthMotion from "../components/contact/earth";
import ContactForm from "../components/contact/form";
import StarsCanvas from "../components/contact/stars";

export default function Page() {
    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="flex w-2/3">
                <ContactForm />

                <EarthMotion />
            </div>

            <StarsCanvas />
        </div>
    )
}