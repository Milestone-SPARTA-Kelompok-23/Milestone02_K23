const CheckoutProduct = (props) => {
    return (
        <div className="main-product-checkout">
                    <div>
                        <div className="cart-image">
                            <img src={props.image} alt="product" />
                        </div>
                    </div>
                    <div className="cart-details">
                        <h1>{props.name}</h1>
                        <p className="cart-price">Unit Price:<br></br><span>Rp.{props.price}</span></p>
                        <span style={{fontSize:"20px"}}>Quantity: {props.quantity}</span>
                    </div>
        </div>
    )
}

export default CheckoutProduct;