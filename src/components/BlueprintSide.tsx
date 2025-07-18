import React from "react";
import Image from "next/image";
import { getAssetPath } from "@/utils/paths";

const BlueprintSide: React.FC = () => (
  <div
    className="fixed top-96 right-8 z-10"
    style={{
      transform: "rotate(45deg)",
      width: "350px", // Adjust as needed
      boxShadow: "0 4px 24px rgba(0,0,0,0.2)",
    }}
  >
    <Image
      src={getAssetPath("/assets/space-plane.svg")}
      alt="Blueprint Top View"
      width={350}
      height={500}
      className="w-full h-auto rounded-lg"
      style={{
        objectFit: "cover",
        objectPosition: "left",
        width: "350px",
        height: "500px",
        // clipPath: "inset(0 50% 0 0)", // Shows only the left half
      }}
      draggable={false}
    />
  </div>
);

export default BlueprintSide;
