import { useState } from 'react';
import { links } from '../data';

const Navigation = () => {
  const [active, setActive] = useState(0);
//sticky nav in the foonter setction also keep min links for better scroll in nav
  return (
    <footer className='flex justify-center fixed bottom-0 w-full'>
      <nav className='bg-emerald-100 h-18 rounded-full   px-4  sticky bottom-0'>
        <ul className='flex relative'>
          {links.map((item, i) => (
            <li key={i} className='w-20'>
              <a href={item.href} className='flex flex-col text-center p-5 cursor-pointer px-4' onClick={() => setActive(i)}>
                <span className={` ${active === i ? ' duration-700 opacity-100 font-bold' : 'opacity-40'} `}>{item.text}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>{' '}
    </footer>
  );
};

export default Navigation;
