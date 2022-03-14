import { generate_products_display, generate_cart_display } from "./node_generators.js";

let init = () =>
{
	const products_display = generate_products_display();
	const cart_display = generate_cart_display();
	const body = document.querySelector( "body" );

	body.appendChild( products_display );
	body.appendChild( cart_display );
}

document.addEventListener( "DOMContentLoaded", init );
