import {
  Home,
  Settings,
  Search,
  Bell,
  Menu,
  X,
  MoreHorizontal,
  MoreVertical,
  User,
  Users,
  ArrowRight,
  ArrowLeft,
  ArrowUp,
  ArrowDown,
  ChevronRight,
  ChevronLeft,
  ChevronUp,
  ChevronDown,
  Mail,
  Phone,
  MessageCircle,
  Video,
  Share2,
  Link,
  ExternalLink,
  Send,
  FileText,
  Folder,
  Image,
  Download,
  Upload,
  Copy,
  Edit,
  Trash2,
  Github,
  Twitter,
  Linkedin,
  Facebook,
  Instagram,
  Youtube,
  Globe,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  Info,
  HelpCircle,
  AlertOctagon,
  ShieldCheck,
  Check,
  Play,
  Pause,
  SkipForward,
  SkipBack,
  Volume2,
  VolumeX,
  Repeat,
  Shuffle,
  BarChart3,
  PieChart,
  Activity,
  TrendingUp,
  TrendingDown,
  ShoppingCart,
  CreditCard,
  DollarSign,
  Loader2,
  RefreshCw,
  Heart,
  Sparkles,
  Bookmark,
  Star,
  Plus,
} from "lucide-react";
import { motion } from "motion/react";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";

