import { CheckCircle2 } from "lucide-react";
import { pricingOptions } from "../constants/index";
const Pricing = () => {
  return (
    <section className="mt-20">
      <div className="flex justify-center items-center w-full">
        <h2 className="sm: text-4xl md:text-4xl lg:text-6xl font-bold tracking-wider">
          Pricing
        </h2>
      </div>
      <div className="pricing-comtainer flex flex-wrap mt-10">
        {pricingOptions.map((item, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-2">
            <div className="border border-neutral-700 rounded-xl p-10">
              <p className="text-4xl mb-8">
                {item.title}
                {item.title === "Pro" && (
                  <span className="text-xl bg-linear-to-b from-orange-500 to-orange-400 bg-clip-text text-transparent mt-2 px-2">
                    (Most Popular)
                  </span>
                )}
              </p>
              <p className="text-4xl mb-8 mr-2">
                {item.price}
                <span className="text-neutral-400 tracking-wide text-xl ml-1">
                  /Month
                </span>
              </p>
              <ul className="mt-8">
                {item.features.map((features, index) => (
                  <li key={index} className="flex items-center mt-3">
                    <CheckCircle2 className="" />
                    <span className="ml-2 text-[17px]">{features}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full mt-10 border border-orange-800 hover:bg-amber-900 transition-all px-6 py-2 rounded-md items-center">
                Subscribe
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
