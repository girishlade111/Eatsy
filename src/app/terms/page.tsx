export default function TermsPage() {
    return (
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-4xl font-headline font-bold mb-6">Terms of Service</h1>
        <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
          <p className="font-semibold">Last Updated: {new Date().toLocaleDateString()}</p>
  
          <h2 className="text-2xl font-headline font-semibold mt-8 mb-4 !-mb-2">1. Introduction</h2>
          <p>
            Welcome to Eatsy! These Terms of Service ("Terms") govern your use of the Eatsy website, mobile applications, and services (collectively, the "Service"), operated by Eatsy Inc. By accessing or using our Service, you agree to be bound by these Terms and our Privacy Policy. If you do not agree to these Terms, please do not use our Service.
          </p>
  
          <h2 className="text-2xl font-headline font-semibold mt-8 mb-4 !-mb-2">2. Our Service</h2>
          <p>
            Eatsy provides an online platform that connects users with local restaurants ("Restaurants") to order food for delivery. You can browse menus, place orders, and make payments through our Service. We act as an intermediary between you and the Restaurants; the contract for the supply and purchase of food is between you and the Restaurant from which you place an order.
          </p>
  
          <h2 className="text-2xl font-headline font-semibold mt-8 mb-4 !-mb-2">3. Accounts</h2>
          <p>
            When you create an account with us, you must provide information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account on our Service. You are responsible for safeguarding the password that you use to access the Service and for any activities or actions under your password.
          </p>
  
          <h2 className="text-2xl font-headline font-semibold mt-8 mb-4 !-mb-2">4. Orders and Payment</h2>
          <p>
            All orders are subject to availability and confirmation of the order price. Delivery times may vary according to availability and are subject to any delays resulting from postal delays or force majeure for which we will not be responsible. To place an order, you must possess a valid credit or debit card issued by a bank acceptable to us. Eatsy retains the right to refuse any request made by you.
          </p>
  
          <h2 className="text-2xl font-headline font-semibold mt-8 mb-4 !-mb-2">5. Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by applicable law, in no event shall Eatsy, its affiliates, agents, directors, employees, suppliers, or licensors be liable for any indirect, punitive, incidental, special, consequential, or exemplary damages, including without limitation damages for loss of profits, goodwill, use, data, or other intangible losses, arising out of or relating to the use of, or inability to use, this Service.
          </p>
  
          <h2 className="text-2xl font-headline font-semibold mt-8 mb-4 !-mb-2">6. Changes to Terms</h2>
          <p>
            We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
          </p>
  
          <h2 className="text-2xl font-headline font-semibold mt-8 mb-4 !-mb-2">7. Contact Us</h2>
          <p>
            If you have any questions about these Terms, please contact us at support@eatsy.com.
          </p>
        </div>
      </div>
    );
  }
  