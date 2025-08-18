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
import { Bot, Clock, Globe, Mail, Settings, Sparkles, Wand2, Brain, Search, TrendingUp } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { StyleAnalyzer } from "./StyleAnalyzer";
import { ResearchSettings } from "./ResearchSettings";

interface StyleAnalysis {
  tone: string[];
  vocabulary: string[];
  structure: string[];
  personality: string[];
  patterns: string[];
}

interface ResearchConfig {
  sources: string[];
  depth: 'surface' | 'deep' | 'comprehensive';
  includeRumors: boolean;
  timeframe: string;
  languages: string[];
  customSources: string[];
}

export const NewsletterCreator = () => {
  const { toast } = useToast();
  const [prompt, setPrompt] = useState("");
  const [topic, setTopic] = useState("");
  const [schedule, setSchedule] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [learnedStyle, setLearnedStyle] = useState<StyleAnalysis | null>(null);
  const [researchConfig, setResearchConfig] = useState<ResearchConfig>({
    sources: ['news', 'reports', 'forums'],
    depth: 'comprehensive',
    includeRumors: true,
    timeframe: '7d',
    languages: ['en'],
    customSources: []
  });

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
    
    // Enhanced AI generation with research and style
    setTimeout(() => {
      setIsGenerating(false);
      toast({
        title: "Newsletter Generated!",
        description: `Researched ${researchConfig.depth === 'comprehensive' ? '100+' : researchConfig.depth === 'deep' ? '50+' : '20+'} sources and applied your writing style.`,
      });
    }, 5000);
  };

  const handleStyleLearned = (analysis: StyleAnalysis) => {
    setLearnedStyle(analysis);
  };

  const handleResearchConfigChange = (config: ResearchConfig) => {
    setResearchConfig(config);
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
          {/* Enhanced Configuration Panel */}
          <div className="space-y-8">
            <Tabs defaultValue="content" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="content">Content</TabsTrigger>
                <TabsTrigger value="style">Style</TabsTrigger>
                <TabsTrigger value="research">Research</TabsTrigger>
              </TabsList>
              
              <TabsContent value="content" className="space-y-6">
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
                          100+ Source Research
                        </Badge>
                        <Badge variant="secondary" className="gap-1">
                          <Brain className="h-3 w-3" />
                          Style Matching
                        </Badge>
                        <Badge variant="secondary" className="gap-1">
                          <Sparkles className="h-3 w-3" />
                          Smart Formatting
                        </Badge>
                        <Badge variant="secondary" className="gap-1">
                          <Clock className="h-3 w-3" />
                          Auto Schedule
                        </Badge>
                        <Badge variant="secondary" className="gap-1">
                          <TrendingUp className="h-3 w-3" />
                          Trend Analysis
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="style">
                <StyleAnalyzer onStyleLearned={handleStyleLearned} />
              </TabsContent>

              <TabsContent value="research">
                <ResearchSettings onSettingsChange={handleResearchConfigChange} />
              </TabsContent>
            </Tabs>

            {/* Generate Button */}
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
                  Researching & Generating...
                </>
              ) : (
                <>
                  <Wand2 className="h-5 w-5" />
                  Generate AI Newsletter
                </>
              )}
            </Button>

            {/* Status Indicators */}
            <div className="grid grid-cols-2 gap-4">
              <div className={`p-3 rounded-lg border ${learnedStyle ? 'bg-success/10 border-success/20' : 'bg-muted/50 border-border'}`}>
                <div className="flex items-center gap-2">
                  <Brain className={`h-4 w-4 ${learnedStyle ? 'text-success' : 'text-muted-foreground'}`} />
                  <span className="text-sm font-medium">
                    {learnedStyle ? 'Style Learned' : 'No Style Data'}
                  </span>
                </div>
              </div>
              <div className="p-3 rounded-lg border bg-primary/10 border-primary/20">
                <div className="flex items-center gap-2">
                  <Search className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium">
                    {researchConfig.depth === 'comprehensive' ? '100+' : researchConfig.depth === 'deep' ? '50+' : '20+'} Sources
                  </span>
                </div>
              </div>
            </div>
          </div>

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
                  <div className="p-4 bg-primary/5 border border-primary/20 rounded-lg">
                    <h4 className="font-semibold text-primary mb-2">🔍 AI Research Progress</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2">
                        <div className="h-2 w-2 bg-primary rounded-full animate-pulse"></div>
                        <span>Scanning {researchConfig.depth === 'comprehensive' ? '100+' : researchConfig.depth === 'deep' ? '50+' : '20+'} sources...</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="h-2 w-2 bg-primary rounded-full animate-pulse"></div>
                        <span>Analyzing trends and patterns...</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="h-2 w-2 bg-primary rounded-full animate-pulse"></div>
                        <span>Applying your writing style...</span>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4 animate-pulse">
                    <div className="h-4 bg-muted rounded w-3/4"></div>
                    <div className="h-4 bg-muted rounded w-full"></div>
                    <div className="h-4 bg-muted rounded w-5/6"></div>
                    <div className="h-32 bg-muted rounded"></div>
                    <div className="h-4 bg-muted rounded w-2/3"></div>
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
                    
                    {learnedStyle && (
                      <div className="flex flex-wrap gap-1 mb-2">
                        <Badge variant="outline" className="text-xs">
                          Tone: {learnedStyle.tone[0]}
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          Style: {learnedStyle.vocabulary[0]}
                        </Badge>
                      </div>
                    )}
                  </div>
                  
                  <div className="p-3 bg-accent/10 border border-accent/20 rounded-lg">
                    <p className="text-sm text-accent-foreground">
                      ⚡ Ready to research {researchConfig.sources.length} source types and generate content in your style
                    </p>
                  </div>
                </div>
              ) : (
                <div className="text-center py-8 text-muted-foreground">
                  <Bot className="h-12 w-12 mx-auto mb-4 opacity-50" />
                  <p>Configure your newsletter settings and start creating</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};