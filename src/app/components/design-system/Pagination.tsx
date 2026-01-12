import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "../ui/button";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange?: (page: number) => void;
}

export function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
  
  // Show max 7 page numbers at a time
  const getVisiblePages = () => {
    if (totalPages <= 7) return pages;
    
    if (currentPage <= 3) {
      return [...pages.slice(0, 5), '...', totalPages];
    }
    
    if (currentPage >= totalPages - 2) {
      return [1, '...', ...pages.slice(totalPages - 5)];
    }
    
    return [
      1,
      '...',
      currentPage - 1,
      currentPage,
      currentPage + 1,
      '...',
      totalPages,
    ];
  };

  const visiblePages = getVisiblePages();

  return (
    <div className="flex items-center justify-center gap-1">
      <Button
        variant="outline"
        size="icon"
        disabled={currentPage === 1}
        onClick={() => onPageChange?.(currentPage - 1)}
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>

      {visiblePages.map((page, index) => {
        if (page === '...') {
          return (
            <span key={`ellipsis-${index}`} className="px-3 text-muted-foreground">
              ...
            </span>
          );
        }

        return (
          <Button
            key={page}
            variant={currentPage === page ? "default" : "outline"}
            size="icon"
            onClick={() => onPageChange?.(page as number)}
          >
            {page}
          </Button>
        );
      })}

      <Button
        variant="outline"
        size="icon"
        disabled={currentPage === totalPages}
        onClick={() => onPageChange?.(currentPage + 1)}
      >
        <ChevronRight className="h-4 w-4" />
      </Button>
    </div>
  );
}
