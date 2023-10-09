import { nanoid } from 'nanoid';
import { FaHtml5, FaJs, FaNodeJs, FaReact, FaDatabase } from 'react-icons/fa';

export const links = [
  { id: nanoid(), href: '#home', text: 'home' },
  { id: nanoid(), href: '#about', text: 'about' },
  { id: nanoid(), href: '#skills', text: 'skills' },
  { id: nanoid(), href: '#projects', text: 'projects' }
];

export const skills = [
  {
    id: nanoid(),
    title: 'HTML&CSS',
    icon: <FaHtml5 className='h-16 w-16 text-emerald-500' />,
    text: 'Skilled in HTML & CSS, adeptly crafting visually appealing and responsive websites for optimal user experiences.Keep on learing frameworks like Bootstrap,tailwind,MUI etc..,'
  },
  {
    id: nanoid(),
    title: 'Javascript',
    icon: <FaJs className='h-16 w-16 text-emerald-500' />,
    text: 'Good at Javascript core concepts like arrays,objects, class,numbers, and use of functionallity in frontend and serverside'
  },
  {
    id: nanoid(),
    title: 'React',
    icon: <FaReact className='h-16 w-16 text-emerald-500' />,
    text: 'Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture. Learnig chaching and transition parts for better wesite enhancement'
  },
  {
    id: nanoid(),
    title: 'Nodejs',
    icon: <FaNodeJs className='h-16 w-16 text-emerald-500' />,
    text: 'Good at Nodejs and its framework like Express, good at async programming, fetching data, server DB integration,MVC pattern, command line interface,postman etc,..'
  },
  {
    id: nanoid(),
    title: 'DB',
    icon: <FaDatabase className='h-16 w-16 text-emerald-500' />,
    text: 'Good at No-sql and familiarizing with sql, Mongo db integration,schema modelling,server to DB connection etc,. keep on learing about differnt DBs to get familiarize with the optiaml use.'
  }
];