export function IconsShowcase() {
  return (
    <div className="space-y-8">
      <p className="text-sm text-muted-foreground">
        Comprehensive icon library with over 1,000+ icons from Lucide React. All icons are stroke-based, customizable, and accessible.
      </p>

      {/* Icon Sizes */}
      <div>
        <h4 className="mb-4 text-sm font-medium text-muted-foreground">Icon Sizes</h4>
        <div className="flex flex-wrap items-center gap-6">
          <div className="flex flex-col items-center gap-2">
            <Home className="h-4 w-4 text-primary" />
            <code className="text-xs">h-4 w-4</code>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Home className="h-5 w-5 text-primary" />
            <code className="text-xs">h-5 w-5</code>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Home className="h-6 w-6 text-primary" />
            <code className="text-xs">h-6 w-6</code>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Home className="h-8 w-8 text-primary" />
            <code className="text-xs">h-8 w-8</code>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Home className="h-12 w-12 text-primary" />
            <code className="text-xs">h-12 w-12</code>
          </div>
        </div>
      </div>

      <Separator />

      {/* Icon Colors */}
      <div>
        <h4 className="mb-4 text-sm font-medium text-muted-foreground">Icon Colors</h4>
        <div className="flex flex-wrap items-center gap-6">
          <div className="flex flex-col items-center gap-2">
            <Star className="h-6 w-6 text-primary" />
            <code className="text-xs">primary</code>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Star className="h-6 w-6 text-secondary-foreground" />
            <code className="text-xs">secondary</code>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Star className="h-6 w-6 text-muted-foreground" />
            <code className="text-xs">muted</code>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Star className="h-6 w-6 text-destructive" />
            <code className="text-xs">destructive</code>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Star className="h-6 w-6 text-green-600" />
            <code className="text-xs">success</code>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Star className="h-6 w-6 text-yellow-600" />
            <code className="text-xs">warning</code>
          </div>
        </div>
      </div>

      <Separator />

      {/* UI & Navigation Icons */}
      <div>
        <h4 className="mb-4 text-sm font-medium text-muted-foreground">UI & Navigation</h4>
        <div className="grid grid-cols-4 gap-6 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="flex flex-col items-center gap-2 cursor-pointer">
                  <Home className="h-6 w-6" />
                  <span className="text-xs text-muted-foreground">Home</span>
                </div>
              </TooltipTrigger>
              <TooltipContent><code>Home</code></TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="flex flex-col items-center gap-2 cursor-pointer">
                  <Settings className="h-6 w-6" />
                  <span className="text-xs text-muted-foreground">Settings</span>
                </div>
              </TooltipTrigger>
              <TooltipContent><code>Settings</code></TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="flex flex-col items-center gap-2 cursor-pointer">
                  <Search className="h-6 w-6" />
                  <span className="text-xs text-muted-foreground">Search</span>
                </div>
              </TooltipTrigger>
              <TooltipContent><code>Search</code></TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="flex flex-col items-center gap-2 cursor-pointer">
                  <Bell className="h-6 w-6" />
                  <span className="text-xs text-muted-foreground">Bell</span>
                </div>
              </TooltipTrigger>
              <TooltipContent><code>Bell</code></TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="flex flex-col items-center gap-2 cursor-pointer">
                  <Menu className="h-6 w-6" />
                  <span className="text-xs text-muted-foreground">Menu</span>
                </div>
              </TooltipTrigger>
              <TooltipContent><code>Menu</code></TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="flex flex-col items-center gap-2 cursor-pointer">
                  <X className="h-6 w-6" />
                  <span className="text-xs text-muted-foreground">Close</span>
                </div>
              </TooltipTrigger>
              <TooltipContent><code>X</code></TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="flex flex-col items-center gap-2 cursor-pointer">
                  <MoreHorizontal className="h-6 w-6" />
                  <span className="text-xs text-muted-foreground">More H</span>
                </div>
              </TooltipTrigger>
              <TooltipContent><code>MoreHorizontal</code></TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="flex flex-col items-center gap-2 cursor-pointer">
                  <MoreVertical className="h-6 w-6" />
                  <span className="text-xs text-muted-foreground">More V</span>
                </div>
              </TooltipTrigger>
              <TooltipContent><code>MoreVertical</code></TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="flex flex-col items-center gap-2 cursor-pointer">
                  <User className="h-6 w-6" />
                  <span className="text-xs text-muted-foreground">User</span>
                </div>
              </TooltipTrigger>
              <TooltipContent><code>User</code></TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="flex flex-col items-center gap-2 cursor-pointer">
                  <Users className="h-6 w-6" />
                  <span className="text-xs text-muted-foreground">Users</span>
                </div>
              </TooltipTrigger>
              <TooltipContent><code>Users</code></TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>

      <Separator />

      {/* Arrows & Chevrons */}
      <div>
        <h4 className="mb-4 text-sm font-medium text-muted-foreground">Arrows & Chevrons</h4>
        <div className="grid grid-cols-4 gap-6 sm:grid-cols-6 md:grid-cols-8">
          <div className="flex flex-col items-center gap-2">
            <ArrowRight className="h-6 w-6" />
            <span className="text-xs text-muted-foreground">Arrow R</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <ArrowLeft className="h-6 w-6" />
            <span className="text-xs text-muted-foreground">Arrow L</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <ArrowUp className="h-6 w-6" />
            <span className="text-xs text-muted-foreground">Arrow U</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <ArrowDown className="h-6 w-6" />
            <span className="text-xs text-muted-foreground">Arrow D</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <ChevronRight className="h-6 w-6" />
            <span className="text-xs text-muted-foreground">Chevron R</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <ChevronLeft className="h-6 w-6" />
            <span className="text-xs text-muted-foreground">Chevron L</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <ChevronUp className="h-6 w-6" />
            <span className="text-xs text-muted-foreground">Chevron U</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <ChevronDown className="h-6 w-6" />
            <span className="text-xs text-muted-foreground">Chevron D</span>
          </div>
        </div>
      </div>

      <Separator />

      {/* Communication Icons */}
      <div>
        <h4 className="mb-4 text-sm font-medium text-muted-foreground">Communication</h4>
        <div className="grid grid-cols-4 gap-6 sm:grid-cols-6 md:grid-cols-8">
          <div className="flex flex-col items-center gap-2">
            <Mail className="h-6 w-6" />
            <span className="text-xs text-muted-foreground">Mail</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Phone className="h-6 w-6" />
            <span className="text-xs text-muted-foreground">Phone</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <MessageCircle className="h-6 w-6" />
            <span className="text-xs text-muted-foreground">Message</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Video className="h-6 w-6" />
            <span className="text-xs text-muted-foreground">Video</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Share2 className="h-6 w-6" />
            <span className="text-xs text-muted-foreground">Share</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Link className="h-6 w-6" />
            <span className="text-xs text-muted-foreground">Link</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <ExternalLink className="h-6 w-6" />
            <span className="text-xs text-muted-foreground">External</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Send className="h-6 w-6" />
            <span className="text-xs text-muted-foreground">Send</span>
          </div>
        </div>
      </div>

      <Separator />

      {/* Files & Media */}
      <div>
        <h4 className="mb-4 text-sm font-medium text-muted-foreground">Files & Media</h4>
        <div className="grid grid-cols-4 gap-6 sm:grid-cols-6 md:grid-cols-8">
          <div className="flex flex-col items-center gap-2">
            <FileText className="h-6 w-6" />
            <span className="text-xs text-muted-foreground">File</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Folder className="h-6 w-6" />
            <span className="text-xs text-muted-foreground">Folder</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Image className="h-6 w-6" />
            <span className="text-xs text-muted-foreground">Image</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Download className="h-6 w-6" />
            <span className="text-xs text-muted-foreground">Download</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Upload className="h-6 w-6" />
            <span className="text-xs text-muted-foreground">Upload</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Copy className="h-6 w-6" />
            <span className="text-xs text-muted-foreground">Copy</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Edit className="h-6 w-6" />
            <span className="text-xs text-muted-foreground">Edit</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Trash2 className="h-6 w-6" />
            <span className="text-xs text-muted-foreground">Trash</span>
          </div>
        </div>
      </div>

      <Separator />

      {/* Social Media Icons */}
      <div>
        <h4 className="mb-4 text-sm font-medium text-muted-foreground">Social Media</h4>
        <div className="grid grid-cols-4 gap-6 sm:grid-cols-6 md:grid-cols-8">
          <div className="flex flex-col items-center gap-2">
            <Github className="h-6 w-6" />
            <span className="text-xs text-muted-foreground">GitHub</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Twitter className="h-6 w-6" />
            <span className="text-xs text-muted-foreground">Twitter</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Linkedin className="h-6 w-6" />
            <span className="text-xs text-muted-foreground">LinkedIn</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Facebook className="h-6 w-6" />
            <span className="text-xs text-muted-foreground">Facebook</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Instagram className="h-6 w-6" />
            <span className="text-xs text-muted-foreground">Instagram</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Youtube className="h-6 w-6" />
            <span className="text-xs text-muted-foreground">YouTube</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Globe className="h-6 w-6" />
            <span className="text-xs text-muted-foreground">Globe</span>
          </div>
        </div>
      </div>

      <Separator />

      {/* Status & Feedback Icons */}
      <div>
        <h4 className="mb-4 text-sm font-medium text-muted-foreground">Status & Feedback</h4>
        <div className="grid grid-cols-4 gap-6 sm:grid-cols-6 md:grid-cols-8">
          <div className="flex flex-col items-center gap-2">
            <CheckCircle2 className="h-6 w-6 text-green-600" />
            <span className="text-xs text-muted-foreground">Success</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <XCircle className="h-6 w-6 text-destructive" />
            <span className="text-xs text-muted-foreground">Error</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <AlertTriangle className="h-6 w-6 text-yellow-600" />
            <span className="text-xs text-muted-foreground">Warning</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Info className="h-6 w-6 text-blue-600" />
            <span className="text-xs text-muted-foreground">Info</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <HelpCircle className="h-6 w-6" />
            <span className="text-xs text-muted-foreground">Help</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <AlertOctagon className="h-6 w-6 text-destructive" />
            <span className="text-xs text-muted-foreground">Alert</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <ShieldCheck className="h-6 w-6 text-green-600" />
            <span className="text-xs text-muted-foreground">Shield</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Check className="h-6 w-6 text-green-600" />
            <span className="text-xs text-muted-foreground">Check</span>
          </div>
        </div>
      </div>

      <Separator />

      {/* Media Controls */}
      <div>
        <h4 className="mb-4 text-sm font-medium text-muted-foreground">Media Controls</h4>
        <div className="grid grid-cols-4 gap-6 sm:grid-cols-6 md:grid-cols-8">
          <div className="flex flex-col items-center gap-2">
            <Play className="h-6 w-6" />
            <span className="text-xs text-muted-foreground">Play</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Pause className="h-6 w-6" />
            <span className="text-xs text-muted-foreground">Pause</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <SkipForward className="h-6 w-6" />
            <span className="text-xs text-muted-foreground">Skip Fwd</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <SkipBack className="h-6 w-6" />
            <span className="text-xs text-muted-foreground">Skip Back</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Volume2 className="h-6 w-6" />
            <span className="text-xs text-muted-foreground">Volume</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <VolumeX className="h-6 w-6" />
            <span className="text-xs text-muted-foreground">Mute</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Repeat className="h-6 w-6" />
            <span className="text-xs text-muted-foreground">Repeat</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Shuffle className="h-6 w-6" />
            <span className="text-xs text-muted-foreground">Shuffle</span>
          </div>
        </div>
      </div>

      <Separator />

      {/* Business & Analytics */}
      <div>
        <h4 className="mb-4 text-sm font-medium text-muted-foreground">Business & Analytics</h4>
        <div className="grid grid-cols-4 gap-6 sm:grid-cols-6 md:grid-cols-8">
          <div className="flex flex-col items-center gap-2">
            <BarChart3 className="h-6 w-6" />
            <span className="text-xs text-muted-foreground">Bar Chart</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <PieChart className="h-6 w-6" />
            <span className="text-xs text-muted-foreground">Pie Chart</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Activity className="h-6 w-6" />
            <span className="text-xs text-muted-foreground">Activity</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <TrendingUp className="h-6 w-6 text-green-600" />
            <span className="text-xs text-muted-foreground">Trending ↑</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <TrendingDown className="h-6 w-6 text-destructive" />
            <span className="text-xs text-muted-foreground">Trending ↓</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <ShoppingCart className="h-6 w-6" />
            <span className="text-xs text-muted-foreground">Cart</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <CreditCard className="h-6 w-6" />
            <span className="text-xs text-muted-foreground">Card</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <DollarSign className="h-6 w-6" />
            <span className="text-xs text-muted-foreground">Dollar</span>
          </div>
        </div>
      </div>

      <Separator />

      {/* Icons with Badges */}
      <div>
        <h4 className="mb-4 text-sm font-medium text-muted-foreground">Icons with Badges & Indicators</h4>
        <div className="flex flex-wrap items-start gap-8">
          <div className="flex flex-col items-center gap-2">
            <div className="relative">
              <Bell className="h-6 w-6" />
              <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-destructive text-[10px] text-destructive-foreground">
                3
              </span>
            </div>
            <span className="text-xs text-muted-foreground">Notification</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="relative">
              <ShoppingCart className="h-6 w-6" />
              <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] text-primary-foreground">
                12
              </span>
            </div>
            <span className="text-xs text-muted-foreground">Cart Count</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="relative">
              <Mail className="h-6 w-6" />
              <span className="absolute -top-1 -right-1 h-2 w-2 rounded-full bg-green-500"></span>
            </div>
            <span className="text-xs text-muted-foreground">New Mail</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="relative">
              <User className="h-6 w-6" />
              <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-background bg-green-500"></span>
            </div>
            <span className="text-xs text-muted-foreground">Online</span>
          </div>
        </div>
      </div>

      <Separator />

      {/* Icon Buttons */}
      <div>
        <h4 className="mb-4 text-sm font-medium text-muted-foreground">Icon Buttons</h4>
        <div className="flex flex-wrap gap-3">
          <Button size="icon">
            <Heart className="h-4 w-4" />
          </Button>
          <Button size="icon" variant="outline">
            <Bookmark className="h-4 w-4" />
          </Button>
          <Button size="icon" variant="secondary">
            <Share2 className="h-4 w-4" />
          </Button>
          <Button size="icon" variant="ghost">
            <MoreHorizontal className="h-4 w-4" />
          </Button>
          <Button size="icon" variant="destructive">
            <Trash2 className="h-4 w-4" />
          </Button>
          <Button size="icon" className="rounded-full">
            <Plus className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <Separator />

      {/* Animated Icons */}
      <div>
        <h4 className="mb-4 text-sm font-medium text-muted-foreground">Animated Icons</h4>
        <div className="flex flex-wrap items-center gap-8">
          <div className="flex flex-col items-center gap-2">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            >
              <Loader2 className="h-6 w-6 text-primary" />
            </motion.div>
            <span className="text-xs text-muted-foreground">Loading</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            >
              <RefreshCw className="h-6 w-6 text-primary" />
            </motion.div>
            <span className="text-xs text-muted-foreground">Refreshing</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <Heart className="h-6 w-6 text-destructive fill-destructive" />
            </motion.div>
            <span className="text-xs text-muted-foreground">Pulse</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 1.2, repeat: Infinity }}
            >
              <Sparkles className="h-6 w-6 text-yellow-500" />
            </motion.div>
            <span className="text-xs text-muted-foreground">Bounce</span>
          </div>
        </div>
      </div>
    </div>
  );
}
