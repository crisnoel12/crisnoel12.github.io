import React from "react";

export default function Map() {
  return (
    <iframe
      id="map"
      className="w-full h-[375px] lg:h-full"
      src="https://www.google.com/maps/embed/v1/place?key=AIzaSyDV2mJDjLBrrPdVGXSr0ajaV2WBSMwB_HI
        &q=Cavite&maptype=satellite"
      allowFullScreen
    ></iframe>
  );
}
