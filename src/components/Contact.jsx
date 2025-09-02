import {Github, Linkedin, Mail } from "lucide-react";

export const Contact = () => {
    return (         <section>
            <div class="container px-6 py-12 mx-auto">
                <div>
                    <p class="font-medium text-foreground">Contact me</p>

                    <h1 class="mt-2 text-2xl font-semibold text-foreground md:text-3xl ">Get in touch</h1>

                    <p class="mt-3 text-foreground">Emails checked daily.</p>
                </div>

                <div class="grid grid-cols-1 gap-12 mt-10 md:grid-cols-2 lg:grid-cols-3">
                    <div>
                        <span class="inline-block p-3 text-primary rounded-full ">
                            <Mail size={20}/>
                        </span>

                        <h2 class="mt-4 text-lg font-medium text-foreground ">Email</h2>
                        <p class="mt-2 text-foreground ">lintangalit2002@gmail.com</p>
                    </div>

                    <div>
                        <span class="inline-block p-3 text-primary rounded-full  ">
                            <Linkedin size={20}/>
                        </span>

                        <h2 class="mt-4 text-lg font-medium text-foreground ">Linkedin</h2>
                        <p class="mt-2 text-foreground">linkedin.com/in/lintangalit</p>
                    </div>

                    <div>
                        <span class="inline-block p-3  rounded-full text-primary">
                            <Github size={20}/>
                        </span>

                        <h2 class="mt-4 text-lg font-medium text-foreground ">Github</h2>
                        <p class="mt-2 text-foreground">github.com/lintangalit2002</p>
                    </div>
                </div>
            </div>
        </section>
    )
}