import React, { Component } from "react";
import EvenementCard from "./EvenementCard";

class EvenementsParDate extends Component
{
    render()
    {
        return (
            <div class="container text-center mx-auto px-3">

                <h1 class="my-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Evénements par date</h1>

                <EvenementCard />
                
            </div>
        );
    }
}

export default EvenementsParDate;