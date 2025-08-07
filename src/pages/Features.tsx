import { CheckCircle, Settings, BarChart3, Users, Zap, Shield, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Features = () => {
  const features = [
    {
      icon: <Settings className="text-primary" size={40} />,
      title: "Custom CRM Setup",
      description: "Tailored configuration to match your unique business processes and workflow requirements.",
      benefits: ["Custom field configuration", "Workflow automation", "User role management", "Data migration"]
    },
    {
      icon: <BarChart3 className="text-primary" size={40} />,
      title: "Advanced Analytics",
      description: "Comprehensive reporting and analytics to track performance and identify growth opportunities.",
      benefits: ["Real-time dashboards", "Custom reports", "Performance metrics", "Predictive analytics"]
    },
    {
      icon: <Users className="text-primary" size={40} />,
      title: "Team Training",
      description: "Comprehensive training programs to ensure your team maximizes CRM potential.",
      benefits: ["Live training sessions", "Documentation", "Video tutorials", "Ongoing support"]
    },
    {
      icon: <Zap className="text-primary" size={40} />,
      title: "Process Automation",
      description: "Streamline repetitive tasks and focus your team on high-value activities.",
      benefits: ["Lead scoring", "Email automation", "Task assignment", "Follow-up reminders"]
    },
    {
      icon: <Shield className="text-primary" size={40} />,
      title: "Data Security",
      description: "Enterprise-grade security measures to protect your valuable customer data.",
      benefits: ["Data encryption", "Access controls", "Backup systems", "Compliance support"]
    },
    {
      icon: <Users className="text-primary" size={40} />,
      title: "Integration Services",
      description: "Seamless integration with your existing tools and systems.",
      benefits: ["Email platforms", "Marketing tools", "Accounting software", "Custom APIs"]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-dark to-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center fade-in">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Powerful CRM Implementation Features
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-primary-foreground/90">
              Everything you need to transform your sales process and drive sustainable growth.
            </p>
            <a href="https://salescentri.com/solutions/use-case-navigator/demo" target="_blank" rel="noopener noreferrer">
              <Button className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 text-lg px-8 py-4">
                View Interactive Demo
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-gradient-to-b from-background to-muted">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <Card key={index} className={`card-feature fade-in stagger-${(index % 3) + 1}`}>
                <CardHeader>
                  <div className="mb-4">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl font-semibold text-foreground">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6">
                    {feature.description}
                  </p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm">
                        <CheckCircle className="text-success mr-2 flex-shrink-0" size={16} />
                        <span className="text-muted-foreground">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Calculator Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center fade-in">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-foreground">
              Calculate Your ROI
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              See how much revenue growth you can achieve with proper CRM implementation.
            </p>
            <Card className="card-elegant max-w-2xl mx-auto">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Current Monthly Revenue
                      </label>
                      <input 
                        type="number" 
                        placeholder="$50,000"
                        className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Sales Team Size
                      </label>
                      <input 
                        type="number" 
                        placeholder="5"
                        className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                  </div>
                  <div className="text-center p-6 bg-gradient-to-r from-success/10 to-primary/10 rounded-lg">
                    <div className="text-2xl font-bold text-success mb-2">
                      Projected 12-Month ROI: +$150,000
                    </div>
                    <div className="text-muted-foreground">
                      Based on average 25% revenue increase
                    </div>
                  </div>
                  <a href="https://salescentri.com/get-started/contact" target="_blank" rel="noopener noreferrer">
                    <Button className="btn-hero w-full">
                      Get Detailed ROI Analysis
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary-light text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto fade-in">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">
              Ready to Implement These Features?
            </h2>
            <p className="text-xl mb-8 text-primary-foreground/90">
              Start your CRM transformation journey with our expert team today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://salescentri.com/get-started/book-demo" target="_blank" rel="noopener noreferrer">
                <Button className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 text-lg px-8 py-4">
                  Schedule Implementation Call
                  <ArrowRight className="ml-2" size={20} />
                </Button>
              </a>
              <a href="https://salescentri.com/resources/case-studies" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 text-lg px-8 py-4">
                  View Success Stories
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;