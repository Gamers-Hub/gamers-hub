/*
The original Logo components is defined using React's
functional stateless component syntax, so we redefine
it the same way. 
*/

import React from 'react';
import { IndexLink } from 'react-router';

const CustomLogo = ({logoUrl, siteTitle}) => {
  return (
<IndexLink to="/">   <img src="{logoUrl}" width="logoWidth" height="logoHeight"></IndexLink>
  )
}

export default CustomLogo;
