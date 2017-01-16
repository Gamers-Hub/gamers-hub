/*
This file centralizes all our custom component overrides. 
*/

import Telescope from 'meteor/nova:lib';

import CustomNewsletter from "./components/CustomNewsletter.jsx";
import CustomPostsItem from "./components/CustomPostsItem.jsx";
import CustomHeader from "./components/CustomHeader.jsx";


Telescope.components.Newsletter = CustomNewsletter;
Telescope.components.PostsItem = CustomPostsItem;
Telescope.components.Header = CustomHeader;
