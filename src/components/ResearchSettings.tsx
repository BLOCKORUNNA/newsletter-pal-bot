import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { 
  Search, 
  Globe, 
  Newspaper, 
  FileText, 
  TrendingUp,
  BookOpen,
  MessageCircle,
  Users,
  Zap,
  Filter,
  Plus,
  X,
  Settings
} from "lucide-react";

export const ResearchSettings = () => {
  const [researchDepth, setResearchDepth] = useState([100]);
  const [timeframe, setTimeframe] = useState("7days");
  const [sourceTypes, setSourceTypes] = useState({
    news: true,
    blogs: true,
    forums: true,
    reports: true,
    social: false,
    academic: false
  });
  const [customSources, setCustomSources] = useState<string[]>([]);
  const [newSource, setNewSource] = useState("");
  const [credibilityFilter, setCredibilityFilter] = useState([7]);
  const [languageFilter, setLanguageFilter] = useState("all");

  const addCustomSource = () => {
    if (newSource.trim() && !customSources.includes(newSource.trim())) {
      setCustomSources([...customSources, newSource.trim()]);
      setNewSource("");
    }
  };

  const removeCustomSource = (source: string) => {
    setCustomSources(customSources.filter(s => s !== source));
  };

  const handleSourceTypeChange = (type: string, enabled: boolean) => {
    setSourceTypes(prev => ({ ...prev, [type]: enabled }));
  };

  return (
    <div className="space-y-6">
      <Card variant="elevated">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Search className="h-5 w-5 text-primary" />
            Research Configuration
          </CardTitle>
          <p className="text-sm text-muted-foreground">
            Configure how the AI researches and sources content for your newsletters
          </p>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Research Depth */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <Label>Research Depth</Label>
              <Badge variant="secondary" className="gap-1">
                <FileText className="h-3 w-3" />
                {researchDepth[0]} Sources
              </Badge>
            </div>
            <Slider
              value={researchDepth}
              onValueChange={setResearchDepth}
              max={200}
              min={10}
              step={10}
              className="w-full"
            />
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>Quick (10)</span>
              <span>Standard (50)</span>
              <span>Comprehensive (100)</span>
              <span>Deep (200)</span>
            </div>
          </div>

          <Separator />

          {/* Source Types */}
          <div className="space-y-3">
            <Label className="flex items-center gap-2">
              <Globe className="h-4 w-4" />
              Source Types
            </Label>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Newspaper className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">News Sites</span>
                  </div>
                  <Switch
                    checked={sourceTypes.news}
                    onCheckedChange={(checked) => handleSourceTypeChange('news', checked)}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <BookOpen className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">Industry Blogs</span>
                  </div>
                  <Switch
                    checked={sourceTypes.blogs}
                    onCheckedChange={(checked) => handleSourceTypeChange('blogs', checked)}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <MessageCircle className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">Forums & Communities</span>
                  </div>
                  <Switch
                    checked={sourceTypes.forums}
                    onCheckedChange={(checked) => handleSourceTypeChange('forums', checked)}
                  />
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <FileText className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">Research Reports</span>
                  </div>
                  <Switch
                    checked={sourceTypes.reports}
                    onCheckedChange={(checked) => handleSourceTypeChange('reports', checked)}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">Social Media</span>
                  </div>
                  <Switch
                    checked={sourceTypes.social}
                    onCheckedChange={(checked) => handleSourceTypeChange('social', checked)}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">Academic Papers</span>
                  </div>
                  <Switch
                    checked={sourceTypes.academic}
                    onCheckedChange={(checked) => handleSourceTypeChange('academic', checked)}
                  />
                </div>
              </div>
            </div>
          </div>

          <Separator />

          {/* Timeframe */}
          <div className="space-y-2">
            <Label>Research Timeframe</Label>
            <Select value={timeframe} onValueChange={setTimeframe}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="24hours">Last 24 Hours</SelectItem>
                <SelectItem value="3days">Last 3 Days</SelectItem>
                <SelectItem value="7days">Last Week</SelectItem>
                <SelectItem value="30days">Last Month</SelectItem>
                <SelectItem value="90days">Last 3 Months</SelectItem>
                <SelectItem value="all">All Time</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Separator />

          {/* Credibility Filter */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <Label className="flex items-center gap-2">
                <Filter className="h-4 w-4" />
                Credibility Filter
              </Label>
              <Badge variant="outline">
                {credibilityFilter[0]}/10 Min Score
              </Badge>
            </div>
            <Slider
              value={credibilityFilter}
              onValueChange={setCredibilityFilter}
              max={10}
              min={1}
              step={1}
              className="w-full"
            />
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>Any Source (1)</span>
              <span>Verified (7)</span>
              <span>Premium Only (10)</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Custom Sources */}
      <Card variant="newsletter">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Settings className="h-5 w-5 text-newsletter-header" />
            Custom Sources
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex gap-2">
            <Input
              placeholder="Add custom source (e.g., specific website, blog, etc.)"
              value={newSource}
              onChange={(e) => setNewSource(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && addCustomSource()}
              className="flex-1"
            />
            <Button onClick={addCustomSource} size="sm" className="gap-1">
              <Plus className="h-4 w-4" />
              Add
            </Button>
          </div>

          {customSources.length > 0 && (
            <div className="space-y-2">
              <Label>Custom Sources ({customSources.length})</Label>
              <div className="flex flex-wrap gap-2">
                {customSources.map((source, index) => (
                  <Badge key={index} variant="outline" className="gap-1 pr-1">
                    {source}
                    <button
                      onClick={() => removeCustomSource(source)}
                      className="ml-1 hover:bg-destructive/20 rounded-full p-0.5"
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </Badge>
                ))}
              </div>
            </div>
          )}

          {/* Research Capabilities Badge */}
          <div className="pt-4 border-t">
            <div className="flex flex-wrap gap-2">
              <Badge className="gap-1 bg-gradient-primary">
                <Zap className="h-3 w-3" />
                AI-Powered Research
              </Badge>
              <Badge variant="secondary" className="gap-1">
                <Search className="h-3 w-3" />
                Real-time Sourcing
              </Badge>
              <Badge variant="secondary" className="gap-1">
                <Filter className="h-3 w-3" />
                Smart Filtering
              </Badge>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};