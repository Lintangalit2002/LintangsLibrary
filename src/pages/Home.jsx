import { ThemeToggle } from "@/components/ThemeToggle"
import { StarBackground } from "@/components/StarBackground"
import { Navbar } from "@/components/Navbar"
import { HeroSection } from "@/components/HeroSection"
import { Contact } from "@/components/Contact"
import {ScrollPrompt} from "@/components/ScrollPrompt"


export const Home = () => {
    return <div className="min-h-screen bg-background text-foreground overflow-x-hidden">

        {/*Theme Toggle */}
        <ThemeToggle />
        {/*Background Effects */}
        <StarBackground />
        {/*Navbar */}
        <Navbar />
        {/*Main Content */}
        <main>
            <HeroSection />
            <ScrollPrompt />
        </main>
        
        {/*Footer */}
        <footer>
            <Contact />
        </footer>
    </div>
}