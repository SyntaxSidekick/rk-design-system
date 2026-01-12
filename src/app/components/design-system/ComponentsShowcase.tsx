import { useState } from "react";
import {
  Bell,
  Search,
  Upload,
  User,
  Info,
  Check,
  AlertTriangle,
  AlertCircle,
  Heart,
  Share2,
  Bookmark,
  MapPin,
  Calendar,
  Clock,
  Star,
  TrendingUp,
  Eye,
  MessageCircle,
  Home,
  Settings,
  Mail,
  Phone,
  Video,
  Image,
  FileText,
  Folder,
  Download,
  ChevronRight,
  ChevronLeft,
  ChevronDown,
  ChevronUp,
  ArrowRight,
  ArrowLeft,
  ArrowUp,
  ArrowDown,
  Plus,
  Minus,
  X,
  Menu,
  MoreHorizontal,
  MoreVertical,
  Edit,
  Trash2,
  Copy,
  ExternalLink,
  Link,
  Github,
  Twitter,
  Linkedin,
  Facebook,
  Instagram,
  Youtube,
  Globe,
  Wifi,
  WifiOff,
  Battery,
  BatteryCharging,
  Volume2,
  VolumeX,
  Play,
  Pause,
  SkipForward,
  SkipBack,
  Repeat,
  Shuffle,
  Loader2,
  RefreshCw,
  Lock,
  Unlock,
  ShieldCheck,
  AlertOctagon,
  CheckCircle2,
  XCircle,
  HelpCircle,
  Zap,
  Award,
  Target,
  TrendingDown,
  BarChart3,
  PieChart,
  Activity,
  Layers,
  Package,
  ShoppingCart,
  CreditCard,
  DollarSign,
  Tag,
  Users,
  UserPlus,
  UserMinus,
  Coffee,
  Sun,
  Moon,
  Cloud,
  CloudRain,
  Sparkles,
  Send,
} from "lucide-react";
import { motion } from "motion/react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Card } from "../ui/card";
import { Badge } from "../ui/badge";
import { Switch } from "../ui/switch";
import { Checkbox } from "../ui/checkbox";
import { Label } from "../ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import { Alert, AlertDescription, AlertTitle } from "../ui/alert";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../ui/breadcrumb";
import { Separator } from "../ui/separator";
import { Pagination } from "./Pagination";
import { AccessibilityDemo } from "./AccessibilityDemo";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { IconsShowcase } from "./IconsShowcase";

