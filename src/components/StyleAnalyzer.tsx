import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  Brain, 
  FileText, 
  TrendingUp, 
  MessageSquare, 
  Zap,
  CheckCircle,
  Upload,
  Sparkles
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export const StyleAnalyzer = () => {
  const { toast } = useToast();
  const [sampleText, setSampleText] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisProgress, setAnalysisProgress] = useState(0);
  const [analysisComplete, setAnalysisComplete] = useState(false);
  const [styleProfile, setStyleProfile] = useState<any>(null);

  const handleAnalyzeStyle = async () => {
    if (!sampleText.trim()) {
      toast({
        title: "Missing Sample Text",
        description: "Please provide a sample of your writing for analysis.",
        variant: "destructive",
      });
      return;
    }

    setIsAnalyzing(true);
    setAnalysisProgress(0);
    setAnalysisComplete(false);

    // Simulate comprehensive style analysis
    const progressSteps = [
      { step: 20, message: "Analyzing sentence structure..." },
      { step: 40, message: "Identifying vocabulary patterns..." },
      { step: 60, message: "Processing tone and voice..." },
      { step: 80, message: "Learning formatting preferences..." },
      { step: 100, message: "Generating style profile..." }
    ];

    for (const { step, message } of progressSteps) {
      await new Promise(resolve => setTimeout(resolve, 600));
      setAnalysisProgress(step);
      
      if (step === 100) {
        setStyleProfile({
          toneAnalysis: {
            primary: "Professional",
            secondary: "Conversational",
            formality: 7.2,
            enthusiasm: 6.8
          },
          writingPatterns: {
            avgSentenceLength: 18,
            complexSentences: "32%",
            activeVoice: "78%",
            questionsUsed: "Medium"
          },
          vocabularyStyle: {
            technicalTerms: "High",
            industryJargon: "Moderate",
            casualExpressions: "Low",
            uniquePhrases: ["that being said", "it's worth noting", "moving forward"]
          },
          structuralPreferences: {
            paragraphLength: "Medium (3-4 sentences)",
            bulletPoints: "Frequently used",
            numberedLists: "Occasionally",
            headers: "Well-structured"
          }
        });
        setAnalysisComplete(true);
        toast({
          title: "Style Analysis Complete!",
          description: "Your writing patterns have been learned and will be applied to newsletters.",
        });
      }
    }

    setIsAnalyzing(false);
  };

  return (
    <div className="space-y-6">
      <Card variant="elevated">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Brain className="h-5 w-5 text-primary" />
            Writing Style Learning
          </CardTitle>
          <p className="text-sm text-muted-foreground">
            Upload sample text to teach the AI your unique writing style, tone, and patterns
          </p>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="sample-text">Sample Writing (500+ words recommended)</Label>
            <Textarea
              id="sample-text"
              placeholder="Paste your writing samples here. Include emails, articles, or any content that represents your voice and style. The more text you provide, the better the AI will learn your patterns..."
              value={sampleText}
              onChange={(e) => setSampleText(e.target.value)}
              rows={8}
              className="resize-none"
            />
            <div className="text-xs text-muted-foreground">
              Characters: {sampleText.length} | Words: {sampleText.trim().split(/\s+/).length}
            </div>
          </div>

          {isAnalyzing && (
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-primary animate-pulse" />
                <span className="text-sm font-medium">Analyzing your writing style...</span>
              </div>
              <Progress value={analysisProgress} className="w-full" />
            </div>
          )}

          <Button 
            onClick={handleAnalyzeStyle}
            disabled={isAnalyzing || !sampleText.trim()}
            className="w-full gap-2"
            variant="default"
          >
            {isAnalyzing ? (
              <>
                <Brain className="h-4 w-4 animate-pulse" />
                Analyzing Style...
              </>
            ) : (
              <>
                <Upload className="h-4 w-4" />
                Analyze Writing Style
              </>
            )}
          </Button>
        </CardContent>
      </Card>

      {analysisComplete && styleProfile && (
        <Card variant="newsletter">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-success" />
              Your Writing Style Profile
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Tone Analysis */}
            <div>
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <MessageSquare className="h-4 w-4" />
                Tone & Voice Analysis
              </h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm">Formality Level</span>
                    <Badge variant="secondary">{styleProfile.toneAnalysis.formality}/10</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Enthusiasm</span>
                    <Badge variant="secondary">{styleProfile.toneAnalysis.enthusiasm}/10</Badge>
                  </div>
                </div>
                <div className="space-y-2">
                  <Badge className="gap-1">
                    <TrendingUp className="h-3 w-3" />
                    {styleProfile.toneAnalysis.primary}
                  </Badge>
                  <Badge variant="outline" className="gap-1">
                    {styleProfile.toneAnalysis.secondary}
                  </Badge>
                </div>
              </div>
            </div>

            <Separator />

            {/* Writing Patterns */}
            <div>
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <FileText className="h-4 w-4" />
                Writing Patterns
              </h4>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Avg. Sentence Length</span>
                    <span className="font-medium">{styleProfile.writingPatterns.avgSentenceLength} words</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Complex Sentences</span>
                    <span className="font-medium">{styleProfile.writingPatterns.complexSentences}</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Active Voice Usage</span>
                    <span className="font-medium">{styleProfile.writingPatterns.activeVoice}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Questions Used</span>
                    <span className="font-medium">{styleProfile.writingPatterns.questionsUsed}</span>
                  </div>
                </div>
              </div>
            </div>

            <Separator />

            {/* Signature Phrases */}
            <div>
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <Zap className="h-4 w-4" />
                Signature Phrases Detected
              </h4>
              <div className="flex flex-wrap gap-2">
                {styleProfile.vocabularyStyle.uniquePhrases.map((phrase: string, index: number) => (
                  <Badge key={index} variant="outline" className="text-xs">
                    "{phrase}"
                  </Badge>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};