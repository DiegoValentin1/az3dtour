import { useState, useEffect } from 'react'
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid'

import { Combobox } from '@headlessui/react'

const iconPersona = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4">
    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
</svg>;

const iconTeam = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4">
    <path d="M8 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5ZM3.156 11.763c.16-.629.44-1.21.813-1.72a2.5 2.5 0 0 0-2.725 1.377c-.136.287.102.58.418.58h1.449c.01-.077.025-.156.045-.237ZM12.847 11.763c.02.08.036.16.046.237h1.446c.316 0 .554-.293.417-.579a2.5 2.5 0 0 0-2.722-1.378c.374.51.653 1.09.813 1.72ZM14 7.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM3.5 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM5 13c-.552 0-1.013-.455-.876-.99a4.002 4.002 0 0 1 7.753 0c.136.535-.324.99-.877.99H5Z" />
</svg>;

const iconArea = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4">
    <path fillRule="evenodd" d="M1.75 2a.75.75 0 0 0 0 1.5H2v9h-.25a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 .75-.75v-1.5a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 .75.75v1.5c0 .414.336.75.75.75h.5a.75.75 0 0 0 .75-.75V3.5h.25a.75.75 0 0 0 0-1.5h-7.5ZM3.5 5.5A.5.5 0 0 1 4 5h.5a.5.5 0 0 1 .5.5V6a.5.5 0 0 1-.5.5H4a.5.5 0 0 1-.5-.5v-.5Zm.5 2a.5.5 0 0 0-.5.5v.5A.5.5 0 0 0 4 9h.5a.5.5 0 0 0 .5-.5V8a.5.5 0 0 0-.5-.5H4Zm2-2a.5.5 0 0 1 .5-.5H7a.5.5 0 0 1 .5.5V6a.5.5 0 0 1-.5.5h-.5A.5.5 0 0 1 6 6v-.5Zm.5 2A.5.5 0 0 0 6 8v.5a.5.5 0 0 0 .5.5H7a.5.5 0 0 0 .5-.5V8a.5.5 0 0 0-.5-.5h-.5ZM11.5 6a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.75a.75.75 0 0 0 0-1.5H14v-5h.25a.75.75 0 0 0 0-1.5H11.5Zm.5 1.5h.5a.5.5 0 0 1 .5.5v.5a.5.5 0 0 1-.5.5H12a.5.5 0 0 1-.5-.5V8a.5.5 0 0 1 .5-.5Zm0 2.5a.5.5 0 0 0-.5.5v.5a.5.5 0 0 0 .5.5h.5a.5.5 0 0 0 .5-.5v-.5a.5.5 0 0 0-.5-.5H12Z" clipRule="evenodd" />
</svg>;


const people = [
    { "tipo": "area", "nombre": "Soporte Técnico", "contacto": "soporte@example.com" },
    { "tipo": "area", "nombre": "Ventas", "contacto": "ventas@example.com" },
    { "tipo": "area", "nombre": "Recursos Humanos", "contacto": "rrhh@example.com" },
    { "tipo": "area", "nombre": "Desarrollo de Producto", "contacto": "producto@example.com" },
    { "tipo": "area", "nombre": "Marketing", "contacto": "marketing@example.com" },
    { "tipo": "area", "nombre": "Finanzas", "contacto": "finanzas@example.com" },
    { "tipo": "area", "nombre": "Legal", "contacto": "legal@example.com" },
    { "tipo": "area", "nombre": "Servicio al Cliente", "contacto": "cliente@example.com" },
    { "tipo": "area", "nombre": "Operaciones", "contacto": "operaciones@example.com" },
    { "tipo": "area", "nombre": "Gestión de Proyectos", "contacto": "proyectos@example.com" },
    { "tipo": "equipo", "nombre": "Equipo de Ventas", "contacto": "equipoventas@example.com" },
    { "tipo": "equipo", "nombre": "Equipo de Desarrollo", "contacto": "equipodesarrollo@example.com" },
    { "tipo": "equipo", "nombre": "Equipo de Marketing", "contacto": "equipomarketing@example.com" },
    { "tipo": "persona", "nombre": "John Doe", "contacto": "johndoe@example.com" },
    { "tipo": "persona", "nombre": "Jane Smith", "contacto": "janesmith@example.com" },
    { "tipo": "persona", "nombre": "Carlos Pérez", "contacto": "carlosperez@example.com" }
]



