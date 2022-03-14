import cart from "./cart.js";
import { on_add_click, on_remove_click } from "./event_handlers.js";

const generate_product_node = ( contents ) => 
{
	const { product } = contents;

	const product_node = document.createElement( "div" )
	product_node.classList.add( "product" );

	const desc = document.createElement( "div" );
	desc.innerHTML = `${product.name}`;
	desc.classList.add( "desc" );

	const price = document.createElement( "div" );
	price.innerHTML = `${product.price}`;

	const add_button = document.createElement( "div" );
	add_button.classList.add( "button" );

	const amount_input = document.createElement( "input" );
	amount_input.classList.add( "amount-input" );

	add_button.addEventListener( "click", () => on_add_click( product, amount_input ) );

	product_node.appendChild( desc );
	product_node.appendChild( amount_input );
	product_node.appendChild( price );
	product_node.appendChild( add_button );

	return product_node;
}

const generate_cart_product_node = ( contents ) => 
{
	const { product, amount } = contents;

	const product_node = document.createElement( "div" );
	product_node.classList.add( "cart_product" );

	const amount_node = document.createElement( "div" );
	amount_node.innerHTML = amount;

	const product_name = document.createElement( "div" );
	product_name.innerHTML = product.name;

	const remove_button = document.createElement( "div" );
	remove_button.classList.add( "remove-button" );
	remove_button.addEventListener( "click", () => on_remove_click( product ) );

	product_node.appendChild( product_name );
	product_node.appendChild( amount_node );
	product_node.appendChild( remove_button );

	return product_node;
}

export const generate_cart_display = () =>
{
	const cart_display = document.createElement( "div" );
	cart_display.classList.add( "cart_display" );

	const total = document.createElement( "h1" );
	total.innerHTML = `Total: ${cart.total}`;
	cart_display.append( total );

	cart.contents.map( content => 
		{
			content.amount && cart_display.appendChild( generate_cart_product_node( content ) );
		}
	);

	return cart_display;
}

export const generate_products_display = () =>
{
	const products_display = document.createElement( "div" );
	products_display.classList.add( "products_display" );

	cart.contents.map( content =>
		{
			products_display.appendChild( generate_product_node( content ) );
		}
	);

	return products_display;
}
