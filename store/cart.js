import product_list from "./products.js";

class Cart
{
	constructor( product_list )
	{
		this.contents = product_list.map( ( product, i ) => {
			const content = {
				product: product,
				amount: 0
			};

			return content;
		}
		);
		this.total = 0;
	}

	addProduct( product_id, amount )
	{
		const content = this.contents.find( content => content.product.id === product_id );

		content.amount = content.amount + amount;
		this.total = this.total + amount * content.product.price;
		console.log( this.total );
	}

	removeProduct( product_id )
	{
		const content = this.contents.find( content => content.product.id === product_id );
		this.total = this.total - content.amount * content.product.price;
		content.amount = 0;
	}
}

export default new Cart( product_list );
