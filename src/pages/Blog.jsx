import { ThemeToggle } from "@/components/ThemeToggle"
import { StarBackground } from "@/components/StarBackground"
import { Navbar } from "@/components/Navbar"


export const Blog = () => {
    return <div className="min-h-screen bg-background text-foreground overflow-x-hidden">

        {/*Theme Toggle */}
        <ThemeToggle />
        {/*Background Effects */}
        <StarBackground />
        {/*Navbar */}
        <Navbar />
        {/*Main Content */}
        <p className="font-serif text-4xl md:text-6xl font-bold tracking-tight">Coming Soon</p>
    </div>
}