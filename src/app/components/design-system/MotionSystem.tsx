import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { Play, X, ArrowRight, ArrowLeft, ArrowUp, ArrowDown } from "lucide-react";

export function MotionSystem() {
  const [showFadeIn, setShowFadeIn] = useState(false);
  const [showSlideIn, setShowSlideIn] = useState(false);
  const [showScale, setShowScale] = useState(false);
  const [hoverDemo, setHoverDemo] = useState(false);
  const [showSlideRight, setShowSlideRight] = useState(false);
  const [showSlideLeft, setShowSlideLeft] = useState(false);
  const [showSlideUp, setShowSlideUp] = useState(false);
  const [showSlideDown, setShowSlideDown] = useState(false);

  return (
    <div className="space-y-12">
      {/* Introduction */}
      <div>
        <h2 className="mb-4">Motion & Interaction</h2>
        <p className="text-muted-foreground max-w-3xl">
          Subtle, confident motion system with defined easing curves and durations.
          All animations respect user preferences for reduced motion.
        </p>
      </div>

      {/* Duration Tokens */}
      <Card className="p-6">
        <h3 className="mb-6">Duration Tokens</h3>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <DurationExample name="Instant" duration="0ms" variable="--duration-instant" />
          <DurationExample name="Fast" duration="150ms" variable="--duration-fast" />
          <DurationExample name="Normal" duration="250ms" variable="--duration-normal" />
          <DurationExample name="Slow" duration="350ms" variable="--duration-slow" />
          <DurationExample name="Slower" duration="500ms" variable="--duration-slower" />
        </div>
      </Card>

      {/* Easing Curves */}
      <Card className="p-6">
        <h3 className="mb-6">Easing Curves</h3>
        <div className="space-y-4">
          <EasingExample
            name="Linear"
            curve="linear"
            description="Constant speed throughout"
          />
          <EasingExample
            name="Ease In"
            curve="cubic-bezier(0.4, 0, 1, 1)"
            description="Starts slow, ends fast"
          />
          <EasingExample
            name="Ease Out"
            curve="cubic-bezier(0, 0, 0.2, 1)"
            description="Starts fast, ends slow"
          />
          <EasingExample
            name="Ease In-Out"
            curve="cubic-bezier(0.4, 0, 0.2, 1)"
            description="Slow at both ends"
          />
          <EasingExample
            name="Bounce"
            curve="cubic-bezier(0.68, -0.55, 0.265, 1.55)"
            description="Overshoots slightly"
          />
        </div>
      </Card>

      {/* Entrance Animations */}
      <Card className="p-6">
        <h3 className="mb-6">Entrance Patterns</h3>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Fade In */}
          <div>
            <h4 className="mb-3 text-sm font-medium">Fade In</h4>
            <div className="relative h-48 rounded-lg border border-border bg-muted/30 overflow-hidden">
              <AnimatePresence>
                {showFadeIn && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.35 }}
                    className="absolute inset-0 flex items-center justify-center bg-primary text-primary-foreground"
                  >
                    <p className="text-lg font-medium">Fade In</p>
                  </motion.div>
                )}
              </AnimatePresence>
              <Button
                className="absolute bottom-4 left-1/2 -translate-x-1/2"
                size="sm"
                onClick={() => setShowFadeIn(!showFadeIn)}
              >
                {showFadeIn ? <X className="mr-2 h-3 w-3" /> : <Play className="mr-2 h-3 w-3" />}
                {showFadeIn ? "Hide" : "Play"}
              </Button>
            </div>
          </div>

          {/* Slide In */}
          <div>
            <h4 className="mb-3 text-sm font-medium">Slide In</h4>
            <div className="relative h-48 rounded-lg border border-border bg-muted/30 overflow-hidden">
              <AnimatePresence>
                {showSlideIn && (
                  <motion.div
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: 100, opacity: 0 }}
                    transition={{ duration: 0.35, ease: [0, 0, 0.2, 1] }}
                    className="absolute inset-0 flex items-center justify-center bg-accent text-accent-foreground"
                  >
                    <p className="text-lg font-medium">Slide In</p>
                  </motion.div>
                )}
              </AnimatePresence>
              <Button
                className="absolute bottom-4 left-1/2 -translate-x-1/2"
                size="sm"
                onClick={() => setShowSlideIn(!showSlideIn)}
              >
                {showSlideIn ? <X className="mr-2 h-3 w-3" /> : <Play className="mr-2 h-3 w-3" />}
                {showSlideIn ? "Hide" : "Play"}
              </Button>
            </div>
          </div>

          {/* Scale */}
          <div>
            <h4 className="mb-3 text-sm font-medium">Scale</h4>
            <div className="relative h-48 rounded-lg border border-border bg-muted/30 overflow-hidden">
              <AnimatePresence>
                {showScale && (
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.8, opacity: 0 }}
                    transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
                    className="absolute inset-0 flex items-center justify-center bg-secondary text-secondary-foreground"
                  >
                    <p className="text-lg font-medium">Scale</p>
                  </motion.div>
                )}
              </AnimatePresence>
              <Button
                className="absolute bottom-4 left-1/2 -translate-x-1/2"
                size="sm"
                onClick={() => setShowScale(!showScale)}
              >
                {showScale ? <X className="mr-2 h-3 w-3" /> : <Play className="mr-2 h-3 w-3" />}
                {showScale ? "Hide" : "Play"}
              </Button>
            </div>
          </div>
        </div>
      </Card>

      {/* Directional Motion */}
      <Card className="p-6">
        <h3 className="mb-6">Directional Motion</h3>
        <p className="text-sm text-muted-foreground mb-6">
          Directional animations guide user attention and create spatial relationships between elements.
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          {/* Slide from Right */}
          <div>
            <h4 className="mb-3 text-sm font-medium flex items-center gap-2">
              <ArrowRight className="h-4 w-4" />
              Slide from Right
            </h4>
            <div className="relative h-48 rounded-lg border border-border bg-muted/30 overflow-hidden">
              <AnimatePresence>
                {showSlideRight && (
                  <motion.div
                    initial={{ x: "100%", opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: "100%", opacity: 0 }}
                    transition={{ duration: 0.35, ease: [0, 0, 0.2, 1] }}
                    className="absolute inset-0 flex items-center justify-center bg-primary text-primary-foreground"
                  >
                    <p className="text-lg font-medium">→</p>
                  </motion.div>
                )}
              </AnimatePresence>
              <Button
                className="absolute bottom-4 left-1/2 -translate-x-1/2"
                size="sm"
                onClick={() => setShowSlideRight(!showSlideRight)}
              >
                {showSlideRight ? <X className="mr-2 h-3 w-3" /> : <Play className="mr-2 h-3 w-3" />}
                {showSlideRight ? "Hide" : "Play"}
              </Button>
            </div>
          </div>

          {/* Slide from Left */}
          <div>
            <h4 className="mb-3 text-sm font-medium flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Slide from Left
            </h4>
            <div className="relative h-48 rounded-lg border border-border bg-muted/30 overflow-hidden">
              <AnimatePresence>
                {showSlideLeft && (
                  <motion.div
                    initial={{ x: "-100%", opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: "-100%", opacity: 0 }}
                    transition={{ duration: 0.35, ease: [0, 0, 0.2, 1] }}
                    className="absolute inset-0 flex items-center justify-center bg-accent text-accent-foreground"
                  >
                    <p className="text-lg font-medium">←</p>
                  </motion.div>
                )}
              </AnimatePresence>
              <Button
                className="absolute bottom-4 left-1/2 -translate-x-1/2"
                size="sm"
                onClick={() => setShowSlideLeft(!showSlideLeft)}
              >
                {showSlideLeft ? <X className="mr-2 h-3 w-3" /> : <Play className="mr-2 h-3 w-3" />}
                {showSlideLeft ? "Hide" : "Play"}
              </Button>
            </div>
          </div>

          {/* Slide from Top */}
          <div>
            <h4 className="mb-3 text-sm font-medium flex items-center gap-2">
              <ArrowUp className="h-4 w-4" />
              Slide from Top
            </h4>
            <div className="relative h-48 rounded-lg border border-border bg-muted/30 overflow-hidden">
              <AnimatePresence>
                {showSlideUp && (
                  <motion.div
                    initial={{ y: "-100%", opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: "-100%", opacity: 0 }}
                    transition={{ duration: 0.35, ease: [0, 0, 0.2, 1] }}
                    className="absolute inset-0 flex items-center justify-center bg-secondary text-secondary-foreground"
                  >
                    <p className="text-lg font-medium">↑</p>
                  </motion.div>
                )}
              </AnimatePresence>
              <Button
                className="absolute bottom-4 left-1/2 -translate-x-1/2"
                size="sm"
                onClick={() => setShowSlideUp(!showSlideUp)}
              >
                {showSlideUp ? <X className="mr-2 h-3 w-3" /> : <Play className="mr-2 h-3 w-3" />}
                {showSlideUp ? "Hide" : "Play"}
              </Button>
            </div>
          </div>

          {/* Slide from Bottom */}
          <div>
            <h4 className="mb-3 text-sm font-medium flex items-center gap-2">
              <ArrowDown className="h-4 w-4" />
              Slide from Bottom
            </h4>
            <div className="relative h-48 rounded-lg border border-border bg-muted/30 overflow-hidden">
              <AnimatePresence>
                {showSlideDown && (
                  <motion.div
                    initial={{ y: "100%", opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: "100%", opacity: 0 }}
                    transition={{ duration: 0.35, ease: [0, 0, 0.2, 1] }}
                    className="absolute inset-0 flex items-center justify-center bg-muted text-foreground"
                  >
                    <p className="text-lg font-medium">↓</p>
                  </motion.div>
                )}
              </AnimatePresence>
              <Button
                className="absolute bottom-4 left-1/2 -translate-x-1/2"
                size="sm"
                onClick={() => setShowSlideDown(!showSlideDown)}
              >
                {showSlideDown ? <X className="mr-2 h-3 w-3" /> : <Play className="mr-2 h-3 w-3" />}
                {showSlideDown ? "Hide" : "Play"}
              </Button>
            </div>
          </div>
        </div>
      </Card>

      {/* Hover & Focus States */}
      <Card className="p-6">
        <h3 className="mb-6">Hover & Focus Transitions</h3>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Scale on Hover */}
          <div>
            <h4 className="mb-3 text-sm font-medium">Scale on Hover</h4>
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.15 }}
              className="cursor-pointer rounded-lg border border-border bg-card p-6 text-center"
            >
              <p className="text-sm font-medium">Hover me</p>
            </motion.div>
          </div>

          {/* Lift on Hover */}
          <div>
            <h4 className="mb-3 text-sm font-medium">Lift on Hover</h4>
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.15 }}
              className="cursor-pointer rounded-lg border border-border bg-card p-6 text-center shadow-sm"
            >
              <p className="text-sm font-medium">Hover me</p>
            </motion.div>
          </div>

          {/* Glow on Hover */}
          <div>
            <h4 className="mb-3 text-sm font-medium">Glow on Hover</h4>
            <motion.div
              whileHover={{ boxShadow: "0 0 20px rgba(37, 99, 235, 0.3)" }}
              transition={{ duration: 0.25 }}
              className="cursor-pointer rounded-lg border border-border bg-card p-6 text-center"
            >
              <p className="text-sm font-medium">Hover me</p>
            </motion.div>
          </div>

          {/* Rotate on Hover */}
          <div>
            <h4 className="mb-3 text-sm font-medium">Rotate on Hover</h4>
            <motion.div
              whileHover={{ rotate: 2 }}
              transition={{ duration: 0.15 }}
              className="cursor-pointer rounded-lg border border-border bg-card p-6 text-center"
            >
              <p className="text-sm font-medium">Hover me</p>
            </motion.div>
          </div>

          {/* Color on Hover */}
          <div>
            <h4 className="mb-3 text-sm font-medium">Color on Hover</h4>
            <motion.div
              whileHover={{ backgroundColor: "var(--primary)" }}
              transition={{ duration: 0.25 }}
              className="cursor-pointer rounded-lg border border-border bg-card p-6 text-center"
            >
              <motion.p
                className="text-sm font-medium"
                initial={{ color: "inherit" }}
                whileHover={{ color: "var(--primary-foreground)" }}
              >
                Hover me
              </motion.p>
            </motion.div>
          </div>

          {/* Press Animation */}
          <div>
            <h4 className="mb-3 text-sm font-medium">Press Animation</h4>
            <motion.div
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.1 }}
              className="cursor-pointer rounded-lg border border-border bg-card p-6 text-center"
            >
              <p className="text-sm font-medium">Click me</p>
            </motion.div>
          </div>
        </div>
      </Card>

      {/* Stagger Animation */}
      <Card className="p-6">
        <h3 className="mb-6">Stagger Animation</h3>
        <p className="text-sm text-muted-foreground mb-4">
          Children animate in sequence for a polished feel.
        </p>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
          className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4"
        >
          {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              className="rounded-lg border border-border bg-primary/10 p-4 text-center"
            >
              <p className="text-sm font-medium">Item {i}</p>
            </motion.div>
          ))}
        </motion.div>
      </Card>

      {/* Reduced Motion Notice */}
      <Card className="p-6 border-yellow-200 bg-yellow-50 dark:border-yellow-900 dark:bg-yellow-950">
        <h3 className="mb-3">Accessibility: Reduced Motion</h3>
        <p className="text-sm text-muted-foreground">
          All animations respect the <code className="text-xs">prefers-reduced-motion</code> media query.
          Users who have requested reduced motion will see instant transitions instead of animations,
          ensuring an accessible experience for everyone.
        </p>
      </Card>

      {/* Usage Guidelines */}
      <Card className="p-6">
        <h3 className="mb-4">Motion Guidelines</h3>
        <div className="space-y-4 text-sm">
          <div>
            <h4 className="font-medium mb-1">✓ Do</h4>
            <ul className="space-y-1 text-muted-foreground ml-4">
              <li>• Use motion to guide attention and provide feedback</li>
              <li>• Keep animations subtle and purposeful</li>
              <li>• Use consistent easing curves throughout</li>
              <li>• Test with reduced motion preferences enabled</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-1">✗ Don't</h4>
            <ul className="space-y-1 text-muted-foreground ml-4">
              <li>• Overuse flashy or distracting animations</li>
              <li>• Animate purely for decoration</li>
              <li>• Use different durations/easings arbitrarily</li>
              <li>• Ignore accessibility considerations</li>
            </ul>
          </div>
        </div>
      </Card>
    </div>
  );
}

