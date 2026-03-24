import { ImageResponse } from "next/og";
import { SITE } from "@/lib/constants";

export const runtime = "edge";
export const alt = SITE.name;
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(to bottom right, #F7F0E6, #F4E1C4)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "80px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "120px",
            height: "120px",
            borderRadius: "60px",
            backgroundColor: "#96AB88",
            color: "white",
            fontSize: "64px",
            fontWeight: "bold",
            marginBottom: "40px",
          }}
        >
          OK
        </div>
        <div
          style={{
            fontSize: "72px",
            fontWeight: 800,
            color: "#2C1810",
            marginBottom: "20px",
            textAlign: "center",
            lineHeight: 1.1,
          }}
        >
          {SITE.name}
        </div>
        <div
          style={{
            fontSize: "36px",
            color: "#6B5B52",
            textAlign: "center",
            maxWidth: "800px",
            lineHeight: 1.4,
          }}
        >
          {SITE.tagline}
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
