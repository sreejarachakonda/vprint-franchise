import { useState } from "react";
import { motion } from "framer-motion";

const initialState = {
  name: "",
  mobile: "",
  email: "",
  profession: "",
  address: "",
  description: ""
};

const FranchiseForm = () => {
  const [formData, setFormData] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const onChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    if (!formData.name.trim()) return "Name is required.";
    if (!/^\d{10}$/.test(formData.mobile)) return "Enter a valid 10-digit mobile number.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) return "Enter a valid email address.";
    if (!formData.profession.trim()) return "Profession is required.";
    if (!formData.address.trim()) return "Address is required.";
    const words = formData.description.trim().split(/\s+/).filter(Boolean).length;
    if (words < 10 || words > 100) return "Description must be between 10 and 100 words.";
    return null;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");

    const validationError = validate();
    if (validationError) return setError(validationError);

    if (!supabase) {
      setError("Supabase not configured.");
      return;
    }

    setLoading(true);

    const { error: dbError } = await supabase
      .from("franchise_requests")
      .insert([formData]);

    setLoading(false);

    if (dbError) return setError(dbError.message);

    setMessage("✅ Request submitted successfully!");
    setFormData(initialState);
  };

  return (
    <section id="franchise" className="py-20 px-4 bg-gradient-to-br from-slate-50 via-white to-orange-50">
      <div className="max-w-4xl mx-auto">

        {/* HEADING */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-orange-500">
            BE YOUR OWN BOSS 🤝
          </h2>

          <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-teal-500 to-orange-500" />
        </div>

        {/* FORM */}
        <motion.form
          onSubmit={onSubmit}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="rounded-2xl border border-gray-200 bg-white p-8 shadow-xl space-y-6"
        >

          <div className="grid gap-5 md:grid-cols-2">

            <input name="name" value={formData.name} onChange={onChange}
              placeholder="Full Name"
              className="input-style" />

            <input name="mobile" value={formData.mobile} onChange={onChange}
              placeholder="Mobile Number"
              className="input-style" />

            <input name="email" value={formData.email} onChange={onChange}
              placeholder="Email Address"
              className="input-style" />

            <input name="profession" value={formData.profession} onChange={onChange}
              placeholder="Profession"
              className="input-style" />

          </div>

          <input name="address" value={formData.address} onChange={onChange}
            placeholder="Full Address"
            className="input-style w-full" />

          <textarea name="description" value={formData.description} onChange={onChange}
            rows={4}
            placeholder="Why do you want to become a VPRINT partner? (10–100 words)"
            className="input-style w-full" />

          {error && (
            <p className="bg-red-50 text-red-600 px-4 py-2 rounded-lg text-sm">
              {error}
            </p>
          )}

          {message && (
            <p className="bg-green-50 text-green-600 px-4 py-2 rounded-lg text-sm">
              {message}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-full bg-gradient-to-r from-teal-500 to-orange-500 py-3 text-white font-semibold shadow-lg hover:scale-105 transition"
          >
            {loading ? "Submitting..." : "Become a Partner 🚀"}
          </button>

        </motion.form>
      </div>
    </section>
  );
};

export default FranchiseForm;
