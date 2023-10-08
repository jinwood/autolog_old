import Link from "next/link";
import Image from "next/image";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="bg-slate-800 p-4">
        <div className="container mx-auto flex items-center justify-between">
          {/* Logo on the left */}
          <div className="text-2xl font-bold text-white">
            <Link href="/">
              <Image src="/logo.png" width={50} height={50} alt="Logo" />
            </Link>
          </div>

          {/* Menu on the right */}
          <nav className="space-x-4">
            <Link href="/" className="text-white hover:text-gray-200">
              Home
            </Link>
            <Link href="/about" className="text-white hover:text-gray-200">
              About
            </Link>
            <Link href="/contact" className="text-white hover:text-gray-200">
              Contact
            </Link>
          </nav>
        </div>
      </header>
      <div className="flex-grow p-2 md:p-8">{children}</div>
      <footer className="sticky bottom-0 bg-neutral-200 text-center dark:bg-neutral-700 lg:text-left">
        <div className="p-4 text-center text-neutral-700 dark:text-neutral-200">
          © 2023 Copyright:
          <a
            className="text-neutral-800 dark:text-neutral-400"
            href="https://tailwind-elements.com/"
          >
            Me
          </a>
        </div>
      </footer>
    </div>
  );
}
