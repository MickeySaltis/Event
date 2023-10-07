import React, { Component } from "react";
import CategorieCard from "./CategorieCard";

class Categories extends Component
{
    render()
    {
        return (
            <div class="container text-center mx-auto px-3">

                <h1 class="my-5 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Catégories</h1>

                <CategorieCard />

            </div>
        );
    }
}
export default Categories;