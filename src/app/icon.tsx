import { ImageResponse } from "next/og";

export const size = { width: 512, height: 512 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#F2F1ED",
        }}
      >
        <div style={{ display: "flex", fontSize: 220, fontWeight: 900, fontFamily: "sans-serif" }}>
          <span style={{ color: "#141414" }}>T</span>
          <span style={{ color: "#0D3FE3" }}>U</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
