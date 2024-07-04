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


      <div className="relative">
        <img src={serviceOne} />

        <div className="text-white space-y-2 p-5 bg-[#02004399] rounded-3xl max-w-80 absolute left-10 bottom-10">
          <h1 className="text-xl font-semibold">Advanced Technology</h1>
          <div className="flex justify-end items-end">
            <p>
              Our surgeons are trained in the latest robotic surgical
              techniques, which allow for greater precision
            </p>
            <button className="btn bg-[#FFC637] rounded-full border-none text-white text-bold text-lg">
              <MdArrowOutward />{" "}
            </button>
          </div>
        </div>
      </div>
      <div className="relative">
        <img src={serviceTwo} />

        <div className="text-white space-y-2 p-5 bg-[#02004399] rounded-3xl max-w-80 absolute left-10 bottom-10">
          <h1 className="text-xl font-semibold">Online Doctor Meet</h1>
          <div className="flex justify-end items-end">
            <p>
              Our surgeons are trained in the latest robotic surgical
              techniques, which allow for greater precision
            </p>
            <button className="btn bg-[#FFC637] rounded-full border-none text-white text-bold text-lg">
              <MdArrowOutward />{" "}
            </button>
          </div>
        </div>
      </div>
      <div className="relative">
        <img src={serviceThree} />

        <div className="text-white space-y-2 p-5 bg-[#02004399] rounded-3xl max-w-80 absolute left-10 bottom-10">
          <h1 className="text-xl font-semibold">Consultancy your health</h1>
          <div className="flex justify-end items-end">
            <p>
              Our surgeons are trained in the latest robotic surgical
              techniques, which allow for greater precision
            </p>
            <button className="btn bg-[#FFC637] rounded-full border-none text-white text-bold text-lg">
              <MdArrowOutward />{" "}
            </button>
          </div>
        </div>
      </div>


      
    </div>
  );
};

export default Service;
