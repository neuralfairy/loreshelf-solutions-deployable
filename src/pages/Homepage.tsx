import { ArrowRight, CheckCircle, Star, Users, Target, TrendingUp, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Homepage = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-dark via-primary to-primary-light text-primary-foreground py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center fade-in">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              Transform Your Sales Process with 
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary-light">
                Expert CRM Implementation
              </span>
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-primary-foreground/90 max-w-3xl mx-auto">
              Loreshelf Solutions helps businesses implement and optimize CRMs for improved sales processes, 
              increased revenue, and streamlined operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <a href="https://salescentri.com/get-started/book-demo" target="_blank" rel="noopener noreferrer">
                <Button className="btn-hero text-lg px-8 py-4">
                  Book Your Free Demo
                  <ArrowRight className="ml-2" size={20} />
                </Button>
              </a>
              <a href="https://salescentri.com/get-started/free-trial" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="text-primary-foreground border-primary-foreground/30 hover:bg-primary-foreground hover:text-primary text-lg px-8 py-4">
                  Start Free Trial
                </Button>
              </a>
            </div>
            
            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center items-center gap-8 text-primary-foreground/80">
              <div className="flex items-center gap-2">
                <Star className="text-accent" size={20} />
                <span>4.9/5 Client Rating</span>
              </div>
              <div className="flex items-center gap-2">
                <Users size={20} />
                <span>500+ Businesses Transformed</span>
              </div>
              <div className="flex items-center gap-2">
                <Award size={20} />
                <span>Certified CRM Experts</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-32 h-32 bg-accent/10 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-primary-light/10 rounded-full blur-xl animate-pulse delay-1000"></div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-b from-background to-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-foreground">
              Why Choose Loreshelf Solutions?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We deliver measurable results through proven CRM implementation strategies 
              that transform your sales operations.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: <Target className="text-primary" size={40} />,
                title: "Increased Sales Efficiency",
                description: "Streamline your sales process and reduce time-to-close by up to 40% with optimized CRM workflows.",
                delay: "stagger-1"
              },
              {
                icon: <TrendingUp className="text-primary" size={40} />,
                title: "Revenue Growth",
                description: "Our clients see an average 25% increase in revenue within 6 months of implementation.",
                delay: "stagger-2"
              },
              {
                icon: <Users className="text-primary" size={40} />,
                title: "Expert Support",
                description: "Dedicated CRM specialists with 10+ years experience ensuring your success every step of the way.",
                delay: "stagger-3"
              }
            ].map((benefit, index) => (
              <Card key={index} className={`card-feature fade-in ${benefit.delay}`}>
                <CardContent className="text-center">
                  <div className="mb-6 flex justify-center">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-foreground">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-foreground">
              Trusted by Leading Companies
            </h2>
            <p className="text-xl text-muted-foreground">
              Join hundreds of businesses that have transformed their sales with our CRM expertise.
            </p>
          </div>

          {/* Testimonials */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                quote: "Loreshelf Solutions transformed our sales process completely. We saw a 35% increase in conversion rates within 3 months.",
                author: "Sarah Johnson",
                role: "VP of Sales, TechCorp",
                rating: 5
              },
              {
                quote: "The CRM implementation was seamless and the support team was exceptional. Highly recommend for any growing business.",
                author: "Michael Chen",
                role: "CEO, Innovation Labs",
                rating: 5
              },
              {
                quote: "Outstanding results! Our sales team efficiency improved dramatically and we're closing deals 40% faster.",
                author: "Jennifer Smith",
                role: "Sales Director, Growth Co",
                rating: 5
              }
            ].map((testimonial, index) => (
              <Card key={index} className={`card-elegant fade-in stagger-${index + 1}`}>
                <CardContent>
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="text-accent fill-current" size={16} />
                    ))}
                  </div>
                  <blockquote className="text-muted-foreground mb-4 italic">
                    "{testimonial.quote}"
                  </blockquote>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.author}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary-light text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto fade-in">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">
              Ready to Transform Your Sales Process?
            </h2>
            <p className="text-xl mb-8 text-primary-foreground/90">
              Get started with a free consultation and see how our CRM implementation 
              can drive growth for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://salescentri.com/get-started/book-demo" target="_blank" rel="noopener noreferrer">
                <Button className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 text-lg px-8 py-4">
                  Book Free Consultation
                  <ArrowRight className="ml-2" size={20} />
                </Button>
              </a>
              <a href="https://salescentri.com/pricing" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 text-lg px-8 py-4">
                  View Pricing
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;