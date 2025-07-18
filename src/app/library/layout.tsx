import React from "react";

// This layout will apply only to the /library route and its children.
export default function LibraryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        This body will NOT have the styles from the root layout's globals.css
        You can apply library-specific theming here.
        For example, you could import a different global stylesheet for this section.
      */}
      <body className="bg-black">{children}</body>
    </html>
  );
}
