import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Profile.css";

const Profile = () => {
  const [activeTab, setActiveTab] = useState("Orders");
  const navigate = useNavigate();

  const user = {
    name: "William",
    email: "johndoe@example.com",
    role: "Buyer",
    profilePic: "/profile.jpg",
    bio: "Art enthusiast and collector. Passionate about discovering new artists and unique artworks.",
  };

  const handleLogout = () => {
    // Add any logout logic like clearing user data, if needed
    navigate("/"); // Redirect to Home page
  };

  const ordersData =
    activeTab === "Orders" ? (
      <p className="no-orders">
        <span className="icon">📥</span> You haven't placed any orders yet. When you do, they will appear here.
      </p>
    ) : (
      <p className="other-section">This section is under development.</p>
    );

  return (
    <div className="profile-container">
      <div className="profile-header">
        <img src={user.profilePic} alt="Profile" className="profile-pic" />
        <h1>{user.name}</h1>
        <p className="profile-role">{user.role}</p>
      </div>

      <div className="profile-details">
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Bio:</strong> {user.bio}</p>
      </div>

      <div className="orders-section">
        <h2>{activeTab}</h2>
        <div className="orders-tabs">
          {[
            "Orders",
            "Returns",
            "Messages",
            "Addresses",
            "Payment Methods",
            "Wish Lists",
            "Recently Viewed Products",
            "Account Settings",
            "Sign Out"
          ].map(tab => (
            <span
              key={tab}
              className={activeTab === tab ? "active-tab" : ""}
              onClick={() => {
                if (tab === "Sign Out") {
                  handleLogout();
                } else {
                  setActiveTab(tab);
                }
              }}
            >
              {tab}
            </span>
          ))}
        </div>
        <div className="orders-content">{ordersData}</div>
      </div>

      <div className="logout-button-container">
        <button className="logout-button" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Profile;
