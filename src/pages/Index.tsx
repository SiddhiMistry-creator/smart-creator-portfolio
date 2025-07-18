import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/ProductCard";
import { TestimonialCard } from "@/components/TestimonialCard";
import { StatCard } from "@/components/StatCard";
import { ArrowRight, Download, Users, Star, Zap, Brain, Clock, Gift } from "lucide-react";

// Import generated images
import notionTemplate from "@/assets/notion-template.jpg";
import automationKit from "@/assets/automation-kit.jpg";
import chatgptPrompts from "@/assets/chatgpt-prompts.jpg";
import techWorkspace from "@/assets/tech-workspace.jpg";

const Index = () => {
  const products = [
    {
      title: "Ultimate Notion Productivity Hub",
      description: "Complete project management and life organization system",
      features: [
        "Project & task management templates",
        "Goal tracking & habit builder",
        "Meeting notes & CRM system",
        "Financial dashboard included"
      ],
      useCase: "Entrepreneurs, freelancers, and teams who want to streamline their entire workflow in one place",
      price: "$29",
      originalPrice: "$49",
      image: notionTemplate,
      downloads: "500+ downloads",
      rating: 5,
      isPremium: true
    },
    {
      title: "AI Automation Toolkit",
      description: "Ready-to-use Zapier workflows and automation templates",
      features: [
        "15+ pre-built automation workflows",
        "Social media content scheduler",
        "Email marketing sequences",
        "Customer onboarding flows"
      ],
      useCase: "Content creators and small business owners looking to automate repetitive tasks",
      price: "$19",
      originalPrice: "$39",
      image: automationKit,
      downloads: "300+ downloads",
      rating: 5
    },
    {
      title: "ChatGPT Prompt Library",
      description: "200+ high-converting prompts for content creation",
      features: [
        "Content writing prompts",
        "Marketing copy templates",
        "Social media post ideas",
        "Email subject line generators"
      ],
      useCase: "Marketers, copywriters, and content creators who want to speed up their creative process",
      price: "$15",
      image: chatgptPrompts,
      downloads: "800+ downloads",
      rating: 5
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Digital Marketer",
      content: "The Notion template completely transformed how I manage my projects. Everything is so organized now!",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b5aa?w=100&h=100&fit=crop&crop=face",
      rating: 5
    },
    {
      name: "Mike Chen",
      role: "Freelance Designer",
      content: "The automation toolkit saved me 10+ hours per week. The Zapier workflows are genius!",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "Content Creator",
      content: "The ChatGPT prompts are a game-changer. My content quality and speed have improved dramatically.",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-background/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            CreatorKit
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#products" className="text-muted-foreground hover:text-foreground transition-colors">Products</a>
            <a href="#testimonials" className="text-muted-foreground hover:text-foreground transition-colors">Reviews</a>
            <a href="#freebie" className="text-muted-foreground hover:text-foreground transition-colors">Free Stuff</a>
            <Button variant="gradient" size="sm">View All Templates</Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <div className="inline-flex items-center gap-2 bg-gradient-secondary px-4 py-2 rounded-full text-sm font-medium mb-6 animate-fade-in">
            <Zap className="w-4 h-4 text-primary" />
            Build smarter, not harder
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 animate-slide-up">
            Here's what I've{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              created so far
            </span>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in">
            Digital templates and automation tools that help creators, entrepreneurs, and teams work more efficiently. 
            No fluff, just results.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-slide-up">
            <Button variant="gradient" size="lg" className="group">
              Try a Free Version
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg">
              View All Templates
            </Button>
          </div>

          {/* Success Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-md mx-auto">
            <StatCard 
              number="1,600+" 
              label="Downloads" 
              icon={<Download className="w-6 h-6 text-white" />} 
            />
            <StatCard 
              number="500+" 
              label="Happy Users" 
              icon={<Users className="w-6 h-6 text-white" />} 
            />
            <StatCard 
              number="5.0" 
              label="Avg Rating" 
              icon={<Star className="w-6 h-6 text-white" />} 
            />
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 px-4 bg-gradient-secondary">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Top Digital Products
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Battle-tested templates and tools that solve real problems. Each one designed 
              to save you hours and help you work smarter.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {products.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What People Are Saying
            </h2>
            <p className="text-lg text-muted-foreground">
              Real results from real users who've transformed their workflows
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* Behind the Build Section */}
      <section className="py-20 px-4 bg-gradient-secondary">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Behind the Build
              </h2>
              <p className="text-lg text-muted-foreground">
                Every template and automation is built using real-world experience from 
                managing my own business and helping others streamline their workflows.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center">
                    <Brain className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-foreground">AI-powered automation workflows</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center">
                    <Zap className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-foreground">Notion database mastery</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center">
                    <Clock className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-foreground">Time-saving automation tools</span>
                </div>
              </div>

              <Button variant="outline">
                Learn About My Process
              </Button>
            </div>
            
            <div className="relative">
              <img 
                src={techWorkspace} 
                alt="Creator workspace with multiple monitors" 
                className="w-full rounded-xl shadow-primary"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Freebie Section */}
      <section id="freebie" className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-3xl mx-auto bg-gradient-primary rounded-2xl p-8 md:p-12 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 transform translate-x-4 -translate-y-4">
              <Gift className="w-24 h-24 text-white/20" />
            </div>
            
            <div className="relative z-10">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Steal My Lazy AI Content Planner
              </h2>
              <p className="text-lg text-white/90 mb-6">
                The exact Notion template I use to plan and create 30 days of content 
                in under 2 hours. Includes AI prompts and automation workflows.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="premium" size="lg" className="bg-white text-primary hover:bg-white/90">
                  Get Free Template
                  <Download className="w-4 h-4" />
                </Button>
                <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">
                  See Preview
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-secondary">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Ready to work smarter?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join hundreds of creators who've streamlined their workflows with these 
            proven templates and automation tools.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="gradient" size="lg">
              Buy Now - $29
            </Button>
            <Button variant="outline" size="lg">
              View All Templates
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-border">
        <div className="container mx-auto text-center">
          <div className="text-lg font-semibold bg-gradient-primary bg-clip-text text-transparent mb-4">
            CreatorKit
          </div>
          <p className="text-muted-foreground text-sm">
            Digital tools for modern creators. Built with ❤️ for productivity.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
