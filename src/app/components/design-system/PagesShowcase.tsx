import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Label } from "../ui/label";
import {
  Mail,
  MapPin,
  Calendar,
  ArrowRight,
  Github,
  Linkedin,
  Twitter,
  ExternalLink,
  Clock,
  Tag,
  User,
  Layers,
  BarChart,
  FileText,
  Image as ImageIcon,
} from "lucide-react";

export function PagesShowcase() {
  return (
    <div className="space-y-12">
      {/* Introduction */}
      <div>
        <h2 className="mb-4">Page Templates</h2>
        <p className="text-muted-foreground max-w-3xl">
          Full-fidelity page designs demonstrating how the design system comes together
          for portfolio, blog, and CMS interfaces.
        </p>
      </div>

      {/* Home Page */}
      <Card className="p-8">
        <div className="mb-6">
          <Badge className="mb-4">Home Page</Badge>
          <h3 className="mb-2">Hero Section</h3>
        </div>
        <div className="rounded-lg border border-border bg-gradient-to-br from-primary/5 to-accent/5 p-12 text-center">
          <h1 className="mb-4">Riad Kilani</h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Front End Web Developer crafting exceptional digital experiences
            with modern technologies and elegant design.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg">
              View Portfolio
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline">
              Get in Touch
            </Button>
          </div>
        </div>

        <div className="mt-12">
          <h3 className="mb-6 text-center">Featured Work</h3>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="group overflow-hidden transition-shadow hover:shadow-lg">
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20" />
                <div className="p-6">
                  <h4 className="mb-2 group-hover:text-primary transition-colors">
                    Project Title {i}
                  </h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    Brief description of the project and technologies used.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">React</Badge>
                    <Badge variant="secondary">TypeScript</Badge>
                    <Badge variant="secondary">Tailwind</Badge>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </Card>

      {/* About/Bio Page */}
      <Card className="p-8">
        <div className="mb-6">
          <Badge className="mb-4">About Page</Badge>
          <h3 className="mb-2">Biography</h3>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          <div className="md:col-span-1">
            <div className="aspect-square rounded-lg bg-gradient-to-br from-primary to-accent mb-4" />
            <h2 className="mb-2">Riad Kilani</h2>
            <p className="text-muted-foreground mb-4">Front End Developer</p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>Location</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span>email@example.com</span>
              </div>
            </div>
            <div className="mt-6 flex gap-2">
              <Button size="icon" variant="outline">
                <Github className="h-4 w-4" />
              </Button>
              <Button size="icon" variant="outline">
                <Linkedin className="h-4 w-4" />
              </Button>
              <Button size="icon" variant="outline">
                <Twitter className="h-4 w-4" />
              </Button>
            </div>
          </div>
          <div className="md:col-span-2">
            <h3 className="mb-4">About Me</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                quis nostrud exercitation ullamco laboris.
              </p>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
              </p>
            </div>
            <div className="mt-8">
              <h4 className="mb-4">Skills & Technologies</h4>
              <div className="flex flex-wrap gap-2">
                {["React", "TypeScript", "Next.js", "Tailwind CSS", "Node.js", "GraphQL", "Git", "Figma"].map((skill) => (
                  <Badge key={skill} variant="secondary">{skill}</Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* Portfolio Listing */}
      <Card className="p-8">
        <div className="mb-6">
          <Badge className="mb-4">Portfolio Listing</Badge>
          <h3 className="mb-2">All Projects</h3>
        </div>
        <div className="grid gap-8">
          {[1, 2, 3].map((i) => (
            <Card key={i} className="overflow-hidden transition-shadow hover:shadow-md">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="aspect-video md:aspect-square bg-gradient-to-br from-primary/10 to-accent/10" />
                <div className="md:col-span-2 p-6 md:py-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3>Project Title {i}</h3>
                    <Button size="sm" variant="ghost">
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    Comprehensive project description highlighting the problem solved,
                    technologies used, and key achievements. This showcases the depth
                    and impact of the work.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge>React</Badge>
                    <Badge>TypeScript</Badge>
                    <Badge>Tailwind CSS</Badge>
                    <Badge>Figma</Badge>
                  </div>
                  <Button variant="outline">
                    View Case Study
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Card>

      {/* Blog Listing */}
      <Card className="p-8">
        <div className="mb-6">
          <Badge className="mb-4">Blog Listing</Badge>
          <h3 className="mb-2">Latest Articles</h3>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <Card key={i} className="overflow-hidden transition-shadow hover:shadow-md">
              <div className="aspect-video bg-gradient-to-br from-secondary/10 to-primary/10" />
              <div className="p-6">
                <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                  <Calendar className="h-3 w-3" />
                  <span>Jan {i}, 2026</span>
                  <span>•</span>
                  <Clock className="h-3 w-3" />
                  <span>5 min read</span>
                </div>
                <h4 className="mb-2 line-clamp-2">
                  Article Title: Understanding Modern Web Development
                </h4>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                  Brief excerpt from the article to give readers a preview of the content
                  and entice them to read more.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex gap-2">
                    <Badge variant="outline" className="text-xs">
                      <Tag className="mr-1 h-3 w-3" />
                      Tutorial
                    </Badge>
                  </div>
                  <Button variant="ghost" size="sm">
                    Read More
                    <ArrowRight className="ml-2 h-3 w-3" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Card>

      {/* Blog Post */}
      <Card className="p-8">
        <div className="mb-6">
          <Badge className="mb-4">Blog Post</Badge>
          <h3 className="mb-2">Article View</h3>
        </div>
        <article className="max-w-3xl mx-auto">
          <div className="mb-8">
            <div className="aspect-video rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 mb-6" />
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
              <Calendar className="h-4 w-4" />
              <span>January 12, 2026</span>
              <span>•</span>
              <Clock className="h-4 w-4" />
              <span>8 min read</span>
            </div>
            <h1 className="mb-4">Understanding Modern Web Development Practices</h1>
            <div className="flex gap-2 mb-6">
              <Badge>Tutorial</Badge>
              <Badge>Web Development</Badge>
              <Badge>Best Practices</Badge>
            </div>
          </div>
          <div className="prose prose-neutral dark:prose-invert max-w-none">
            <p className="text-muted-foreground leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat.
            </p>
            <h2>Section Heading</h2>
            <p className="text-muted-foreground leading-relaxed">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
              eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </article>
      </Card>

      {/* Contact Page */}
      <Card className="p-8">
        <div className="mb-6">
          <Badge className="mb-4">Contact Page</Badge>
          <h3 className="mb-2">Get in Touch</h3>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h3 className="mb-4">Send a Message</h3>
            <form className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="contact-name">Name</Label>
                <Input id="contact-name" placeholder="Your name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="contact-email">Email</Label>
                <Input id="contact-email" type="email" placeholder="you@example.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="contact-message">Message</Label>
                <Textarea id="contact-message" placeholder="Your message..." rows={6} />
              </div>
              <Button className="w-full">Send Message</Button>
            </form>
          </div>
          <div>
            <h3 className="mb-4">Contact Information</h3>
            <div className="space-y-4">
              <Card className="p-4">
                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium mb-1">Email</p>
                    <p className="text-sm text-muted-foreground">hello@example.com</p>
                  </div>
                </div>
              </Card>
              <Card className="p-4">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium mb-1">Location</p>
                    <p className="text-sm text-muted-foreground">City, Country</p>
                  </div>
                </div>
              </Card>
              <div>
                <p className="font-medium mb-3">Social Links</p>
                <div className="flex gap-2">
                  <Button size="icon" variant="outline">
                    <Github className="h-4 w-4" />
                  </Button>
                  <Button size="icon" variant="outline">
                    <Linkedin className="h-4 w-4" />
                  </Button>
                  <Button size="icon" variant="outline">
                    <Twitter className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* Admin Dashboard */}
      <Card className="p-8">
        <div className="mb-6">
          <Badge className="mb-4">Admin Dashboard</Badge>
          <h3 className="mb-2">CMS Overview</h3>
        </div>
        <div className="space-y-6">
          {/* Stats */}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card className="p-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <FileText className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-bold">24</p>
                  <p className="text-xs text-muted-foreground">Total Posts</p>
                </div>
              </div>
            </Card>
            <Card className="p-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
                  <Layers className="h-5 w-5 text-accent-foreground" />
                </div>
                <div>
                  <p className="text-2xl font-bold">12</p>
                  <p className="text-xs text-muted-foreground">Projects</p>
                </div>
              </div>
            </Card>
            <Card className="p-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary/10">
                  <ImageIcon className="h-5 w-5 text-secondary-foreground" />
                </div>
                <div>
                  <p className="text-2xl font-bold">156</p>
                  <p className="text-xs text-muted-foreground">Media Files</p>
                </div>
              </div>
            </Card>
            <Card className="p-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-100 dark:bg-green-900">
                  <BarChart className="h-5 w-5 text-green-600 dark:text-green-400" />
                </div>
                <div>
                  <p className="text-2xl font-bold">1.2k</p>
                  <p className="text-xs text-muted-foreground">Page Views</p>
                </div>
              </div>
            </Card>
          </div>

          {/* Recent Content */}
          <div>
            <h4 className="mb-4">Recent Content</h4>
            <div className="space-y-2">
              {[1, 2, 3, 4].map((i) => (
                <Card key={i} className="p-4 transition-colors hover:bg-muted/50">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="h-12 w-12 rounded bg-gradient-to-br from-primary/20 to-accent/20" />
                      <div>
                        <p className="font-medium">Content Title {i}</p>
                        <p className="text-xs text-muted-foreground">Last edited 2 hours ago</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary">Published</Badge>
                      <Button size="sm" variant="ghost">Edit</Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
