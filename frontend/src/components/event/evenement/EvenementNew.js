import React, { Component } from "react";


class EvenementNew extends Component
{
    constructor(props) {
        super(props);
        this.state = {
            eventName: "",
            eventDescription: "",
            eventDate: "",
            eventPlace: "",
            eventCategory: ""
        }
    }
    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };
    onSignupClick = () => {
        const userData = {
            eventName: this.state.eventName,
            eventDescription: this.state.eventDescription,
            eventDate: this.state.eventDate,
            eventPlace: this.state.eventPlace,
            eventCategory: this.state.eventCategory
        };
        console.log("Création: " + userData.eventName );
    }

    render()
    {
        return (
            <div class="flex justify-center items-center flex-wrap h-full g-6 text-gray-800 m-24">
                <div class="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0">
                    <img src="https://smeji.ville-seclin.fr/wp-content/uploads/2019/06/csm_img-event_54745635d1.jpg" class="w-fit border-4 border-blue-500 rounded" alt="Phone image" />
                </div>
                <div class="md:w-8/12 lg:w-5/12 lg:ml-20">

                    <h1 class="my-5 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white text-center">Nouveau événement</h1>
                    
                    {/* Formulaire */}

                    {/* <!-- Name --> */}
                    <div class="mb-6">
                        <label class="block text-lg font-medium text-gray-900 dark:text-white text-center">Nom de l'événement</label>
                        <input type="text" id="eventNameId" name="eventName" className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Nom de l'événement" value={this.state.eventName} onChange={this.onChange}
                            required />
                    </div>

                    {/* <!-- Descriptions --> */}
                    <div class="mb-6">
                        <label class="block text-lg font-medium text-gray-900 dark:text-white text-center">Description de l'événement</label>
                        <input type="text" id="eventDescriptionId" name="eventDescription" className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Description de l'événement" value={this.state.eventDescription} onChange={this.onChange}
                            required />
                    </div>

                    {/* <!-- DateEvent --> */}
                    <div class="mb-6">
                        <label class="block text-lg font-medium text-gray-900 dark:text-white text-center mb-2" for="new_event_form_date">Date de l'événement</label>
                        <input type="date" id="eventDateId" name="eventDate" className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Description de l'événement" value={this.state.eventDate} onChange={this.onChange}
                            required />
                    </div>

                    {/* <!-- Place --> */}
                    <div class="mb-4">
                        <label class="block text-lg font-medium text-gray-900 dark:text-white text-center " for="new_event_form_place">Recherche du lieu de l'événement</label>
                        <input type="text" id="eventPlaceId" name="eventPlace" className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Description de l'événement" value={this.state.eventPlace} onChange={this.onChange}
                            required />
                    </div>

                    {/* <!-- Category --> */}
                    <div class="mb-6">
                        <label class="block text-lg font-medium text-gray-900 dark:text-white text-center" for="new_event_form_category">Catégorie de l'événement</label>
                        <select id="eventCategoryId" name="eventCategory" className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Description de l'événement" value={this.state.eventCategory} onChange={this.onChange}
                            required>
                            <option value="category1">Catégorie 1</option>
                            <option value="category2">Catégorie 2</option>
                        </select>
                    </div>

                    {/* <!-- Submit --> */}
                    <div>
                        <button type="submit" className="text-white inline-block px-7 py-3 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80active:shadow-lg transition duration-150 ease-in-out w-full" data-mdb-ripple="true" data-mdb-ripple-color="light" onClick={this.onSignupClick}>
                            Créer
                        </button>
                    </div>


                    {/* <!-- Button Back --> */}
                    <button onclick="history.go(-1)" type="button" class="text-white bg-gradient-to-r from-red-500 via-red-600 to-red-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 w-full text-center mr-2 mb-2 mt-3">Annuler</button>
                </div>
            </div>
        );
    }
}

export default EvenementNew;