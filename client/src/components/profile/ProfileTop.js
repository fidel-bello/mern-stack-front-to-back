import React from 'react'
import  Link  from 'react-router-dom';
import PropTypes from 'prop-types'

const ProfileTop = ({}) => {
    return (
        <div className="profile-top bg-primary p-2">
          <img
            className="round-img my-1"
            src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200"
            alt=""
          />
          <h1 className="large">John Doe</h1>
          <p className="lead">Developer at Microsoft</p>
          <p>Seattle, WA</p>
          <div className="icons my-1">
            <Link href="#" target="_blank" rel="noopener noreferrer">
              <i className="fas fa-globe fa-2x"></i>
            </Link>
            <Link to="#" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter fa-2x"></i>
            </Link>
            <Link to="#" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook fa-2x"></i>
            </Link>
            <Link to="#" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin fa-2x"></i>
            </Link>
             <Link to="#" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-youtube fa-2x"></i>
            </Link>
            <Link to="#" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram fa-2x"></i>
            </Link>
          </div>
        </div>
    )
}

ProfileTop.propTypes = {

}

export default ProfileTop
