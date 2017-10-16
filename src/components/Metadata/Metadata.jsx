import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

const Metadata = ({ title, description, keywords }) => {
  return (
    <Helmet
      title={title}
      meta={[
        {
          name: 'description',
          content: description,
        },
        {
          name: 'keywords',
          content: keywords,
        },
      ]}
    />
  );
};

Metadata.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  keywords: PropTypes.string.isRequired,
};

export default Metadata;
