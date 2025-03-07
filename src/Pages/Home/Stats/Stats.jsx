import pieChart from "../../../assets/pi-chart.svg";
import video from "../../../assets/video.svg";
import contract from "../../../assets/contract.svg";
import coin from "../../../assets/coins.svg";
import client1 from "../../../assets/David.svg";
import client2 from "../../../assets/Micheal.svg";
import client3 from "../../../assets/client2.svg";
import client4 from "../../../assets/client3.svg";
import { FaStar } from "react-icons/fa";

const Stats = () => {
  return (
    <div className="mt-12 grid grid-cols-5 grid-rows-10 gap-5">
      <div className="row-span-10 bg-[#FBFBFB] border border-[#02004333] rounded-3xl p-4 space-y-3 max-h-[312px]">
        <h1 className="text-4xl font-semibold text-[#020043]">90%</h1>
        <p>Patient satisfaction rate, reflecting our commitment.</p>
        <img className="w-32 h-32" src={pieChart} alt="" />
      </div>

      <div className="row-span-3 col-span-3">
        <h1 className="text-5xl text-center font-semibold text-[#020043]">
          Comprehensive Care for Every Patient
        </h1>
      </div>

      <div className=" row-span-10 max-h-[312px] bg-[#FBFBFB] border border-[#02004333] rounded-3xl p-4 space-y-3">
        <h1 className="text-4xl font-semibold text-[#020043]">50+</h1>
        <p>Free lession video for patient</p>
        <img className="w-32 h-32" src={video} alt="" />
      </div>

      <div className="row-span-6 max-h-[190px] bg-[#FFFFF5] border border-[#02004333] rounded-3xl p-4 space-y-3">
        <h1 className="text-4xl font-semibold text-[#020043]">500+</h1>
        <p>Board-certified doctors</p>
        <img className="w-20 h-20" src={contract} alt="" />
      </div>

      <div className="row-span-5 mt-7 max-h-[162px] bg-[#FBFBFB] border border-[#02004333] rounded-3xl p-4 space-y-2">
        <h1 className="text-4xl font-semibold text-[#020043] flex gap-2">
          4.8 <FaStar className="text-[#FFE03D]" />{" "}
        </h1>
        <p>Money spend for poor patient</p>
        <div className="flex">
            
            <img src={client1} className="w-8 h-8 " />
            <img src={client2} className="w-8 h-8 -ml-3" />
            <img src={client3} className="w-8 h-8 -ml-3" />
            <img src={client4} className="w-8 h-8 -ml-3" />


        </div>
      </div>

      <div className="row-span-6 max-h-[190px] bg-[#FFFFF5] border border-[#02004333] rounded-3xl p-4 space-y-2">
        <h1 className="text-4xl font-semibold text-[#020043]">$5000</h1>
        <p>Money spend for poor patient</p>
        <img className="w-14 h-14" src={coin} alt="" />
      </div>
    </div>
  );
};

export default Stats;
