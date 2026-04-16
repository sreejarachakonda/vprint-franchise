import { Link } from "react-router-dom";

const PrivacyPage = () => (
  <section className="mx-auto max-w-4xl px-4 py-16">
    <h1 className="section-title">Privacy Policy</h1>
    <p className="mt-4 text-gray-600">
      This policy explains how ZAYVION Private Limited collects and uses franchise enquiry information shared on VPRINT website.
    </p>
    <div className="mt-8 space-y-5 rounded-2xl border border-gray-100 bg-white p-6 shadow-soft">
      <p className="text-gray-700">
        We collect details you submit, including name, contact information, profession, address, and business interest description.
      </p>
      <p className="text-gray-700">
        Data is used to evaluate franchise opportunities, contact applicants, and improve onboarding and support processes.
      </p>
      <p className="text-gray-700">
        We do not sell personal information. Access is limited to authorized internal teams and trusted operational usage.
      </p>
    </div>
    <Link to="/" className="mt-8 inline-block text-sm font-semibold text-brand-600 hover:text-brand-700">
      Back to Home
    </Link>
  </section>
);

export default PrivacyPage;
