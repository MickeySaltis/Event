import React, { Component } from "react";

class Home extends Component {
    render() {
        return (
        
            <div class="flex justify-center items-center flex-wrap h-full g-6 text-gray-800 m-24">

                {/* <!-- Card New Event --> */}
                <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 m-4">
                    <a href="/evenementnouveau">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Nouveau événement</h5>
                    </a>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Créer un nouveau événement</p>
                    <a href="/evenementnouveau" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Nouveau
                    </a>
                </div>


                {/* <!-- Card Event User --> */}
                <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 m-4">
                    <a href="#">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Mes événements</h5>
                    </a>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Gérer mes événements créé</p>
                    <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Voir
                    </a>
                </div>

            </div>

        );
    }
}

export default Home;