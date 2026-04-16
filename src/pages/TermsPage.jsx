import { Link } from "react-router-dom";

const TermsPage = () => (
  <section className="mx-auto max-w-4xl px-4 py-16">
    <h1 className="section-title">Terms of Service</h1>
    <p className="mt-4 text-gray-600">
      These terms govern use of VPRINT services and franchise enquiry platform operated by ZAYVION Private Limited.
    </p>
    <div className="mt-8 space-y-5 rounded-2xl border border-gray-100 bg-white p-6 shadow-soft">
      <p className="text-gray-700">
        By using this website, you agree to provide accurate information in the franchise form and use the platform for lawful purposes only.
      </p>
      <p className="text-gray-700">
        VPRINT may update service features, access workflows, or these terms based on product and business requirements.
      </p>
      <p className="text-gray-700">
        Franchise approvals are subject to internal review, location viability, and partnership terms discussed by the official team.
      </p>
    </div>
    <Link to="/" className="mt-8 inline-block text-sm font-semibold text-brand-600 hover:text-brand-700">
      Back to Home
    </Link>
  </section>
);

export default TermsPage;
