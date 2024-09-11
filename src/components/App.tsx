import React from "react";
import logo from "../logo.svg";
import CharacterList from "./containers/characterList/CharacterList";
import { QueryClient, QueryClientProvider } from "react-query";

// Character list is available in the public directory

export function App() {
    const queryClient = new QueryClient();

    return (
        <QueryClientProvider client={queryClient}>
            <div className="justify-center bg-gray-100 h-screen">
                <header className="flex flex-col justify-center items-center text-white bg-[#47d7ac] p-4">
                    <img src={logo} className="w-48" alt="logo" />
                    <p className="font-semibold text-lg">Lord of the Rings Character Index</p>
                </header>
                <section className="p-4 bg-gray-100">
                    <CharacterList />
                </section>
            </div>
        </QueryClientProvider>
    );
}
