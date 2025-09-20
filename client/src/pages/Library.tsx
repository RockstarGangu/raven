import { SquarePlus } from "lucide-react";
import { Eclipse } from "lucide-react";
import Collections from "../components/Collections";

export default function Library() {
  return (
    <div className="flex flex-col border-amber-50/10 border-r w-70 p-2 gap-4 h-screen">
      <div className="flex flex-row justify-between">
        <div className="flex flex-row gap-1 items-center">
          <Eclipse strokeWidth={1} className="w-4 h-4 text-white" />
          <h4 className="text-[14px]">Incognito Space</h4>
        </div>
        <SquarePlus strokeWidth={0.75} className="w-10 h-6 text-white" />
      </div>
      <div className="flex-1 overflow-auto" >
        <Collections/>
      </div>
    </div>
  );
}
