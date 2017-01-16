import React from 'react';
import { IndexLink } from 'react-router';

const Logo = ({logoUrl, siteTitle}) => {

    return (
      <h1 className="logo-image ">
        <IndexLink to={{pathname: "/"}}>
          <img src="https://lh3.googleusercontent.com/-z8pL0sLK8Gw/WHzbjSW8DfI/AAAAAAAAObk/lgRtTGtQiB4zMzBpfN-Gl9Ob2p5TXFJlACEw/h77/logo.png" alt={siteTitle} style={{maxWidth: "100px", maxHeight: "100px"}} />
        </IndexLink>
      </h1>
    )
  }
}

Logo.displayName = "Logo";

module.exports = Logo;
