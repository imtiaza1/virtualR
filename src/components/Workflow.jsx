import { CheckCircle2 } from "lucide-react";
import codeimg from "../assets/code.jpg";
import { checklistItems } from "../constants/index";
const Workflow = () => {
  return (
    <>
      <div className="mt-20 bg-linear-to-b from-orange-900/10 via-transparent to-pink-900/10 pointer-events-none ">
        <div className="w-full p-4 flex items-center justify-center">
          <h1 className="lg:text-6xl md:text-4xl sm:text-3xl font-bold">
            Accelerate your{" "}
            <span className="bg-linear-to-b from-orange-500 to-orange-900 bg-clip-text text-transparent">
              coding workflow.
            </span>
          </h1>
        </div>
        <div className="flex justify-between items-center flex-wrap w-full">
          <div className="img lg:w-1/2 md:w-1/2 w-full pt-2">
            <img src={codeimg} alt="code" />
          </div>
          <div className="lg:w-1/2 md:w-1/2 w-full pt-10">
            {checklistItems.map((items, index) => (
              <div key={index} className="flex  mb-12  ">
                <div className="text-green-600 mx-6 bg-neutral-900 h-10 w-10 p-2 justify-center items-center rounded-full">
                  <CheckCircle2 />
                </div>
                <div>
                  <h5 className="mb-2 lg:text-2xl ">{items.title}</h5>
                  <p className="font-light text-neutral-500 lg:text-[18px] md:text-[13px] sm:text-[13px]">
                    {items.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Workflow;
