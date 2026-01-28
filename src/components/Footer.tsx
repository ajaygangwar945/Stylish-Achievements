import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-background border-t border-border/50 py-12 px-4">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold gradient-text">Ajay Gangwar</h3>
                        <p className="text-muted-foreground text-sm max-w-xs">
                            Computer Science student and Full Stack Developer passionate about building innovative solutions and AI-powered applications.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <h4 className="font-semibold text-foreground">Quick Links</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><a href="/" className="hover:text-primary transition-colors">Home</a></li>
                            <li><a href="/projects" className="hover:text-primary transition-colors">Projects</a></li>
                            <li><a href="/#about" className="hover:text-primary transition-colors">About</a></li>
                            <li><a href="/#contact" className="hover:text-primary transition-colors">Contact</a></li>
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h4 className="font-semibold text-foreground">Connect</h4>
                        <div className="flex gap-4">
                            <a href="https://github.com/ajaygangwar945" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-accent/50 hover:bg-primary hover:text-white transition-all duration-300" title="GitHub Profile">
                                <Github className="h-5 w-5" />
                            </a>
                            <a href="https://linkedin.com/in/ajaygangwar945" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-accent/50 hover:bg-primary hover:text-white transition-all duration-300" title="LinkedIn Profile">
                                <Linkedin className="h-5 w-5" />
                            </a>
                            <a href="mailto:ajaygangwar945@gmail.com" className="p-2 rounded-full bg-accent/50 hover:bg-primary hover:text-white transition-all duration-300" title="Email Ajay">
                                <Mail className="h-5 w-5" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="pt-8 border-t border-border/20 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
                    <p>© {currentYear} Ajay Gangwar. All rights reserved.</p>
                    <p className="flex items-center gap-1">
                        Made with <Heart className="h-4 w-4 text-red-500 fill-red-500" /> in Bareilly, India
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
