"use client";

import React from "react";
import dynamic from "next/dynamic";

const DataParticles = dynamic(
  () => import("./DataParticles"),
  {
    ssr: false,
    loading: () => <p>Loading particles...</p>,
  }
);

const DataParticlesWrapper = ({ particleColor }) => {
  return <DataParticles particleColor={particleColor} />;
};

export default DataParticlesWrapper;