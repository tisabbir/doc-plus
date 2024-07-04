import { FaStar } from "react-icons/fa";
import sarah from "../../../assets/Sarah.svg";
import michael from "../../../assets/Micheal.svg";
import david from "../../../assets/David.svg";

import { GoDotFill } from "react-icons/go";

const Testimonial = () => {
  return (
    <div className="mt-40">
      <button className="btn border border-black rounded-3xl bg-white">
        Testimonial
      </button>
      <h1 className="text-4xl mt-4 text-[#020043] font-semibold">
        What they say about us
      </h1>

      <div className="mt-8 grid grid-cols-3 gap-6">
        <div className="space-y-4 bg-[#FFFFF5] p-5 rounded-2xl">
          <h2 className="text-[#020043] text-xl font-semibold">
            Expertise and Compassion Combined
          </h2>
          <p>
            I can't thank enough for their exceptional care. The doctors and
            staff showed incredible expertise and compassion throughout my
            treatment journey. I felt truly cared for every step of the way.
          </p>
          <div className="flex gap-3 items-center">
            <div>
              <img src={sarah} />
            </div>
            <div>
              <p>
                <span className="font-bold">Sarah D,</span> IT Professional
              </p>
              <div className="text-[#FFE03D] flex gap-1">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-4 bg-[#FFFFF5] p-5 rounded-2xl">
          <h2 className="text-[#020043] text-xl font-semibold">
            Life-Saving Care, Life-Changing Experience
          </h2>
          <p>
            My experience at Doc-Plus was life-changing. The prompt and accurate
            diagnosis, coupled with the advanced treatments they provided, saved
            my life.
          </p>
          <div className="flex gap-3 items-center">
            <div>
              <img src={michael} />
            </div>
            <div>
              <p>
                <span className="font-bold">Michael R,</span> Business Executive
              </p>
              <div className="text-[#FFE03D] flex gap-1">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-4 bg-[#FFFFF5] p-5 rounded-2xl">
          <h2 className="text-[#020043] text-xl font-semibold">
            Expertise and Compassion Combined
          </h2>
          <p>
            As a busy professional, I appreciate the convenience and quality of
            care I receive at Doc-Plus. From telemedicine consultations to
            routine check-ups, they've become my trusted partner in health and
          </p>
          <div className="flex gap-3 items-center">
            <div>
              <img src={david} />
            </div>
            <div>
              <p>
                <span className="font-bold">David S,</span> Lawyer
              </p>
              <div className="text-[#FFE03D] flex gap-1">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-6">
        <GoDotFill className="text-[#020043] w-6 h-6 opacity-10" />
        <GoDotFill className="text-[#FFC637] w-6 h-6 " />
        <GoDotFill className="text-[#020043] w-6 h-6 opacity-10" />
      </div>
    </div>
  );
};

export default Testimonial;
