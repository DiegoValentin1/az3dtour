import React, { useState, Fragment, useEffect } from 'react';
import { DotsVerticalIcon } from '@heroicons/react/solid';
import Scene from '../../components/scena';
import HorizontalMovilMenu from './HorizontalMovilMenu';
import { Disclosure, Menu, Transition, Dialog } from '@headlessui/react';
import { BellIcon, XIcon } from '@heroicons/react/outline';
import UserCards from './UserCards';
import SceneMobil from '../../components/scenaMobil';
const Building = require('../../assets/buildingBlue.png');


const user = {
    name: 'Tom Cook',
    email: 'tom@example.com',
    imageUrl:
        Building,
}

const iconInfo = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
</svg>;


const navigation = [
    // { name: 'Dashboard', href: '#', current: true },
    // { name: 'Team', href: '#', current: false },
    // { name: 'Projects', href: '#', current: false },
    // { name: 'Calendar', href: '#', current: false },
    // { name: 'Reports', href: '#', current: false },
]
const userNavigation = [
    { name: 'Your Profile', href: '#' },
    { name: 'Settings', href: '#' },
    { name: 'Sign out', href: '#' },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const TourScreen = () => {
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        setIsMobile(window.innerWidth < 768)
    }, []);
    const [open, setOpen] = useState(false);
    return (
        <div className="min-h-full">
            <Disclosure as="nav" className="bg-[#881A59]">
                {({ open }) => (
                    <>
                        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                            <div className="flex h-16 items-center justify-between">
                                <div className="flex items-start">
                                    <div className="flex flex-shrink-0 text-2xl text-white">
                                        AstraZeneca
                                        <img
                                            className="h-8 w-8"
                                            src={require('../../assets/azlogosm.png')}
                                            alt="Your Company"
                                        />
                                    </div>
                                    <div className="hidden md:block">
                                        <div className="ml-10 flex items-baseline space-x-4">
                                            {navigation.map((item) => (
                                                <a
                                                    key={item.name}
                                                    href={item.href}
                                                    className={classNames(
                                                        item.current
                                                            ? 'bg-[#DAA815] text-white'
                                                            : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                                        'rounded-md px-3 py-2 text-sm font-medium'
                                                    )}
                                                    aria-current={item.current ? 'page' : undefined}
                                                >
                                                    {item.name}
                                                </a>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <div className="hidden md:block">
                                    <div className="ml-4 flex items-center md:ml-6">


                                        {/* Profile dropdown */}
                                    </div>
                                </div>
                                <div className="-mr-2 flex md:hidden">
                                    <div className='cursor-pointer' onClick={() => setOpen(true)}>{iconInfo}</div>
                                    {/* Mobile menu button */}
                                    {/* <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                        <span className="absolute -inset-0.5" />
                                        <span className="sr-only">Open main menu</span>
                                        {open ? (
                                                <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                                            ) : (
                                                <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                                            )}
                                    </Disclosure.Button> */}
                                </div>
                            </div>
                        </div>

                        
                    </>
                )}
            </Disclosure>

            <main className="min-w-0 flex-1 border-t border-gray-200 lg:flex">
                {/* Primary column */}
                <section
                    aria-labelledby="primary-heading"
                    className="min-w-0 flex-1 h-full flex flex-col overflow-y-auto lg:order-last"
                >
                    {!isMobile ? <Scene /> : <SceneMobil />}
                </section>
                <aside className="w-[30vw] hidden lg:block lg:flex-shrink-0 lg:order-first">
                    <div className="h-[90vh] w-[100%] relative flex flex-col border-r border-gray-200 bg-gray-100 overflow-y-auto">
                        <div className="w-max-w-2xl">
                            <div className="h-full flex flex-col bg-white shadow-xl overflow-y-scroll" style={{ overflow: "hidden" }}>

                                {/* Main */}
                                <div className="divide-y divide-gray-200">
                                    <div className="pb-6">
                                        <div className="bg-[#DAA815] h-24 sm:h-20 lg:h-28" />
                                        <div className="mb-10 -mt-20 sm:ml-6 sm:flex-1">
                                            <div>
                                                <div className="flex items-center">
                                                    <h3 className="font-bold text-xl text-white sm:text-2xl">Genius Arena</h3>
                                                    
                                                </div>
                                                <p className="text-sm text-white">contact@geniusarena.com</p>
                                            </div>
                                        </div>
                                        <div className="flow-root px-4 sm:-mt-8 sm:flex sm:items-end sm:px-6">
                                            <div>
                                                <div className="-m-1 flex">
                                                    <div className="inline-flex rounded-lg overflow-hidden">
                                                        <img
                                                            className="flex-shrink-0 h-24 w-24 sm:h-40 sm:w-40 lg:w-48 lg:h-48"
                                                            src={require('../../assets/buildingBlue.png')}
                                                            alt=""
                                                        />
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                    <div className="px-4 py-5 sm:px-0 sm:py-0">
                                        <dl className="space-y-8 divide-y sm:divide-gray-200 sm:space-y-0">
                                            <div className="flex flex-col sm:px-6 sm:py-5">
                                                <dt className="text-sm font-medium ml-6 text-gray-500 w-40 flex-shrink-0">Main goal of the area</dt>
                                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:ml-6 col-span-2">
                                                    <p>
                                                    Enhance operational efficiency and ensure seamless business processes by implementing and maintaining robust IT systems and infrastructure, while ensuring data security and compliance with relevant regulations.
                                                    </p>
                                                </dd>
                                            </div>
                                            <div className="flex flex-col">
                                                <dt className="text-sm font-medium ml-6 text-gray-500 w-40 flex-shrink-0">Team</dt>
                                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:ml-6 col-span-2">
                                                    <UserCards />
                                                </dd>
                                            </div>
                                        </dl>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </aside>
            </main>
            <HorizontalMovilMenu open={open} setOpen={setOpen} />
        </div>
    );
}

export default TourScreen;
