import { MdArrowOutward } from "react-icons/md";
import logoOffer from '../../../assets/logo-offer.svg'
const Offer = () => {
  return (
    <div className="relative">
        <div className="mt-40 bg-offer-banner h-[480px] rounded-3xl px-16 pt-24">
      <h1 className="text-white text-5xl space-y-6 font-semibold ">
        <p> Get Your </p>
        <p> First Appointment </p>
        <p>at 50% Off!</p>
      </h1>

     <div className="mt-6 flex gap-4">
     <button className="btn bg-[#FFC637] border-none">
          Appointment <MdArrowOutward />{" "}
        </button>
     <button className="btn text-white bg-transparent border-white">
          Learn more <MdArrowOutward />{" "}
        </button>
     </div>
    </div>

    <div className="absolute top-16 right-16">
        <img src={logoOffer} alt="" />
    </div>
    </div>
  );
};

export default Offer;
