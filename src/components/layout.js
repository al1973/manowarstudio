import React from 'react';
import { Global, css } from '@emotion/core';
import Helmet from 'react-helmet';
import Header from './header';
import Footer from './footer';
import useSiteMetadata from '../hooks/use-sitemetadata';

const Layout = ({ children }) => {
  const { title, description } = useSiteMetadata();

  return (
    <>
      <Global
        styles={css`
          * {
            box-sizing: border-box;
            margin: 0;
          }
          * + * {
            margin-top: 1rem;
          }
          html,
          body {
            margin: 0;
            color: #555;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
              Helvetica, Arial, sans-serif, 'Apple Color Emoji',
              'Segoe UI Emoji', 'Segoe UI Symbol';
            font-size: 18px;
            line-height: 1.4;

            /* remove margin for the main div that Gatsby mounts into */
            > div {
              margin-top: 0;
            }
          }
          h1,
          h2,
          h3,
          h4,
          h5,
          h6 {
            color: #222;
            line-height: 1.1;
            + * {
              margin-top: 0.5rem;
            }
          }
          strong {
            color: #222;
          }
          li {
            margin-top: 0.25rem;
          }
          form {
            display: grid;
            place-content: center;
            grid-gap: 0.5rem;
            background-color: #f9dfb5;
            padding-bottom: 2rem;
          }

          :root {
            --input-border: #8b8a8b;
            --input-focus-h: 245;
            --input-focus-s: 100%;
            --input-focus-l: 42%;
          }

          input,
          textarea {
            font-size: 1em;
            font-family: inherit;
            padding: 0.25em 0.5em;
            background-color: white;
            border: 2px solid var(--input-border);
            border-radius: 4px;
            transition: 180ms box-shadow ease-in-out;
            margin-top: 0;
          }
          input:focus,
          textarea:focus {
            border-color: hsl(
              var(--input-focus-h),
              var(--input-focus-s),
              var(--input-focus-l)
            );
          }
          input:focus,
          textarea:focus {
            box-shadow: 0 0 0 3px
              hsla(
                var(--input-focus-h),
                var(--input-focus-s),
                calc(var(--input-focus-l) + 40%),
                0.8
              );
            outline: 3px solid transparent;
          }
          input:not(textarea) {
            line-height: 1;
            height: 2.25rem;
          }
          textarea,
          input {
            resize: vertical;
          }
          label {
            font-size: 1rem;
            font-weight: 500;
            line-height: 1;
            margin-bottom: -5px;
          }
          input + label {
            margin-top: 2rem;
          }

          button {
            background: #7da68e;
            border: 1px solid #506556;
            border-radius: 0.25rem;
            color: white;
            cursor: pointer;
            display: block;
            font-size: 1.25rem;
            padding: 3px 2rem;
          }
        `}
      />
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>
      <Header />
      <main
        css={css`
          margin: 2rem auto;
          max-width: 550px;
          padding: 0;
          min-height: 550px;
        `}
      >
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
