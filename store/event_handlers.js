import cart from "./cart.js";
import { generate_cart_display } from "./node_generators.js";

const update_cart = () =>
{
	let cart_node = document.querySelector( ".cart_display" );
	let new_cart_node = generate_cart_display();

	cart_node.replaceWith( new_cart_node );
}

export const on_remove_click = ( product ) =>
{
	cart.removeProduct( product.id );
	update_cart();
}

export const on_add_click = ( product, amount_input ) =>
{
	console.log( amount_input.value );
	cart.addProduct( product.id, parseInt( amount_input.value ) );
	update_cart();
}
