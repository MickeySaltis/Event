import React, { Component } from "react";

class Signup extends Component {

    constructor(props) {
        super(props);
        this.state = {
            lastName: "",
            firstname: "",
            email: "",
            password: "",
            avatar: ""
        }
    }
    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };
    onSignupClick = () => {
        const userData = {
            lastName: this.state.lastName,
            firstname: this.state.firstname,
            email: this.state.email,
            password: this.state.password,
            avatar: this.state.avatar[0]
        };
        console.log("Inscription: " + userData.lastName + " " + userData.firstname + " " + userData.email + " " + userData.password);
    }

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
                        <input type="text" id="lastNameId" name="lastName" className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Nom" value={this.state.lastName} onChange={this.onChange}
                            required />
                    </div>

                    {/* Prénom */}
                    <div className="mb-6">
                        <input type="text" id="firstnameId" name="firstname" className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Prénom" value={this.state.firstname} onChange={this.onChange}
                            required />
                    </div>

                    {/* Email */}
                    <div className="mb-6">
                        <input type="email" id="emailId" name="email" className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Adresse email" value={this.state.email} onChange={this.onChange}
                            required />
                    </div>

                    {/* Mot de passe */}
                    <div className="mb-4">
                        <input type="password" id="passwordId" name="password" className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Mot de passe" value={this.state.password} onChange={this.onChange}
                            required />
                    </div>

                    {/* Avatar */}
                    <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-900 dark:text-white" >Avatar</label>
                        <input type="file" id="avatarId" name="avatar" className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Avatar" accept="image/png, image/jpeg" value={this.state.avatar[0]} onChange={this.onChange} />
                        <p className="mt-1 text-sm text-gray-500 dark:text-gray-300" id="file_input_help">PNG ou JPG (MAX. 1024k).</p>
                    </div>

                    {/* Soumission */}
                    <div>
                        <button type="submit" className="text-white inline-block px-7 py-3 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80active:shadow-lg transition duration-150 ease-in-out w-full" data-mdb-ripple="true" data-mdb-ripple-color="light" onClick={this.onSignupClick}>
                            Inscription
                        </button>
                    </div>

                {/* Fin form */}
                </div>
            </div>
        );
    }
}

export default Signup;