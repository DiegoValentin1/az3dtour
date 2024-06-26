import { Fragment, useState } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon } from '@heroicons/react/outline';
import SearchBar from './SearchBar'
import CheckBoxes from './CheckBoxes';
import FlyoutMenu from './FlyoutMenu';
import { Link } from 'react-router-dom';
const Building = require('../../assets/buildingBlue.png')

const user = {
    name: 'Tom Cook',
    email: 'tom@example.com',
    imageUrl:
        Building,
}

const files = [
    {
        title: 'R&D',
        source:
            Building,
    },
    {
        title: 'RRHH',
        source:
            Building,
    },
    {
        title: 'QA',
        source:
            Building,
    },
    {
        title: 'IT',
        source:
            Building,
    },
    // More files...
]
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

export default function UserHome() {
    const [team, setTeam] = useState(false);
    const [persona, setPersona] = useState(false);
    const [area, setArea] = useState(false);
    return (
        <>

            <div className="min-h-full">
                <Disclosure as="nav" className="bg-[#881A59]">
                    {({ open }) => (
                        <>
                            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                                <div className="flex h-16 items-center justify-between">
                                    <div className="flex items-center">
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
                                        {/* Mobile menu button */}
                                        <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                            <span className="absolute -inset-0.5" />
                                            <span className="sr-only">Open main menu</span>
                                            {/* {open ? (
                                                <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                                            ) : (
                                                <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                                            )} */}
                                        </Disclosure.Button>
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

                <header className="bg-white shadow">
                    <div className="flex flex-row w-[90%] mx-auto px-4 py-6 sm:px-6 lg:px-8">
                        <h1 className="w-[30%] text-3xl font-bold tracking-tight text-gray-900 lg:w-[10%]">Search</h1>
                        <div className='w-[70%] flex flex-row sm:w-[50%] lg:w-[90%]'>
                            <div className="w-[50%] sm:w-[20%] lg:w-[40%]">
                                <SearchBar team={team} persona={persona} area={area} />
                            </div>
                            <div className='w-[50%] flex flex-row items-center sm:w-[50%] lg:w-[50%]' >
                                <CheckBoxes setTeam={setTeam} setPersona={setPersona} setArea={setArea} />
                            </div>
                        </div>
                    </div>
                </header>
                <main>
                    <div className="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
                        <ul role="list" className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
                            {files.map((file) => (
                                <Link to={'/tour'} key={file.source} className="relative group">
                                    <div className="block w-full aspect-w-10 aspect-h-7 rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100  overflow-hidden">
                                        <img src={file.source} alt="" className="object-cover pointer-events-none group-hover:opacity-75 group-hover:scale-125 transition-transform duration-300" />
                                        <button type="button" className="absolute inset-0 focus:outline-none">
                                            <span className="sr-only">View details for {file.title}</span>
                                        </button>
                                    </div>
                                    <p className="mt-2 block text-sm font-medium text-gray-900 truncate pointer-events-none">{file.title}</p>
                                </Link>

                            ))}
                        </ul>
                    </div>
                </main>
            </div>
        </>
    )
}
