/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";

const ChatwootWidget = ({ websiteToken, baseUrl, settings = {} }) => {
  useEffect(() => {
    // Set Chatwoot settings
    window.chatwootSettings = {
      position: "right", // Default position
      launcherTitle: "Chat with us!", // Default title
      ...settings, // Override defaults with custom settings
    };

    // Load the Chatwoot script
    (function (d, t) {
      const scriptTag = d.createElement(t);
      const scriptLocation = d.getElementsByTagName(t)[0];
      scriptTag.src = `${baseUrl}/packs/js/sdk.js`;
      scriptTag.async = true;
      scriptTag.onload = function () {
        window.chatwootSDK.run({
          websiteToken: websiteToken,
          baseUrl: baseUrl,
        });
      };
      scriptLocation.parentNode.insertBefore(scriptTag, scriptLocation);
    })(document, "script");
  }, [websiteToken, baseUrl, settings]);

  return null; // This component only loads the widget, so no UI rendering is needed.
};

export default ChatwootWidget;
