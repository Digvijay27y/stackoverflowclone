import react from 'react'
import './Css/Header.css';
import InboxIcon from "@material-ui/icons/Inbox";
import SearchIcon from "@material-ui/icons/Search";

import { Avatar } from '@mui/material';
function Header()
{
    return(
        <Header>
            <div ClassName="header-container">
            <div ClassName="header-left">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Stack_Overflow_logo.svg/220px-Stack_Overflow_logo.svg.png"
              alt="logo"></img>
                <h3>Products</h3>
            </div>
            <div ClassName="header-middle">
            <div ClassName="header-search-container">
            <SearchIcon/>
            <input type='text' placeholder='Search...'/>
            </div>
            </div>
            <div ClassName="header-right">
            <div ClassName="header-right-container">
            <Avatar/>
            <InboxIcon/>
            <svg
              aria-hidden="true"
              class="svg-icon iconStackExchange"
              width="24"
              height="24"
              viewBox="0 0 18 18"
              fill="rgba(0,0,0,0.5)"
              style={{
                cursor: "pointer",
              }}
            >
              <path d="M15 1H3a2 2 0 00-2 2v2h16V3a2 2 0 00-2-2ZM1 13c0 1.1.9 2 2 2h8v3l3-3h1a2 2 0 002-2v-2H1v2Zm16-7H1v4h16V6Z"></path>

            </svg>
            </div>
            </div>
            </div>      
        </Header>
    );
}

export default Header;