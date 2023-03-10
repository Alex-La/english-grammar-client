import React, {memo} from 'react'
import {Link, Outlet} from 'react-router-dom'

export const PageOverlay: React.FC = memo(() => (
  <div className="pt-16">
    <div className="navbar bg-neutral text-neutral-content fixed top-0 z-20">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          English grammar
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/">Test</Link>
          </li>
          <li>
            <Link to="/list">List</Link>
          </li>
        </ul>
      </div>
    </div>
    <div>
      <Outlet />
    </div>
  </div>
))

PageOverlay.displayName = PageOverlay.name
