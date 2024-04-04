/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useState } from 'react'
import { Dialog, Menu, Transition } from '@headlessui/react'
import { XIcon } from '@heroicons/react/outline'
import { DotsVerticalIcon } from '@heroicons/react/solid'
import UserCards from './UserCards'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const iconTeams = <svg viewBox="-0.12979372698077785 0 32.42343730730004 32" xmlns="http://www.w3.org/2000/svg" width="25" height="25"><circle cx="17" cy="6" fill="#7b83eb" r="4.667"/><path d="M16.667 7H12.44l.021.093.002.008.022.086A4.671 4.671 0 0 0 18 10.559V8.333A1.337 1.337 0 0 0 16.667 7z" opacity=".1"/><path d="M15.667 8h-2.884A4.667 4.667 0 0 0 17 10.667V9.333A1.337 1.337 0 0 0 15.667 8z" opacity=".2"/><circle cx="27.5" cy="7.5" fill="#5059c9" r="3.5"/><path d="M30.5 12h-7.861a.64.64 0 0 0-.64.64v8.11a5.121 5.121 0 0 0 3.967 5.084A5.006 5.006 0 0 0 32 20.938V13.5a1.5 1.5 0 0 0-1.5-1.5z" fill="#5059c9"/><path d="M25 13.5V23a7.995 7.995 0 0 1-14.92 4 7.173 7.173 0 0 1-.5-1 8.367 8.367 0 0 1-.33-1A8.24 8.24 0 0 1 9 23v-9.5a1.498 1.498 0 0 1 1.5-1.5h13a1.498 1.498 0 0 1 1.5 1.5z" fill="#7b83eb"/><path d="M15.667 8h-2.884A4.667 4.667 0 0 0 17 10.667V9.333A1.337 1.337 0 0 0 15.667 8z" opacity=".2"/><path d="M18 12v12.67a1.32 1.32 0 0 1-1.04 1.29.966.966 0 0 1-.29.04H9.58a8.367 8.367 0 0 1-.33-1A8.24 8.24 0 0 1 9 23v-9.5a1.498 1.498 0 0 1 1.5-1.5z" opacity=".1"/><path d="M17 12v13.67a.967.967 0 0 1-.04.29A1.32 1.32 0 0 1 15.67 27h-5.59a7.173 7.173 0 0 1-.5-1 8.367 8.367 0 0 1-.33-1A8.24 8.24 0 0 1 9 23v-9.5a1.498 1.498 0 0 1 1.5-1.5z" opacity=".2"/><path d="M17 12v11.67A1.336 1.336 0 0 1 15.67 25H9.25A8.24 8.24 0 0 1 9 23v-9.5a1.498 1.498 0 0 1 1.5-1.5z" opacity=".2"/><path d="M10.5 12A1.498 1.498 0 0 0 9 13.5V23a8.24 8.24 0 0 0 .25 2h5.42A1.336 1.336 0 0 0 16 23.67V12z" opacity=".2"/><path d="M1.333 8h13.334A1.333 1.333 0 0 1 16 9.333v13.334A1.333 1.333 0 0 1 14.667 24H1.333A1.333 1.333 0 0 1 0 22.667V9.333A1.333 1.333 0 0 1 1.333 8z" fill="#4b53bc"/><path d="M11.98 12.975H8.99v8.02H7.028v-8.02H4.02v-1.97h7.96z" fill="#fff"/><path d="M0 0h32v32H0z" fill="none"/></svg>;

export default function HorizontalMovilMenu({open, setOpen}) {

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="fixed inset-0 overflow-hidden" onClose={setOpen}>
        <div className="absolute inset-0 overflow-hidden">
          <Dialog.Overlay className="absolute inset-0" />

          <div className="fixed inset-y-0 right-0 pl-10 max-w-full flex sm:pl-16">
            <Transition.Child
              as={Fragment}
              enter="transform transition ease-in-out duration-500 sm:duration-700"
              enterFrom="translate-x-full"
              enterTo="translate-x-0"
              leave="transform transition ease-in-out duration-500 sm:duration-700"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-full"
            >
              <div className="w-screen max-w-2xl">
                <div className="h-full flex flex-col bg-white shadow-xl overflow-y-scroll">
                  <div className="px-4 py-6 sm:px-6">
                    <div className="flex items-start justify-between">
                      <Dialog.Title className="text-lg font-medium text-gray-900">Área</Dialog.Title>
                      <div className="ml-3 h-7 flex items-center">
                        <button
                          type="button"
                          className="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:ring-2 focus:ring-[#881A59]"
                          onClick={() => setOpen(false)}
                        >
                          <span className="sr-only">Close panel</span>
                          <XIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                      </div>
                    </div>
                  </div>
                  {/* Main */}
                  <div className="divide-y divide-gray-200">
                    <div className="pb-6">
                      <div className="bg-[#881A59] h-24 sm:h-20 lg:h-28" />
                      <div className="-mt-12 flow-root px-4 sm:-mt-8 sm:flex sm:items-end sm:px-6 lg:-mt-15">
                        <div>
                          <div className="-mt-20 flex">
                            <div className="inline-flex rounded-lg overflow-hidden">
                              <img
                                className="flex-shrink-0 h-70 w-70 sm:h-40 sm:w-40 lg:w-48 lg:h-48"
                                src={require('../../assets/buildingBlue.png')}
                                alt=""
                              />
                            </div>
                          </div>
                        </div>
                        <div className=" sm:ml-6 sm:flex-1">
                          <div>
                            <div className="flex items-center">
                              <h3 className="font-bold text-xl text-gray-900 sm:text-2xl">Genius Arena</h3>
                              {/* <span className="ml-2.5 bg-green-400 flex-shrink-0 inline-block h-2 w-2 rounded-full">
                                <span className="sr-only">Online</span>
                              </span> */}
                            </div>
                            <p className="text-sm text-gray-500">contacto@geniusarena.com</p>
                          </div>
                          <div className="mt-5 flex flex-wrap space-y-3 sm:space-y-0 sm:space-x-3">
                            <a  
                              href={`https://wa.me/${'7773518653'}?text=${encodeURIComponent("Hola, me gustaría saber más sobre Genius Arena")}`}
                              type="button"
                              className="flex-shrink-0 w-full inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-300 flex-1"
                            >
                              {iconTeams}
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="px-4 py-5 sm:px-0 sm:py-0">
                      <dl className="space-y-8 sm:divide-y sm:divide-gray-200 sm:space-y-0">
                        <div className="sm:flex sm:px-6 sm:py-5">
                          <dt className="text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0 lg:w-48">Main goal of the area</dt>
                          <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:ml-6 sm:col-span-2">
                            <p>
                            Enhance operational efficiency and ensure seamless business processes by implementing and maintaining robust IT systems and infrastructure, while ensuring data security and compliance with relevant regulations.
                            </p>
                          </dd>
                        </div>
                        <div className="sm:flex sm:px-6 sm:py-5">
                          <dt className="text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0 lg:w-48">Team</dt>
                          <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:ml-6 sm:col-span-2">
                            <UserCards />
                          </dd>
                        </div>
                      </dl>
                    </div>
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
