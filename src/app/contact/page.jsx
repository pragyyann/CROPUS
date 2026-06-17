"use client";

import React, { useState } from 'react';
import PageHeader from '../../components/cropus/PageHeader';
import FormField from '../../components/cropus/FormField';
import SelectField from '../../components/cropus/SelectField';
import CTAButton from '../../components/cropus/CTAButton';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    inquiryType: 'Small Pack Order',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="w-full max-w-[1180px] mx-auto px-6 pt-36 pb-20 flex-grow animate-fade-in flex flex-col justify-center">
      <PageHeader 
        label="Corporate Communication"
        title="Contact CROPUS Support"
        subtitle="Submit inquiries regarding small packs, regional logistics, custom compositions, or distribution partnerships."
      />

      <div className="max-w-2xl mx-auto mt-6 w-full">
        {submitted ? (
          <div className="p-8 md:p-12 border border-[#C6A15B] bg-[#fcf9f3] rounded-lg text-center flex flex-col items-center gap-6 shadow-sm">
            <div className="w-12 h-12 rounded-full bg-[#0F1F16] text-[#C6A15B] flex items-center justify-center">
              <span className="material-symbols-outlined text-2xl select-none">done</span>
            </div>
            <div className="flex flex-col gap-2">
              <h4 className="font-fraunces text-2xl font-bold text-[#111111]">Inquiry Received</h4>
              <span className="font-mono-plex text-[10px] text-[#7A5F45] uppercase tracking-widest">
                COMMUNICATION TICKET CREATED
              </span>
            </div>
            <p className="text-[#6F6A63] text-sm leading-relaxed max-w-md">
              Thank you for contacting CROPUS. Your communication ticket has been opened successfully. Our team will review the details and follow up with you shortly.
            </p>
            <CTAButton variant="secondary" onClick={() => setSubmitted(false)} className="mt-2 cursor-pointer">
              Submit Another Inquiry
            </CTAButton>
          </div>
        ) : (
          <div className="p-8 md:p-10 border border-[#c3c8c2] bg-white/40 rounded-lg">
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  label="Full Name"
                  name="fullName"
                  required
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="e.g. Aarav Sharma"
                />

                <FormField
                  label="Mobile / WhatsApp Number"
                  name="phone"
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="e.g. +91 98765 43210"
                />

                <FormField
                  label="Email Address"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="e.g. aarav@gmail.com"
                  className="md:col-span-2"
                />

                <SelectField
                  label="Inquiry Type"
                  name="inquiryType"
                  required
                  value={formData.inquiryType}
                  onChange={handleChange}
                  options={[
                    'Small Pack Order',
                    'Bulk Supply',
                    'State Blend Recommendation',
                    'Partnership / Private Label',
                    'Other'
                  ]}
                  className="md:col-span-2"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="font-mono-plex text-[9px] text-[#7A5F45] uppercase tracking-wider font-semibold">
                  Message / Inquiry Details
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows="5"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Describe your soil concern, distribution area, or support request in detail..."
                  className="px-4 py-3 border border-[#c3c8c2] rounded-md text-sm text-[#111111] focus:outline-none focus:border-[#C6A15B] bg-white resize-y"
                />
              </div>

              <div className="flex justify-end mt-2">
                <CTAButton type="submit" variant="primary" className="w-full md:w-auto px-10 cursor-pointer">
                  Submit Inquiry
                </CTAButton>
              </div>
            </form>
          </div>
        )}
      </div>
    </main>
  );
}
