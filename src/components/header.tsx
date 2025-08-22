'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Button } from './ui/button';
import { Input } from './ui/input';
import {
  UtensilsCrossed,
  Search,
  ShoppingCart,
  Menu,
  X,
} from 'lucide-react';
import { useCart } from '@/contexts/cart-context';
import { CartSheet } from './cart-sheet';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from './ui/sheet';

const Header = () => {
  const { cartCount } = useCart();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/restaurants', label: 'Restaurants' },
    { href: '/#how-it-works', label: 'How It Works' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 max-w-screen-2xl items-center justify-between px-4">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center gap-2">
            <UtensilsCrossed className="h-7 w-7 text-primary" />
            <span className="text-xl font-bold font-headline text-foreground">
              Eatsy
            </span>
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="hidden md:flex flex-1 max-w-sm items-center space-x-2">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search for restaurants or food..."
              className="pl-10"
            />
          </div>
        </div>

        <div className="flex items-center gap-2">
          <CartSheet />
          <div className="hidden md:flex gap-2">
            <Button variant="ghost" asChild>
              <Link href="/login">Log In</Link>
            </Button>
            <Button asChild>
              <Link href="/signup">Sign Up</Link>
            </Button>
          </div>
          <div className="md:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <SheetHeader>
                  <SheetTitle className='flex items-center gap-2'>
                    <UtensilsCrossed className="h-6 w-6 text-primary" />
                    <span className="text-lg font-bold font-headline text-foreground">
                      Eatsy
                    </span>
                  </SheetTitle>
                </SheetHeader>
                <div className="flex flex-col space-y-4 mt-8">
                  <nav className="flex flex-col space-y-4">
                    {navLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="text-lg font-medium text-muted-foreground transition-colors hover:text-primary"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </nav>
                  <div className="pt-4 border-t">
                     <Button variant="ghost" asChild className='w-full justify-start text-lg'>
                        <Link href="/login" onClick={() => setMobileMenuOpen(false)}>Log In</Link>
                      </Button>
                      <Button asChild className='w-full text-lg mt-2'>
                        <Link href="/signup" onClick={() => setMobileMenuOpen(false)}>Sign Up</Link>
                      </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
