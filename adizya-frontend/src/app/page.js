import Image from "next/image";
import EatwinedPage from "@/components/eatwined/page";
import AcknowledgementsPage from "@/components/acknowledgements/page";
export default function Home() {
  return (
    <div>
      <div className="w-120 h-300"></div>
      <EatwinedPage />
      <AcknowledgementsPage />
    </div>
  );
}
