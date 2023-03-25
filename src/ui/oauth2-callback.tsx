"use client";

import { useEffect } from "react";

export function OAuth2Callback(): React.ReactElement {
  useEffect(() => {
    window.opener.postMessage({ data: "ok" });
    window.close();
  }, []);

  return <div>Loading</div>;
}
