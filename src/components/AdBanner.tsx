import { env } from "@/env.mjs";
import { useEffect } from "react";

const AdBanner = ({ adSlot }) => {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (error) {
      console.error(error);
    }
  }, []);

  return (
    <div
      className="adsbygoogle"
      style={{ display: "inline-block", width: "728px", height: "90px" }}
      data-ad-client={env.NEXT_PUBLIC_GOOGLE_ADS_CLIENT_ID}
      data-ad-slot={adSlot}
      data-ad-format="auto"
      data-full-width-responsive="true"
    />
  );
};

export default AdBanner;
