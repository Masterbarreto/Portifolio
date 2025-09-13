'use client';

import { NAV_LINKS } from '@/lib/data';
import { cn } from '@/lib/utils';
import { Menu, Code } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Button } from '../ui/button';
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useRouter } from 'next/navigation';


const NavLink = ({ href, label, className, onClick }: { href: string; label: string; className?: string; onClick?: () => void }) => {
  const pathname = usePathname();
  const isActive = pathname === href || pathname.endsWith(href);

  return (
    <Link
      href={href}
      onClick={onClick}
      className={cn(
        'relative text-sm font-medium text-muted-foreground transition-colors hover:text-primary',
        isActive && 'text-primary',
        'group',
        className
      )}
    >
      {label}
      <span
        className={cn(
          'absolute bottom-[-2px] left-0 h-[2px] w-full bg-primary transition-transform duration-300 scale-x-0 group-hover:scale-x-100',
          isActive ? 'scale-x-100' : 'scale-x-0'
        )}
      />
    </Link>
  );
};

export default function Header() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const handleLocaleChange = (locale: string) => {
    const newPath = `/${locale}${pathname.replace(/^\/(pt-br|en-us)/, '')}`;
    router.push(newPath);
  };

  const currentLocale = pathname.split('/')[1] || 'pt-br';

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 flex items-center">
          <Link href={`/${currentLocale}`} className="mr-6 flex items-center space-x-2">
            <Code className="h-6 w-6 text-primary" />
            <span className="font-bold font-headline">Masterbarreto</span>
          </Link>
        </div>

        <nav className="hidden items-center space-x-6 md:flex">
          {NAV_LINKS.map((link) => (
            <NavLink key={link.href} href={`/${currentLocale}${link.href}`} label={link.label} />
          ))}
        </nav>

        <div className="flex flex-1 items-center justify-end space-x-4">
           <div className="hidden md:block">
            <Select value={currentLocale} onValueChange={handleLocaleChange}>
              <SelectTrigger className="w-[100px] text-xs">
                <SelectValue placeholder="Idioma" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="pt-br">PT-BR</SelectItem>
                <SelectItem value="en-us">EN-US</SelectItem>
              </SelectContent>
            </Select>
           </div>
          <Sheet open={isMobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <div className="flex flex-col space-y-4 p-4">
                <Link href={`/${currentLocale}`} className="mr-6 flex items-center space-x-2 mb-4">
                    <Code className="h-6 w-6 text-primary" />
                    <span className="font-bold font-headline">Masterbarreto</span>
                </Link>
                {NAV_LINKS.map((link) => (
                  <NavLink
                    key={link.href}
                    href={`/${currentLocale}${link.href}`}
                    label={link.label}
                    className="text-lg"
                    onClick={() => setMobileMenuOpen(false)}
                  />
                ))}
                <div className="pt-4">
                    <Select value={currentLocale} onValueChange={handleLocaleChange}>
                    <SelectTrigger className="w-full text-xs">
                        <SelectValue placeholder="Idioma" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="pt-br">PT-BR</SelectItem>
                        <SelectItem value="en-us">EN-US</SelectItem>
                    </SelectContent>
                    </Select>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
