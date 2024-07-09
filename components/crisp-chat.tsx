"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("f1ec38b5-43b5-4aa6-aa98-7b11c169f11e");
  }, []);

  return null;
};
