import React, { useState } from 'react';
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
  Switch
} from '@nextui-org/react';
import { Sun, Moon, TreePine } from 'lucide-react';
import { useScrollSpy } from '../../hooks/useScrollSpy';
import { navigationItems } from '../../utils/constants';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const activeSection = useScrollSpy(['hero', 'about', 'skills', 'portfolio', 'contact']);

  const handleNavClick = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <Navbar 
      onMenuOpenChange={setIsMenuOpen}
      isMenuOpen={isMenuOpen}
      className="bg-background/70 backdrop-blur-md border-b border-divider"
      maxWidth="xl"
      position="sticky"
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <TreePine className="text-success mr-2" size={24} />
          <p className="font-bold text-inherit">Nikolai Beliaev</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {navigationItems.map((item) => (
          <NavbarItem key={item.name}>
            <Link
              color={activeSection === item.href.slice(1) ? "primary" : "foreground"}
              className="cursor-pointer hover:text-primary transition-colors"
              onPress={() => handleNavClick(item.href)}
            >
              {item.name}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
          <Switch
            defaultSelected={isDark}
            size="sm"
            color="primary"
            thumbIcon={({ isSelected, className }) =>
              isSelected ? (
                <Moon className={className} />
              ) : (
                <Sun className={className} />
              )
            }
            onChange={toggleTheme}
            aria-label="Toggle theme"
          />
        </NavbarItem>
        <NavbarItem>
          <Button
            as={Link}
            color="primary"
            href="#contact"
            variant="flat"
            onPress={() => handleNavClick('#contact')}
          >
            Contact Me
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {navigationItems.map((item) => (
          <NavbarMenuItem key={item.name}>
            <Link
              color={activeSection === item.href.slice(1) ? "primary" : "foreground"}
              className="w-full cursor-pointer"
              onPress={() => handleNavClick(item.href)}
              size="lg"
            >
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};

export default Header;
