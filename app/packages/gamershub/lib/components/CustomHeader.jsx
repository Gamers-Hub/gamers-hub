import Telescope from 'meteor/nova:lib';
import React from 'react';
//import { Messages } from "meteor/nova:core";

const CustomHeader = (props, {currentUser}) => {

  return (
    <div className="header-wrapper">

      <header className="header">

        <div className="logo">
             <a href="http://gamershub-in.herokuapp.com">
          <img className="logoimg" src="https://github.com/Gamers-Hub/gamers-hub/raw/master/app/public/img/logo.png" class="logoimg" />
         </a>
        </div>
        
        <div className="nav">
          
          <div className="nav-user">
            {currentUser ? <Telescope.components.UsersMenu/> : <Telescope.components.UsersAccountMenu/>}
          </div>

          <div className="nav-new-post">
            <Telescope.components.PostsNewButton/>
          </div>

        </div>

      </header>
    </div>
  )
}

CustomHeader.displayName = "CustomHeader";

CustomHeader.contextTypes = {
  currentUser: React.PropTypes.object,
};

module.exports = CustomHeader;
