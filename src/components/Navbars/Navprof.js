// import React, { useState } from 'react';
// import styled from 'styled-components';
// import Logol from './Logol';
// import { Link } from 'react-router-dom';

// const Section = styled.section`
//   width: 100vh;
//   background-color: white;
// `;

// const NavBar = styled.nav`
//   position: relative; /* Add relative positioning */
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   width: 85%;
//   height: 5rem;
//   margin: 0 auto;
// `;

// const Menu = styled.ul`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   list-style: none;
// `;

// const MenuItems = styled.li`
//   margin: 0 1rem;
//   color: black;
//   cursor: pointer;

//   &::after {
//     content: '';
//     display: block;
//     width: 0%;
//     height: 2px;
//     background: black;
//     transition: width 0.3s ease;
//   }

//   &:hover::after {
//     width: 100%;
//   }
// `;

// const DropdownContent = styled.div`
//   position: absolute;
//   top: 65%;
//   left: 97%;
//   background-color: white;
//   box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
//   border: 1px solid #ddd;
//   display: ${(props) => (props.open ? 'block' : 'none')};
//   z-index: 1; /* Add z-index to ensure it appears above other elements */
//   width: 7vw;
// `;

// const DropdownItem = styled.div`
//   padding: 10px;
//   &:hover {
//     background-color: #f9f9f9;
//   }
// `;

// const Navprof = () => {
//   const [open, setOpen] = useState(false);

//   return (
//     <Section>
//       <NavBar>
//         <Logol />
//         <Menu>
//           <MenuItems>Apperarance</MenuItems>
//           <MenuItems>Home</MenuItems>
//         </Menu>
//         <button onClick={() => setOpen(!open)}>Dropdown</button>
//         <DropdownContent open={open}>
//           <DropdownItem>Sign out</DropdownItem>
//           <DropdownItem>Change Plan</DropdownItem>
//         </DropdownContent>
//       </NavBar>
//     </Section>
//   );
// };

// export default Navprof;


import React from 'react'
import styled from 'styled-components'
import Logol from '../../pages/Logol'

import { Link } from 'react-router-dom'
import Buttonudash from '../../pages/Buttonudash'


const section = styled.section`
 width: 100vw;
 background-color: white;


`
const NavBar = styled.nav`

display: flex;
justify-content: space-between;
align-items: center;
width: 95%;
height: 5rem;
margin: 0 auto;



`
const Menu = styled.ul`
display: flex;
justify-content: space-between;
align-items: center;
list-style: none;




`
const MenuItems = styled.li`

margin: 0 1rem;
color: black;
cursor: pointer;

&::after{
  content: '';
  display: block;
  width: 0%;
  height: 2px;
  background: black;
  transition: width 0.3s ease;


}
&:hover::after{
 width: 100%;
}



`
// const ButtonContainer = styled.div`
//   margin-left: auto;
// `

const Navigation = () => {
  return (
    <section>
      <NavBar>
        <Logol/>
        <Menu>
          <MenuItems>&nbsp;</MenuItems>
          <MenuItems><Link to={"/dashboard"}>Dashboard</Link></MenuItems>
          <MenuItems><Link to={"/Appreance"}>Appearance</Link></MenuItems>
          <MenuItems>Plan</MenuItems>
          <MenuItems>Settings</MenuItems>
          <MenuItems>&nbsp;</MenuItems>

        </Menu>
        


        {/* <ButtonContainer> */}
          <Buttonudash />
        {/* </ButtonContainer> */}
        
      </NavBar>

    </section>
  )
}

export default Navigation
