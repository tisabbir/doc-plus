import serviceOne from "../../../assets/service-one.png";
import serviceTwo from "../../../assets/service-two.png";
import serviceThree from "../../../assets/service-three.png";
import { MdArrowOutward } from "react-icons/md";

const Service = () => {
  return (
    <div className="grid grid-cols-2 gap-7 mt-40 bg-[#FFFFF5] p-10 rounded-3xl">
      <div className="space-y-4">
        <button className="btn border border-black rounded-3xl bg-white">
          Service
        </button>
        <h1 className="text-4xl text-[#020043] font-semibold">
        Empowering Health, <br /> Enriching Lives
        </h1>
        <p className="text-[#4D4C7B] pb-10 max-w-[426px]">
          We are committed to providing high-quality, compassionate care to
          every patient we serve. Whatever your healthcare needs may be, you can
          trust us to be your partner in health and wellness.
        </p>
        <button className="btn bg-[#FFC637]">
          Appointment <MdArrowOutward />{" "}
        </button>
      </div>
      <div>
        <img src={serviceOne} />
      </div>
      <div>
        <img src={serviceTwo} />
      </div>
      <div>
        <img src={serviceThree} />
      </div>
    </div>
  );
};

export default Service;
