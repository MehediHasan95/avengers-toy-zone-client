import Typewriter from "typewriter-effect";

const Banner = () => {
  return (
    <div className="grid gap-5 lg:grid-cols-2">
      <div className="col-span-1 flex items-center">
        <div className="text-center  lg:text-left">
          <h1 className="text-4xl lg:text-8xl font-bold">
            I STILL BELIEVE IN
            <span className="text-blueViolet">
              {" "}
              <Typewriter
                options={{
                  strings: ["HEROES", "AVENGERS"],
                  autoStart: true,
                  loop: true,
                  cursor: "",
                }}
              />
            </span>
          </h1>
          <p className="my-3">
            Everyone fails at who they are supposed to be. The measure of a
            person, of a hero, is how well they succeed at being who they are.
            It's time for me to be who I am rather than who I'm supposed to be.
          </p>
        </div>
      </div>
      <div className="col-span-1">
        <img src="https://i.ibb.co/mbQ01Bb/banner.png" alt="banner" />
      </div>
    </div>
  );
};

export default Banner;
