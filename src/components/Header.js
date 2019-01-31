import React  from 'react';

const Header = (props) => {
     return(
         <div className="nav-bar">
             <ul>
                 {props.links.map((link, i) => {
                     return(
                         <li key={i}>
                             <a href="#">{link}</a>
                         </li>
                     )
                 })}
             </ul>
         </div>

     )
};

export default Header;
