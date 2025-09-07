import { useState} from "react";

type FAQItem = { id: number; question: string; answer: string };

const faqs: FAQItem[] = [
  {id: 1, question: "What is Harvest Nexus?", answer: "Harvest Nexus is a digital marketplace that directly connects farmers with buyers. We make fresh produce more affordable by eleminating middlemen between farmers and consumers" },
  {id: 2, question: "How does Harvest Nexus benefits both farmers and buyers", answer: "We help farmers make direct sales to connsumers thereby increasing farmers earning and buyers get access to fresher produces at affordable prices"},
  {id: 6, question: "Howdo famers sell on Harvest Nexus?", answer: "Farmers simply create a profile, list thier available crops, and set prices. Buyers can then place orders directly through the platform."},
  {id: 3, question: "I'm I required to pay a certain fee to join as a farmer?", answer: "We offer flexible subscription plans, including a free option to get started."},
  {id: 4, question: "Is logistics included?", answer: "Yes. We have integrated transport partners who ensure reliable delivery from farms to buyers. Farmers don’t need to worry about finding trucks or couriers." },
  {id: 5, question: "How does Harvest Nexus ensure the freshness of farm produces until sold?", answer: "We connect farmers with affordable, climate-controlled storage facilities and logistics partners to reduce spoilage and ensure produce reaches buyers fresh."},
];

const PlusMinusIcon:React.FC<{ open: boolean }> = ({ open }) => (
  <span
    className={`relative h-6 w-6 shrink-0  transition-transform duration-300  ${
      open ? "rotate-180" : "rotate-0"
    }`}
    aria-hidden
  >
    {/* Horizontal bar (always visible) */}
    <span className="absolute left-1/2 top-1/2 block h-[2px]  w-6 -translate-x-1/2 -translate-y-1/2 bg-green-800"></span>
    {/* Vertical bar (scales away when open) */}
    <span
      className={`absolute left-1/2 top-1/2  block w-[2px] h-6 -translate-x-1/2 -translate-y-1/2 bg-green-600 transition-transform duration-300 ${
        open ? "scale-y-0" : "scale-y-100"
      }`}
    />
  </span>

);

const FAQAccordion:React.FC = () => {
  const [activeId, setActiveId] = useState<number | null>(null);
  const toggle = (id: number) => setActiveId(prev => (prev === id ? null : id));

  return (
    <section className="lg:min-h-screen bg-gray-100 text-white flex flex-col items-center justify-center">
    	<div>
    		<img src="./logo.avif" className="w-20 border overflow-hidden rounded-full m-4" />
    	</div>
      <div className="w-full max-w-3xl mx-auto px-4 py-10">
        <h2 className="text-3xl md:text-4xl text-black font-bold mb-6">Frequently Asked Questions</h2>

        <div className="">
          {faqs.map(({ id, question, answer }) => {
            const open = activeId === id;
            return (
              <div key={id} className="bg-white rounded-md mb-1 overflow-hidden">
                <div
                  onClick={() => toggle(id)}
                  aria-expanded={open}
                  aria-controls={`faq-panel-${id}`}
                  className="w-full flex  items-center justify-between gap-4 p-4 text-left text-black text-lg md:text-xl"
                >
                  <span className="font-xl ">{question}</span>
                  <PlusMinusIcon open={open} />
                </div>

                <div
                  id={`faq-panel-${id}`}
                  className={`transition-[max-height] border-t-2   duration-500 ease-in-out overflow-hidden ${
                    open ? "max-h-96" : "max-h-0"
                  }`}
                >
                	<br className="bg-red-500 h-6" />
                  <p className="p-4 text-black lg:text-xl">{answer}</p>

                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQAccordion;
