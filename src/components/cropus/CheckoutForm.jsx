"use client";

import React, { useState } from 'react';
import CTAButton from './CTAButton';

export default function CheckoutForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    houseStreet: '',
    areaLocality: '',
    city: '',
    state: '',
    pinCode: '',
    landmark: '',
    notes: '',
    paymentMethod: 'UPI'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handlePaymentSelect = (method) => {
    setFormData(prev => ({ ...prev, paymentMethod: method }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-8">
      {/* Contact Details */}
      <div className="flex flex-col gap-4">
        <h3 className="font-fraunces text-xl font-bold text-[#111111] border-b border-[#c3c8c2]/30 pb-2">
          Contact Details
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col gap-1.5">
            <label className="font-mono-plex text-[9px] text-[#7A5F45] uppercase tracking-wider">Full Name</label>
            <input
              type="text"
              name="fullName"
              required
              value={formData.fullName}
              onChange={handleChange}
              placeholder="e.g. Aarav Sharma"
              className="px-3 py-2.5 border border-[#c3c8c2] rounded-md text-sm text-[#111111] focus:outline-none focus:border-[#C6A15B] bg-white"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="font-mono-plex text-[9px] text-[#7A5F45] uppercase tracking-wider">Mobile Number</label>
            <input
              type="tel"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              placeholder="e.g. +91 98765 43210"
              className="px-3 py-2.5 border border-[#c3c8c2] rounded-md text-sm text-[#111111] focus:outline-none focus:border-[#C6A15B] bg-white"
            />
          </div>
          <div className="flex flex-col gap-1.5 md:col-span-2">
            <label className="font-mono-plex text-[9px] text-[#7A5F45] uppercase tracking-wider">Email Address</label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="e.g. aarav@gmail.com"
              className="px-3 py-2.5 border border-[#c3c8c2] rounded-md text-sm text-[#111111] focus:outline-none focus:border-[#C6A15B] bg-white"
            />
          </div>
        </div>
      </div>

      {/* Shipping Address */}
      <div className="flex flex-col gap-4">
        <h3 className="font-fraunces text-xl font-bold text-[#111111] border-b border-[#c3c8c2]/30 pb-2">
          Delivery Address
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col gap-1.5 md:col-span-2">
            <label className="font-mono-plex text-[9px] text-[#7A5F45] uppercase tracking-wider">House / Flat / Street No.</label>
            <input
              type="text"
              name="houseStreet"
              required
              value={formData.houseStreet}
              onChange={handleChange}
              placeholder="e.g. Flat 405, Block B, Silver Springs"
              className="px-3 py-2.5 border border-[#c3c8c2] rounded-md text-sm text-[#111111] focus:outline-none focus:border-[#C6A15B] bg-white"
            />
          </div>
          <div className="flex flex-col gap-1.5 md:col-span-2">
            <label className="font-mono-plex text-[9px] text-[#7A5F45] uppercase tracking-wider">Area / Locality / Sector</label>
            <input
              type="text"
              name="areaLocality"
              required
              value={formData.areaLocality}
              onChange={handleChange}
              placeholder="e.g. Jayanagar 4th Block"
              className="px-3 py-2.5 border border-[#c3c8c2] rounded-md text-sm text-[#111111] focus:outline-none focus:border-[#C6A15B] bg-white"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="font-mono-plex text-[9px] text-[#7A5F45] uppercase tracking-wider">City</label>
            <input
              type="text"
              name="city"
              required
              value={formData.city}
              onChange={handleChange}
              placeholder="e.g. Bengaluru"
              className="px-3 py-2.5 border border-[#c3c8c2] rounded-md text-sm text-[#111111] focus:outline-none focus:border-[#C6A15B] bg-white"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="font-mono-plex text-[9px] text-[#7A5F45] uppercase tracking-wider">State</label>
            <input
              type="text"
              name="state"
              required
              value={formData.state}
              onChange={handleChange}
              placeholder="e.g. Karnataka"
              className="px-3 py-2.5 border border-[#c3c8c2] rounded-md text-sm text-[#111111] focus:outline-none focus:border-[#C6A15B] bg-white"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="font-mono-plex text-[9px] text-[#7A5F45] uppercase tracking-wider">PIN Code</label>
            <input
              type="text"
              name="pinCode"
              required
              value={formData.pinCode}
              onChange={handleChange}
              placeholder="e.g. 560041"
              className="px-3 py-2.5 border border-[#c3c8c2] rounded-md text-sm text-[#111111] focus:outline-none focus:border-[#C6A15B] bg-white"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="font-mono-plex text-[9px] text-[#7A5F45] uppercase tracking-wider">Landmark (Optional)</label>
            <input
              type="text"
              name="landmark"
              value={formData.landmark}
              onChange={handleChange}
              placeholder="e.g. Opposite Metro Station"
              className="px-3 py-2.5 border border-[#c3c8c2] rounded-md text-sm text-[#111111] focus:outline-none focus:border-[#C6A15B] bg-white"
            />
          </div>
        </div>
      </div>

      {/* Payment Method */}
      <div className="flex flex-col gap-4">
        <h3 className="font-fraunces text-xl font-bold text-[#111111] border-b border-[#c3c8c2]/30 pb-2">
          Payment Method
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {['UPI', 'Credit / Debit Card', 'Net Banking', 'Cash on Delivery'].map((method) => {
            const isSelected = formData.paymentMethod === method;
            return (
              <button
                key={method}
                type="button"
                onClick={() => handlePaymentSelect(method)}
                className={`p-3 border text-[10px] font-mono-plex font-bold tracking-wider uppercase rounded-md text-center transition-all cursor-pointer ${
                  isSelected
                    ? 'border-[#C6A15B] bg-[#fcf9f3] text-[#111111] ring-1 ring-[#C6A15B]/30'
                    : 'border-[#c3c8c2] hover:border-[#111111] bg-white/40 text-[#6F6A63]'
                }`}
              >
                {method}
              </button>
            );
          })}
        </div>
      </div>

      {/* Submit Button */}
      <div className="mt-4">
        <CTAButton type="submit" variant="primary" className="w-full py-4 text-xs tracking-widest font-bold">
          Place Order
        </CTAButton>
      </div>
    </form>
  );
}
