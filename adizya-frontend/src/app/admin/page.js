"use client";

import React, { useEffect, useState } from "react";
import { auth, db } from "../../libs/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import {
  collection,
  getDocs,
  query,
  where,
  orderBy,
} from "firebase/firestore";
import { useRouter } from "next/navigation";

export default function AdminDashboard() {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [forms, setForms] = useState([]);
  const [selectedForm, setSelectedForm] = useState(null);
  const [submissions, setSubmissions] = useState([]);
  const [loading, setLoading] = useState(false);

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

  // Fetch forms
  useEffect(() => {
    if (!user) return;
    const fetchForms = async () => {
      const snap = await getDocs(collection(db, "forms"));
      const formList = snap.docs.map((d) => ({ id: d.id, ...d.data() }));
      setForms(formList);
    };
    fetchForms();
  }, [user]);

  const handleSelectForm = async (form) => {
    setSelectedForm(form);
    setSubmissions([]);
    setLoading(true);

    try {
      const q = query(
        collection(db, "registrations"),
        where("form_id", "==", form.id),
        orderBy("submitted_at", "desc")
      );
      const snap = await getDocs(q);
      const data = snap.docs.map((d) => ({ id: d.id, ...d.data() }));
      setSubmissions(data);
    } catch (err) {
      console.error(err);
      alert("Error fetching submissions");
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    await signOut(auth);
    router.push("/admin/login");
  };

  if (!user)
    return (
      <main className="flex justify-center items-center h-screen">
        <p>Checking authentication...</p>
      </main>
    );

  const headers =
    submissions.length > 0 && submissions[0].responses
      ? Object.keys(submissions[0].responses)
      : [];

  return (
    <main className="max-w-6xl mx-auto p-6 flex gap-8">
      {/* Sidebar */}
      <aside className="w-1/3 border-r pr-4">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold">Forms</h1>
          <button
            onClick={handleLogout}
            className="text-sm text-red-600 hover:underline"
          >
            Logout
          </button>
        </div>

        {forms.length === 0 && (
          <p className="text-gray-500">No forms found.</p>
        )}

        <ul className="space-y-2">
          {forms.map((form) => (
            <li key={form.id}>
              <button
                onClick={() => handleSelectForm(form)}
                className={`w-full text-left p-3 rounded-md ${
                  selectedForm?.id === form.id
                    ? "bg-blue-100 border border-blue-400"
                    : "bg-gray-50 hover:bg-gray-100"
                }`}
              >
                <div className="font-medium">{form.title}</div>
                <div className="text-xs text-gray-500 break-all">
                  {form.id}
                </div>
              </button>
            </li>
          ))}
        </ul>
      </aside>

      {/* Submissions */}
      <section className="flex-1">
        {!selectedForm ? (
          <div className="text-gray-500 text-center mt-10">
            Select a form to view submissions
          </div>
        ) : (
          <>
            <h2 className="text-2xl font-semibold mb-4">
              Submissions for: {selectedForm.title}
            </h2>

            {loading ? (
              <p className="text-gray-500">Loading submissions...</p>
            ) : submissions.length === 0 ? (
              <p className="text-gray-500">No submissions yet.</p>
            ) : (
              <div className="overflow-x-auto border rounded-lg">
                <table className="w-full border-collapse text-sm">
                  <thead className="bg-gray-100 border-b">
                    <tr>
                      <th className="p-2 text-left border-r">#</th>
                      {headers.map((key) => (
                        <th key={key} className="p-2 text-left border-r">
                          {key}
                        </th>
                      ))}
                      <th className="p-2 text-left">Submitted At</th>
                    </tr>
                  </thead>
                  <tbody>
                    {submissions.map((sub, index) => (
                      <tr key={sub.id} className="border-b hover:bg-gray-50 transition">
                        <td className="p-2 border-r">{index + 1}</td>
                        {headers.map((key) => (
                          <td key={key} className="p-2 border-r">
                            {String(sub.responses[key] ?? "—")}
                          </td>
                        ))}
                        <td className="p-2 text-gray-500">
                          {sub.submitted_at?.toDate
                            ? sub.submitted_at.toDate().toLocaleString()
                            : "—"}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </>
        )}
      </section>
    </main>
  );
}
