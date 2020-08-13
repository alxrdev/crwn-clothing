import React from 'react'
import StripeCheckout, { Token } from 'react-stripe-checkout'

interface Props {
  price: number
}

const StripeButton: React.FC<Props> = ({ price }) => {
  const priceForStripe = price * 100
  const publishableKey = 'pk_test_51HFpQiBpVTWqbe6es2ShP2RFQsd8hpG6jop9Y8Ka9xZo21rLCFp2kPFKPqQfNtyikZ529Ru99yDPfjNeIZrBQbA400Oq1tBV1G'

  const onToken = (token: Token) => {
    console.log(token)
    alert('Payment Successful')
  }

  return (
    <StripeCheckout
      label='Pay Now'
      name='CRWN Clothing'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    ></StripeCheckout>
  )
}

export default StripeButton
