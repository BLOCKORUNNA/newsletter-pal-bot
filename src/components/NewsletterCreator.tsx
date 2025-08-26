import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Bot, Clock, Globe, Mail, Settings, Sparkles, Wand2, Brain, Search, FileText, TrendingUp } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { StyleAnalyzer } from "./StyleAnalyzer";
import { ResearchSettings } from "./ResearchSettings";

export const NewsletterCreator = () => {
  const { toast } = useToast();
  const [prompt, setPrompt] = useState("");
  const [topic, setTopic] = useState("");
  const [schedule, setSchedule] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [activeTab, setActiveTab] = useState("content");
  const [generationStatus, setGenerationStatus] = useState("");
  const [researchProgress, setResearchProgress] = useState(0);

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
    setResearchProgress(0);
    
    // Simulate advanced AI generation with research
    const generationSteps = [
      { progress: 15, status: "Analyzing your writing style profile..." },
      { progress: 30, status: "Researching 100+ sources for fresh content..." },
      { progress: 45, status: "Filtering and verifying source credibility..." },
      { progress: 60, status: "Extracting key insights and trends..." },
      { progress: 75, status: "Applying your unique tone and patterns..." },
      { progress: 90, status: "Formatting and optimizing content..." },
      { progress: 100, status: "Newsletter generation complete!" }
    ];

    for (const step of generationSteps) {
      await new Promise(resolve => setTimeout(resolve, 800));
      setResearchProgress(step.progress);
      setGenerationStatus(step.status);
    }
    
    setIsGenerating(false);
    toast({
      title: "Newsletter Generated!",
      description: "Your AI newsletter has been created using 100+ sources and your writing style.",
    });
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
          {/* Configuration Panel with Advanced Tabs */}
          <Card variant="elevated">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Settings className="h-5 w-5 text-primary" />
                AI Newsletter Configuration
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Tabs value={activeTab} onValueChange={setActiveTab}>
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="content" className="gap-1">
                    <FileText className="h-4 w-4" />
                    Content
                  </TabsTrigger>
                  <TabsTrigger value="style" className="gap-1">
                    <Brain className="h-4 w-4" />
                    Style
                  </TabsTrigger>
                  <TabsTrigger value="research" className="gap-1">
                    <Search className="h-4 w-4" />
                    Research
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="content" className="space-y-6 mt-6">
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
                    <Label>Advanced AI Features</Label>
                    <div className="flex flex-wrap gap-2">
                      <Badge className="gap-1 bg-gradient-primary">
                        <Search className="h-3 w-3" />
                        100+ Source Research
                      </Badge>
                      <Badge className="gap-1 bg-gradient-accent">
                        <Brain className="h-3 w-3" />
                        Style Learning
                      </Badge>
                      <Badge variant="secondary" className="gap-1">
                        <TrendingUp className="h-3 w-3" />
                        Trend Analysis
                      </Badge>
                      <Badge variant="secondary" className="gap-1">
                        <Sparkles className="h-3 w-3" />
                        Smart Formatting
                      </Badge>
                      <Badge variant="secondary" className="gap-1">
                        <Clock className="h-3 w-3" />
                        Auto Schedule
                      </Badge>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="style">
                  <StyleAnalyzer />
                </TabsContent>

                <TabsContent value="research">
                  <ResearchSettings />
                </TabsContent>
              </Tabs>

              {isGenerating && (
                <div className="mt-6 space-y-3 p-4 bg-primary-light rounded-lg border">
                  <div className="flex items-center gap-2">
                    <Bot className="h-4 w-4 text-primary animate-pulse" />
                    <span className="text-sm font-medium text-primary">
                      {generationStatus}
                    </span>
                  </div>
                  <div className="w-full bg-background rounded-full h-2">
                    <div 
                      className="bg-gradient-primary h-2 rounded-full transition-all duration-500"
                      style={{ width: `${researchProgress}%` }}
                    />
                  </div>
                  <div className="text-xs text-muted-foreground">
                    Progress: {researchProgress}%
                  </div>
                </div>
              )}

              <Button 
                variant="hero" 
                size="lg" 
                className="w-full gap-3 mt-6"
                onClick={handleGenerate}
                disabled={isGenerating}
              >
                {isGenerating ? (
                  <>
                    <Bot className="h-5 w-5 animate-spin" />
                    Generating with AI Research...
                  </>
                ) : (
                  <>
                    <Wand2 className="h-5 w-5" />
                    Generate Newsletter with AI
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
                <div className="space-y-4">
                  <div className="p-4 bg-primary-light border border-primary/20 rounded-lg">
                    <div className="flex items-center gap-2 mb-3">
                      <Search className="h-4 w-4 text-primary animate-pulse" />
                      <span className="text-sm font-medium text-primary">AI Research in Progress</span>
                    </div>
                    <div className="space-y-3">
                      <div className="flex justify-between text-xs">
                        <span>Sources researched:</span>
                        <span className="font-medium">{Math.floor(researchProgress * 1.2)}/100+</span>
                      </div>
                      <div className="flex justify-between text-xs">
                        <span>Style analysis:</span>
                        <span className="font-medium">{researchProgress > 50 ? 'Complete' : 'Processing...'}</span>
                      </div>
                      <div className="flex justify-between text-xs">
                        <span>Content generation:</span>
                        <span className="font-medium">{researchProgress > 80 ? 'Finalizing' : 'Pending...'}</span>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2 animate-pulse">
                    <div className="h-4 bg-muted rounded w-3/4"></div>
                    <div className="h-4 bg-muted rounded w-full"></div>
                    <div className="h-4 bg-muted rounded w-5/6"></div>
                    <div className="h-32 bg-muted rounded"></div>
                  </div>
                </div>
              ) : prompt ? (
                <div className="space-y-4">
                  <div className="p-4 bg-newsletter-bg border border-newsletter-border rounded-lg">
                    <h3 className="font-semibold text-newsletter-header mb-2">
                      {topic || "Your Newsletter Title"}
                    </h3>
                    <p className="text-sm text-newsletter-text mb-3">
                      Based on your prompt: "{prompt.slice(0, 100)}..."
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="text-xs">
                        AI-Powered Research
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        Style-Matched Writing
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        100+ Sources
                      </Badge>
                    </div>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Your personalized newsletter will appear here after AI generation completes. The system will research 100+ sources and apply your writing style.
                  </div>
                </div>
              ) : (
                <div className="text-center py-8 text-muted-foreground">
                  <Bot className="h-12 w-12 mx-auto mb-4 opacity-50" />
                  <p className="mb-2">Configure your AI newsletter settings</p>
                  <p className="text-xs">Use the tabs to set up content, style learning, and research preferences</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};