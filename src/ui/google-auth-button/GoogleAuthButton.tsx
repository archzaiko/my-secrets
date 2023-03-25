"use client";

import { useEffect } from "react";

export function GoogleAuthButton({
  children,
}: React.PropsWithChildren): React.ReactElement {
  const handleButtonClick = () => {
    window.open("/oauth2-callback");
  };

  useEffect(() => {
    const handleWindowPostMessage = (event: MessageEvent) => {
      console.log("handleWindowPostMessage", event);
    };

    const removeWindowPostMessageListener = () => {
      window.removeEventListener("message", handleWindowPostMessage);
    };

    window.addEventListener("message", (event: MessageEvent) => {
      handleWindowPostMessage(event);
      removeWindowPostMessageListener();
    });

    return () => removeWindowPostMessageListener();
  }, []);

  return (
    <button className="hover:opacity-80" onClick={handleButtonClick}>
      {children}
    </button>
  );
}
