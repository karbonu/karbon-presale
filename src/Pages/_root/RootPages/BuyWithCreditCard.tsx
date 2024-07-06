// src/components/BuyWithCreditCard.tsx
import { useState } from 'react';
import { useAuth } from '@/components/shared/Contexts/AuthContext.tsx';
import BackArrow from '@/components/Icons/BackArrow.tsx';
import { PayPalScriptProvider, PayPalButtons, usePayPalScriptReducer, PayPalButtonsComponentProps } from "@paypal/react-paypal-js";
import { ReactPayPalScriptOptions } from '@paypal/react-paypal-js';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { Dialog, DialogTrigger, DialogContent } from '@/components/ui/dialog.tsx';
import CreditCardlogo from '@/components/Icons/CreditCardlogo.tsx';


interface VerifyPaymentData {
  orderID: string;
  userID: string;
  amount: string;
}

const BuyWithCreditCard = (props: any) => {
  const [amount, setAmount] = useState<string>('');
  const { UserID } = useAuth();

  const paypalScriptOptions: ReactPayPalScriptOptions = {
    "clientId": import.meta.env.VITE_PAYPAL_CLIENT_ID,
    currency: "USD"
  };

  const verifyPayment = async (data: VerifyPaymentData) => {
    const response = await axios.post(`${import.meta.env.VITE_BACKEND_API_URL}payment/verify-payment`, data);
    return response.data;
  };

  const mutationOptions = {
    mutationFn: verifyPayment,
    onSuccess: (data : any) => {
      alert("Payment verified successfully: " + JSON.stringify(data));
    },
    onError: (error : any) => {
      alert("Payment verification failed: " + error.message);
    }
  };
  
  const mutation = useMutation(mutationOptions);

  function Button() {
    const [{ isPending }] = usePayPalScriptReducer();
    const paypalbuttonTransactionProps: PayPalButtonsComponentProps = {
      style: { layout: "vertical" },
      createOrder(data: any, actions: any) {
        console.log(data);
        return actions.order.create({
          purchase_units: [
            {
              amount: {
                value: amount
              }
            }
          ]
        });
      },
      onApprove(data: any, actions: any) {
        return actions.order.capture({}).then((details: any) => {
          console.log(details);
          const orderID = data.orderID;
          const userID = UserID;
          mutation.mutate({ orderID, userID, amount });
        });
      }
    };

    return (
      <>
        {isPending ? <h2>Load Smart Payment Button...</h2> : null}
        <PayPalButtons fundingSource={"card"} {...paypalbuttonTransactionProps} />
      </>
    );
  }

  return (
    <PayPalScriptProvider options={paypalScriptOptions}>
      <div className="w-full flex items-center px-3 rounded-[4px] bg-[#1C1C1C] h-[40px]">
        <div className="flex flex-row items-center justify-between ">
          <div onClick={() => props.setSelectedMethod(0)} className="flex cursor-pointer flex-row items-center justify-center space-x-1">
            <BackArrow />
            <p className="text-white text-[12px]">Back</p>
          </div>
          <div className="flex flex-row items-center pl-5 space-x-2">
            <CreditCardlogo/>
            <p className="text-white text-[14px]">Buy with Credit Card</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col py-5 items-center justify-center space-y-5">
        <div className="w-full flex bg-black border-[0.5px] border-[#484848] h-[48px]">
          <label htmlFor="buyInput" className="flex flex-row items-center space-x-5 justify-between px-4 w-full">
            <p className="text-white text-[12px]">You Buy</p>
            <div className="bg-[#484848] w-[0.5px]" />
            <div className="flex flex-row items-center justify-center space-x-2 flex-1">
              <input
                id="buyInput"
                type="text"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="bg-transparent h-full w-[80%] text-[20px] placeholder:text-white text-white focus:outline-none"
              />
              <p className="text-white text-[12px] opacity-70">USD</p>
            </div>
          </label>
        </div>
        <Dialog>
          <DialogTrigger>
            <button className="bg-[#484848] py-2 px-5 rounded-sm hover:bg-transparent hover:border-white border-[1px] border-transparent transition ease-in-out  text-white text-[12px]">Make Payment</button>
          </DialogTrigger>
          <DialogContent className='bg-white max-h-[550px] overflow-y-auto flex items-center justify-center w-[50%] py-10 pt-20'>
            <Button />
          </DialogContent>
        </Dialog>
        
      </div>
    </PayPalScriptProvider>
  );
};

export default BuyWithCreditCard;
