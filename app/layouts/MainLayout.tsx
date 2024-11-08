import React from 'react'
import { usePathname } from 'next/navigation'
import TopNav from './includes/app/layouts/includes/TopNav'
import SideNavMain from './includes/app/layouts/includes/SideNavMain'

export default function MainLayout({children}: {children: React.ReactNode }){

    const pathname = usePathname()
    return (
        <>
        <TopNav/>
        <div  className={`flex justify-between max-auto v-full lg:px-2.5 px-0 ${pathname == '/' ? 'max-w[1140]' : ''}`}>
            <SideNavMain/>
            {children}
        </div>
        </>
    )
}