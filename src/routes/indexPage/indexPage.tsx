import React from 'react';
import { Link, Outlet } from 'react-router-dom';

function IndexPage() {
  return (
    <div>
      <h1>Marketing Cloud</h1>
      <nav>
        <Link to='/auto-notification'>AutoNotification</Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default IndexPage;
