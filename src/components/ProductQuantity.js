import React, { useState } from "react";

function ProductQuantity() {
  const [quantity, setQuantity] = useState(0);

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.buttonContainer}>
        <button onClick={decreaseQuantity} style={styles.button}>
          -
        </button>
        <span style={styles.quantityDisplay}>{quantity}</span>
        <button onClick={increaseQuantity} style={styles.button}>
          +
        </button>
      </div>
      <button style={styles.addToCartButton}>Add {quantity} to Cart</button>
    </div>
  );
}

const styles = {
  container: {
    
    border: "1px solid #ddd",
    width: "170px",
    textAlign: "center",
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "10px 0",
  },
  button: {
    padding: "10px",
    fontSize: "18px",
    cursor: "pointer",
  },
  quantityDisplay: {
    margin: "0 10px",
    fontSize: "18px",
  },
  addToCartButton: {
    margin: "10px",
    padding: "10px 20px",
    backgroundColor: "#28a745",
    color: "white",
    border: "none",
    cursor: "pointer",
  },
};

export default ProductQuantity;