import React, { Component } from "react";

class Login extends Component {
    
    constructor(props) 
    {
        super(props);
        this.state = {
            email: "",
            password: ""
        }
    }
    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };
    onSignupClick = () => {
        const userData = {
            email: this.state.email,
            password: this.state.password
        };
        console.log("Connexion " + userData.email + " " + userData.password);
    }
    
    render() {
        return (
            <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800 m-24">
                
                <div className="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0">
                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg" className="w-fit" alt="Phone" />
                </div>

                <div className="md:w-8/12 lg:w-5/12 lg:ml-20">

                    <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-4xl lg:text-5xl dark:text-white text-center">Se connecter</h1>

                    <form>

                        <div className="mb-6">
                            <input type="email" id="emailId" name="email" className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Adresse email" value={this.state.email} onChange={this.onChange}
					        required />
                        </div>


                        <div className="mb-6">
                            <input type="password" id="passwordId" name="password" className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Mot de passe" value={this.state.password} onChange={this.onChange} required />
                        </div>


                            <button type="submit" className="text-white inline-block px-7 py-3 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80active:shadow-lg transition duration-150 ease-in-out w-full" data-mdb-ripple="true" data-mdb-ripple-color="light" onClick={this.onSignupClick}>
                                Connexion
                            </button>


                           { /*<div className="text-center mt-3">
                                <a href="#" className="text-blue-600 hover:text-blue-700 focus:text-blue-700 active:text-blue-800 hover:underline duration-200 transition ease-in-out">Mot de passe oublié ?</a>
                            </div>*/}
                    </form>

                    <div className="text-center mt-3">
                        <a href="/signup/" className="text-white inline-block px-7 py-3 bg-gradient-to-r from-green-500 via-green-600 to-green-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80active:shadow-lg transition duration-150 ease-in-out w-full">Créer un compte</a>
                    </div>

                </div>

            </div>
        );
    }
}

export default Login;