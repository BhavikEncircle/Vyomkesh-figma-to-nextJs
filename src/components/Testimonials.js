import ReviewCard from "./ReviewCard";

export default function Testimonials() {
  return (
    <section className="w-full my-10 bg-white flex flex-col gap-10 py-10 md:py-20 px-6">
      <div className="flex flex-col justify-center items-center tracking-tight">
        <p className="uppercase text-sm md:text-md text-ternary tracking-widest text-center">
          Real results, Happy hair!
        </p>

        <h2 className="font-cormorant font-bold text-4xl lg:text-6xl text-center text-[#1a1a1a] mt-2">
          What Our Customers Say
        </h2>
      </div>

      <ReviewCard />
    </section>
  );
}
