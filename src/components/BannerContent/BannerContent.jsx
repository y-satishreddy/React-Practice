import "./bannerContent.css";
const BannerContent = () => {
  return (
    <section className="h-[auto] w-[100%]  px-[5%] py-[2%] box-border web-content-banner">
      <p className="web-content-banner__small-quote text-black font-thin text-2xl pl-2 m-0">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
      </p>
      <p className="web-content-banner__large-quote text-9xl p-0 m-0">
        Mrane. Amesh. <br />
      </p>
      <div className="web-content-banner_quote-btn flex items-end">
        <p className="web-content-banner__large-quote text-9xl">Sunnysh.</p>
        <button
          className="btn text-white text-xl bg-[black] px-6 py-3 
 active:scale-95  transition-all duration-100 ease-in-out"
        >
          Learn Now
        </button>
      </div>
    </section>
  );
};

export default BannerContent;
