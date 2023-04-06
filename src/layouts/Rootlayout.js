import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

export default function Rootlayout() {
  return (
    <>
      <header>
        <nav>
          <h1>Math Magicians</h1>
          <NavLink to="/">Home</NavLink>
          <NavLink to="calculator">Calculator</NavLink>
          <NavLink to="quote">Quote</NavLink>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}
