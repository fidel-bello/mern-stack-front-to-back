import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getProfileById } from '../../actions/profile';
import  Link  from 'react-router-dom';
import Spinner from '../layout/Spinner';

const Profile = ({ 
    getProfileById, 
    profile: {profile},
    auth,
    match
 }) => {
    useEffect(() => {
        getProfileById(match.params.id);
    }, [getProfileById]);

  return (
  <Fragment>
      {profile === null ? (
          <Spinner />
      ) : (<Fragment>
          <Link to='/profiles' className='btn btn-light'>
              Back to profiles
          </Link>
          {auth.isAuthenticated && auth.loading === false && auth.user._id && (<Link to='/edit-profile' className='btn btn-dark'>
              Edit Profile
          </Link>
          )}
          <div className='profile-grid my-1'>

          </div>
      </Fragment>)}
  </Fragment>
  
  )
  
};

Profile.propTypes = {
    getProfileById: PropTypes.func.isRequired,
    profile: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    profile: state.profile,
    auth: state.auth
})

export default connect(mapStateToProps, { getProfileById })(Profile);
