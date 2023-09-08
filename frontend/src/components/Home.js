import React, { Component } from "react";

class Home extends Component {
    render() {
        return (
        <div>
            <nav className="bg-white border-gray-200 dark:bg-gray-900">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-2.5">
                    <a href="" className="flex items-center">
                        <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Event</span>
                    </a>
                    <div className="flex items-center relative">

                            {/* <img id="avatarButton" type="button" data-action="profilNavbar" className="w-10 h-10 rounded-full cursor-pointer menu" alt="Menu"
                            src="" > */}

                            {/* Dropdown menu */}
                            <div id="userDropdown" className="z-10 hidden bg-white divide-y divide-gray-100 rounded shadow w-44 dark:bg-gray-700 dark:divide-gray-600 absolute top-20 right-10 shadow-2xl">
                                <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
                                <div className="flex items-start">

                                    <button type="button" className="text-blue-600 bg-transparent hover:bg-blue-200 hover:text-blue-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-blue-600 dark:hover:text-white close" data-modal-hide="defaultModal">
                                        <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                        <span className="sr-only">Close modal</span>
                                    </button>
                                </div>
                                <div className="font-medium truncate"></div>
                                </div>
                                <ul className="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="avatarButton">
                                <li>
                                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Tableau de bord</a>
                                </li>
                                <li>
                                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Paramètres</a>
                                </li>
                                </ul>
                                <div className="py-1">
                                <a href="" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Déconnexion</a>
                                </div>
                            </div>

                            <div className="flex items-center">
                                <a href="/signup/" className="mr-6 text-sm font-medium text-gray-500 dark:text-white hover:text-green-800 hover:underline">Inscription</a>
                                <a href="/login/" className="text-sm font-medium text-blue-600 dark:text-blue-500 hover:underline">Connexion</a>
                            </div>

                    </div>
                </div>
            </nav>
            <nav className="text-white bg-gradient-to-r from-blue-600 via-blue-500 to-blue-300">
                <div className="max-w-screen-xl px-4 py-3 mx-auto md:px-6">
                    <div className="flex items-center">
                        <ul className="flex flex-row mt-0 mr-6 space-x-8 text-sm font-medium">
                            <li>
                                <a href="" className="dark:text-white hover:font-bold hover:underline" aria-current="page">Accueil</a>
                            </li>
                            <li>
                                <a href="" className="dark:text-white hover:font-bold hover:underline">Evénements du jour</a>
                            </li>
                            <li>
                                <a href="" className="dark:text-white hover:font-bold hover:underline">Catégories</a>
                            </li>

                            <li>
                                <a href="" className="dark:text-white hover:font-bold hover:underline">Mes événements</a>
                            </li>
                            <li>
                                <a href="" className="dark:text-white hover:font-bold hover:underline">Mes participations</a>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        </div>
        );
    }
}

export default Home;