function DurationExample({
  name,
  duration,
  variable,
}: {
  name: string;
  duration: string;
  variable: string;
}) {
  const [animationKey, setAnimationKey] = useState(0);

  const handlePlay = () => {
    console.log(`Playing ${name} animation, key: ${animationKey} -> ${animationKey + 1}`);
    setAnimationKey((prev) => prev + 1);
  };

  const durationMs = parseInt(duration) / 1000;

  return (
    <div className="rounded-lg border border-border p-4">
      <div className="mb-3">
        <p className="text-sm font-medium">{name}</p>
        <code className="text-xs text-muted-foreground">{duration}</code>
      </div>
      <div className="relative h-8 rounded bg-muted overflow-hidden">
        <motion.div
          key={animationKey}
          className="h-full w-12 rounded bg-primary"
          initial={{ x: 0 }}
          animate={{ x: 200 }}
          transition={{
            duration: durationMs,
            ease: "linear",
          }}
          onAnimationStart={() => console.log(`${name} animation started`)}
          onAnimationComplete={() => console.log(`${name} animation completed`)}
        />
      </div>
      <Button
        size="sm"
        variant="outline"
        className="mt-3 w-full"
        onClick={handlePlay}
      >
        Play
      </Button>
    </div>
  );
}

function EasingExample({
  name,
  curve,
  description,
}: {
  name: string;
  curve: string;
  description: string;
}) {
  const [animationKey, setAnimationKey] = useState(0);

  const handlePlay = () => {
    setAnimationKey((prev) => prev + 1);
  };

  // Parse easing curve
  let easingValue: any = "linear";
  if (curve !== "linear") {
    const match = curve.match(/cubic-bezier\(([-\d.,\s]+)\)/);
    if (match) {
      easingValue = match[1].split(",").map((s) => parseFloat(s.trim()));
    }
  }

  return (
    <div className="rounded-lg border border-border p-4">
      <div className="mb-3 flex items-start justify-between">
        <div>
          <p className="text-sm font-medium">{name}</p>
          <p className="text-xs text-muted-foreground">{description}</p>
        </div>
        <Button
          size="sm"
          variant="outline"
          onClick={handlePlay}
        >
          <Play className="h-3 w-3" />
        </Button>
      </div>
      <div className="relative h-8 rounded bg-muted overflow-hidden">
        <motion.div
          key={animationKey}
          className="h-full w-12 rounded bg-primary"
          initial={{ x: 0 }}
          animate={{ x: 200 }}
          transition={{
            duration: 0.5,
            ease: easingValue,
          }}
        />
      </div>
    </div>
  );
}