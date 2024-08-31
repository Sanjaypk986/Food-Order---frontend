import React from "react";

const HelpPage = () => {
  return (
    <main className="container mx-auto px-1">
      <section className="my-8 ">
        <h2 className="font-semibold text-center text-2xl my-5 underline">
          Help & Support
        </h2>
        <div className="flex flex-col justify-center items-center gap-4">
          <div className="collapse md:w-3/4 collapse-plus bg-base-200">
            <input type="radio" name="my-accordion-3" defaultChecked />
            <div className="collapse-title  text-sm md:text-md font-medium">
              Can I cancel or modify my order after placing it?
            </div>
            <div className="collapse-content">
              <p className='text-sm md:text-md'>
                You can cancel or modify your order within a limited time window
                after placing it.
              </p>
            </div>
          </div>
          <div className="collapse md:w-3/4 collapse-plus bg-base-200">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title  text-sm md:text-md font-medium">
              How do I place an order?
            </div>
            <div className="collapse-content">
              <p className='text-sm md:text-md'>
                To place an order, browse through our menu, add the desired
                items to your cart, and proceed to checkout.
              </p>
            </div>
          </div>
          <div className="collapse md:w-3/4 collapse-plus bg-base-200">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title  text-sm md:text-md font-medium">
              What payment methods do you accept?
            </div>
            <div className="collapse-content">
              <p className='text-sm md:text-md'>
                We accept various payment methods, including credit/debit cards,
                net banking and UPI,
              </p>
            </div>
          </div>
          <div className="collapse md:w-3/4 collapse-plus bg-base-200">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title  text-sm md:text-md font-medium">
              How do I use a discount coupon or promo code?
            </div>
            <div className="collapse-content">
              <p className='text-sm md:text-md'>
                To use a discount coupon or promo code, enter the code in the
                "Promo Code" field at checkout and click "Apply."
              </p>
            </div>
          </div>
          <div className="collapse md:w-3/4 collapse-plus bg-base-200">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title  text-sm md:text-md font-medium">
              What should I do if my delivery is delayed?
            </div>
            <div className="collapse-content">
              <p className='text-sm md:text-md'>
                If your delivery is delayed, please contact our customer support
                team through the website
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HelpPage;
