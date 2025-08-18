import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Globe, Search, TrendingUp, Database, Newspaper, MessageSquare, X } from "lucide-react";

interface ResearchSettingsProps {
  onSettingsChange: (settings: ResearchConfig) => void;
}

interface ResearchConfig {
  sources: string[];
  depth: 'surface' | 'deep' | 'comprehensive';
  includeRumors: boolean;
  timeframe: string;
  languages: string[];
  customSources: string[];
}

export const ResearchSettings = ({ onSettingsChange }: ResearchSettingsProps) => {
  const [config, setConfig] = useState<ResearchConfig>({
    sources: ['news', 'reports', 'forums'],
    depth: 'comprehensive',
    includeRumors: true,
    timeframe: '7d',
    languages: ['en'],
    customSources: []
  });

  const [newSource, setNewSource] = useState("");

  const sourceTypes = [
    { id: 'news', label: 'News Articles', icon: Newspaper },
    { id: 'reports', label: 'Research Reports', icon: Database },
    { id: 'forums', label: 'Forums & Communities', icon: MessageSquare },
    { id: 'blogs', label: 'Blog Posts', icon: Globe },
    { id: 'social', label: 'Social Media', icon: TrendingUp },
    { id: 'academic', label: 'Academic Papers', icon: Search },
  ];

  const handleSourceToggle = (sourceId: string) => {
    const newSources = config.sources.includes(sourceId)
      ? config.sources.filter(s => s !== sourceId)
      : [...config.sources, sourceId];
    
    const newConfig = { ...config, sources: newSources };
    setConfig(newConfig);
    onSettingsChange(newConfig);
  };

  const addCustomSource = () => {
    if (newSource.trim() && !config.customSources.includes(newSource.trim())) {
      const newConfig = { 
        ...config, 
        customSources: [...config.customSources, newSource.trim()] 
      };
      setConfig(newConfig);
      onSettingsChange(newConfig);
      setNewSource("");
    }
  };

  const removeCustomSource = (source: string) => {
    const newConfig = { 
      ...config, 
      customSources: config.customSources.filter(s => s !== source) 
    };
    setConfig(newConfig);
    onSettingsChange(newConfig);
  };

  const updateConfig = (updates: Partial<ResearchConfig>) => {
    const newConfig = { ...config, ...updates };
    setConfig(newConfig);
    onSettingsChange(newConfig);
  };

  return (
    <Card variant="elevated">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Search className="h-5 w-5 text-primary" />
          Advanced Research Configuration
        </CardTitle>
        <CardDescription>
          Configure how the AI researches and analyzes sources for your newsletters
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Source Types */}
        <div className="space-y-3">
          <Label>Content Sources</Label>
          <div className="grid grid-cols-2 gap-2">
            {sourceTypes.map((source) => {
              const Icon = source.icon;
              const isSelected = config.sources.includes(source.id);
              return (
                <Button
                  key={source.id}
                  variant={isSelected ? "default" : "outline"}
                  size="sm"
                  className="justify-start gap-2"
                  onClick={() => handleSourceToggle(source.id)}
                >
                  <Icon className="h-4 w-4" />
                  {source.label}
                </Button>
              );
            })}
          </div>
        </div>

        <Separator />

        {/* Research Depth */}
        <div className="space-y-2">
          <Label>Research Depth</Label>
          <Select value={config.depth} onValueChange={(value: any) => updateConfig({ depth: value })}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="surface">Surface (20-30 sources)</SelectItem>
              <SelectItem value="deep">Deep (50-75 sources)</SelectItem>
              <SelectItem value="comprehensive">Comprehensive (100+ sources)</SelectItem>
            </SelectContent>
          </Select>
          <p className="text-xs text-muted-foreground">
            {config.depth === 'comprehensive' && "Maximum research coverage with diverse perspectives"}
            {config.depth === 'deep' && "Thorough research with multiple viewpoints"}
            {config.depth === 'surface' && "Quick overview of main topics"}
          </p>
        </div>

        {/* Time Frame */}
        <div className="space-y-2">
          <Label>Time Frame</Label>
          <Select value={config.timeframe} onValueChange={(value) => updateConfig({ timeframe: value })}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1d">Last 24 hours</SelectItem>
              <SelectItem value="3d">Last 3 days</SelectItem>
              <SelectItem value="7d">Last week</SelectItem>
              <SelectItem value="30d">Last month</SelectItem>
              <SelectItem value="all">All time</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Advanced Options */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label>Include Rumors & Speculation</Label>
              <p className="text-xs text-muted-foreground">
                Include unverified reports and industry rumors for comprehensive coverage
              </p>
            </div>
            <Switch
              checked={config.includeRumors}
              onCheckedChange={(checked) => updateConfig({ includeRumors: checked })}
            />
          </div>
        </div>

        <Separator />

        {/* Custom Sources */}
        <div className="space-y-3">
          <Label>Custom Sources</Label>
          <div className="flex gap-2">
            <Input
              placeholder="Add specific website or source..."
              value={newSource}
              onChange={(e) => setNewSource(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && addCustomSource()}
            />
            <Button onClick={addCustomSource} size="sm">
              Add
            </Button>
          </div>
          {config.customSources.length > 0 && (
            <div className="flex flex-wrap gap-1">
              {config.customSources.map((source, index) => (
                <Badge key={index} variant="outline" className="gap-1">
                  {source}
                  <X 
                    className="h-3 w-3 cursor-pointer" 
                    onClick={() => removeCustomSource(source)}
                  />
                </Badge>
              ))}
            </div>
          )}
        </div>

        {/* Research Summary */}
        <div className="p-4 bg-primary/5 border border-primary/20 rounded-lg">
          <h4 className="font-medium text-primary mb-2">Current Configuration</h4>
          <div className="grid grid-cols-2 gap-2 text-sm">
            <div>Sources: {config.sources.length} types</div>
            <div>Depth: {config.depth}</div>
            <div>Timeframe: {config.timeframe}</div>
            <div>Custom: {config.customSources.length} sources</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};