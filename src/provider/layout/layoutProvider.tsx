"use client";
import { PropsWithChildren } from "react";
import { RQProvider } from "../reactQuery/RQProvider";


export const LayoutProvider = ({ children }: PropsWithChildren) => {
  return (
    <RQProvider>
      <div style={{ padding: '3rem' }}>
        {children}
      </div>
    </RQProvider>
  )
}