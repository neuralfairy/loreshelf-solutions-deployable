import { Users, Target, Award, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const teamMembers = [
    {
      name: "Sarah Williams",
      role: "Founder & CEO",
      bio: "15+ years in CRM implementation with expertise in enterprise sales transformation.",
      image: "/placeholder-team-1.jpg"
    },
    {
      name: "Michael Rodriguez",
      role: "Lead CRM Consultant",
      bio: "Certified Salesforce architect with 500+ successful implementations.",
      image: "/placeholder-team-2.jpg"
    },
    {
      name: "Jennifer Chen",
      role: "Data Migration Specialist",
      bio: "Expert in complex data migrations and system integrations.",
      image: "/placeholder-team-3.jpg"
    },
    {
      name: "David Thompson",
      role: "Training Director",
      bio: "Specializes in change management and user adoption strategies.",
      image: "/placeholder-team-4.jpg"
    }
  ];

  const values = [
    {
      icon: <Target className="text-primary" size={40} />,
      title: "Results-Driven",
      description: "We focus on measurable outcomes that drive real business growth and ROI for our clients."
    },
    {
      icon: <Users className="text-primary" size={40} />,
      title: "Client-Centric",
      description: "Your success is our success. We build long-term partnerships, not just transactions."
    },
    {
      icon: <Award className="text-primary" size={40} />,
      title: "Excellence",
      description: "We maintain the highest standards in every implementation and continuously improve our processes."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-dark to-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center fade-in">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              About Loreshelf Solutions
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-primary-foreground/90">
              We're CRM implementation experts dedicated to transforming how businesses 
              manage their sales processes and customer relationships.
            </p>
            <div className="flex items-center justify-center space-x-2 text-primary-foreground/80">
              <MapPin size={20} />
              <span>Based in Tacoma, WA • Serving businesses nationwide</span>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gradient-to-b from-background to-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16 fade-in">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-foreground">
              Our Mission
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              To empower businesses with CRM implementations that not only streamline operations 
              but drive sustainable revenue growth and create lasting competitive advantages.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <Card key={index} className={`card-feature fade-in stagger-${index + 1}`}>
                <CardContent className="text-center">
                  <div className="mb-6 flex justify-center">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-foreground">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-foreground">
              Meet Our Expert Team
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our certified CRM specialists bring decades of combined experience 
              to every implementation project.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {teamMembers.map((member, index) => (
              <Card key={index} className={`card-elegant fade-in stagger-${(index % 4) + 1}`}>
                <CardContent className="text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-primary to-primary-light rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold text-primary-foreground">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">
                    {member.name}
                  </h3>
                  <div className="text-primary font-medium mb-3">
                    {member.role}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {member.bio}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-primary-dark to-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 fade-in">
              <h2 className="text-3xl lg:text-5xl font-bold mb-6">
                Our Track Record
              </h2>
              <p className="text-xl text-primary-foreground/90">
                Numbers that speak to our expertise and commitment to client success.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8 text-center">
              {[
                { number: "500+", label: "Successful Implementations" },
                { number: "95%", label: "Client Satisfaction Rate" },
                { number: "25%", label: "Average Revenue Increase" },
                { number: "10+", label: "Years Experience" }
              ].map((stat, index) => (
                <div key={index} className={`fade-in stagger-${index + 1}`}>
                  <div className="text-4xl lg:text-6xl font-bold mb-2 text-accent">
                    {stat.number}
                  </div>
                  <div className="text-primary-foreground/80">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto fade-in">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-foreground">
              Ready to Work With Us?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Let's discuss how our expertise can transform your sales process 
              and drive measurable growth for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://salescentri.com/get-started/book-demo" target="_blank" rel="noopener noreferrer">
                <Button className="btn-hero text-lg px-8 py-4">
                  Schedule Consultation
                  <ArrowRight className="ml-2" size={20} />
                </Button>
              </a>
              <a href="https://salescentri.com/company/about-us/leadership-team" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="text-lg px-8 py-4">
                  Learn More About Us
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;