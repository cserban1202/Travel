import React from 'react';
import GooglePayButton from '@google-pay/button-react';
import './PayingSection.css';
import {FaApplePay} from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import StripeCheckout from 'react-stripe-checkout'


export default function PayingSection(){
  const notify = () => toast("Currently, we are still working on this feature. Thank you for understanding!");

  function handleToken(token, addresses) {
    
  } 

    return (
        <div>
            <p className = "paragraph">PSST, try our new 💣 features...maybe there is a <b>discount</b> out there! 👀</p>
            <div className = "displayFlex">
            
            <GooglePayButton className = "buttonPay"
            environment="TEST"
            paymentRequest={{
              apiVersion: 2,
              apiVersionMinor: 0,
              allowedPaymentMethods: [
                {
                  type: 'CARD',
                  parameters: {
                    allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
                    allowedCardNetworks: ['MASTERCARD', 'VISA'],
                  },
                  tokenizationSpecification: {
                    type: 'PAYMENT_GATEWAY',
                    parameters: {
                      gateway: 'example',
                      gatewayMerchantId: 'exampleGatewayMerchantId',
                    },
                  },
                },
              ],
              merchantInfo: {
                merchantId: '12345678901234567890',
                merchantName: 'Chess Travelling',
              },
              transactionInfo: {
                totalPriceStatus: 'FINAL',
                totalPriceLabel: 'Total',
                totalPrice: '0',
                currencyCode: 'RON',
                countryCode: 'US',
              },
            }}
            onLoadPaymentData={paymentRequest => {
              console.log('load payment data', paymentRequest);
            }}
            />
            <FaApplePay className = "iconStyle marginTopLeft1"
              onClick={notify}>Notify!
            </FaApplePay>
             <ToastContainer />

              <div className = "stripe">
                <StripeCheckout 
                  stripeKey = "pk_test_51LH6MTIywZiU5sYTyd2D17XiQyNTk18PRKt4zktLRl5rcoHwbJtEVOQv9Neuj0XDyoPMGVAbVQmhlY0Y9zTFBEx900sUjjzM1S"
                  token = {handleToken}
                />
              </div>

            </div>

        </div>
    );
}