import React, { useState, Fragment } from 'react';
import { DotsVerticalIcon } from '@heroicons/react/solid';
import Scene from '../../components/scena';
import HorizontalMovilMenu from './HorizontalMovilMenu';
import { Disclosure, Menu, Transition, Dialog } from '@headlessui/react';
import { BellIcon, XIcon } from '@heroicons/react/outline';
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
    { name: 'Dashboard', href: '#', current: true },
    { name: 'Team', href: '#', current: false },
    { name: 'Projects', href: '#', current: false },
    { name: 'Calendar', href: '#', current: false },
    { name: 'Reports', href: '#', current: false },
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
    const [open, setOpen] = useState(false);
    return (
        <div className="min-h-full">
            <Disclosure as="nav" className="bg-[#881A59]">
                {({ open }) => (
                    <>
                        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                            <div className="flex h-16 items-center justify-between">
                                <div className="flex items-center">
                                    <div className="flex-shrink-0">
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
                                        <Menu as="div" className="relative ml-3">
                                            <div>
                                                <Menu.Button className="relative flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                                    <span className="absolute -inset-1.5" />
                                                    <span className="sr-only">Open user menu</span>
                                                    <img className="h-8 w-8 rounded-full" src={user.imageUrl} alt="" />
                                                </Menu.Button>
                                            </div>
                                            <Transition
                                                as={Fragment}
                                                enter="transition ease-out duration-100"
                                                enterFrom="transform opacity-0 scale-95"
                                                enterTo="transform opacity-100 scale-100"
                                                leave="transition ease-in duration-75"
                                                leaveFrom="transform opacity-100 scale-100"
                                                leaveTo="transform opacity-0 scale-95"
                                            >
                                                <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                    {userNavigation.map((item) => (
                                                        <Menu.Item key={item.name}>
                                                            {({ active }) => (
                                                                <a
                                                                    href={item.href}
                                                                    className={classNames(
                                                                        active ? 'bg-gray-100' : '',
                                                                        'block px-4 py-2 text-sm text-gray-700'
                                                                    )}
                                                                >
                                                                    {item.name}
                                                                </a>
                                                            )}
                                                        </Menu.Item>
                                                    ))}
                                                </Menu.Items>
                                            </Transition>
                                        </Menu>
                                    </div>
                                </div>
                                <div className="-mr-2 flex md:hidden">
                                    <div onClick={() => setOpen(true)}>{iconInfo}</div>
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

                        <Disclosure.Panel className="md:hidden">
                            <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
                                {navigation.map((item) => (
                                    <Disclosure.Button
                                        key={item.name}
                                        as="a"
                                        href={item.href}
                                        className={classNames(
                                            item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                            'block rounded-md px-3 py-2 text-base font-medium'
                                        )}
                                        aria-current={item.current ? 'page' : undefined}
                                    >
                                        {item.name}
                                    </Disclosure.Button>
                                ))}
                            </div>
                            <div className="border-t border-gray-700 pb-3 pt-4">
                                <div className="flex items-center px-5">
                                    <div className="flex-shrink-0">
                                        <img className="h-10 w-10 rounded-full" src={user.imageUrl} alt="" />
                                    </div>
                                    <div className="ml-3">
                                        <div className="text-base font-medium leading-none text-white">{user.name}</div>
                                        <div className="text-sm font-medium leading-none text-gray-400">{user.email}</div>
                                    </div>
                                    <button
                                        type="button"
                                        className="relative ml-auto flex-shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                                    >
                                        <span className="absolute -inset-1.5" />
                                        <span className="sr-only">View notifications</span>
                                        <BellIcon className="h-6 w-6" aria-hidden="true" />
                                    </button>
                                </div>
                                <div className="mt-3 space-y-1 px-2">
                                    {userNavigation.map((item) => (
                                        <Disclosure.Button
                                            key={item.name}
                                            as="a"
                                            href={item.href}
                                            className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                                        >
                                            {item.name}
                                        </Disclosure.Button>
                                    ))}
                                </div>
                            </div>
                        </Disclosure.Panel>
                    </>
                )}
            </Disclosure>

            <main className="min-w-0 flex-1 border-t border-gray-200 lg:flex">
                {/* Primary column */}
                <section
                    aria-labelledby="primary-heading"
                    className="min-w-0 flex-1 h-full flex flex-col overflow-y-auto lg:order-last"
                >
                    <Scene />
                </section>
                <aside className="w-[30vw] hidden lg:block lg:flex-shrink-0 lg:order-first">
                    <div className="h-[90vh] w-[100%] relative flex flex-col border-r border-gray-200 bg-gray-100 overflow-y-auto">
                        <div className="w-max-w-2xl">
                            <div className="h-full flex flex-col bg-white shadow-xl overflow-y-scroll" style={{overflow:"hidden"}}>

                                {/* Main */}
                                <div className="divide-y divide-gray-200">
                                    <div className="pb-6">
                                        <div className="bg-[#DAA815] h-24 sm:h-20 lg:h-28" />
                                        <div className="mb-10 -mt-20 sm:ml-6 sm:flex-1">
                                            <div>
                                                <div className="flex items-center">
                                                    <h3 className="font-bold text-xl text-white sm:text-2xl">Ashley Porter</h3>
                                                    <span className="ml-2.5 bg-green-400 flex-shrink-0 inline-block h-2 w-2 rounded-full">
                                                        <span className="sr-only">Online</span>
                                                    </span>
                                                </div>
                                                <p className="text-sm text-white">@ashleyporter</p>
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
                                        <dl className="space-y-8 sm:divide-y sm:divide-gray-200 sm:space-y-0">
                                            <div className="sm:flex sm:px-6 sm:py-5">
                                                <dt className="text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0 lg:w-48">Bio</dt>
                                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:ml-6 sm:col-span-2">
                                                    <p>
                                                        Enim feugiat ut ipsum, neque ut. Tristique mi id elementum praesent. Gravida in tempus
                                                        feugiat netus enim aliquet a, quam scelerisque. Dictumst in convallis nec in bibendum
                                                        aenean arcu.
                                                    </p>
                                                </dd>
                                            </div>
                                            <div className="sm:flex sm:px-6 sm:py-5">
                                                <dt className="text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0 lg:w-48">
                                                    Location
                                                </dt>
                                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:ml-6 sm:col-span-2">
                                                    New York, NY, USA
                                                </dd>
                                            </div>
                                            <div className="sm:flex sm:px-6 sm:py-5">
                                                <dt className="text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0 lg:w-48">
                                                    Website
                                                </dt>
                                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:ml-6 sm:col-span-2">ashleyporter.com</dd>
                                            </div>
                                            <div className="sm:flex sm:px-6 sm:py-5">
                                                <dt className="text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0 lg:w-48">
                                                    Birthday
                                                </dt>
                                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:ml-6 sm:col-span-2">
                                                    <time dateTime="1982-06-23">June 23, 1982</time>
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
