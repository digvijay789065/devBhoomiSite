import React from "react";

const LeaderCard = (
    {
        leaderImg,
        leaderImgAlt,
        leaderName,
        leaderPosition,
        leaderQuote,
    }
) => {
  return (
    <div>
      <div className="leader-card">
        <div className="leader-img">
          <img src={leaderImg} alt={leaderImgAlt} />
        </div>
        <div className="leader-content">
          <h3>{leaderName}</h3>
          <div className="position">{leaderPosition}</div>
          <p>{leaderQuote}</p>
        </div>
      </div>
    </div>
  );
};

export default LeaderCard;
