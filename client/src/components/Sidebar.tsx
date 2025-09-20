import { SquareChartGantt } from "lucide-react";
import { MessageCircleQuestionMark } from "lucide-react";
import { SquareUserRound } from "lucide-react";
export default function Sidebar() {
  return (
    <div className="min-h-screen w-10 border-r border-amber-50/10 flex flex-col justify-between items-center py-2">
      <div className="flex flex-col gap-4">
        <div>
          <img
            src="../../public/ravenLogo.svg"
            alt="Raven Logo"
            className="w-16 rounded-full object-contain"
          />
        </div>
        <div>
          <SquareChartGantt
            strokeWidth={0.75}
            className="w-10 h-6 text-white"
          />
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <div>
          <MessageCircleQuestionMark
            strokeWidth={1}
            className="w-10 h-6 text-white"
          />
        </div>
        <div>
          <SquareUserRound strokeWidth={0.75} className="w-10 h-6 text-white" />
        </div>
      </div>
    </div>
  );
}
