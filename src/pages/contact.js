import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import Form from "../components/form";

const Contact = () => (
  <Layout>
    <h1>Contact Me</h1>
    <Form />
    <Link to="/">&larr; back to home</Link>
  </Layout>
);

export default Contact;