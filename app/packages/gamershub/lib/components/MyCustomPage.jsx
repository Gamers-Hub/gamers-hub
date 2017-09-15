/*
A new custom page just for our app. 
Browse to http://localhost:3000/my-custom-route to see it.
*/

import React from 'react';

const MyCustomPage = () => {
  return (
    <div>
      <h1>Welcome To My Custom Page!</h1>
      <p>Nice to meet you.</p>
      <a href="http://gamershub-in.herokuapp.com"><img src="/img/logo.png" /></a>
    </div>
  )
}

export default MyCustomPage;