import { MdArrowOutward } from "react-icons/md";
import whoWeImg from '../../../assets/WhoWeAre.png'

const WhoWeAre = () => {
  return (
    <div className="flex gap-32 mt-24 ">
      <div className="flex-1 space-y-4">
        <button className="btn border border-black rounded-3xl bg-white">Who We Are</button>
        <h1 className="text-4xl text-[#020043] font-semibold">We Help To Get <br />Solutions</h1>
        <p className="text-[#4D4C7B] pb-10 max-w-[470px]">
          We are proud to be a trusted healthcare provider in our community, and
          we look forward to serving you and your family with excellence,
          integrity, and compassion. Your health is our priority, and we are
          here for you every step of the way. We believe in treating each
          patient with dignity, respect, and empathy, ensuring that they receive
          the attention and care they deserve.
        </p>
        <button className="btn bg-[#FFC637]">Learn more <MdArrowOutward /> </button>
      </div>
      <div className="relative">
        <img className="max-w-xl" src={whoWeImg} />
        <div className="px-6 py-12 space-y-5 bg-[#343268] text-white rounded-[32px] max-w-96 absolute -bottom-10 -left-24">
            <h2 className=" text-2xl font-medium">Our mission is simple</h2>
            <p className="opacity-80">To provide high-quality healthcare services that are accessible, personalized, and patient-centered.</p>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
