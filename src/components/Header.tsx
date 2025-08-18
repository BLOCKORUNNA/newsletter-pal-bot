import { Button } from "@/components/ui/button";
import { Bot, Mail, Settings, User } from "lucide-react";

export const Header = () => {
  return (
    <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <Bot className="h-8 w-8 text-primary" />
              <h1 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                NewsletterAI
              </h1>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center gap-6">
            <Button variant="ghost" size="sm" className="gap-2">
              <Mail className="h-4 w-4" />
              Newsletters
            </Button>
            <Button variant="ghost" size="sm" className="gap-2">
              <Settings className="h-4 w-4" />
              Settings
            </Button>
            <Button variant="ghost" size="sm" className="gap-2">
              <User className="h-4 w-4" />
              Account
            </Button>
          </nav>

          <Button variant="hero" size="sm">
            Create Newsletter
          </Button>
        </div>
      </div>
    </header>
  );
};