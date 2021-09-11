import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Profileitem = ({
  profile: {
    user: { _id, name, avatar },
    status,
    company,
    location,
    skills,
  },
}) => {
  return <div>test</div>;
};

Profileitem.propTypes = {};

export default Profileitem;
