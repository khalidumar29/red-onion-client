import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo2.png";
const Navbar = () => {
  let navLink = (
    <>
      <li>
        <Link to={""} class='justify-between'>
          Profile
          <span class='badge'>New</span>
        </Link>
      </li>
      <li>
        <Link to={""}>Settings</Link>
      </li>
      <li>
        <Link to={""}>Logout</Link>
      </li>
    </>
  );
  return (
    <div class='navbar py-3 bg-white'>
      <div class='flex-1'>
        <Link to='/' class='btn btn-ghost'>
          <img className='w-full h-full' alt='' src={logo} />
        </Link>
      </div>
      <div class='flex-none'>
        <ul class='menu menu-horizontal p-0'>
          <li>
            <Link className='mr-3 btn btn-ghost' to={""}>
              Log in
            </Link>
          </li>
          <li>
            <Link className='btn btn-secondary text-white' to={""}>
              sign up
            </Link>
          </li>
        </ul>
        {/* <div class='dropdown dropdown-end'>
          <label tabindex='0' class='btn btn-ghost btn-circle'>
            <div class='indicator'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                class='h-5 w-5'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                  d='M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z'
                />
              </svg>
              <span class='badge badge-sm indicator-item'>8</span>
            </div>
          </label>
          <div
            tabindex='0'
            class='mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow'
          >
            <div class='card-body'>
              <span class='font-bold text-lg'>8 Items</span>
              <span class='text-info'>Subtotal: $999</span>
              <div class='card-actions'>
                <button class='btn btn-primary btn-block'>View cart</button>
              </div>
            </div>
          </div>
        </div>
        <div class='dropdown dropdown-end'>
          <label tabindex='0' class='btn btn-ghost btn-circle avatar'>
            <div class='w-10 rounded-full'>
              <img src='https://api.lorem.space/image/face?hash=33791' alt='' />
            </div>
          </label>
          <ul
            tabindex='0'
            class='menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52'
          >
            {navLink}
          </ul>
        </div> */}
      </div>
    </div>
  );
};

export default Navbar;