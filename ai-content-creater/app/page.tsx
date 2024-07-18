import { Button } from "@/components/ui/button";
import SearchSection from "./dashboard/_components/SearchSection";
import TemplateSection from "./dashboard/_components/TemplateSection";
export default function Home() {
  return (
    <div>
      {/* search section */}
      <SearchSection/>
      

      {/* Template List Section */}
      <TemplateSection/>
    </div>
  );
}
