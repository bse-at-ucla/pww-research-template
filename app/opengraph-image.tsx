import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/config";

export const alt = siteConfig.name;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          backgroundColor: "#ffffff",
        }}
      >
        <div style={{ display: "flex", fontSize: 28, color: "#1a7a1a" }}>
          {new URL(siteConfig.siteUrl).host}
        </div>
        <div style={{ display: "flex", fontSize: 96, color: "#000000", marginTop: 20 }}>
          {siteConfig.name.toLowerCase()}
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 32,
            color: "#333333",
            marginTop: 28,
            maxWidth: 950,
          }}
        >
          {siteConfig.description}
        </div>
      </div>
    ),
    { ...size },
  );
}
