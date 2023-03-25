"use client";

export function OAuth2Callback(): React.ReactElement {
  window.opener.postMessage({ data: "ok" });

  return <div>Loading</div>;
}
