'use client';

import { useState } from 'react';
import { supabase } from '../../utils/supabaseClient'; 

export default function Careers() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    role: '',
    message: '',
    resume: null,
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    // 1. Upload resume to Supabase Storage
    const fileExt = form.resume.name.split('.').pop();
    const filePath = `${Date.now()}-${form.name.replaceAll(' ', '_')}.${fileExt}`;

    const { error: uploadError } = await supabase.storage
      .from('resumes')
      .upload(filePath, form.resume);

    if (uploadError) {
      alert('Resume upload failed.');
      setSubmitting(false);
      return;
    }

    const { data: urlData } = supabase.storage
      .from('resumes')
      .getPublicUrl(filePath);

    const resumeUrl = urlData.publicUrl;

    // 2. Save data to Supabase table
    const { error: insertError } = await supabase.from('job_applications').insert({
      name: form.name,
      email: form.email,
      phone: form.phone,
      role: form.role,
      message: form.message,
      resume_url: resumeUrl,
    });

    if (insertError) {
      alert('Application submission failed.');
      setSubmitting(false);
    } else {
      setSubmitted(true);
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-10">
        <div className="bg-green-100 text-green-700 p-4 rounded">
          ✅ Thank you! Your application has been received.
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold text-blue-700 mb-4">Join Our Medical Team</h1>
      <p className="text-gray-700 mb-6">
        We are hiring doctors, nurses, and health professionals to serve our community.
        Fill the form below — we’ll review and contact you soon!
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          required
          onChange={handleChange}
          className="w-full border border-gray-300 p-2 rounded-md"
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          required
          onChange={handleChange}
          className="w-full border border-gray-300 p-2 rounded-md"
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          required
          onChange={handleChange}
          className="w-full border border-gray-300 p-2 rounded-md"
        />
        <select
          name="role"
          required
          onChange={handleChange}
          className="w-full border border-gray-300 p-2 rounded-md"
        >
          <option value="">Select Role</option>
          <option value="Doctor">Doctor</option>
          <option value="Nurse">Nurse</option>
          <option value="Lab Technician">Lab Technician</option>
          <option value="Counselor">Mental Health Counselor</option>
          <option value="Other">Other</option>
        </select>
        <textarea
          name="message"
          rows="4"
          placeholder="Why do you want to join SafeHands?"
          onChange={handleChange}
          className="w-full border border-gray-300 p-2 rounded-md"
        />
        <div>
          <label className="block text-gray-700 mb-1">Upload Resume (PDF/DOC)</label>
          <input
            type="file"
            name="resume"
            accept=".pdf,.doc,.docx"
            required
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded-md"
          />
        </div>
        <button
          type="submit"
          disabled={submitting}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          {submitting ? 'Submitting...' : 'Submit Application'}
        </button>
      </form>
    </div>
  );
}
