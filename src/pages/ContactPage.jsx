import { ThemeToggle } from "@/components/ThemeToggle"
import { StarBackground } from "@/components/StarBackground"
import { Navbar } from "@/components/Navbar"
import { ArrowRight, ExternalLink, Github, Linkedin, Mail } from "lucide-react";
import { Contact } from "@/components/Contact";



export const ContactPage = () => {
    return <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        <ThemeToggle />
        <StarBackground />
        <Navbar />
                        
        <Contact />

        
        {/*Footer */}
    </div>
}