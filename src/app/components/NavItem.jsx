"use client"
import React from 'react'
import Link from 'next/link'
import {usePathname} from "next/navigation"
const NavItem = () => {
  const pathname = usePathname()
    const links = [
        { label: "Home", href: "/" },
        { label: "About", href: "/about" },
        { label: "Services", href: "/services" },
        { label: "Contact", href: "/contact" },
    
      ];
    return(
<div className="flex justify-between space-x-[200px] ">

    {links.map(({href,label}, index) => (
      href !== pathname && (
            <div key={index}>
              <Link href={href}>
                <li className="justify-around flex text-2xl font-light hover:underline ">{label}</li>
              </Link>
            </div>
      )
          ))}
</div>
        
        

    )
}
    


  


export default NavItem
