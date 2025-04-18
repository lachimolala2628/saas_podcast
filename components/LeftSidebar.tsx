'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { sidebarLinks } from '@/constant'
import { usePathname, useRouter } from 'next/navigation'
import { cn } from '@/lib/utils'

const LeftSidebar = () => {

    const pathname = usePathname();
    const router = useRouter();

    return (
        <section className='left_sidebar'>
            <nav className='flex flex-col gap-6'>
                <Link href='/' className='flex cursor-pointer gap-2 items-center pb-10 max-lg:justify-center'>
                    <Image src='/icons/logo.svg' alt='Logo' width={23} height={27} />
                    <h1 className='text-24 font-extrabold text-white max-lg:hidden'>
                        Lyra
                    </h1>
                </Link>
                {sidebarLinks.map(({ route, label, imgURL }) => {
                    const isActive = pathname === route || pathname.startsWith(`${route}/`);
                    return (
                        <Link href={route} key={label} className={cn('flex gap-3 py-4 items-center max-lg:px-4 justify-center lg:justify-start', {
                            'bg-nav-focus border-r-4 border-orange-1': isActive
                        })}>
                            <Image src={imgURL} alt={label} width={24} height={24} />
                            <p className=''>{label}</p>
                        </Link>
                    )
                })}
            </nav>
        </section>
    )
}

export default LeftSidebar