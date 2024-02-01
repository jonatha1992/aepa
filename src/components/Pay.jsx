import { useState } from "react";
import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";
import axios from "axios";
import img from "../assets/image3.jpeg";

/* import "./Pay.css"; */

const Pay = () => {
  const [preferenceId, setPreferenceId] = useState(null);

  initMercadoPago("APP_USR-5a8b3fdb-e53a-40e2-82be-8f3c3e750fcc");

  const createPreference = async () => {
    try {
      const response = await axios.post(
        "https://us-central1-aepa-86ed6.cloudfunctions.net/app/create_preference",
        {
          description: "Bananita contenta",
          title: "titulo del producto",
          price: 100,
          quantity: 1,
        }
      );

      const { id } = response.data;
      return id;
    } catch (error) {
      console.log(error);
    }
  };

  const handleBuy = async () => {
    const id = await createPreference();
    if (id) {
      setPreferenceId(id);
    }
  };

  return (
    <div className="card-product-container">
      <div className="card-product">
        <div className="card">
          <img src={img} alt="Product Image" />
          <h3>Bananita contenta</h3>
          <p className="price">100 $</p>
          <button onClick={handleBuy}>Buy</button>
          {preferenceId && <Wallet initialization={{ preferenceId }} />}
        </div>
      </div>
    </div>
  );
};

export default Pay;
