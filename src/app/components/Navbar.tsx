
"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const pathname = usePathname();

  const navItems = [
    { id: 'home', label: 'Ana Sayfa', href: '/' },
    { id: 'login_page', label: 'Login Page', href: '/login' },
    { id: 'profile_page', label: 'Profile Page', href: '/profile' },
  ];

  return (
    <nav className="bg-blue-600 p-4">
      <ul className="flex justify-center space-x-4">
        {navItems.map((item) => (
          <li key={item.id}>
            <Link href={item.href}>
              <span className={`text-white ${pathname === item.href ? 'font-bold' : ''}`}>
                {item.label}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
