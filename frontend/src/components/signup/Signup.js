import React, { Component } from "react";

class Signup extends Component {
    render() {
        return (
            <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800 m-24">
                <div className="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0">
                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" className="w-fit" alt="Phone" />
                </div>
                <div className="md:w-8/12 lg:w-5/12 lg:ml-20">

                    <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-4xl lg:text-5xl dark:text-white text-center">Créer un compte</h1>

                {/* Formulaire */}

                    {/* Nom */}
                    <div className="mb-6">

                    </div>

                    {/* Prénom */}
                    <div className="mb-6">

                    </div>

                    {/* Email */}
                    <div className="mb-6">

                    </div>

                    {/* Mot de passe */}
                    <div className="mb-4">

                    </div>

                    {/* Avatar */}
                    <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-900 dark:text-white" for="user_avatar">Avatar</label>

                        <p className="mt-1 text-sm text-gray-500 dark:text-gray-300" id="file_input_help">PNG ou JPG (MAX. 1024k).</p>
                    </div>

                    {/* Soumission */}
                    <div>

                    </div>

                {/* Fin form */}
                </div>
            </div>
        );
    }
}

export default Signup;