class Product
{
	constructor( id, name, desc, price )
	{
		this.id = id;
		this.name = name;
		this.desc = desc;
		this.price = price;
		//TODO image url
		this.imgUrl;
	}
}


//TODO import proizvoda iz json datoteke
const product_list = [];
const p1 = new Product( 1, "Proizvod 1", "...", 123 );
const p2 = new Product( 2, "Proizvod 2", "...", 234 );
const p3 = new Product( 3, "Proizvod 3", "...", 2243 );
const p4 = new Product( 4, "Test Proizvod", "Opis", 423 );

product_list.push( p1 );
product_list.push( p2 );
product_list.push( p3 );
product_list.push( p4 );

export default product_list;
