import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import Insta from '../components/insta'
export default () => (
  <Layout>
    <h1>Home</h1>
    <p>Hello Espinho!</p>
    <Link to="/about/">Read all about me &rarr;</Link>
    <Insta />
  </Layout>
);
