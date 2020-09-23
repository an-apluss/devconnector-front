import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const ProfileItem = ({
  profile: {
    user: { avatar, _id, name },
    location,
    status,
    skills,
    company,
  },
}) => {
  return (
    <div className="profile bg-light">
      <img className="round-img" src={avatar} alt="developer profile" />
      <div>
        <h2 className="first-letter-capitalize">{name}</h2>
        <p>
          <span className="first-letter-capitalize">{status}</span> {company && <Fragment> at <span className="first-letter-capitalize">{company}</span></Fragment>}
        </p>
        <p className="first-letter-capitalize">{location}</p>
        <Link to={`/profile/${_id}`} className="btn btn-primary">
          View Profile
        </Link>
      </div>

      <ul>
        {skills.slice(0, 4).map((skill, index) => (
          <li className="text-primary" key={index}>
            <i className="fas fa-check"></i> {skill}
          </li>
        ))}
      </ul>
    </div>
  );
};

ProfileItem.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default ProfileItem;
