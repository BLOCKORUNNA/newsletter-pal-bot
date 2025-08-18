import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Brain, FileText, Lightbulb, TrendingUp, Upload, Zap } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface StyleAnalysis {
  tone: string[];
  vocabulary: string[];
  structure: string[];
  personality: string[];
  patterns: string[];
}

interface StyleAnalyzerProps {
  onStyleLearned: (analysis: StyleAnalysis) => void;
}

export const StyleAnalyzer = ({ onStyleLearned }: StyleAnalyzerProps) => {
  const { toast } = useToast();
  const [sampleText, setSampleText] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysis, setAnalysis] = useState<StyleAnalysis | null>(null);

  const handleAnalyze = async () => {
    if (!sampleText.trim()) {
      toast({
        title: "Missing Sample",
        description: "Please provide a writing sample to analyze your style.",
        variant: "destructive",
      });
      return;
    }

    setIsAnalyzing(true);
    
    // Simulate AI style analysis
    setTimeout(() => {
      const mockAnalysis: StyleAnalysis = {
        tone: ["Professional", "Conversational", "Engaging", "Informative"],
        vocabulary: ["Technical", "Accessible", "Industry-specific", "Clear"],
        structure: ["Well-organized", "Bullet points", "Short paragraphs", "Data-driven"],
        personality: ["Confident", "Helpful", "Direct", "Enthusiastic"],
        patterns: ["Uses examples", "Asks questions", "Provides context", "Clear conclusions"]
      };
      
      setAnalysis(mockAnalysis);
      onStyleLearned(mockAnalysis);
      setIsAnalyzing(false);
      
      toast({
        title: "Style Analysis Complete!",
        description: "Your writing style has been learned and will be applied to newsletters.",
      });
    }, 3000);
  };

  return (
    <Card variant="elevated">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Brain className="h-5 w-5 text-primary" />
          Writing Style Analyzer
        </CardTitle>
        <CardDescription>
          Upload a sample of your writing to train the AI on your unique voice and style
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="sample">Writing Sample</Label>
          <Textarea
            id="sample"
            placeholder="Paste a sample of your writing here (articles, emails, blog posts, etc.). The more text you provide, the better the AI will understand your style..."
            value={sampleText}
            onChange={(e) => setSampleText(e.target.value)}
            rows={8}
            className="resize-none"
          />
          <p className="text-xs text-muted-foreground">
            Minimum 200 words recommended for accurate analysis
          </p>
        </div>

        <div className="flex gap-2">
          <Button 
            variant="default" 
            className="flex-1 gap-2"
            onClick={handleAnalyze}
            disabled={isAnalyzing}
          >
            {isAnalyzing ? (
              <>
                <Brain className="h-4 w-4 animate-pulse" />
                Analyzing Style...
              </>
            ) : (
              <>
                <Zap className="h-4 w-4" />
                Analyze Writing Style
              </>
            )}
          </Button>
          <Button variant="outline" size="icon">
            <Upload className="h-4 w-4" />
          </Button>
        </div>

        {analysis && (
          <>
            <Separator />
            <div className="space-y-4">
              <h4 className="font-semibold flex items-center gap-2">
                <Lightbulb className="h-4 w-4 text-accent" />
                Style Analysis Results
              </h4>
              
              <div className="grid grid-cols-1 gap-4">
                <div>
                  <Label className="text-sm font-medium">Tone & Voice</Label>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {analysis.tone.map((item, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {item}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <Label className="text-sm font-medium">Vocabulary Style</Label>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {analysis.vocabulary.map((item, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {item}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <Label className="text-sm font-medium">Writing Patterns</Label>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {analysis.patterns.map((item, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {item}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-3 bg-success/10 border border-success/20 rounded-lg">
                <p className="text-sm text-success-foreground">
                  ✓ Style profile saved! The AI will now write newsletters in your unique voice.
                </p>
              </div>
            </div>
          </>
        )}
      </CardContent>
    </Card>
  );
};