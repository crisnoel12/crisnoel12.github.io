import React from "react";

export default function GoogleMap() {
  return (
    <iframe
      id="map"
      className="w-full h-[375px] lg:h-full"
      src={`https://www.google.com/maps/embed/v1/place?key=${process.env.GOOGLE_API_KEY}&q=Cavite&maptype=satellite`}
      allowFullScreen
    ></iframe>
  );
}
