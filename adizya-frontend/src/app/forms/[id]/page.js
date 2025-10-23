import { doc, getDoc } from "firebase/firestore";
import { db } from "../../../libs/firebase";
import FormRenderer from "../../../components/FormRenderer";
import QRCarousel from "../../../components/QRCarousel"; 
import Navbar from "@/components/Navbar";
import localFont from "next/font/local";
const disabled = ["Ps797VKJr6AxJs18gloo","0OcZrb8eWP3GNhKEYIh0"]

const pearlJean = localFont({
  src: "../../../../public/fonts/pearl-jean.ttf",
  display: "swap",
});

export default async function FormPage({ params }) {
  const { id } = await params;
  if(disabled.includes(id)){
    return (
    <>
      <Navbar />
      <main className="flex flex-col items-center justify-center min-h-screen bg-[#f9eac6] px-4">
        <div className="bg-[#efc971] shadow-md rounded-xl p-8 max-w-2xl text-center">
          <h1 className={`text-3xl md:text-4xl font-bold ${pearlJean.className} text-red-600 mb-4`}>
            Registrations Closed
          </h1>
          <p className="text-gray-700 mb-6 text-lg">
            We're sorry, registration for this form is no longer open. 
            Thank you for your interest!
          </p>
        </div>
      </main>
    </>
  );
  }

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
  const qrImages = ["/imgs/qr.webp", "/imgs/qr2.webp", "/imgs/qr3.webp"];

  return (
    <>
    <Navbar />
    <main className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">{formData.title}</h1>

      <div className="mt-8 flex flex-col items-center">
        <p className="text-lg font-semibold mb-2 text-center">
          Scan the QR to complete payment
        </p>
        <QRCarousel images={qrImages} />
      </div>

      <FormRenderer id={id} structure={formData.document_structure} />
    </main>
    </>
  );
}
