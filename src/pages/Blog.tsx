import { Calendar, User, ArrowRight, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Blog = () => {
  const featuredPost = {
    title: "5 Signs Your Business Needs CRM Implementation Now",
    excerpt: "Discover the key indicators that signal it's time to implement a CRM system and how it can transform your sales process.",
    author: "Sarah Williams",
    date: "January 15, 2024",
    readTime: "8 min read",
    category: "CRM Strategy",
    image: "/placeholder-blog-featured.jpg"
  };

  const blogPosts = [
    {
      title: "How to Choose the Right CRM Platform for Your Business",
      excerpt: "A comprehensive guide to evaluating CRM platforms and finding the perfect fit for your organization.",
      author: "Michael Rodriguez",
      date: "January 10, 2024",
      readTime: "6 min read",
      category: "Platform Selection"
    },
    {
      title: "Data Migration Best Practices for CRM Implementation",
      excerpt: "Essential strategies to ensure smooth data migration without losing critical customer information.",
      author: "Jennifer Chen",
      date: "January 5, 2024",
      readTime: "7 min read",
      category: "Data Migration"
    },
    {
      title: "Measuring ROI from Your CRM Implementation",
      excerpt: "Learn how to track and measure the return on investment from your CRM system implementation.",
      author: "David Thompson",
      date: "December 28, 2023",
      readTime: "5 min read",
      category: "ROI Analysis"
    },
    {
      title: "Common CRM Implementation Mistakes to Avoid",
      excerpt: "Avoid these costly mistakes that can derail your CRM implementation project.",
      author: "Sarah Williams",
      date: "December 22, 2023",
      readTime: "9 min read",
      category: "Best Practices"
    },
    {
      title: "Training Your Team for CRM Success",
      excerpt: "Effective strategies for getting your team onboard and maximizing CRM adoption.",
      author: "David Thompson",
      date: "December 15, 2023",
      readTime: "6 min read",
      category: "Training"
    },
    {
      title: "Integrating Your CRM with Existing Business Tools",
      excerpt: "How to seamlessly connect your CRM with marketing automation, accounting, and other business systems.",
      author: "Michael Rodriguez",
      date: "December 8, 2023",
      readTime: "8 min read",
      category: "Integration"
    }
  ];

  const categories = [
    "All Posts",
    "CRM Strategy",
    "Platform Selection", 
    "Data Migration",
    "Best Practices",
    "Training",
    "Integration",
    "ROI Analysis"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-dark to-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center fade-in">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              CRM Implementation Insights
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-primary-foreground/90">
              Expert advice, best practices, and thought leadership to help you 
              succeed with your CRM implementation journey.
            </p>
            <a href="https://salescentri.com/resources/tutorials-webinars" target="_blank" rel="noopener noreferrer">
              <Button className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 text-lg px-8 py-4">
                Watch Webinars
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-20 bg-gradient-to-b from-background to-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 fade-in">
              <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-foreground">
                Featured Article
              </h2>
              <p className="text-xl text-muted-foreground">
                Our latest insights on CRM implementation and sales optimization.
              </p>
            </div>

            <Card className="card-elegant max-w-4xl mx-auto fade-in">
              <CardContent className="p-0">
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="bg-gradient-to-br from-primary/10 to-accent/10 p-8 lg:p-12 flex items-center">
                    <div>
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-4">
                        <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
                          {featuredPost.category}
                        </span>
                        <div className="flex items-center">
                          <Calendar size={16} className="mr-1" />
                          {featuredPost.date}
                        </div>
                        <div className="flex items-center">
                          <Clock size={16} className="mr-1" />
                          {featuredPost.readTime}
                        </div>
                      </div>
                      <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
                        {featuredPost.title}
                      </h3>
                      <p className="text-muted-foreground mb-6">
                        {featuredPost.excerpt}
                      </p>
                      <div className="flex items-center text-sm text-muted-foreground mb-6">
                        <User size={16} className="mr-2" />
                        <span>By {featuredPost.author}</span>
                      </div>
                      <a href="https://salescentri.com/resources/case-studies" target="_blank" rel="noopener noreferrer">
                        <Button className="btn-hero">
                          Read Full Article
                          <ArrowRight className="ml-2" size={16} />
                        </Button>
                      </a>
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-primary/5 to-accent/5 flex items-center justify-center p-8">
                    <div className="w-full h-64 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center">
                      <span className="text-6xl text-primary/30">📊</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Blog Categories */}
      <section className="py-12 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category, index) => (
                <Button
                  key={index}
                  variant={index === 0 ? "default" : "outline"}
                  size="sm"
                  className={`${index === 0 ? 'btn-hero' : ''} fade-in stagger-${(index % 4) + 1}`}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-gradient-to-b from-muted to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 fade-in">
              <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-foreground">
                Latest Articles
              </h2>
              <p className="text-xl text-muted-foreground">
                Stay updated with the latest trends and best practices in CRM implementation.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <Card key={index} className={`card-feature fade-in stagger-${(index % 3) + 1} hover:scale-105 transition-transform duration-300`}>
                  <CardHeader>
                    <div className="flex items-center justify-between text-sm text-muted-foreground mb-3">
                      <span className="bg-primary/10 text-primary px-2 py-1 rounded text-xs font-medium">
                        {post.category}
                      </span>
                      <div className="flex items-center">
                        <Clock size={14} className="mr-1" />
                        {post.readTime}
                      </div>
                    </div>
                    <CardTitle className="text-lg font-semibold text-foreground hover:text-primary transition-colors">
                      {post.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4 text-sm">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-xs text-muted-foreground">
                        <User size={14} className="mr-1" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center text-xs text-muted-foreground">
                        <Calendar size={14} className="mr-1" />
                        <span>{post.date}</span>
                      </div>
                    </div>
                    <div className="mt-4">
                      <a href="https://salescentri.com/resources/whitepapers-ebooks" target="_blank" rel="noopener noreferrer">
                        <Button variant="outline" size="sm" className="w-full">
                          Read More
                          <ArrowRight className="ml-2" size={14} />
                        </Button>
                      </a>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary-light text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto fade-in">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">
              Stay Updated
            </h2>
            <p className="text-xl mb-8 text-primary-foreground/90">
              Subscribe to our newsletter for the latest CRM implementation insights and industry updates.
            </p>
            <Card className="max-w-md mx-auto bg-primary-foreground/10 backdrop-blur-sm border-primary-foreground/20">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <input 
                    type="email" 
                    placeholder="Enter your email address"
                    className="w-full px-4 py-3 rounded-lg border-0 focus:outline-none focus:ring-2 focus:ring-accent text-foreground"
                  />
                  <a href="https://salescentri.com/resources/tutorials-webinars" target="_blank" rel="noopener noreferrer">
                    <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                      Subscribe Now
                      <ArrowRight className="ml-2" size={16} />
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;