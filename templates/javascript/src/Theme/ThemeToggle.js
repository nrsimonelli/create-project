import React from 'react';
import { HiMoon, HiSun } from 'react-icons/hi';
import { ThemeContext } from './ThemeContext';

const ThemeToggle = () => {
  const { theme, setTheme } = React.useContext(ThemeContext);

  return (
    <div className='transition duration-500 ease-in-out rounded-full p-2'>
      {theme === 'dark' ? (
        <HiSun
          onClick={() =>
            setTheme(theme === 'dark' ? 'light' : 'dark')
          }
          className='dark:text-accent-500 text-2xl cursor-pointer'
        />
      ) : (
        <HiMoon
          onClick={() =>
            setTheme(theme === 'dark' ? 'light' : 'dark')
          }
          className='text-accent-600 text-2xl cursor-pointer'
        />
      )}
    </div>
  );
};

export default ThemeToggle;
