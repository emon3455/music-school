/* eslint-disable react/prop-types */
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../../providers/AuthProvider";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useNavigate } from "react-router-dom";

const CheckoutForm = ({ cls, price }) => {

    const naviagte = useNavigate();
    const stripe = useStripe();
    const elements = useElements();
    const { user } = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure()

    const [cardError, setCardError] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const [processing, setProcessing] = useState(false);

    useEffect(() => {
        if (price > 0) {
            axiosSecure.post('/create-payment-intent', { price })
                .then(res => {
                    console.log(res.data.clientSecret)
                    setClientSecret(res.data.clientSecret);
                })
        }
    }, [price, axiosSecure])


    const handleSubmit = async (event) => {

        setCardError("");
        event.preventDefault();

        setProcessing(true);
        if (!stripe || !elements) {
            return
        }

        const card = elements.getElement(CardElement);
        if (card === null) {
            return
        }

        const { error } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        if (error) {
            console.log('error', error)
            setCardError(error.message);
        }
        else {
            setCardError('');
            // console.log('payment method', paymentMethod)
        }

        setProcessing(true);
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        email: user?.email || 'unknown',
                        name: user?.displayName || 'anonymous'
                    },
                },
            },
        );

        if (confirmError) {
            console.log(confirmError);
        }

        setProcessing(false)
        if (paymentIntent.status === 'succeeded') {
            // save payment information to the server
            const payment = {
                selectedClassId: cls._id,
                classId: cls.classId,
                className: cls.name,
                classImage: cls.image,
                studentEmail: user?.email,
                studentName: user?.displayName,
                instructorEmail: cls.instructorEmail,
                instructorName: cls.instructorName,
                price: cls.price,
                transactionId: paymentIntent.id,
                date: new Date(),
            }

            axiosSecure.post('/payments', payment)
                .then(res => {
                    if (res.data.insertedResult.insertedId && res.data.deleteResult.deletedCount > 0 && res.data.updateResult.modifiedCount > 0) {
                        Swal.fire({
                            icon: 'success',
                            title: 'Payment Done successfully',
                            showConfirmButton: true,
                        })
                        naviagte("/dashboard/myEnrolledClass")
                    }
                })

        }


    }


    return (
        <div>
            <h2 className="text-4xl font-bold text-center text-red-500 my-5">Please Pay</h2>
            <form className="card my-10 shadow-2xl w-2/3 mx-auto p-8" onSubmit={handleSubmit}>
                <CardElement
                    className="input"
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },

                        },
                    }}
                />
                <div className="text-center">
                    <button className="btn btn-primary mt-10" type="submit" disabled={!stripe || !clientSecret || processing}>
                        Pay
                    </button>
                </div>
            </form>

            <div className="card shadow-2xl my-5 p-2 w-1/3 mx-auto">
                {
                    cardError && <p className="text-red-600 text-center">{cardError}</p>
                }
                {
                    processing &&
                    <>
                        <div className="h-40 w-full flex flex-col justify-center items-center">
                            <h2 className="text-2xl font-semibold text-violet-600 text-center">Please Wait....</h2>
                            <progress className="progress w-56"></progress>
                        </div>
                    </>
                }
            </div>


        </div>
    );
};

export default CheckoutForm;