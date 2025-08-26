import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Bot, Clock, Globe, Mail, Settings, Sparkles, Wand2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export const NewsletterCreator = () => {
  const { toast } = useToast();
  const [prompt, setPrompt] = useState("");
  const [topic, setTopic] = useState("");
  const [schedule, setSchedule] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerate = async () => {
    if (!prompt.trim()) {
      toast({
        title: "Missing Information",
        description: "Please provide a prompt for your newsletter content.",
        variant: "destructive",
      });
      return;
    }

    setIsGenerating(true);
    
    // Simulate AI generation
    setTimeout(() => {
      setIsGenerating(false);
      toast({
        title: "Newsletter Generated!",
        description: "Your AI newsletter has been created and is ready for review.",
      });
    }, 3000);
  };

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Create Your <span className="text-primary">AI Newsletter</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Describe what you want, and our AI will create, source, and format your newsletter
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Configuration Panel */}
          <Card variant="elevated">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Settings className="h-5 w-5 text-primary" />
                Newsletter Configuration
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="topic">Newsletter Topic</Label>
                <Input
                  id="topic"
                  placeholder="e.g., Weekly Tech Updates, Marketing Insights..."
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="prompt">Content Prompt</Label>
                <Textarea
                  id="prompt"
                  placeholder="Describe what you want in your newsletter. Be specific about topics, tone, audience, and any particular sources or themes you'd like included..."
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  rows={6}
                  className="resize-none"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="schedule">Sending Schedule</Label>
                <Select value={schedule} onValueChange={setSchedule}>
                  <SelectTrigger>
                    <SelectValue placeholder="Choose sending frequency" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="daily">Daily</SelectItem>
                    <SelectItem value="weekly">Weekly</SelectItem>
                    <SelectItem value="monthly">Monthly</SelectItem>
                    <SelectItem value="custom">Custom</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Separator />

              <div className="space-y-3">
                <Label>AI Features</Label>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="gap-1">
                    <Globe className="h-3 w-3" />
                    Auto-Source Content
                  </Badge>
                  <Badge variant="secondary" className="gap-1">
                    <Sparkles className="h-3 w-3" />
                    Smart Formatting
                  </Badge>
                  <Badge variant="secondary" className="gap-1">
                    <Clock className="h-3 w-3" />
                    Schedule Send
                  </Badge>
                </div>
              </div>

              <Button 
                variant="hero" 
                size="lg" 
                className="w-full gap-3"
                onClick={handleGenerate}
                disabled={isGenerating}
              >
                {isGenerating ? (
                  <>
                    <Bot className="h-5 w-5 animate-spin" />
                    Generating Newsletter...
                  </>
                ) : (
                  <>
                    <Wand2 className="h-5 w-5" />
                    Generate Newsletter
                  </>
                )}
              </Button>
            </CardContent>
          </Card>

          {/* Preview Panel */}
          <Card variant="newsletter">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-newsletter-header" />
                Newsletter Preview
              </CardTitle>
            </CardHeader>
            <CardContent>
              {isGenerating ? (
                <div className="space-y-4 animate-pulse">
                  <div className="h-4 bg-muted rounded w-3/4"></div>
                  <div className="h-4 bg-muted rounded w-full"></div>
                  <div className="h-4 bg-muted rounded w-5/6"></div>
                  <div className="h-32 bg-muted rounded"></div>
                  <div className="h-4 bg-muted rounded w-2/3"></div>
                </div>
              ) : prompt ? (
                <div className="space-y-4">
                  <div className="p-4 bg-newsletter-bg border border-newsletter-border rounded-lg">
                    <h3 className="font-semibold text-newsletter-header mb-2">
                      {topic || "Your Newsletter Title"}
                    </h3>
                    <p className="text-sm text-newsletter-text">
                      Based on your prompt: "{prompt.slice(0, 100)}..."
                    </p>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Preview will appear here after generation
                  </div>
                </div>
              ) : (
                <div className="text-center py-8 text-muted-foreground">
                  <Bot className="h-12 w-12 mx-auto mb-4 opacity-50" />
                  <p>Start by entering your newsletter prompt to see a preview</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};