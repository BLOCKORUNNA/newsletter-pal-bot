import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Bot, 
  Globe, 
  Clock, 
  Mail, 
  Sparkles, 
  BarChart3, 
  Shield, 
  Zap,
  Brain,
  Target,
  Palette,
  Calendar
} from "lucide-react";

const features = [
  {
    icon: Bot,
    title: "AI Content Generation",
    description: "Advanced AI creates comprehensive, engaging newsletter content based on your prompts and preferences.",
    badge: "Core Feature",
    color: "text-primary"
  },
  {
    icon: Globe,
    title: "Smart Content Sourcing",
    description: "Automatically finds and curates relevant information from top websites, forums, and news sources.",
    badge: "Auto-Source",
    color: "text-accent"
  },
  {
    icon: Palette,
    title: "Beautiful Formatting",
    description: "AI formats your content into stunning, professional newsletters with perfect typography and layout.",
    badge: "Design",
    color: "text-success"
  },
  {
    icon: Clock,
    title: "Automated Scheduling",
    description: "Set your preferred intervals and let AI handle the rest - daily, weekly, monthly, or custom schedules.",
    badge: "Automation",
    color: "text-warning"
  },
  {
    icon: Mail,
    title: "Direct Email Delivery",
    description: "Sends beautifully formatted newsletters directly to your subscribers' inboxes automatically.",
    badge: "Email",
    color: "text-primary"
  },
  {
    icon: Brain,
    title: "Learning Algorithm",
    description: "AI learns from your feedback and preferences to improve content quality over time.",
    badge: "Smart",
    color: "text-accent"
  },
  {
    icon: Target,
    title: "Audience Personalization",
    description: "Tailors content based on subscriber interests and engagement patterns for better results.",
    badge: "Personal",
    color: "text-success"
  },
  {
    icon: BarChart3,
    title: "Analytics & Insights",
    description: "Track open rates, click-through rates, and subscriber engagement with detailed analytics.",
    badge: "Analytics",
    color: "text-warning"
  },
  {
    icon: Shield,
    title: "Data Security",
    description: "Enterprise-grade security ensures your content and subscriber data remain protected.",
    badge: "Security",
    color: "text-destructive"
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Generate complete newsletters in minutes, not hours. AI works at superhuman speed.",
    badge: "Speed",
    color: "text-primary"
  },
  {
    icon: Sparkles,
    title: "Custom Prompting",
    description: "Use natural language to describe exactly what you want - AI understands and delivers.",
    badge: "Flexible",
    color: "text-accent"
  },
  {
    icon: Calendar,
    title: "Editorial Calendar",
    description: "Plan and manage your newsletter content strategy with intelligent scheduling suggestions.",
    badge: "Planning",
    color: "text-success"
  }
];

export const FeaturesSection = () => {
  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 gap-1">
            <Sparkles className="h-3 w-3" />
            Powerful Features
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Everything You Need for 
            <span className="text-primary"> AI Newsletter Success</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From content generation to delivery, our AI handles every aspect of newsletter creation 
            so you can focus on growing your audience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              variant="elevated" 
              className="group hover:shadow-strong transition-all duration-300 hover:-translate-y-1"
            >
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary-light group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className={`h-6 w-6 ${feature.color}`} />
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {feature.badge}
                  </Badge>
                </div>
                <CardTitle className="text-lg">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};