import * as React from "react";

import Layout from "@theme/Layout";
import BrowserOnly from "@docusaurus/BrowserOnly";

const WHITELISTED_SITES = ["calc", "currency", "lang"];

function getCurrentUrl(): URL | null {
  if (typeof window === "object") {
    return new URL(window.location.href);
  }
}

function IFrame(): React.ReactElement {
  const url = getCurrentUrl();

  const hash = url.hash;

  if (!hash) {
    return <p>Page not found</p>;
  }

  const hashed = hash.replace("#", "");

  if (!WHITELISTED_SITES.includes(hashed)) {
    return <p>Page not found</p>;
  }

  const targetUrl = "https://johanbook.com/" + hashed;

  return (
    <iframe src={targetUrl} style={{ height: "100%", width: "100%" }}></iframe>
  );
}

function IFrameFallback(): React.ReactElement {
  return <p>Loading...</p>;
}

export default function Page(): React.ReactElement {
  return (
    <Layout fallback={<IFrameFallback />}>
      <BrowserOnly>{() => <IFrame />}</BrowserOnly>
    </Layout>
  );
}
