export const runtime = "edge";

import { ImageResponse } from "next/og";
// App router includes @vercel/og.
// No need to install it.

export async function GET() {
  const res = await fetch(
    `${process.env.STRAPI_API_URL}/api/global?populate[1]=logo&fields[0]=name&populate[2]=heroImage`,
    {
      headers: {
        Authorization: `Bearer ${process.env.TOKEN}`,
      },
    },
  );
  const data = await res.json();

  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 40,
          color: "black",
          background: "white",
          width: "100%",
          height: "100%",
          textAlign: "center",
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
          position: "relative",
        }}
      >
        <img
          src={`${data.data.heroImage.url}`}
          alt=""
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            position: "absolute",
          }}
        />
        <img
          src={`${data.data.logo.url}`}
          alt=""
          style={{
            width: "250px",
            height: "250px",
            objectFit: "cover",
            position: "absolute",
            zIndex: 10,
          }}
        />
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  );
}
