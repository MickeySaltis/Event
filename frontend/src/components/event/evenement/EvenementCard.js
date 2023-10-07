import React, { Component } from "react";

class EvenementCard extends Component
{
    render()
    {
        return (
            <div class="my-2 grid place-items-center">
                <a href="#" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-blue-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-blue-700">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Nom Evénement
                    </h5>
                    <h6 class="italic">
                        Date Evénement
                    </h6>
                    <p class="font-semibold">
                        Adresse Evénement
                    </p>
                    <p class="font-normal text-gray-700 dark:text-gray-400">
                        Description Evénement
                    </p>
                </a>
            </div>
        );
    }
}

export default EvenementCard;