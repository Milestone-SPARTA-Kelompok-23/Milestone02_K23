const CartProduct = (props) => {
    return (
        <div className="main-product-cart">
                    <div>
                        <div className="cart-image">
                            <img src={props.image} alt="product" />
                        </div>
                    </div>
                    <div className="cart-details">
                        <h1>{props.name} <span>{props.quantity}</span></h1>
                        <hr></hr>
                        <p className="cart-price">Price:<br></br><span>Rp.{props.price}</span></p>
                    </div>
        </div>
    )
}

export default CartProduct;