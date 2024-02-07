import Link from "next/link";
import Image from "next/image";
import { NAV_LINKS } from "@/constants";
import Button from "./Button";

const Navbar = () => {
    return (
      <nav className="grid grid-cols-3 items-center justify-between border-2 border-red-500 px-20 py-5 relative z-30">
  
          {/* Left-aligned menu icon and navigation links */}
          <div className="flex items-center justify-start">
              <Image 
                  src="/menu.png"
                  alt="menu"
                  width={32}
                  height={32}
                  className="inline-block cursor-pointer lg:hidden"
              />
              <ul className="hidden lg:flex items-center gap-8">
                  {NAV_LINKS.map((link) => (
                      <li key={link.key} className="text-sm uppercase text-gray-50 flexCenter whitespace-nowrap cursor-pointer transition-all hover:font-bold">
                          <Link href={link.href} className="flex items-center justify-center">
                            {link.label}
                          </Link>
                      </li>
                  ))}
              </ul>
          </div>
  
          {/* Centered logo */}
          <div className="flex justify-center">
              <Link href="/">
                  <Image src="/logo.png" alt="logo" width={75} height={75} />
              </Link>
          </div>
          
          {/* Right-aligned buttons */}
          <div className="flex items-center justify-end">
              <Button type="button" icon="/search.png" />
              <Button type="button" icon="/user.png" />
              <Button type="button" icon="/cart.png" />           
          </div>
      </nav>
    );
}

export default Navbar;
