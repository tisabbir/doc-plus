const FAQ = () => {
  return (
    <div className="mt-40">

<button className="btn border border-black rounded-3xl bg-white">
        Faq
      </button>
      <h1 className="text-4xl mt-4 text-[#020043] font-semibold">
        Frequently Asked Question
      </h1>


      <div className="collapse collapse-arrow mt-6">
        <input type="radio" name="my-accordion-2" defaultChecked />
        <div className="collapse-title text-xl font-medium bg-[#FFFFF5]">
        What are your office hours?
        </div>
        <div className="collapse-content">
          <p>Our office hours vary by location, but typically we are open Monday through Friday from 8:00 AM to 5:00 PM. Some locations may offer extended hours or weekend appointments. Please contact your nearest clinic for specific hours.</p>
        </div>
      </div>
      <div className="collapse collapse-arrow mt-6">
        <input type="radio" name="my-accordion-2" defaultChecked />
        <div className="collapse-title text-xl font-medium bg-[#FFFFF5]">
        How can I schedule an appointment?
        </div>
        <div className="collapse-content">
          <p>You can schedule an appointment by calling our office directly during business hours or by using our online scheduling system available on our website. For urgent appointments, please call us directly.</p>
        </div>
      </div>
      <div className="collapse collapse-arrow mt-6">
        <input type="radio" name="my-accordion-2" defaultChecked />
        <div className="collapse-title text-xl font-medium bg-[#FFFFF5]">
        What should I bring to my appointment?
        </div>
        <div className="collapse-content">
          <p>Please bring a valid ID, your insurance card, a list of any medications you are currently taking, and any relevant medical records. If applicable, bring referral forms and any previous test results.</p>
        </div>
      </div>
      <div className="collapse collapse-arrow mt-6">
        <input type="radio" name="my-accordion-2" defaultChecked />
        <div className="collapse-title text-xl font-medium bg-[#FFFFF5]">
        Do you accept insurance?
        </div>
        <div className="collapse-content">
          <p>Yes, we accept most major insurance plans. It's a good idea to check with your insurance provider to confirm that we are in-network. For specific insurance questions, please contact our billing department.</p>
        </div>
      </div>
      <div className="collapse collapse-arrow mt-6">
        <input type="radio" name="my-accordion-2" defaultChecked />
        <div className="collapse-title text-xl font-medium bg-[#FFFFF5]">
        Do you offer telemedicine appointments?
        </div>
        <div className="collapse-content">
          <p>Yes, we offer telemedicine appointments for certain types of consultations. These can be scheduled through our online system or by calling our office. Please check with us to see if your visit qualifies for telemedicine.</p>
        </div>
      </div>



    </div>
  );
};

export default FAQ;
