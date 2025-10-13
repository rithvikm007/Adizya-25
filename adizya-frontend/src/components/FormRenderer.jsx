"use client";

import React, { useState } from "react";
import { db } from "../libs/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export default function FormRenderer({ id, structure }) {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(e.target).entries());

    setSubmitting(true);
    try {
      await addDoc(collection(db, "registrations"), {
        form_id: id,
        submitted_at: serverTimestamp(),
        responses: formData,
      });
      setSubmitted(true);
    } catch (err) {
      console.error("Error submitting form:", err);
      alert("Error submitting form. Check console for details.");
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted)
    return (
      <div className="text-center text-green-600 text-lg font-semibold mt-10">
        ✅ Your response has been submitted successfully!
      </div>
    );

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      {Object.entries(structure).map(([label, field]) => {
        const fieldData = typeof field === "string" ? { type: field } : field;
        const { type, options, placeholder, ...rest } = fieldData;

        return (
          <div key={label} className="flex flex-col gap-1">
            <label className="font-medium">
              {label}
              {rest.required && <span className="text-red-500 ml-1">*</span>}
            </label>

            {type === "select" ? (
              <select
                name={label}
                className="border p-2 rounded-md focus:outline-none focus:ring"
                {...rest}
              >
                <option value="">Select {label}</option>
                {options?.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            ) : type === "textarea" ? (
              <textarea
                name={label}
                placeholder={placeholder || `Enter ${label}`}
                className="border p-2 rounded-md focus:outline-none focus:ring"
                {...rest}
              />
            ) : (
              <input
                type={type || "text"}
                name={label}
                placeholder={placeholder || `Enter ${label}`}
                className="border p-2 rounded-md focus:outline-none focus:ring"
                {...rest}
              />
            )}
          </div>
        );
      })}

      <button
        type="submit"
        disabled={submitting}
        className="mt-6 bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
      >
        {submitting ? "Submitting..." : "Submit"}
      </button>
    </form>
  );
}
