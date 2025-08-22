export default function PrivacyPage() {
    return (
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-4xl font-headline font-bold mb-6">Privacy Policy</h1>
        <div className="prose prose-lg max-w-none text-muted-foreground">
          <p className="font-semibold">Last Updated: {new Date().toLocaleDateString()}</p>
  
          <h2 className="text-2xl font-headline font-semibold mt-8 mb-4">1. Introduction</h2>
          <p>
            Eatsy Inc. ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website, mobile applications, and services (collectively, the "Service"). Please read this policy carefully. If you do not agree with the terms of this privacy policy, please do not access the Service.
          </p>
  
          <h2 className="text-2xl font-headline font-semibold mt-8 mb-4">2. Information We Collect</h2>
          <p>
            We may collect personal information from you in a variety of ways, including, but not limited to, when you visit our site, register on the site, place an order, and in connection with other activities, services, features, or resources we make available on our Service. You may be asked for, as appropriate, name, email address, mailing address, phone number, and credit card information.
          </p>
  
          <h2 className="text-2xl font-headline font-semibold mt-8 mb-4">3. How We Use Your Information</h2>
          <p>
            We may use the information we collect from you to:
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Personalize your experience and to allow us to deliver the type of content and product offerings in which you are most interested.</li>
              <li>Improve our website in order to better serve you.</li>
              <li>Process your transactions quickly.</li>
              <li>Send periodic emails regarding your order or other products and services.</li>
            </ul>
          </p>
  
          <h2 className="text-2xl font-headline font-semibold mt-8 mb-4">4. How We Protect Your Information</h2>
          <p>
            We implement a variety of security measures to maintain the safety of your personal information when you place an order or enter, submit, or access your personal information. All transactions are processed through a gateway provider and are not stored or processed on our servers.
          </p>
  
          <h2 className="text-2xl font-headline font-semibold mt-8 mb-4">5. Sharing Your Information</h2>
          <p>
            We do not sell, trade, or otherwise transfer to outside parties your Personally Identifiable Information unless we provide users with advance notice. This does not include website hosting partners and other parties who assist us in operating our website, conducting our business, or serving our users, so long as those parties agree to keep this information confidential.
          </p>
  
          <h2 className="text-2xl font-headline font-semibold mt-8 mb-4">6. Your Consent</h2>
          <p>
            By using our site, you consent to our website's privacy policy.
          </p>
  
          <h2 className="text-2xl font-headline font-semibold mt-8 mb-4">7. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us at privacy@eatsy.com.
          </p>
        </div>
      </div>
    );
  }
  