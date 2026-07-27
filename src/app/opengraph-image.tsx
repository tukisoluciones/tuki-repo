import { ImageResponse } from "next/og";
import { SITE } from "@/lib/content";

export const dynamic = "force-static";
export const alt = "Tuki — Agencia Digital en Bahía Blanca";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function Image() {
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
          backgroundColor: "#141414",
          color: "#F2F1ED",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "72px",
              height: "72px",
              borderRadius: "16px",
              backgroundColor: "#0D3FE3",
              fontSize: "40px",
              fontWeight: 900,
              color: "#F2F1ED",
            }}
          >
            TU
          </div>
          <div
            style={{
              fontSize: "28px",
              fontWeight: 700,
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              color: "#0D3FE3",
            }}
          >
            {SITE.name}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: "56px",
            fontSize: "76px",
            fontWeight: 900,
            lineHeight: 1.1,
            textTransform: "uppercase",
            letterSpacing: "-0.02em",
          }}
        >
          <span>Hacemos crecer</span>
          <span style={{ color: "#0D3FE3" }}>tu negocio</span>
        </div>

        <div
          style={{
            marginTop: "40px",
            fontSize: "30px",
            color: "rgba(242, 241, 237, 0.7)",
            maxWidth: "900px",
          }}
        >
          Agencia digital en Bahía Blanca · sitios web, turnos online y
          software a medida.
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
