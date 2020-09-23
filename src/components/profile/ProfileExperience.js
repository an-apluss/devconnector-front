import React, { Fragment } from "react";
import PropTypes from "prop-types";
import Moment from "react-moment";

const ProfileExperience = ({ profile: { experience } }) => {
  return (
    <div className="profile-exp bg-white p-2">
      <h2 className="text-primary">Experiences</h2>
      {experience &&
        experience.map((exp) => {
          return (
            <div key={exp._id}>
              <h3 className="first-letter-capitalize">{exp.company}</h3>
              <p>
                <Moment format="MMM YYYY">{exp.from}</Moment> -{" "}
                {exp.to === null ? (
                  " Till Date"
                ) : (
                  <Moment format="MMM YYYY">{exp.to}</Moment>
                )}
              </p>
              <p>
                <strong>Position: </strong>
                {exp.title}
              </p>
              <p>
                <strong>Description: </strong>
                {exp.description && <span>{exp.description}</span>}
              </p>
            </div>
          );
        })}
    </div>
  );
};

ProfileExperience.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default ProfileExperience;
