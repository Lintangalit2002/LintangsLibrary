export const HeroSection = () => {
    return (<section 
    id="hero" 
    className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
            <div className="container max-w-4xl mx-auto text-center z-10">
                <div className="animate-fade-in-delay-1 space-y-6">
                    <h1 className="font-serif text-4xl md:text-6xl font-bold tracking-tight">
                        <span> Hi, I'm</span>
                        <span> Lintang </span>
                    </h1>

                    <p className = "font-serif">The well travelled engineer. I build and design secure, reliable software systems, from websites to IoT devices. I strive for constant improvement: Both in my chosen field of software development and security, 
                        and in my personal self-realization. Browse my projects to see what I have been up to, or see my opinions on 
                        matters not of the waking world in the Land of Illusion.</p>



                </div>
            </div>
    </section>
    );
};