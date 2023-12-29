import Image from "next/image";

const Hero = () => {
  return (
    <section id="hero" className="h-screen w-10/12 mx-auto md:pt-20">
      <div className="flex items-center text-center flex-wrap justify-evenly h-full">
        <div>
          <h1 className="text-5xl py-2">Hi 👋,</h1>
          <h1 className="text-5xl py-2">My name is</h1>
          <h1 className="text-5xl py-2 bg-gradient-to-r from-indigo-500 via-slate-500 to-cyan-600 inline-block text-transparent bg-clip-text">
            Tyler Jackson
          </h1>
        </div>
        <Image src="/avatar.png" alt="avatar" width="300" height="300" />
      </div>
    </section>
  );
};

export default Hero;
