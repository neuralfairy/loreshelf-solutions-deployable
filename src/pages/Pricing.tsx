import { CheckCircle, Star, ArrowRight, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "$2,500",
      period: "one-time setup",
      description: "Perfect for small businesses getting started with CRM",
      features: [
        "Basic CRM setup & configuration",
        "Data migration (up to 1,000 contacts)",
        "2 hours of team training",
        "Email & phone support",
        "30-day implementation timeline",
        "Basic reporting setup"
      ],
      notIncluded: [
        "Advanced automation",
        "Custom integrations",
        "Dedicated account manager"
      ],
      cta: "Start with Starter",
      popular: false,
      ctaLink: "https://salescentri.com/pricing/plans-overview"
    },
    {
      name: "Professional",
      price: "$7,500",
      period: "one-time setup",
      description: "Comprehensive solution for growing businesses",
      features: [
        "Complete CRM implementation",
        "Data migration (unlimited contacts)",
        "8 hours of comprehensive training",
        "Custom workflow automation",
        "Advanced reporting & analytics",
        "Email marketing integration",
        "Lead scoring setup",
        "Priority support",
        "60-day implementation timeline",
        "3 months of ongoing support"
      ],
      notIncluded: [
        "Custom API development",
        "White-label solutions"
      ],
      cta: "Choose Professional",
      popular: true,
      ctaLink: "https://salescentri.com/pricing/plans-overview"
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "pricing",
      description: "Tailored solutions for large organizations",
      features: [
        "Full enterprise CRM implementation",
        "Unlimited data migration",
        "Unlimited training & workshops",
        "Custom integrations & APIs",
        "Advanced security & compliance",
        "Dedicated account manager",
        "24/7 priority support",
        "Custom reporting dashboards",
        "Multi-location setup",
        "White-label options",
        "Ongoing optimization",
        "SLA guarantees"
      ],
      notIncluded: [],
      cta: "Contact for Enterprise",
      popular: false,
      ctaLink: "https://salescentri.com/pricing/enterprise-custom"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-dark to-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center fade-in">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Transparent CRM Implementation Pricing
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-primary-foreground/90">
              Choose the perfect plan for your business needs. No hidden fees, no surprises.
            </p>
            <div className="flex justify-center space-x-4 text-primary-foreground/80">
              <div className="flex items-center">
                <CheckCircle className="mr-2" size={20} />
                <span>Money-back guarantee</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="mr-2" size={20} />
                <span>No long-term contracts</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 bg-gradient-to-b from-background to-muted">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <Card key={index} className={`${plan.popular ? 'ring-2 ring-primary shadow-xl scale-105' : ''} card-feature fade-in stagger-${index + 1} relative`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-primary to-primary-light text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold flex items-center">
                      <Star className="mr-1" size={16} />
                      Most Popular
                    </span>
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-center text-foreground">
                    {plan.name}
                  </CardTitle>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">
                      {plan.price}
                    </div>
                    <div className="text-muted-foreground">{plan.period}</div>
                  </div>
                  <p className="text-center text-muted-foreground">
                    {plan.description}
                  </p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start">
                        <CheckCircle className="text-success mr-3 mt-0.5 flex-shrink-0" size={16} />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                    {plan.notIncluded.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start opacity-50">
                        <X className="text-muted-foreground mr-3 mt-0.5 flex-shrink-0" size={16} />
                        <span className="text-sm text-muted-foreground line-through">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <a href={plan.ctaLink} target="_blank" rel="noopener noreferrer">
                    <Button 
                      className={`w-full ${plan.popular ? 'btn-hero' : 'btn-outline'}`}
                    >
                      {plan.cta}
                      <ArrowRight className="ml-2" size={16} />
                    </Button>
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16 fade-in">
              <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-foreground">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-muted-foreground">
                Everything you need to know about our CRM implementation services.
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  question: "How long does CRM implementation take?",
                  answer: "Implementation timelines vary by plan: Starter (30 days), Professional (60 days), Enterprise (90-120 days). We provide detailed project timelines during consultation."
                },
                {
                  question: "Do you provide data migration services?",
                  answer: "Yes, all plans include data migration. Starter plan covers up to 1,000 contacts, while Professional and Enterprise plans include unlimited data migration from any source."
                },
                {
                  question: "What CRM platforms do you work with?",
                  answer: "We work with all major CRM platforms including Salesforce, HubSpot, Pipedrive, Zoho, and custom solutions. Our team will recommend the best fit for your business needs."
                },
                {
                  question: "Is training included in the implementation?",
                  answer: "Yes, comprehensive training is included in all plans. Training hours vary by plan, and we offer ongoing support to ensure your team maximizes CRM potential."
                },
                {
                  question: "What kind of support do you provide post-implementation?",
                  answer: "We provide email and phone support for all plans, with priority support for Professional and Enterprise clients. Enterprise clients also get dedicated account management."
                }
              ].map((faq, index) => (
                <Card key={index} className={`card-elegant fade-in stagger-${(index % 3) + 1}`}>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-foreground mb-3">
                      {faq.question}
                    </h3>
                    <p className="text-muted-foreground">
                      {faq.answer}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary-light text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto fade-in">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl mb-8 text-primary-foreground/90">
              Schedule a consultation to discuss your CRM implementation needs and get a custom quote.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://salescentri.com/get-started/book-demo" target="_blank" rel="noopener noreferrer">
                <Button className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 text-lg px-8 py-4">
                  Schedule Consultation
                  <ArrowRight className="ml-2" size={20} />
                </Button>
              </a>
              <a href="https://salescentri.com/contact/sales-inquiry/request-quote" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 text-lg px-8 py-4">
                  Request Custom Quote
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;