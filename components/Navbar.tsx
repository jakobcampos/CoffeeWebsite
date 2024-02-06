import Link from "next/link"
import Image from "next/image"
import { NAV_LINKS } from "@/constants"
import Button from "./Button"

const Navbar = () => {
  return (
    <nav className="border-2 border-red-500 flexBetween max-container padding-container relative z-30 py-5">

        <Image 
            src="/menu.png"
            alt="menu"
            width={32}
            height={32}
            className="inline-block cursor-pointer lg:hidden"
        />

        <ul className="hidden h-full gap-8 lg:flex">
            {NAV_LINKS.map((link) => (
                <Link href={link.href} key={link.key} className="uppercase regular-14 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold">
                    {link.label}
                </Link>
            ))}
        </ul>

        <Link href="/">
            <Image src="/logo.png" alt="logo" width={100} height={100} />
        </Link>

        <div className="flex items-centers">
            <Button 
                type="button"
                icon="/search.png"
            />
            <Button 
                type="button"
                icon="/user.png"
            />
             <Button 
                type="button"
                icon="/cart.png"
            />           
        </div>
    </nav>
  )
}

export default Navbar