import {Link} from 'react-router-dom';

const people = [
    {
      name: 'Leslie Alexander',
      email: 'lesliealexander@example.com',
      role: 'Co-Founder / CEO',
      imageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
        name: 'Leslie Alexander',
        email: 'lesliealexander@example.com',
        role: 'Co-Founder / CEO',
        imageUrl:
          'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      {
        name: 'Leslie Alexander',
        email: 'lesliealexander@example.com',
        role: 'Co-Founder / CEO',
        imageUrl:
          'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      {
        name: 'Leslie Alexander',
        email: 'lesliealexander@example.com',
        role: 'Co-Founder / CEO',
        imageUrl:
          'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
  ];

  const iconMail = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
</svg>;
  
  export default function UserCards() {
    return (
      <div className="grid grid-cols-1 gap-4">
        {people.map((person) => (
          <div 
            key={person.email}
            className="relative rounded-lg border border-gray-300 bg-white px-6 py-2 shadow-sm flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
          >
            <div className="flex-shrink-0">
              <img className="h-10 w-10 rounded-full" src={person.imageUrl} alt="" />
            </div>
            <div className="flex min-w-0">
              <div className="focus:outline-none">
                <span className="absolute inset-0" aria-hidden="true" />
                <p className="text-sm font-medium text-gray-900 -mb-1 mt-3">{person.name}</p>
                <p className="text-sm text-gray-500 truncate">{person.role}</p>
              </div>
            </div>
            {/* <div className="flex-1 min-w-0">
              <div href="#" className="focus:outline-none">
                {iconMail}
              </div>
            </div> */}
          </div>
        ))}
      </div>
    )
  }
  