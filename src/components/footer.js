import React from 'react';

import { css } from '@emotion/core';



const Footer = () => (
  <footer
    css={css`
      font-size: 0.75rem;
      text-align: center;
      position: relative;
      width: 100%;
      padding: 1rem 0;
    `}
  >
   
    
   &copy; Man o&apos; War Studio 2020
   
  </footer>
);

export default Footer;