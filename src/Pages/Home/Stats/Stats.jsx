import pieChart from "../../../assets/pi-chart.svg";
import video from "../../../assets/video.svg";
import contract from "../../../assets/contract.svg";
import coin from "../../../assets/coins.svg";
import { FaStar } from "react-icons/fa";

const Stats = () => {
  return (
    <div className="mt-12">
      <div className="bg-[#FBFBFB] border border-[#02004333] rounded-3xl p-4 space-y-3">
        <h1 className="text-4xl font-semibold text-[#020043]">90%</h1>
        <p>Patient satisfaction rate, reflecting our commitment.</p>
        <img className="w-32 h-32" src={pieChart} alt="" />
      </div>

      <div>
        <h1 className="text-5xl font-semibold text-[#020043]">
          Comprehensive Care for Every Patient
        </h1>
      </div>

      <div className="bg-[#FBFBFB] border border-[#02004333] rounded-3xl p-4 space-y-3">
        <h1 className="text-4xl font-semibold text-[#020043]">50+</h1>
        <p>Free lession video for patient</p>
        <img className="w-32 h-32" src={video} alt="" />
      </div>

      <div className="bg-[#FFFFF5] border border-[#02004333] rounded-3xl p-4 space-y-3">
        <h1 className="text-4xl font-semibold text-[#020043]">500+</h1>
        <p>Board-certified doctors</p>
        <img className="w-20 h-20" src={contract} alt="" />
      </div>

      <div className="bg-[#FBFBFB] border border-[#02004333] rounded-3xl p-4 space-y-3">
        <h1 className="text-4xl font-semibold text-[#020043] flex gap-2">
          4.8 <FaStar className="text-[#FFE03D]" />{" "}
        </h1>
        <p>Money spend for poor patient</p>
        <img className="w-20 h-20" src={coin} alt="" />
      </div>

      <div className="bg-[#FFFFF5] border border-[#02004333] rounded-3xl p-4 space-y-3">
        <h1 className="text-4xl font-semibold text-[#020043]">$5000</h1>
        <p>Money spend for poor patient</p>
        <img className="w-20 h-20" src={coin} alt="" />
      </div>
    </div>
  );
};

export default Stats;
