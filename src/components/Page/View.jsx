import React from 'react';
import PropTypes from 'prop-types';
import PageHeader from './PageHeader';
import Layout, { LayoutHeader, LayoutBody } from './Layout';

const Page = ({ title, children }) => (
  <Layout>
    <LayoutHeader>
      <PageHeader title={title} />
    </LayoutHeader>
    <LayoutBody>
      <div>{children}</div>
    </LayoutBody>
  </Layout>
);

Page.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string.isRequired,
};

Page.defaultProps = {
  children: [],
};

export default Page;
