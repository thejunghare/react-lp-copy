import data from "../data/pricing.json";
import { useState, useEffect } from "react";

export const Pricing = () => {
  const [plans, setPlans] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // setPlans(data);
    async function getPricing() {
      try {
        setLoading(true);
        const response = await fetch(
          "https://api.jsonbin.io/v3/qs/6a041905adc21f119a91f495",
        );
        console.log(response);
        const API_DATA = await response.json();
        setPlans(API_DATA.record);
        console.log(plans);
      } catch (e) {
        console.log(e);
      } finally {
        setLoading(false);
      }
    }
    getPricing();
  }, []);

  if (loading) {
    return <>Loading....</>;
  }

  return (
    <>
      {plans.map((plan) => (
        <p>
          {plan.name} {plan.price}
        </p>
      ))}
    </>
  );
};
