"use client";

import React, { useState, useEffect } from "react";
import { db,auth } from "../../../libs/firebase";
import { collection, addDoc } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/navigation";

export default function CreateFormPage() {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [fields, setFields] = useState([]);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  // Auth check
    useEffect(() => {
      const unsub = onAuthStateChanged(auth, (currentUser) => {
        if (!currentUser) {
          router.push("/admin/login");
        } else {
          setUser(currentUser);
        }
      });
      return () => unsub();
    }, [router]);

  const fieldTypes = ["text", "number", "email", "select", "textarea"];

  const addField = () => {
    setFields([
      ...fields,
      { label: "", type: "text", placeholder: "", required: false, options: [] },
    ]);
  };

  const updateField = (index, key, value) => {
    const updated = [...fields];
    updated[index][key] = value;
    setFields(updated);
  };

  const addOption = (index) => {
    const updated = [...fields];
    updated[index].options.push("");
    setFields(updated);
  };

  const updateOption = (fIndex, oIndex, value) => {
    const updated = [...fields];
    updated[fIndex].options[oIndex] = value;
    setFields(updated);
  };

  const removeField = (index) => {
    setFields(fields.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title.trim()) return alert("Please provide a form title");
    if (fields.length === 0) return alert("Add at least one field");
    //Auth check
    if (!auth.currentUser) return router.push("/admin/login");

    const structure = {};
    for (const f of fields) {
      const { label, ...rest } = f;
      if (label.trim()) structure[label] = rest;
    }

    setLoading(true);
    try {
      await addDoc(collection(db, "forms"), {
        title,
        document_structure: structure,
        created_at: new Date(),
      });
      setSuccess(true);
      setFields([]);
      setTitle("");
    } catch (err) {
      console.error("Error creating form:", err);
      alert("Error creating form. Check console for details.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Create New Form</h1>

      {success && (
        <p className="text-(--foreground) text-center mb-4">
          ✅ Form created successfully!
        </p>
      )}

      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        {/* Title */}
        <div>
          <label className="font-medium block mb-1">Form Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter form title"
            className="border p-2 rounded-md w-full"
            required
          />
        </div>

        {/* Fields */}
        <div className="space-y-4">
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-xl font-semibold">Fields</h2>
            <button
              type="button"
              onClick={addField}
              className="bg-blue-600 text-white px-3 py-1 rounded-md hover:bg-blue-700"
            >
              + Add Field
            </button>
          </div>

          {fields.length === 0 && (
            <p className="text-gray-500 text-center">No fields added yet.</p>
          )}

          {fields.map((field, i) => (
            <div
              key={i}
              className="border p-4 rounded-lg shadow-sm bg-gray-50 flex flex-col gap-3"
            >
              <div className="flex justify-between">
                <label className="font-semibold">
                  Field {i + 1}
                </label>
                <button
                  type="button"
                  onClick={() => removeField(i)}
                  className="text-red-600 hover:underline"
                >
                  Remove
                </button>
              </div>

              <input
                type="text"
                value={field.label}
                onChange={(e) => updateField(i, "label", e.target.value)}
                placeholder="Field label (e.g. Name)"
                className="border p-2 rounded-md"
                required
              />

              <select
                value={field.type}
                onChange={(e) => updateField(i, "type", e.target.value)}
                className="border p-2 rounded-md"
              >
                {fieldTypes.map((t) => (
                  <option key={t}>{t}</option>
                ))}
              </select>

              <input
                type="text"
                value={field.placeholder}
                onChange={(e) => updateField(i, "placeholder", e.target.value)}
                placeholder="Placeholder (optional)"
                className="border p-2 rounded-md"
              />

              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={field.required}
                  onChange={(e) => updateField(i, "required", e.target.checked)}
                />
                <label>Required</label>
              </div>

              {/* Options (only for select) */}
              {field.type === "select" && (
                <div className="mt-2 space-y-2">
                  <label className="font-medium">Options</label>
                  {field.options.map((opt, j) => (
                    <input
                      key={j}
                      type="text"
                      value={opt}
                      onChange={(e) =>
                        updateOption(i, j, e.target.value)
                      }
                      placeholder={`Option ${j + 1}`}
                      className="border p-2 rounded-md w-full"
                    />
                  ))}
                  <button
                    type="button"
                    onClick={() => addOption(i)}
                    className="text-sm bg-gray-200 px-2 py-1 rounded-md hover:bg-gray-300"
                  >
                    + Add Option
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={loading}
          className="bg-(--color-headers) text-white py-2 rounded-md hover:bg-green-700 transition"
        >
          {loading ? "Saving..." : "Create Form"}
        </button>
      </form>
    </main>
  );
}
