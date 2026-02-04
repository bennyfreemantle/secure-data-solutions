import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Shield, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Pricing", href: "/pricing" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "FAQ", href: "/faq" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (href: string) => {
    if (href === "/") return location.pathname === "/";
    return location.pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 glass">
      <div className="container-wide">
        <div className="flex h-16 items-center justify-between md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary transition-transform group-hover:scale-105">
              <Shield className="h-5 w-5 text-primary-foreground" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-semibold leading-none tracking-tight text-foreground">
                DataRecover
              </span>
              <span className="text-[10px] font-medium uppercase tracking-widest text-muted-foreground">
                UK Specialists
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`relative px-3 py-2 text-sm font-medium transition-colors hover:text-foreground ${
                  isActive(item.href)
                    ? "text-foreground"
                    : "text-muted-foreground"
                }`}
              >
                {item.label}
                {isActive(item.href) && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute inset-x-3 -bottom-px h-0.5 bg-accent"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden items-center gap-3 lg:flex">
            <Link to="/start-recovery">
              <Button variant="accent" size="lg">
                Start a Recovery
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground lg:hidden"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="border-t border-border bg-background lg:hidden"
          >
            <nav className="container-wide flex flex-col gap-1 py-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`rounded-lg px-4 py-3 text-base font-medium transition-colors ${
                    isActive(item.href)
                      ? "bg-secondary text-foreground"
                      : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <div className="mt-4 border-t border-border pt-4">
                <Link to="/start-recovery" onClick={() => setMobileMenuOpen(false)}>
                  <Button variant="accent" size="lg" className="w-full">
                    Start a Recovery
                  </Button>
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Sticky CTA - appears on scroll */}
      <div className="fixed bottom-4 left-4 right-4 z-50 lg:hidden">
        <Link to="/start-recovery">
          <Button variant="hero" size="xl" className="w-full shadow-card-lg">
            Start a Recovery
          </Button>
        </Link>
      </div>
    </header>
  );
}
