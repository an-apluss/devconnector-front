import React from "react";
import PropTypes from "prop-types";
import Moment from "react-moment";

const ProfileEducation = ({ profile: { education } }) => {
  return (
    <div className="profile-edu bg-white p-2">
      <h2 className="text-primary">Education</h2>
      {education &&
        education.map((edu) => {
          return (
            <div key={edu._id}>
              <h3 className="first-letter-capitalize">{edu.school}</h3>
              <p>
                <Moment format="MMM YYYY">{edu.from}</Moment> -{" "}
                {edu.to === null ? (
                  " Till Date"
                ) : (
                  <Moment format="MMM YYYY">{edu.to}</Moment>
                )}
              </p>
              <p className="first-letter-capitalize">
                <strong>Degree: </strong>
                {edu.degree && <span>{edu.degree}</span>}
              </p>
              <p className="first-letter-capitalize">
                <strong>Field Of Study: </strong>{edu.fieldofstudy && <span>{edu.fieldofstudy}</span>}
              </p>
              <p>
                <strong>Description: </strong>{edu.description && <span>{edu.description}</span>}
              </p>
            </div>
          );
        })}
    </div>
  );
};

ProfileEducation.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default ProfileEducation;
