import { testimonials } from "../constants/index";
const Testomonials = () => {
  return (
    <section className="mt-20">
      <h1 className="text-3xl lg:text-6xl font-medium text-center ">
        What People are saying
      </h1>
      <div className="mt-10 flex flex-wrap justify-center w-full">
        {testimonials.map((item, index) => (
          <div key={index} className="px-4 py-2 sm:w-1/2 lg:w-1/3 ">
            <div className="p-6  bg-neutral rounded-md text-md border border-neutral-800">
              <p className="text-neutral-600">{item.text}</p>
              <div className="flex mt-8 items-start">
                <img
                  src={item.image}
                  className="w-12 h-12 rounded-full border border-neutral-300"
                  alt={item.user}
                />
                <div className="ml-3">
                  <h6>{item.user}</h6>
                  <span className="text-sm font-normal italic text-neutral-600">
                    {item.company}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testomonials;
