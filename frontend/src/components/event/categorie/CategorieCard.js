import React, { Component } from "react";

class CategorieCard extends Component
{
    render ()
    {
        return (
            <div class="my-2 grid place-items-center">
                <a href="#" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-blue-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-blue-700">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Nom Catégorie</h5>
                    <p class="font-normal text-gray-700 dark:text-gray-400">Description Catégorie</p>
                </a>
            </div>
        );
    }
}
export default CategorieCard;