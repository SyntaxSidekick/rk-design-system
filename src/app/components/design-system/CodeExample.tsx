import { useState } from "react";
import { Copy, Check } from "lucide-react";
import { Button } from "../ui/button";

interface CodeExampleProps {
  title: string;
  description?: string;
  code: string;
  preview: React.ReactNode;
}

export function CodeExample({ title, description, code, preview }: CodeExampleProps) {
  const [copied, setCopied] = useState(false);

  const copyCode = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-4">
      <div>
        <h4 className="font-medium mb-1">{title}</h4>
        {description && (
          <p className="text-sm text-muted-foreground">{description}</p>
        )}
      </div>

      {/* Preview */}
      <div className="rounded-lg border border-border bg-background p-6">
        <div className="flex items-center justify-center">
          {preview}
        </div>
      </div>

      {/* Code */}
      <div className="relative">
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-2 top-2 h-8 w-8 z-10"
          onClick={copyCode}
        >
          {copied ? (
            <Check className="h-4 w-4 text-green-500" />
          ) : (
            <Copy className="h-4 w-4" />
          )}
        </Button>
        <pre className="rounded-lg bg-muted/50 p-4 text-sm overflow-x-auto border border-border/50">
          <code className="text-foreground">{code}</code>
        </pre>
      </div>
    </div>
  );
}
