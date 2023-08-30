"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("5f7f221f-10fe-48df-a78e-f60254caccb2");
  }, []);

  return null;
};
