import { MapPin, Phone, Mail, Clock, ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Contact = () => {
  const contactMethods = [
    {
      icon: <Phone className="text-primary" size={24} />,
      title: "Phone",
      value: "(253) 555-0123",
      description: "Mon-Fri, 8 AM - 6 PM PST",
      link: "tel:+12535550123"
    },
    {
      icon: <Mail className="text-primary" size={24} />,
      title: "Email",
      value: "info@loreshelf.com",
      description: "We'll respond within 24 hours",
      link: "mailto:info@loreshelf.com"
    },
    {
      icon: <MapPin className="text-primary" size={24} />,
      title: "Office",
      value: "Tacoma, WA",
      description: "Serving businesses nationwide",
      link: "#"
    },
    {
      icon: <MessageCircle className="text-primary" size={24} />,
      title: "Live Chat",
      value: "Instant Support",
      description: "Available during business hours",
      link: "https://salescentri.com/contact/support-request/live-chat"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-dark to-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center fade-in">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Get In Touch
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-primary-foreground/90">
              Ready to transform your sales process? Let's discuss your CRM implementation needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://salescentri.com/get-started/book-demo" target="_blank" rel="noopener noreferrer">
                <Button className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 text-lg px-8 py-4">
                  Book Free Consultation
                  <ArrowRight className="ml-2" size={20} />
                </Button>
              </a>
              <a href="https://salescentri.com/get-started/calendly" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 text-lg px-8 py-4">
                  Schedule Call
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 bg-gradient-to-b from-background to-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-foreground">
              Multiple Ways to Reach Us
            </h2>
            <p className="text-xl text-muted-foreground">
              Choose the contact method that works best for you.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {contactMethods.map((method, index) => (
              <Card key={index} className={`card-feature fade-in stagger-${index + 1} hover:scale-105 transition-transform duration-300`}>
                <CardContent className="text-center">
                  <div className="mb-4 flex justify-center">
                    {method.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-foreground">
                    {method.title}
                  </h3>
                  <div className="text-primary font-medium mb-2">
                    {method.value}
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    {method.description}
                  </p>
                  {method.link !== "#" && (
                    <a href={method.link} target={method.link.startsWith('http') ? '_blank' : '_self'} rel="noopener noreferrer">
                      <Button size="sm" variant="outline">
                        Contact Now
                      </Button>
                    </a>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16 fade-in">
              <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-foreground">
                Send Us a Message
              </h2>
              <p className="text-xl text-muted-foreground">
                Tell us about your CRM needs and we'll get back to you within 24 hours.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <Card className="card-elegant fade-in">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-foreground">
                    Get Started Today
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          First Name *
                        </label>
                        <input 
                          type="text" 
                          required
                          className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                          placeholder="John"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Last Name *
                        </label>
                        <input 
                          type="text" 
                          required
                          className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                          placeholder="Doe"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Email Address *
                      </label>
                      <input 
                        type="email" 
                        required
                        className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="john@company.com"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Company Name
                      </label>
                      <input 
                        type="text" 
                        className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="Your Company"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Phone Number
                      </label>
                      <input 
                        type="tel" 
                        className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="(555) 123-4567"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Project Type
                      </label>
                      <select className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary">
                        <option>Select a service</option>
                        <option>New CRM Implementation</option>
                        <option>CRM Optimization</option>
                        <option>Data Migration</option>
                        <option>Training & Support</option>
                        <option>Custom Integration</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Project Details *
                      </label>
                      <textarea 
                        required
                        rows={4}
                        className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="Tell us about your CRM needs, current challenges, and goals..."
                      ></textarea>
                    </div>
                    
                    <a href="https://salescentri.com/get-started/contact" target="_blank" rel="noopener noreferrer">
                      <Button className="btn-hero w-full">
                        Send Message
                        <ArrowRight className="ml-2" size={20} />
                      </Button>
                    </a>
                  </form>
                </CardContent>
              </Card>

              {/* Additional Contact Options */}
              <div className="space-y-8 fade-in">
                <Card className="card-elegant">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4 text-foreground">
                      Prefer to Talk Directly?
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      Schedule a call with one of our CRM experts to discuss your specific needs.
                    </p>
                    <div className="space-y-3">
                      <a href="https://salescentri.com/get-started/book-demo" target="_blank" rel="noopener noreferrer">
                        <Button className="w-full btn-outline">
                          Book Demo Call
                        </Button>
                      </a>
                      <a href="https://salescentri.com/contact/sales-inquiry" target="_blank" rel="noopener noreferrer">
                        <Button className="w-full btn-secondary">
                          Sales Inquiry
                        </Button>
                      </a>
                    </div>
                  </CardContent>
                </Card>

                <Card className="card-elegant">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4 text-foreground">
                      Business Hours
                    </h3>
                    <div className="space-y-2 text-muted-foreground">
                      <div className="flex justify-between">
                        <span>Monday - Friday</span>
                        <span>8:00 AM - 6:00 PM PST</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Saturday</span>
                        <span>9:00 AM - 2:00 PM PST</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Sunday</span>
                        <span>Closed</span>
                      </div>
                    </div>
                    <div className="mt-4 p-3 bg-primary/10 rounded-lg">
                      <p className="text-sm text-primary font-medium">
                        Emergency support available 24/7 for Enterprise clients
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="card-elegant">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4 text-foreground">
                      Quick Support
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      Need immediate assistance? Try these options:
                    </p>
                    <div className="space-y-3">
                      <a href="https://salescentri.com/contact/support-request/live-chat" target="_blank" rel="noopener noreferrer">
                        <Button variant="outline" className="w-full">
                          Live Chat
                        </Button>
                      </a>
                      <a href="https://salescentri.com/contact/support-request/submit-ticket" target="_blank" rel="noopener noreferrer">
                        <Button variant="outline" className="w-full">
                          Submit Support Ticket
                        </Button>
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;