function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function SearchBar({ team, persona, area }) {
    const [query, setQuery] = useState('')
    const [selectedPerson, setSelectedPerson] = useState();
    const [filteredPeople, setFilteredPeople] = useState(people);


    useEffect(() => {
        if (query === '' || !team || !persona || !area) {
            setFilteredPeople(people.filter((person) => {
                return person.nombre.toLowerCase().includes(query.toLowerCase())
            }))
        }

        if (team && !persona && !area) {
            setFilteredPeople(people.filter((person) => {
                return person.tipo === "equipo" && person.nombre.toLowerCase().includes(query.toLowerCase())
            }))
        }

        if (persona && !team && !area) {
            setFilteredPeople(people.filter((person) => {
                return person.tipo === "persona" && person.nombre.toLowerCase().includes(query.toLowerCase())
            }))
        }
        if (area && !team && !persona) {
            setFilteredPeople(people.filter((person) => {
                return person.tipo === "area" && person.nombre.toLowerCase().includes(query.toLowerCase())
            }))
        }
        if (area && team && persona) {
            setFilteredPeople(people);
        }

        if (area && team && !persona) {
            setFilteredPeople(people.filter((person) => {
                return (person.tipo === "area" || person.tipo === "equipo") && person.nombre.toLowerCase().includes(query.toLowerCase())
            }))
        }
        if (area && persona && !team) {
            setFilteredPeople(people.filter((person) => {
                return (person.tipo === "area" || person.tipo === "persona") && person.nombre.toLowerCase().includes(query.toLowerCase())
            }))
        }
        if (persona && team && !area) {
            setFilteredPeople(people.filter((person) => {
                return (person.tipo === "persona" || person.tipo === "equipo") && person.nombre.toLowerCase().includes(query.toLowerCase())
            }))
        }

    }, [team, persona, area, query]);


    return (
        <Combobox as="div" value={selectedPerson} onChange={setSelectedPerson}>
            <Combobox.Label className="block text-sm font-medium text-gray-700"></Combobox.Label>
            <div className="relative mt-1">
                <Combobox.Input
                    className="w-full rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
                    onChange={(event) => setQuery(event.target.value)}
                    displayValue={(person) => person.nombre}
                />
                <Combobox.Button className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
                    <SelectorIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                </Combobox.Button>

                {filteredPeople.length > 0 && (
                    <Combobox.Options className="absolute left-[-20vw] z-10 mt-1 max-h-60 w-[80vw] overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm sm:w-[80vw] lg:w-full sm:left-[-20vw] lg:left-0">
                        {filteredPeople.map((person) => (
                            <Combobox.Option
                                key={person.contacto}
                                value={person}
                                className={({ active }) =>
                                    classNames(
                                        'relative cursor-default select-none py-2 pl-3 pr-9',
                                        active ? 'bg-indigo-600 text-white' : 'text-gray-900'
                                    )
                                }
                            >
                                {({ active, selected }) => (
                                    <>
                                        <div className="flex">
                                            <span className={classNames('truncate', selected && 'font-semibold')}>{person.nombre}</span>
                                            <span
                                                className={classNames(
                                                    'ml-2 truncate text-gray-500',
                                                    active ? 'text-indigo-200' : 'text-gray-500'
                                                )}
                                            >
                                                {person.contacto}
                                            </span>
                                        </div>
                                        {person.tipo === "area" && (<>{iconArea}</>)}
                                        {person.tipo === "equipo" && (<>{iconTeam}</>)}
                                        {person.tipo === "persona" && (<>{iconPersona}</>)}

                                    </>
                                )}
                            </Combobox.Option>
                        ))}
                    </Combobox.Options>
                )}
            </div>
        </Combobox>
    )
}
