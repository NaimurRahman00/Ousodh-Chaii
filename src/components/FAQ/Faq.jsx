import Container from "../Shared/Container";

const Faq = () => {
  const faqs = [
    {
      question: "What is Oushodh Chai?",
      answer:
        "Oushodh Chai is your trusted online pharmacy, providing a wide range of prescription medications, over-the-counter drugs, health supplements, and personal care products. We are committed to offering high-quality healthcare solutions with the convenience of online shopping and home delivery.",
    },
    {
      question: "How do I place an order on Oushodh Chai?",
      answer:
        "Placing an order on Oushodh Chai is simple. Browse our extensive catalog of products, add the desired items to your cart, and proceed to checkout. You will need to provide your shipping information and select a payment method to complete your purchase. If you need assistance, our customer support team is always ready to help.",
    },
    {
      question:
        "Do I need a prescription to purchase medication from Oushodh Chai?",
      answer:
        "Yes, for prescription medications, you will need to provide a valid prescription from a licensed healthcare provider. You can upload a scanned copy of your prescription during the checkout process or email it to us. Our team will verify the prescription before processing your order.",
    },
    {
      question: "What payment methods does Oushodh Chai accept?",
      answer:
        "Oushodh Chai accepts a variety of payment methods, including major credit and debit cards, net banking, and digital wallets. All transactions are secure and encrypted to ensure the safety of your personal and payment information.",
    },
    {
      question:
        "How does Oushodh Chai ensure the quality and authenticity of its products?",
      answer:
        "We source our products directly from reputable manufacturers and authorized distributors to guarantee their quality and authenticity. Each product undergoes rigorous checks and meets all regulatory standards before being made available for purchase on our website.",
    },
    {
      question: "What is Oushodh Chai's return and refund policy?",
      answer:
        "Oushodh Chai has a customer-friendly return and refund policy. If you receive a damaged, expired, or incorrect product, you can request a return or exchange within 7 days of delivery. Please contact our customer support team with your order details, and we will guide you through the process. Refunds will be processed within a specified timeframe once the returned items are received and inspected.",
    },
  ];

  return (
    <Container>
      <div className="mx-6 md:mx-48 space-y-3 md:space-y-6 -mt-14">
        <div className="text-3xl md:text-5xl text-[#242a60] font-extrabold text-center py-4 md:py-14">
          <h2>Got questions?</h2>
        </div>
        {faqs.map((faq, index) => (
          <div 
          key={index}
            className={`collapse collapse-arrow bg-[#f1f5f9] text-[#242a60] md:pt-4 px-2 md:px-6 rounded-[2rem]`}
          >
            <input type="radio" name="my-accordion-2" defaultChecked />
            <div className="collapse-title text-xl md:text-3xl font-semibold">
             {faq?.question}
            </div>
            <div className="collapse-content text-sm md:text-lg font-medium mt-6">
              <p>{faq?.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Faq;
