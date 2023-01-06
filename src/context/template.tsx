// import React from 'react';
// import { Theme, ThemeContextType } from '@react-types/theme';
// import styled from 'styled-components';
// import { Container } from '@mui/material';
// import { ReactComponent as Logo } from '@assets/icons/logo.svg';
// import { ThemeContext } from '@themes/theme-provider';

// const StyledTemplate = styled.div`
//   nav {
//     background-color: #000000;
//     height: 48px;
//     display: flex;
//     align-items: center;
//     .nav-items {
//       width: 100%;
//       max-width: 1440px;
//       margin: 0 auto;
//       display: flex;
//       align-items: center;
//       ul {
//         margin-left: auto;
//         display: flex;
//         li {
//           list-style: none;
//           font-size: 14px;
//           color: #fff;
//           margin-right: 40px;
//           opacity: .6;
//           cursor: pointer;
//           &:hover {
//             opacity: 1;
//           }
//           &:last-child {
//             /* margin-right: 0; */
//           }
//           &.active {
//             opacity: 1;
//           }
//         }
//       }
//     }
//   }
// `;

// type PROPS = {
//   children: React.ReactNode;
// };

// const TemplateContext = React.createContext(null);

// const Template: React.FC<PROPS> = ({ children }) => {
//   const { theme, changeTheme } = React.useContext(
//     ThemeContext
//   ) as ThemeContextType;

//   const handleThemeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
//     changeTheme(event.target.value as Theme);
//   };

//   return (
//     <StyledTemplate data-theme={theme}>
//       <nav>
//         <div className='nav-items'>
//           <Logo />

//           <ul>
//             <li>about us</li>
//             <li>out team</li>
//             <li>learn</li>
//             <li>social</li>
//             <li>comunity</li>
//           </ul>

//           <div>
//             <select name='toggleTheme' onChange={handleThemeChange}>
//               <option value='light'>Light</option>
//               <option value='dark'>Dark</option>
//             </select>
//           </div>
//         </div>
//       </nav>

//       <Container id='app-container' maxWidth='lg'>{children}</Container>
//     </StyledTemplate>
//   );
// };

export {  };
