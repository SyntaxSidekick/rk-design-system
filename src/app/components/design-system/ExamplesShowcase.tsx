import { Bell, Search, Mail, Heart, Star, User, Settings, Download } from "lucide-react";
import { Button } from "../ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "../ui/card";
import { Badge } from "../ui/badge";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { CodeExample } from "./CodeExample";

export function ExamplesShowcase() {
  return (
    <div className="space-y-12">
      {/* Introduction */}
      <div>
        <h2 className="mb-4 text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Implementation Examples
        </h2>
        <p className="text-muted-foreground text-lg max-w-3xl leading-relaxed">
          Practical code examples showing how to implement common UI patterns with the design system.
          Copy and paste these examples directly into your project.
        </p>
      </div>

      {/* Card Examples */}
      <Card className="p-6 md:p-8 border-2 hover:border-primary/20 transition-all duration-300">
        <h3 className="mb-8 text-2xl font-semibold">Cards</h3>
        
        <div className="space-y-12">
          {/* Basic Card */}
          <CodeExample
            title="Basic Card"
            description="Simple card with title and content using proper semantic structure"
            preview={
              <Card className="w-full max-w-md">
                <CardHeader>
                  <CardTitle>Card Title</CardTitle>
                  <CardDescription>
                    This is a basic card component with some content inside.
                  </CardDescription>
                </CardHeader>
              </Card>
            }
            code={`<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>
      This is a basic card component with some content inside.
    </CardDescription>
  </CardHeader>
</Card>`}
          />

          {/* Card with Button */}
          <CodeExample
            title="Card with Action Button"
            description="Card with header, content, and footer with action button"
            preview={
              <Card className="w-full max-w-md">
                <CardHeader>
                  <CardTitle>Featured Article</CardTitle>
                  <CardDescription>
                    Discover the latest trends in modern web development.
                  </CardDescription>
                </CardHeader>
                <CardFooter>
                  <Button>Read More</Button>
                </CardFooter>
              </Card>
            }
            code={`<Card>
  <CardHeader>
    <CardTitle>Featured Article</CardTitle>
    <CardDescription>
      Discover the latest trends in modern web development.
    </CardDescription>
  </CardHeader>
  <CardFooter>
    <Button>Read More</Button>
  </CardFooter>
</Card>`}
          />

          {/* Card with Badge */}
          <CodeExample
            title="Card with Badge and Content"
            description="Card featuring badges, icons, and content sections"
            preview={
              <Card className="w-full max-w-md">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle>Premium Feature</CardTitle>
                      <Badge variant="secondary" className="mt-2">New</Badge>
                    </div>
                    <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Unlock advanced features with our premium plan.
                  </p>
                </CardContent>
              </Card>
            }
            code={`<Card>
  <CardHeader>
    <div className="flex items-start justify-between">
      <div>
        <CardTitle>Premium Feature</CardTitle>
        <Badge variant="secondary" className="mt-2">New</Badge>
      </div>
      <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
    </div>
  </CardHeader>
  <CardContent>
    <p className="text-sm text-muted-foreground">
      Unlock advanced features with our premium plan.
    </p>
  </CardContent>
</Card>`}
          />

          {/* Interactive Card */}
          <CodeExample
            title="Interactive Card"
            description="Hoverable card with gradient, shadow, and custom header layout"
            preview={
              <Card className="w-full max-w-md cursor-pointer transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:border-primary/50 bg-gradient-to-br from-background to-primary/5">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Bell className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle>Notifications</CardTitle>
                      <Badge className="mt-1">3 new</Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    You have unread notifications waiting for you.
                  </p>
                </CardContent>
              </Card>
            }
            code={`<Card className="cursor-pointer transition-all duration-300 
  hover:shadow-lg hover:shadow-primary/10 hover:border-primary/50 
  bg-gradient-to-br from-background to-primary/5">
  <CardHeader>
    <div className="flex items-center gap-4">
      <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
        <Bell className="h-6 w-6 text-primary" />
      </div>
      <div>
        <CardTitle>Notifications</CardTitle>
        <Badge className="mt-1">3 new</Badge>
      </div>
    </div>
  </CardHeader>
  <CardContent>
    <p className="text-sm text-muted-foreground">
      You have unread notifications waiting for you.
    </p>
  </CardContent>
</Card>`}
          />

          {/* Stats Card */}
          <CodeExample
            title="Stats Card"
            description="Card displaying metrics and statistics with proper structure"
            preview={
              <Card className="w-full max-w-md">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardDescription>Total Users</CardDescription>
                      <CardTitle className="text-3xl mt-1">12,345</CardTitle>
                    </div>
                    <div className="h-12 w-12 rounded-full bg-green-500/10 flex items-center justify-center">
                      <User className="h-6 w-6 text-green-500" />
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-green-500 font-medium">↗ 12%</span>
                    <span className="text-muted-foreground">from last month</span>
                  </div>
                </CardContent>
              </Card>
            }
            code={`<Card>
  <CardHeader>
    <div className="flex items-center justify-between">
      <div>
        <CardDescription>Total Users</CardDescription>
        <CardTitle className="text-3xl mt-1">12,345</CardTitle>
      </div>
      <div className="h-12 w-12 rounded-full bg-green-500/10 flex items-center justify-center">
        <User className="h-6 w-6 text-green-500" />
      </div>
    </div>
  </CardHeader>
  <CardContent>
    <div className="flex items-center gap-2 text-sm">
      <span className="text-green-500 font-medium">↗ 12%</span>
      <span className="text-muted-foreground">from last month</span>
    </div>
  </CardContent>
</Card>`}
          />
        </div>
      </Card>

      {/* Button Examples */}
      <Card className="p-6 md:p-8 border-2 hover:border-accent/20 transition-all duration-300">
        <h3 className="mb-8 text-2xl font-semibold">Buttons</h3>
        
        <div className="space-y-12">
          {/* Button with Icon */}
          <CodeExample
            title="Button with Icon"
            description="Buttons with leading or trailing icons"
            preview={
              <div className="flex flex-wrap gap-4">
                <Button>
                  <Mail className="mr-2 h-4 w-4" />
                  Send Email
                </Button>
                <Button variant="outline">
                  Download
                  <Download className="ml-2 h-4 w-4" />
                </Button>
              </div>
            }
            code={`<Button>
  <Mail className="mr-2 h-4 w-4" />
  Send Email
</Button>

<Button variant="outline">
  Download
  <Download className="ml-2 h-4 w-4" />
</Button>`}
          />

          {/* Icon Only Button */}
          <CodeExample
            title="Icon Button"
            description="Square buttons with just an icon"
            preview={
              <div className="flex flex-wrap gap-4">
                <Button size="icon">
                  <Heart className="h-4 w-4" />
                </Button>
                <Button size="icon" variant="outline">
                  <Settings className="h-4 w-4" />
                </Button>
              </div>
            }
            code={`<Button size="icon">
  <Heart className="h-4 w-4" />
</Button>

<Button size="icon" variant="outline">
  <Settings className="h-4 w-4" />
</Button>`}
          />

          {/* Button Group */}
          <CodeExample
            title="Button Group"
            description="Related buttons grouped together"
            preview={
              <div className="flex gap-2">
                <Button variant="outline" className="rounded-r-none">Previous</Button>
                <Button variant="outline" className="rounded-none">1</Button>
                <Button variant="outline" className="rounded-none">2</Button>
                <Button variant="outline" className="rounded-none">3</Button>
                <Button variant="outline" className="rounded-l-none">Next</Button>
              </div>
            }
            code={`<div className="flex gap-2">
  <Button variant="outline" className="rounded-r-none">Previous</Button>
  <Button variant="outline" className="rounded-none">1</Button>
  <Button variant="outline" className="rounded-none">2</Button>
  <Button variant="outline" className="rounded-none">3</Button>
  <Button variant="outline" className="rounded-l-none">Next</Button>
</div>`}
          />
        </div>
      </Card>

      {/* Form Examples */}
      <Card className="p-6 md:p-8 border-2 hover:border-primary/20 transition-all duration-300">
        <h3 className="mb-8 text-2xl font-semibold">Forms</h3>
        
        <div className="space-y-12">
          {/* Input with Label */}
          <CodeExample
            title="Input with Label"
            description="Standard form input with label"
            preview={
              <div className="w-full max-w-md space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" type="email" placeholder="you@example.com" />
              </div>
            }
            code={`<div className="space-y-2">
  <Label htmlFor="email">Email Address</Label>
  <Input id="email" type="email" placeholder="you@example.com" />
</div>`}
          />

          {/* Input with Icon */}
          <CodeExample
            title="Search Input with Icon"
            description="Input field with a search icon"
            preview={
              <div className="w-full max-w-md space-y-2">
                <Label htmlFor="search">Search</Label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input id="search" className="pl-9" placeholder="Search..." />
                </div>
              </div>
            }
            code={`<div className="space-y-2">
  <Label htmlFor="search">Search</Label>
  <div className="relative">
    <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
    <Input id="search" className="pl-9" placeholder="Search..." />
  </div>
</div>`}
          />

          {/* Form with Validation */}
          <CodeExample
            title="Form with Helper Text"
            description="Input with descriptive helper text"
            preview={
              <div className="w-full max-w-md space-y-2">
                <Label htmlFor="username">Username</Label>
                <Input id="username" placeholder="johndoe" />
                <p className="text-sm text-muted-foreground">
                  Choose a unique username for your account.
                </p>
              </div>
            }
            code={`<div className="space-y-2">
  <Label htmlFor="username">Username</Label>
  <Input id="username" placeholder="johndoe" />
  <p className="text-sm text-muted-foreground">
    Choose a unique username for your account.
  </p>
</div>`}
          />
        </div>
      </Card>

      {/* Badge Examples */}
      <Card className="p-6 md:p-8 border-2 hover:border-accent/20 transition-all duration-300">
        <h3 className="mb-8 text-2xl font-semibold">Badges</h3>
        
        <div className="space-y-12">
          {/* Badge Variants */}
          <CodeExample
            title="Badge Variants"
            description="Different badge styles for various use cases"
            preview={
              <div className="flex flex-wrap gap-3">
                <Badge>Default</Badge>
                <Badge variant="secondary">Secondary</Badge>
                <Badge variant="outline">Outline</Badge>
                <Badge variant="destructive">Destructive</Badge>
              </div>
            }
            code={`<Badge>Default</Badge>
<Badge variant="secondary">Secondary</Badge>
<Badge variant="outline">Outline</Badge>
<Badge variant="destructive">Destructive</Badge>`}
          />

          {/* Status Badges */}
          <CodeExample
            title="Status Badges"
            description="Colored badges indicating status"
            preview={
              <div className="flex flex-wrap gap-3">
                <Badge className="bg-green-500">Active</Badge>
                <Badge className="bg-yellow-500">Pending</Badge>
                <Badge className="bg-red-500">Inactive</Badge>
                <Badge className="bg-blue-500">Draft</Badge>
              </div>
            }
            code={`<Badge className="bg-green-500">Active</Badge>
<Badge className="bg-yellow-500">Pending</Badge>
<Badge className="bg-red-500">Inactive</Badge>
<Badge className="bg-blue-500">Draft</Badge>`}
          />

          {/* Badges with Icons */}
          <CodeExample
            title="Badges with Icons"
            description="Badges combined with icons"
            preview={
              <div className="flex flex-wrap gap-3">
                <Badge className="gap-1">
                  <Star className="h-3 w-3" />
                  Featured
                </Badge>
                <Badge variant="secondary" className="gap-1">
                  <Bell className="h-3 w-3" />
                  3 New
                </Badge>
              </div>
            }
            code={`<Badge className="gap-1">
  <Star className="h-3 w-3" />
  Featured
</Badge>

<Badge variant="secondary" className="gap-1">
  <Bell className="h-3 w-3" />
  3 New
</Badge>`}
          />
        </div>
      </Card>
    </div>
  );
}
