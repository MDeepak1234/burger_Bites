import MenuItems from './MenuItems'
import food1 from "../assets/menu/burger-11.jpg"
import food2 from "../assets/menu/burger-12.jpg"
import food3 from "../assets/menu/burger-13.jpg"
import food4 from "../assets/menu/burger-14.jpg"
import food5 from "../assets/menu/burger-15.jpg"
import food6 from "../assets/menu/burger-16.jpg"
import food7 from "../assets/menu/burger-17.jpg"
import food8 from "../assets/menu/burger-18.jpg"

function Menu({setCartCount,cartCount}) {
    const handleAddToCart = () => {
        setCartCount(prev => prev + 1);
    };
    const handleremoveToCart = () => {
        setCartCount(prev => prev - 1);
    };
    return (
        <div className="container">
            <div className="row">
                <MenuItems title="Mac Grill" img={food1} description="The Mac Grill Burger is a hearty, flame-grilled burger loaded with juicy chicken, melted cheese, and bold smoky flavors." rating={4} onAddToCart={handleAddToCart} onRemoveToCart={handleremoveToCart} />
                <MenuItems title="Maharaja Mac Grill" img={food2} description="A royal indulgence stacked with double patties, rich sauces, and spicy Indian flavors." rating={5} onAddToCart={handleAddToCart} onRemoveToCart={handleremoveToCart}/>
                <MenuItems title="Veg Grill Burger" img={food3} description="A crispy, flavorful patty made with fresh vegetables, layered with cheese and tangy sauces" rating={3} onAddToCart={handleAddToCart} onRemoveToCart={handleremoveToCart}/>
                <MenuItems title="Beef Grill" img={food4} description="A juicy, grilled beef patty served with classic toppings for a bold and satisfying bite." rating={2.5} onAddToCart={handleAddToCart} onRemoveToCart={handleremoveToCart}/>
                <MenuItems title="Chicken Burger" img={food5} description="A juicy, grilled chicken patty served with classic toppings for a bold and satisfying bite." rating={4} onAddToCart={handleAddToCart} onRemoveToCart={handleremoveToCart}/>
                <MenuItems title="Smoky BBQ Burger" img={food6} description="A smoky, hot, grilled chicken roasted patty cruchy outside and juicy inside and served with classic toppings for a bold and satisfying bite." rating={5} onAddToCart={handleAddToCart} onRemoveToCart={handleremoveToCart}/>
                <MenuItems title="Classic Cheeseburger" img={food7} description="A juicy, grilled beef patty served with classic toppings for a bold and satisfying bite." rating={3.5} onAddToCart={handleAddToCart} onRemoveToCart={handleremoveToCart}/>
                <MenuItems title="Double Patty Delight" img={food8} description="A juicy, grilled double patty stuffed gaint burger served with classic toppings for a bold and satisfying bite." rating={4.5} onAddToCart={handleAddToCart} onRemoveToCart={handleremoveToCart}/>
            </div>
        </div>

    )
}

export default Menu;
