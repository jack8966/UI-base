import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../atom/Button';

function AutoNotificationPage() {
  return (
    <div>
      <h1>自動化行銷</h1>
      <Link to='/'><Button className='p-14 m-14 bg-red-300'>回首頁</Button></Link>
    </div>
  );
}

export default AutoNotificationPage;
