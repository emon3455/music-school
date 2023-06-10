import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { Helmet } from "react-helmet-async";
import CheckoutForm from "./CheckoutForm";
import { useLoaderData } from "react-router-dom";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PAYMENT_PK);

const Payment = () => {

    const cls = useLoaderData();
    
    
    return (
        <div>
            <Helmet>
                <title>Music Scholling | Payment</title>
            </Helmet>

            <Elements stripe={stripePromise}>
                <CheckoutForm cls={cls} price={cls.price} />
            </Elements>

        </div>
    );
};

export default Payment;