export function ComponentsShowcase() {
  const [switchChecked, setSwitchChecked] = useState(false);
  const [checkboxChecked, setCheckboxChecked] = useState(false);

  return (
    <div className="space-y-12">
      {/* Introduction */}
      <div>
        <h2 className="mb-4">Components</h2>
        <p className="text-muted-foreground max-w-3xl">
          Comprehensive component library with all states (hover, focus, active, disabled).
          Built with accessibility in mind, following ARIA best practices.
        </p>
      </div>

      {/* Accessibility */}
      <Card className="p-6">
        <h3 className="mb-6">Accessibility & WCAG Compliance</h3>
        <AccessibilityDemo />
      </Card>

      {/* Buttons */}
      <Card className="p-6">
        <h3 className="mb-6">Buttons</h3>
        <div className="space-y-6">
          <div>
            <h4 className="mb-3 text-sm font-medium text-muted-foreground">Variants</h4>
            <div className="flex flex-wrap gap-3">
              <Button>Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="destructive">Destructive</Button>
              <Button variant="link">Link</Button>
            </div>
          </div>

          <Separator />

          <div>
            <h4 className="mb-3 text-sm font-medium text-muted-foreground">Sizes</h4>
            <div className="flex flex-wrap items-center gap-3">
              <Button size="sm">Small</Button>
              <Button size="default">Default</Button>
              <Button size="lg">Large</Button>
            </div>
          </div>

          <Separator />

          <div>
            <h4 className="mb-3 text-sm font-medium text-muted-foreground">With Icons</h4>
            <div className="flex flex-wrap gap-3">
              <Button>
                <Bell className="mr-2 h-4 w-4" />
                Notifications
              </Button>
              <Button variant="outline">
                <Search className="mr-2 h-4 w-4" />
                Search
              </Button>
              <Button variant="secondary">
                Upload
                <Upload className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>

          <Separator />

          <div>
            <h4 className="mb-3 text-sm font-medium text-muted-foreground">States</h4>
            <div className="flex flex-wrap gap-3">
              <Button disabled>Disabled</Button>
              <Button variant="outline" disabled>
                Disabled Outline
              </Button>
              <Button size="icon">
                <Bell className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </Card>

      {/* Inputs */}
      <Card className="p-6">
        <h3 className="mb-6">Form Inputs</h3>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="you@example.com" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" placeholder="••••••••" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="with-icon">Search</Label>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input id="with-icon" className="pl-9" placeholder="Search..." />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="disabled">Disabled</Label>
            <Input id="disabled" disabled placeholder="Disabled input" />
          </div>

          <div className="space-y-2 md:col-span-2">
            <Label htmlFor="textarea">Message</Label>
            <Textarea id="textarea" placeholder="Type your message here..." rows={4} />
          </div>

          <div className="space-y-2 md:col-span-2">
            <Label htmlFor="select">Select Option</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Choose an option" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="option1">Option 1</SelectItem>
                <SelectItem value="option2">Option 2</SelectItem>
                <SelectItem value="option3">Option 3</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </Card>

      {/* Checkboxes & Switches */}
      <Card className="p-6">
        <h3 className="mb-6">Checkboxes & Switches</h3>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-4">
            <h4 className="text-sm font-medium text-muted-foreground">Checkboxes</h4>
            <div className="flex items-center space-x-2">
              <Checkbox id="terms" checked={checkboxChecked} onCheckedChange={setCheckboxChecked} />
              <Label htmlFor="terms" className="cursor-pointer">
                Accept terms and conditions
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="marketing" />
              <Label htmlFor="marketing" className="cursor-pointer">
                Receive marketing emails
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="disabled" disabled />
              <Label htmlFor="disabled" className="cursor-not-allowed opacity-50">
                Disabled option
              </Label>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-medium text-muted-foreground">Switches</h4>
            <div className="flex items-center justify-between">
              <Label htmlFor="notifications">Push Notifications</Label>
              <Switch id="notifications" checked={switchChecked} onCheckedChange={setSwitchChecked} />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="analytics">Analytics</Label>
              <Switch id="analytics" />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="disabled-switch" className="opacity-50">
                Disabled
              </Label>
              <Switch id="disabled-switch" disabled />
            </div>
          </div>
        </div>
      </Card>

      {/* Badges & Tags */}
      <Card className="p-6">
        <h3 className="mb-6">Badges & Tags</h3>
        <div className="space-y-6">
          <div>
            <h4 className="mb-3 text-sm font-medium text-muted-foreground">Variants</h4>
            <div className="flex flex-wrap gap-2">
              <Badge>Default</Badge>
              <Badge variant="secondary">Secondary</Badge>
              <Badge variant="outline">Outline</Badge>
              <Badge variant="destructive">Destructive</Badge>
            </div>
          </div>

          <Separator />

          <div>
            <h4 className="mb-3 text-sm font-medium text-muted-foreground">Use Cases</h4>
            <div className="flex flex-wrap gap-2">
              <Badge>New</Badge>
              <Badge variant="secondary">Draft</Badge>
              <Badge className="bg-green-500 hover:bg-green-600">Published</Badge>
              <Badge className="bg-yellow-500 hover:bg-yellow-600">Pending</Badge>
              <Badge className="bg-purple-500 hover:bg-purple-600">Featured</Badge>
            </div>
          </div>
        </div>
      </Card>

      {/* Icons Library */}
      <Card className="p-6">
        <h3 className="mb-6">Icons (Lucide React)</h3>
        <IconsShowcase />
      </Card>

      {/* Cards */}
      <Card className="p-6">
        <h3 className="mb-6">Cards</h3>
        
        {/* Basic Cards */}
        <div className="mb-8">
          <h4 className="mb-4 text-sm font-medium text-muted-foreground">Basic Cards</h4>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card className="p-6">
              <h4 className="mb-2">Simple Card</h4>
              <p className="text-sm text-muted-foreground">
                A basic card component with padding and border.
              </p>
            </Card>

            <Card className="p-6">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-sm">User Profile</h4>
                  <p className="text-xs text-muted-foreground">View details</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                Card with icon and metadata.
              </p>
            </Card>

            <Card className="p-6">
              <h4 className="mb-3">Interactive Card</h4>
              <p className="text-sm text-muted-foreground mb-4">
                Cards can contain actions and interactive elements.
              </p>
              <Button size="sm" className="w-full">
                Learn More
              </Button>
            </Card>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Cards with Images */}
        <div className="mb-8">
          <h4 className="mb-4 text-sm font-medium text-muted-foreground">Cards with Images</h4>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Blog Card */}
            <Card className="overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1519662978799-2f05096d3636?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzY4MTkyMjc1fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Modern Architecture"
                className="h-48 w-full object-cover"
              />
              <div className="p-4">
                <div className="mb-2 flex items-center gap-2">
                  <Badge>Architecture</Badge>
                  <Badge variant="outline">Featured</Badge>
                </div>
                <h4 className="mb-2">Modern Design Trends</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Exploring contemporary architectural innovations and sustainable design practices.
                </p>
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    Jan 12, 2026
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    5 min read
                  </div>
                </div>
              </div>
            </Card>

            {/* Product Card */}
            <Card className="overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1737868131532-0efce8062b43?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwbGFwdG9wfGVufDF8fHx8MTc2ODE1NTk1OXww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Technology Laptop"
                className="h-48 w-full object-cover"
              />
              <div className="p-4">
                <div className="mb-2 flex items-center justify-between">
                  <Badge className="bg-purple-500 hover:bg-purple-600">New</Badge>
                  <div className="flex items-center gap-1 text-sm">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span>4.8</span>
                  </div>
                </div>
                <h4 className="mb-2">Premium Laptop Pro</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  High-performance laptop for creative professionals.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold">$1,299</span>
                  <Button size="sm">Add to Cart</Button>
                </div>
              </div>
            </Card>

            {/* Portfolio Card */}
            <Card className="overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1617634667039-8e4cb277ab46?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYXR1cmUlMjBsYW5kc2NhcGV8ZW58MXx8fHwxNzY4MTcwNTM1fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Nature Landscape"
                className="h-48 w-full object-cover"
              />
              <div className="p-4">
                <Badge variant="secondary" className="mb-2">Photography</Badge>
                <h4 className="mb-2">Natural Wonders</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Capturing the beauty of untouched landscapes around the world.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Eye className="h-3 w-3" />
                      2.4k
                    </div>
                    <div className="flex items-center gap-1">
                      <Heart className="h-3 w-3" />
                      342
                    </div>
                  </div>
                  <Button variant="ghost" size="sm">
                    View
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Profile & User Cards */}
        <div className="mb-8">
          <h4 className="mb-4 text-sm font-medium text-muted-foreground">Profile & User Cards</h4>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* User Profile Card */}
            <Card className="p-6">
              <div className="flex items-start gap-4">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NjgxOTU0ODh8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Professional Portrait"
                  className="h-16 w-16 rounded-full object-cover"
                />
                <div className="flex-1">
                  <h4 className="mb-1">Alex Morgan</h4>
                  <p className="text-sm text-muted-foreground mb-2">Product Designer</p>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <MapPin className="h-3 w-3" />
                    San Francisco, CA
                  </div>
                </div>
              </div>
              <div className="mt-4 flex gap-2">
                <Button variant="outline" size="sm" className="flex-1">
                  Message
                </Button>
                <Button size="sm" className="flex-1">
                  Follow
                </Button>
              </div>
            </Card>

            {/* Team Member Card */}
            <Card className="p-6 text-center">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NjgxOTU0ODh8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Team Member"
                className="mx-auto mb-4 h-20 w-20 rounded-full object-cover"
              />
              <h4 className="mb-1">Jamie Chen</h4>
              <p className="text-sm text-muted-foreground mb-3">Lead Developer</p>
              <div className="flex justify-center gap-2 mb-4">
                <Badge variant="secondary">React</Badge>
                <Badge variant="secondary">TypeScript</Badge>
              </div>
              <div className="flex justify-center gap-2">
                <Button variant="ghost" size="icon">
                  <Share2 className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon">
                  <MessageCircle className="h-4 w-4" />
                </Button>
              </div>
            </Card>

            {/* Contact Card */}
            <Card className="p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                JD
              </div>
              <h4 className="mb-1">Jordan Davis</h4>
              <p className="text-sm text-muted-foreground mb-4">Creative Director</p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <User className="h-4 w-4" />
                  @jordandavis
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  New York, NY
                </div>
              </div>
            </Card>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Stats & Metric Cards */}
        <div className="mb-8">
          <h4 className="mb-4 text-sm font-medium text-muted-foreground">Stats & Metric Cards</h4>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card className="p-6">
              <div className="flex items-center justify-between mb-2">
                <p className="text-sm text-muted-foreground">Total Users</p>
                <User className="h-4 w-4 text-muted-foreground" />
              </div>
              <p className="text-2xl font-bold mb-1">24,583</p>
              <div className="flex items-center gap-1 text-xs text-green-600">
                <TrendingUp className="h-3 w-3" />
                +12.5% from last month
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-center justify-between mb-2">
                <p className="text-sm text-muted-foreground">Page Views</p>
                <Eye className="h-4 w-4 text-muted-foreground" />
              </div>
              <p className="text-2xl font-bold mb-1">1.2M</p>
              <div className="flex items-center gap-1 text-xs text-green-600">
                <TrendingUp className="h-3 w-3" />
                +8.2% from last month
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-center justify-between mb-2">
                <p className="text-sm text-muted-foreground">Engagement</p>
                <Heart className="h-4 w-4 text-muted-foreground" />
              </div>
              <p className="text-2xl font-bold mb-1">68.4%</p>
              <div className="flex items-center gap-1 text-xs text-green-600">
                <TrendingUp className="h-3 w-3" />
                +5.1% from last month
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-center justify-between mb-2">
                <p className="text-sm text-muted-foreground">Comments</p>
                <MessageCircle className="h-4 w-4 text-muted-foreground" />
              </div>
              <p className="text-2xl font-bold mb-1">3,247</p>
              <div className="flex items-center gap-1 text-xs text-green-600">
                <TrendingUp className="h-3 w-3" />
                +18.9% from last month
              </div>
            </Card>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Interactive Cards */}
        <div>
          <h4 className="mb-4 text-sm font-medium text-muted-foreground">Interactive Cards</h4>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Hover Card */}
            <Card className="p-6 cursor-pointer transition-all hover:shadow-lg hover:-translate-y-1">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Bookmark className="h-6 w-6 text-primary" />
              </div>
              <h4 className="mb-2">Saved Items</h4>
              <p className="text-sm text-muted-foreground mb-4">
                View all your bookmarked content in one place.
              </p>
              <div className="flex items-center text-sm text-primary">
                View collection
                <span className="ml-1">→</span>
              </div>
            </Card>

            {/* Action Card */}
            <Card className="p-6">
              <div className="mb-4 flex items-center justify-between">
                <Badge className="bg-green-500 hover:bg-green-600">Active</Badge>
                <Button variant="ghost" size="icon">
                  <Share2 className="h-4 w-4" />
                </Button>
              </div>
              <h4 className="mb-2">Project Alpha</h4>
              <p className="text-sm text-muted-foreground mb-4">
                Collaborative design project with the team.
              </p>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="flex-1">
                  Details
                </Button>
                <Button size="sm" className="flex-1">
                  Open
                </Button>
              </div>
            </Card>

            {/* Notification Card */}
            <Card className="p-6 border-l-4 border-l-primary">
              <div className="flex items-start justify-between mb-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <Bell className="h-5 w-5 text-primary" />
                </div>
                <span className="text-xs text-muted-foreground">2 min ago</span>
              </div>
              <h4 className="mb-2">New Comment</h4>
              <p className="text-sm text-muted-foreground">
                Sarah commented on your post "Design Systems 101"
              </p>
            </Card>
          </div>
        </div>
      </Card>

      {/* Alerts */}
      <Card className="p-6">
        <h3 className="mb-6">Alerts & Notifications</h3>
        <div className="space-y-4">
          <Alert>
            <Info className="h-4 w-4" />
            <AlertTitle>Information</AlertTitle>
            <AlertDescription>
              This is an informational alert with default styling.
            </AlertDescription>
          </Alert>

          <Alert className="border-green-200 bg-green-50 text-green-900 dark:border-green-900 dark:bg-green-950 dark:text-green-50">
            <Check className="h-4 w-4" />
            <AlertTitle>Success</AlertTitle>
            <AlertDescription>
              Your changes have been saved successfully.
            </AlertDescription>
          </Alert>

          <Alert className="border-yellow-200 bg-yellow-50 text-yellow-900 dark:border-yellow-900 dark:bg-yellow-950 dark:text-yellow-50">
            <AlertTriangle className="h-4 w-4" />
            <AlertTitle>Warning</AlertTitle>
            <AlertDescription>
              Please review your information before proceeding.
            </AlertDescription>
          </Alert>

          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>
              There was a problem processing your request.
            </AlertDescription>
          </Alert>
        </div>
      </Card>

      {/* Tooltips */}
      <Card className="p-6">
        <h3 className="mb-6">Tooltips</h3>
        <p className="text-sm text-muted-foreground mb-4">
          Hover over the buttons to see tooltips.
        </p>
        <TooltipProvider>
          <div className="flex flex-wrap gap-3">
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline">Hover me</Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>This is a tooltip</p>
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Button size="icon" variant="outline">
                  <Info className="h-4 w-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>More information</p>
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="secondary">Help</Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Get help and support</p>
              </TooltipContent>
            </Tooltip>
          </div>
        </TooltipProvider>
      </Card>

      {/* Modals */}
      <Card className="p-6">
        <h3 className="mb-6">Modals & Dialogs</h3>
        <Dialog>
          <DialogTrigger asChild>
            <Button>Open Dialog</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Modal Dialog</DialogTitle>
              <DialogDescription>
                This is a modal dialog component with header, content, and footer sections.
              </DialogDescription>
            </DialogHeader>
            <div className="py-4">
              <p className="text-sm text-muted-foreground">
                Modal content goes here. This can include forms, information, or any other content.
              </p>
            </div>
            <DialogFooter>
              <Button variant="outline">Cancel</Button>
              <Button>Confirm</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </Card>

      {/* Breadcrumbs */}
      <Card className="p-6">
        <h3 className="mb-6">Breadcrumbs</h3>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="#">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="#">Portfolio</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Project Details</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </Card>

      {/* Pagination */}
      <Card className="p-6">
        <h3 className="mb-6">Pagination</h3>
        <Pagination currentPage={3} totalPages={10} />
      </Card>
    </div>
  );
}