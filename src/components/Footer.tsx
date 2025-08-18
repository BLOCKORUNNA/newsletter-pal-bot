import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Bot, Mail, Twitter, Github, Linkedin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-muted/50 border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Bot className="h-6 w-6 text-primary" />
              <h3 className="text-lg font-bold">NewsletterAI</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              AI-powered newsletter creation and automation platform. 
              Create, source, and send beautiful newsletters effortlessly.
            </p>
            <div className="flex gap-2">
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Github className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Linkedin className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Product */}
          <div className="space-y-4">
            <h4 className="font-semibold">Product</h4>
            <div className="space-y-2 text-sm">
              <div><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Features</a></div>
              <div><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Pricing</a></div>
              <div><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Templates</a></div>
              <div><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Integrations</a></div>
            </div>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h4 className="font-semibold">Resources</h4>
            <div className="space-y-2 text-sm">
              <div><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Documentation</a></div>
              <div><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">API Reference</a></div>
              <div><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Tutorials</a></div>
              <div><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Blog</a></div>
            </div>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h4 className="font-semibold">Support</h4>
            <div className="space-y-2 text-sm">
              <div><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Help Center</a></div>
              <div><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Contact Us</a></div>
              <div><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Status</a></div>
              <div><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Community</a></div>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span>© 2024 NewsletterAI. All rights reserved.</span>
            <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms</a>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Mail className="h-4 w-4" />
            <span>Built for creators, by creators</span>
          </div>
        </div>
      </div>
    </footer>
  );
};