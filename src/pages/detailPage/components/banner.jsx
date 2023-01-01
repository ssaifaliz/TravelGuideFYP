import React from "react";

export default function banner({ banner }) {
  console.log(banner, "banner");
  return (
    <div
      className="bannerImage"
      style={{
        backgroundImage: "url(" + banner?.bannerImage + ")",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "40rem",
      }}
    >
      {/* <div className="Content">{banner.name}</div> */}
    </div>
  );
}
