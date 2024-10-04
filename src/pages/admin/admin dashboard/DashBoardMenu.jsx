import React, { useState } from 'react';

const DashBoardMenu = ({ onSelectTab }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="md:hidden p-4 flex justify-between items-center">
        <h2 className="text-lg font-semibold">Admin Dashboard</h2>
        <button
          onClick={toggleMenu}
          className="text-primary focus:outline-none"
        >
          <i className="fa-solid fa-angle-down"></i>
        </button>
      </div>

      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } md:block w-full md:w-1/5 bg-base-200 h-auto md:h-screen p-4`}
      >
        <ul className="menu">
          <li>
            <a className="text-primary" onClick={() => onSelectTab('overview')}>Dashboard</a>
          </li>
          <li>
            <a onClick={() => onSelectTab('orders')}>Orders</a>
          </li>
          <li>
            <a onClick={() => onSelectTab('foods')}>Foods</a>
          </li>
          <li>
            <a onClick={() => onSelectTab('users')}>Users</a>
          </li>
          <li>
            <a onClick={() => onSelectTab('restaurants')}>Restaurants</a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default DashBoardMenu;
