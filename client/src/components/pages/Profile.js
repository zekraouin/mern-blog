import React from "react";

const ProfilePage = ({ user }) => {
  return (
    <div className="container mt-5">
      <h1>Profile</h1>
      <div className="card mt-3">
        <div className="card-body">
          <h5 className="card-title">User Information</h5>
          <div className="card-text">
            <p>
              <strong>Name:</strong> john do
            </p>
            <p>
              <strong>Email:</strong>john@example.com
            </p>
            {/* Add more user information as needed */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
