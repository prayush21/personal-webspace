"use client";

import React from "react";
import { SimpleThemeProvider } from "./SimpleThemeProvider";

interface ClientWrapperProps {
  children: React.ReactNode;
}

export const ClientWrapper: React.FC<ClientWrapperProps> = ({ children }) => {
  return <SimpleThemeProvider>{children}</SimpleThemeProvider>;
};
