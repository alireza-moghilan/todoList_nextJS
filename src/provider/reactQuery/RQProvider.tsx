"use client"
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { PropsWithChildren,useRef } from "react";
export const RQProvider = ({ children }: PropsWithChildren) => {
    const rqConfig = useRef(
        new QueryClient({
            defaultOptions: {
                queries: {
                    refetchOnWindowFocus: false,
                    retry: 0,
                    staleTime: 2 * 1000
                },
            },
        })
    );
    return (
        <QueryClientProvider client={rqConfig.current}>
            {children}
            <ReactQueryDevtools />
        </QueryClientProvider>
    )
}