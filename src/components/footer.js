import React from 'react';
import footerStyles from '../components/footer.module.css';
const Footer = () => (
  <footer className={footerStyles.footer}>
    <div className={footerStyles.more}>
      <small>
        <strong>CONNECT</strong>
      </small>
    </div>
    <div className={footerStyles.instagram}>
      <a href="https://www.instagram.com/manowarstudio">INSTAGRAM</a>
    </div>
    <div className={footerStyles.etsy}>
      <a href="https://www.etsy.com/shop/ManOWarStudio">ETSY</a>
    </div>
    <div className={footerStyles.facebook}>
      <a href="https://www.facebook.com/manowarstudio">FACEBOOK</a>
    </div>
    <div className={footerStyles.copyright}>
      <small>&copy; Man o&apos; War Studio 2020</small>
    </div>
  </footer>
);

export default Footer;
