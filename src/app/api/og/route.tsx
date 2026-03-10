import { ImageResponse } from "next/og"
import { NextRequest } from "next/server"

export const runtime = "edge"

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const title = searchParams.get("title") || "Aprenda Yorùbá de Forma Divertida"
  const subtitle =
    searchParams.get("subtitle") || "App gamificado com tutor IA, provérbios diários e conteúdo cultural dos Òrìṣà"

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #0A0A0F 0%, #1C1C24 40%, #0A0A0F 100%)",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Gold gradient accent */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "4px",
            background: "linear-gradient(90deg, #D4A853, #C45B28, #D4A853)",
          }}
        />

        {/* Decorative circles */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "10%",
            width: "300px",
            height: "300px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(212,168,83,0.06) 0%, transparent 70%)",
            transform: "translateY(-50%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "30%",
            right: "10%",
            width: "200px",
            height: "200px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(196,91,40,0.05) 0%, transparent 70%)",
          }}
        />

        <div
          style={{
            fontSize: 28,
            color: "#D4A853",
            fontWeight: 700,
            letterSpacing: "0.15em",
            marginBottom: 32,
            textTransform: "uppercase",
          }}
        >
          YORUBS
        </div>

        <div
          style={{
            fontSize: 52,
            fontWeight: 700,
            color: "#F5F5F7",
            textAlign: "center",
            maxWidth: "80%",
            lineHeight: 1.2,
            marginBottom: 20,
          }}
        >
          {title}
        </div>

        <div
          style={{
            fontSize: 22,
            color: "#A0A0B0",
            textAlign: "center",
            maxWidth: "70%",
            lineHeight: 1.5,
          }}
        >
          {subtitle}
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            marginTop: 40,
          }}
        >
          <div
            style={{
              width: 60,
              height: 3,
              background: "#D4A853",
              borderRadius: 2,
            }}
          />
          <div
            style={{
              fontSize: 14,
              color: "#D4A853",
              letterSpacing: "0.1em",
            }}
          >
            iOS & Android
          </div>
          <div
            style={{
              width: 60,
              height: 3,
              background: "#D4A853",
              borderRadius: 2,
            }}
          />
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  )
}
