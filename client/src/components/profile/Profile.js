import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getProfileById } from '../../actions/profile';

const Profile = (props) => {
  return <div>Profile</div>;
};

Profile.propTypes = {};

export default connect(mapStateToProps, { getProfileById })(Profile);
