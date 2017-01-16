import React from 'react';
import { IndexLink } from 'react-router';

const Logo = ({siteTitle}) => {

if (logoUrl) {
    return (
      <h1 className="logo-image ">
        <IndexLink to={{pathname: "/"}}>
          <img src="https://pbs.twimg.com/profile_banners/820733749809717248/1484580679/1500x500" alt={siteTitle} style={{maxWidth: "100px", maxHeight: "100px"}} />
        </IndexLink>
      </h1>
    )
  }
}
Logo.displayName = "Logo";

module.exports = Logo;
