"use client";

import React, { useState } from 'react';
import CTAButton from './CTAButton';
import FormField from './FormField';
import SelectField from './SelectField';
import CheckIcon from './icons/CheckIcon';

export default function BulkQuoteForm() {
  const [formData, setFormData] = useState({
    companyName: '',
    contactPerson: '',
    phone: '',
    email: '',
    stateRegion: '',
    cropType: 'Vegetables',
    soilConcern: 'Low organic matter',
    quantity: '100kg',
    packaging: 'Retail packs',
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

  if (submitted) {
    return (
      <div 
        id="bulk-form-section" 
        className="p-8 md:p-12 border border-[#C6A15B] bg-[#fcf9f3] rounded-lg text-center flex flex-col items-center gap-6 mt-12 max-w-2xl mx-auto shadow-sm animate-fade-in"
      >
        <div className="w-12 h-12 rounded-full bg-[#0F1F16] text-[#C6A15B] flex items-center justify-center">
          <CheckIcon className="h-6 w-6" />
        </div>
        <div className="flex flex-col gap-2">
          <h4 className="font-fraunces text-2xl font-bold text-[#111111]">Quote Request Captured</h4>
          <span className="font-mono-plex text-[10px] text-[#7A5F45] uppercase tracking-widest">
            LOGISTICS TICKET OPENED
          </span>
        </div>
        <p className="text-[#6F6A63] text-sm leading-relaxed max-w-md">
          Your regional bulk quote request has been captured. Our dispatch coordination team will contact you shortly via email or phone to review your requirements.
        </p>
        <CTAButton variant="secondary" onClick={() => setSubmitted(false)} className="mt-2 cursor-pointer">
          Submit Another Request
        </CTAButton>
      </div>
    );
  }

  return (
    <div id="bulk-form-section" className="p-8 md:p-10 border border-[#c3c8c2] bg-white/40 rounded-lg mt-12 max-w-3xl mx-auto animate-fade-in">
      <div className="flex flex-col gap-2 border-b border-[#c3c8c2]/30 pb-6 mb-8">
        <span className="font-mono-plex text-[10px] text-[#C6A15B] tracking-widest uppercase">
          // REQUEST REGIONAL DISPATCH
        </span>
        <h3 className="font-fraunces text-2xl md:text-3xl font-bold text-[#111111]">
          Regional Bulk Quote Request
        </h3>
        <p className="text-[#6F6A63] text-sm leading-relaxed">
          Provide your enterprise logistics specifications and agricultural targets.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            label="Company / Institution Name"
            name="companyName"
            required
            value={formData.companyName}
            onChange={handleChange}
            placeholder="e.g. Green Valley Farms Ltd."
          />

          <FormField
            label="Contact Person"
            name="contactPerson"
            required
            value={formData.contactPerson}
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
            label="Business Email Address"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="e.g. procurement@greenvalley.com"
          />

          <FormField
            label="State / Region of Supply"
            name="stateRegion"
            required
            value={formData.stateRegion}
            onChange={handleChange}
            placeholder="e.g. Gujarat"
          />

          <SelectField
            label="Primary Crop Type"
            name="cropType"
            required
            value={formData.cropType}
            onChange={handleChange}
            options={['Vegetables', 'Fruits / Orchards', 'Flowers', 'Plantation Crops', 'Nursery Plants', 'Field Crops', 'Home Garden', 'Other']}
          />

          <SelectField
            label="Soil Concern"
            name="soilConcern"
            required
            value={formData.soilConcern}
            onChange={handleChange}
            options={['Low organic matter', 'Poor moisture retention', 'Hard soil texture', 'Low crop strength', 'General soil conditioning', 'Not sure']}
          />

          <SelectField
            label="Required Quantity"
            name="quantity"
            required
            value={formData.quantity}
            onChange={handleChange}
            options={['100kg', '500kg', '1 Ton', '5 Tons', '10 Tons+', 'Custom Requirement']}
          />

          <SelectField
            label="Packaging Requirement"
            name="packaging"
            required
            value={formData.packaging}
            onChange={handleChange}
            options={['Retail packs', 'Bulk bags', 'Private label', 'Custom packaging', 'Not sure yet']}
            className="md:col-span-2"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="message" className="font-mono-plex text-[9px] text-[#7A5F45] uppercase tracking-wider font-semibold">
            Additional Message / Logistics Requirements
          </label>
          <textarea
            name="message"
            id="message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            placeholder="Describe any specific soil issues, custom crop formulations, or delivery location details..."
            className="px-4 py-3 border border-[#c3c8c2] rounded-md text-sm text-[#111111] focus:outline-none focus:border-[#C6A15B] bg-white resize-y"
          />
        </div>

        <div className="flex justify-end mt-2">
          <CTAButton type="submit" variant="primary" className="w-full md:w-auto px-10 cursor-pointer">
            Request Regional Quote
          </CTAButton>
        </div>
      </form>
    </div>
  );
}
