'use client';

import { useEffect, useState, useCallback } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

type NavItem = {
  name: string;
  href?: string;
  children?: { name: string; href: string }[];
};

const navigation: NavItem[] = [
  {
    name: 'Home',
    href: '/'
   
  },
  {
    name: 'About',
    href: '/about'
  },
  // { name: 'Contact', href: '/contact' },
];

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  const closeAll = useCallback(() => {
    setOpen(false);
    setOpenDropdown(null);
  }, []);

  // Close menus on route change
  useEffect(() => {
    closeAll();
  }, [pathname, closeAll]);

  // Close with ESC
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeAll();
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [closeAll]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/70 border-b">
      <nav className="container mx-auto px-4 sm:px-6 py-3">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-[#1CA75B]">
            MN
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                <Link
                  href={item.href ?? '#'}
                  className="text-gray-700 hover:text-[#1CA75B] transition-colors"
                >
                  {item.name}
                </Link>

                {/* Optional hover dropdown for desktop if children exist */}
                {item.children?.length ? (
                  <div className="invisible absolute left-0 mt-2 w-52 rounded-xl border bg-white shadow-lg opacity-0 transition group-hover:visible group-hover:opacity-100">
                    <ul className="py-2">
                      {item.children.map((child) => (
                        <li key={child.href}>
                          <Link
                            href={child.href}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                          >
                            {child.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}
              </div>
            ))}
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#1CA75B]"
            aria-label="Open menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {/* Icon changes if open */}
            {!open ? (
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m0 6H10" />
              </svg>
            ) : (
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile panel */}
        <div
          className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-300 ${
            open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <ul className="mt-2 space-y-1 rounded-xl border bg-white p-2 shadow-sm">
            {navigation.map((item) => {
              const hasChildren = !!item.children?.length;
              const isOpen = openDropdown === item.name;

              return (
                <li key={item.name}>
                  {!hasChildren ? (
                    <Link
                      href={item.href ?? '#'}
                      className="flex w-full items-center justify-between rounded-lg px-3 py-2 text-gray-700 hover:bg-gray-50"
                      onClick={() => setOpen(false)}
                    >
                      <span>{item.name}</span>
                    </Link>
                  ) : (
                    <div className="w-full">
                      <button
                        type="button"
                        className="flex w-full items-center justify-between rounded-lg px-3 py-2 text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#1CA75B]"
                        aria-expanded={isOpen}
                        aria-controls={`section-${item.name}`}
                        onClick={() =>
                          setOpenDropdown((prev) => (prev === item.name ? null : item.name))
                        }
                      >
                        <span>{item.name}</span>
                        <svg
                          className={`h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 12a1 1 0 0 1-.707-.293l-4-4a1 1 0 1 1 1.414-1.414L10 9.586l3.293-3.293a1 1 0 1 1 1.414 1.414l-4 4A1 1 0 0 1 10 12z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </button>

                      <div
                        id={`section-${item.name}`}
                        className={`grid transition-[grid-template-rows,opacity] duration-300 ${
                          isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                        }`}
                      >
                        <ul className="overflow-hidden rounded-lg bg-gray-50">
                          {/* Parent link first (optional) */}
                          {item.href && (
                            <li>
                              <Link
                                href={item.href}
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                onClick={() => setOpen(false)}
                              >
                                {item.name} — Main
                              </Link>
                            </li>
                          )}
                          {item.children?.map((child) => (
                            <li key={child.href}>
                              <Link
                                href={child.href}
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                onClick={() => setOpen(false)}
                              >
                                {child.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
