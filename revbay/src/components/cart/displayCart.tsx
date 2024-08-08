function DisplayCart({ cartItems }) {
    return (
        <ul>
            {cartItems.length > 0 ? (
                cartItems.map((product, index) => (
                    <li key={index}> {product} </li>
                ))
            ) : (
                <p>No Cart Items</p>
            )}
        </ul>
    );
}

export default DisplayCart;