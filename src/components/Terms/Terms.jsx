import "./terms.scss";

const Terms = () => {
  return (
    <div className="w-full font-montserrat flex items-center justify-center p-2 main">
      <div className="container relative mx-auto mt-[8em] mb-[1em] rounded-md bg-white text-gray-700">
        <h1 className="text-primary-blue">Cloud 251 Terms of Service</h1>
        <p>
          <strong>Last Updated:</strong> April 17, 2024
        </p>
        <p>
          Welcome to Cloud 251, your trusted cloud service provider. These Terms
          of Service ("Terms") govern your access to and use of Cloud 251's
          services, so please read them carefully.
        </p>
        <h2 className="text-primary-blue">1. Acceptance of Terms</h2>
        <p>
          By accessing or using Cloud 251's services, you agree to be bound by
          these Terms. If you do not agree to all of the terms and conditions of
          this agreement, you may not access or use Cloud 251's services.
        </p>
        <h2 className="text-primary-blue">2. Description of Services</h2>
        <p>
          Cloud 251 provides cloud computing services including but not limited
          to virtual servers, storage solutions, and networking capabilities.
          These services are provided on a subscription basis, subject to the
          terms and conditions outlined herein.
        </p>
        <h2 className="text-primary-blue">3.Account Registration</h2>
        <p>
          In order to access Cloud 251's services, you must create an account.
          You agree to provide accurate, current, and complete information
          during the registration process and to keep your account information
          updated at all times.
        </p>
        <h2 className="text-primary-blue">4. User Responsibilities</h2>
        <p>
          You are responsible for maintaining the security of your account and
          for all activities that occur under your account. You agree not to
          share your account credentials with any third party and to notify
          Cloud 251 immediately of any unauthorized use of your account.
        </p>
        <h2 className="text-primary-blue">5.Payment Terms</h2>
        <p>
          Subscription fees for Cloud 251's services are based on the pricing
          plan selected by the user and are payable in advance. Payment terms
          are outlined in the pricing agreement provided to the user upon
          registration.
        </p>
        <h2 className="text-primary-blue">6.Data Privacy</h2>
        <p>
          Cloud 251 respects your privacy and is committed to protecting your
          personal data. Our Privacy Policy outlines how we collect, use, and
          disclose your information. By using Cloud 251's services, you consent
          to the collection and use of your data as described in the Privacy
          Policy.
        </p>
        <h2 className="text-primary-blue">7.Intellectual Property</h2>
        <p>
          All intellectual property rights in Cloud 251's services, including
          but not limited to software, trademarks, and content, are owned by
          Cloud 251 or its licensors. You are granted a limited, non-exclusive,
          non-transferable license to use Cloud 251's services for the duration
          of your subscription.
        </p>
        <h2 className="text-primary-blue">8.Limitation of Liability</h2>
        <p>
          Cloud 251 shall not be liable for any indirect, incidental, special,
          or consequential damages arising out of or in connection with the use
          of its services, including but not limited to loss of data, loss of
          revenue, or loss of profits.caused by third parties not under the
          control of Cloud 251 or for reasons beyond Cloud 251's control.
        </p>
        <h2 className="text-primary-blue">9.Termination</h2>
        <p>
          Cloud 251 reserves the right to terminate this agreement if the Client
          breaches any of the Terms, payment terms, or any other agreements
          attached hereto. Either party may terminate the Terms by providing a
          written notice at least 5 days in advance. This termination will
          result in the cessation of all services provided under these Terms of
          Service.
        </p>
        <h2 className="text-primary-blue">10.Governing Law</h2>
        <p>
          These Terms shall be governed by and construed in accordance with the
          laws of the Federal Democratic Republic of Ethiopia. Any disputes
          arising out of or in connection with these Terms shall be subject to
          the exclusive jurisdiction of the courts of Parties agree to resolve
          any disputes arising out of or in connection with these Terms
          amicably. If disputes cannot be resolved between parties amicably,
          they shall be submitted to a court of law of the Federal Democratic
          Republic of Ethiopia having jurisdiction to entertain the matter.
        </p>
        <h2 className="text-primary-blue">11.Changes to Terms</h2>
        <p>
          Cloud 251 reserves the right to update or modify these Terms at any
          time without prior notice. By continuing to access or use Cloud 251's
          services after such changes are made, you agree to be bound by the
          revised Terms.
        </p>
        <h2 className="text-primary-blue">12.Contact Us</h2>
        <p>
          If you have any questions or concerns about these Terms, please
          contact us at{" "}
          <a className="text-blue-600" href="mailto:support@cloud251.com">
            support@cloud251.com
          </a>
        </p>
      </div>
    </div>
  );
};
export default Terms;
