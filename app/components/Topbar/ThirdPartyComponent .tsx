// ThirdPartyComponent.js
import Script from "next/script";

const ThirdPartyComponent = () => {
  return (
    <Script
      src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.7.0/flowbite.min.js"
      strategy="afterInteractive"
    />
  );
};

export default ThirdPartyComponent;
