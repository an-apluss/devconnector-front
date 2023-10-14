import React, { useEffect, Fragment } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Spinner from "../layout/Spinner";
import ProfileTop from "./ProfileTop";
import ProfileAbout from "./ProfileAbout";
import ProfileExperience from "./ProfileExperience";
import ProfileEducation from "./ProfileEducation";
import { getProfileByID } from "../../actions/profile";

const Profile = ({
  getProfileByID,
  auth,
  profile: { profile, loading },
  match,
}) => {
  useEffect(() => {
    getProfileByID(match.params.id);
  }, [getProfileByID, match.params.id]);

  return (
    <section className="container">
      <Helmet>
        <title>Devconnector | Profile</title>
      </Helmet>
      
      {profile === null || loading ? (
        <Spinner />
      ) : (
        <Fragment>
          <Link to="/profiles" className="btn">
            Back To Profiles
          </Link>
          {auth.isAuthenticated &&
            auth.loading === false &&
            auth.user._id === profile.user._id && (
              <Link to="/edit-profile" className="btn btn-dark">
                Edit Profile
              </Link>
            )}
          <div className="profile-grid my-1">
            <ProfileTop profile={profile} />
            <ProfileAbout profile={profile} />
            <ProfileExperience profile={profile} />
            <ProfileEducation profile={profile} />
            
            <div className="profile-github">
              <h2 className="text-primary my-1">
                <i className="fab fa-github"></i> Github Repos
              </h2>
              <div className="repo bg-white my-1 p-1">
                <div>
                  <h4>
                    <Link to="#!">Repo One</Link>
                  </h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Enim, voluptatibus.
                  </p>
                </div>

                <div>
                  <ul>
                    <li className="badge badge-primary">Stars: 44</li>
                    <li className="badge badge-dark">Watchers: 20</li>
                    <li className="badge badge-light">Forks: 29</li>
                  </ul>
                </div>
              </div>
              <div className="repo bg-white my-1 p-1">
                <div>
                  <h4>
                    <Link to="#!">Repo Two</Link>
                  </h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Enim, voluptatibus.
                  </p>
                </div>

                <div>
                  <ul>
                    <li className="badge badge-primary">Stars: 44</li>
                    <li className="badge badge-dark">Watchers: 20</li>
                    <li className="badge badge-light">Forks: 29</li>
                  </ul>
                </div>
              </div>
              <div className="repo bg-white my-1 p-1">
                <div>
                  <h4>
                    <Link to="#!">Repo Three</Link>
                  </h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Enim, voluptatibus.
                  </p>
                </div>

                <div>
                  <ul>
                    <li className="badge badge-primary">Stars: 44</li>
                    <li className="badge badge-dark">Watchers: 20</li>
                    <li className="badge badge-light">Forks: 29</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Fragment>
      )}
    </section>
  );
};

Profile.propTypes = {
  profile: PropTypes.object.isRequired,
  getProfileByID: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
  auth: state.auth,
});

const mapDispatchToProps = {
  getProfileByID,
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
