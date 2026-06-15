import { ImageResponse } from "next/og";
import fs from "fs";
import path from "path";

// Image response metadata
export const size = {
  width: 48,
  height: 48,
};
export const contentType = "image/png";

export default async function Icon() {
  // Read the logo file
  const logoPath = path.join(process.cwd(), "public/images/logo.jpg");
  const logoBuffer = fs.readFileSync(logoPath);
  const base64Logo = logoBuffer.toString("base64");
  const logoDataUri = `data:image/jpeg;base64,${base64Logo}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#ffffff",
          borderRadius: "50%",
          overflow: "hidden",
          border: "2px solid #0f3d3e",
        }}
      >
        <img
          src={logoDataUri}
          alt="JJ Marine Logo"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
            borderRadius: "50%",
          }}
        />
      </div>
    ),
    {
      ...size,
    }
  );
}
