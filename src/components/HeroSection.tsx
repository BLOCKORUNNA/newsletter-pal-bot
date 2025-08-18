import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Bot, Mail, Zap, Clock, Globe, Sparkles } from "lucide-react";
import heroImage from "@/assets/newsletter-hero.jpg";

export const HeroSection = () => {
  return (
    <section className="relative py-20 px-4 bg-gradient-hero overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-light text-primary text-sm font-medium">
                <Sparkles className="h-4 w-4" />
                AI-Powered Newsletter Creation
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Create <span className="bg-gradient-primary bg-clip-text text-transparent">Intelligent</span> Newsletters That
                <span className="text-accent"> Write Themselves</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Generate comprehensive, personalized newsletters with AI that sources content, 
                formats beautifully, and sends automatically to your audience.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="xl" className="gap-3">
                <Bot className="h-5 w-5" />
                Start Creating
              </Button>
              <Button variant="outline" size="xl" className="gap-3">
                <Mail className="h-5 w-5" />
                View Examples
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-light rounded-lg mb-3">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <p className="font-semibold">AI-Generated</p>
                <p className="text-sm text-muted-foreground">Content Creation</p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-accent-light rounded-lg mb-3">
                  <Globe className="h-6 w-6 text-accent" />
                </div>
                <p className="font-semibold">Smart Sourcing</p>
                <p className="text-sm text-muted-foreground">From Top Sites</p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-success/20 rounded-lg mb-3">
                  <Clock className="h-6 w-6 text-success" />
                </div>
                <p className="font-semibold">Auto-Schedule</p>
                <p className="text-sm text-muted-foreground">Send & Repeat</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <Card variant="gradient" className="p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <img 
                src={heroImage} 
                alt="AI Newsletter Creation Interface" 
                className="w-full h-64 object-cover rounded-lg mb-6"
              />
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-success rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium">AI Agent Active</span>
                </div>
                <h3 className="text-lg font-semibold">Weekly Tech Newsletter</h3>
                <p className="text-sm text-muted-foreground">
                  Automatically sourcing from 50+ tech sites, formatting content, 
                  and preparing for 2,500 subscribers...
                </p>
                <div className="flex justify-between items-center pt-4">
                  <span className="text-xs text-muted-foreground">Next send: Tomorrow 9:00 AM</span>
                  <div className="w-8 h-2 bg-accent rounded-full"></div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};