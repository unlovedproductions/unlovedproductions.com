import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className="max-w-7xl mx-auto px-6 pt-12 pb-8">
      <ol className="flex items-center gap-2">
        {items.map((item, idx) => (
          <li key={idx} className="flex items-center gap-2">
            {item.href ? (
              <Link
                href={item.href}
                className="text-sm text-[#808080] hover:text-[#8B3A62] transition-colors"
              >
                {item.label}
              </Link>
            ) : (
              <span className="text-sm text-[#808080]">{item.label}</span>
            )}
            {idx < items.length - 1 && (
              <ChevronRight size={16} className="text-[#8B3A62]" />
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
