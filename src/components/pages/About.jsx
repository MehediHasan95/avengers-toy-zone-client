import aboutImg from "../../assets/about.png";

const About = () => {
  return (
    <div className="min-h-[70vh] px-2 lg:px-0 max-w-8xl mx-auto my-10 grid place-items-center">
      <div className="flex gap-10">
        <img src={aboutImg} alt="about_image" />
        <div>
          <h1 className="text-5xl text-blueViolet font-bold">About us</h1>
          <p className="my-3">
            Marvel's The Avengers, also known as The Avengers and Avengers
            Assemble, is a 2012 superhero film, based on the Marvel Comics
            superhero team of the same name. The film is a sequel to The
            Incredible Hulk, Iron Man 2, Thor and Captain America: The First
            Avenger. It is the sixth film in the Marvel Cinematic Universe, and
            the sixth and final installment of Phase One. The film was released
            on April 25, 2012 internationally and on May 4, 2012 in the United
            States.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
