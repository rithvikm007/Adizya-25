import { doc, getDoc } from "firebase/firestore";
import { db } from "../../../libs/firebase";
import FormRenderer from "../../../components/FormRenderer";
import Image from "next/image";

// This is a server component that fetches the form data
export default async function FormPage({ params }) {
  const { id } = await params;

  const formRef = doc(db, "forms", id);
  const formSnap = await getDoc(formRef);

  if (!formSnap.exists()) {
    return (
      <main className="flex justify-center mt-20 text-red-600 text-lg">
        Form not found
      </main>
    );
  }

  const formData = formSnap.data();
  return (
    <main className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">{formData.title}</h1>
      <div className="mt-8 flex flex-col items-center">
          <p className="text-lg font-semibold mb-2">Scan the QR to complete payment</p>
          <Image
            src="/imgs/qr.webp"
            alt="Payment QR"
            width={220}
            height={220}
            className="rounded-lg shadow-md w-40 sm:w-52 md:w-60 lg:w-72 h-auto"
            priority
          />
        </div>
      <FormRenderer id={id} structure={formData.document_structure} />
    </main>
  );
}
