import React, { useEffect, Fragment } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { getProfile } from "../../actions/profile";
import Spinner from "../layout/Spinner";

const Dashboard = ({
  auth: { user },
  profile: { profile, loading },
  getProfile,
}) => {
  useEffect(() => {
    getProfile();
  }, [getProfile]);

  return (
    <section className="container">
      {loading && profile === null ? (
        <Spinner />
      ) : (
        <Fragment>
          <h1 className="large text-primary">Dashboard</h1>
          <p className="lead">
            <i className="fas fa-user"></i> Welcome{" "}
            <span style={{ textTransform: "capitalize" }}>
              {user && user.name}
            </span>
          </p>
          {profile === null ? (
            <Fragment>
              <p>
                You have not setup your profile yet, kindly do so by clicking
                the button below
              </p>
              <Link to="/create-profile" className="btn btn-primary m-1">
                <i class="fa fa-plus" aria-hidden="true"></i> Create Profile
              </Link>
            </Fragment>
          ) : (
            <Fragment>Has</Fragment>
          )}
        </Fragment>
      )}
    </section>
  );
};

Dashboard.propTypes = {
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
  getProfile: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile,
});

export default connect(mapStateToProps, { getProfile })(Dashboard);
