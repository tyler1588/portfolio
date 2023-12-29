import TechStack from "./TechStack";

const About = () => {
  return (
    <section id="about" className="w-10/12 mx-auto pt-16">
      <div className="flex items-center flex-wrap justify-center h-full">
        <div className="text-center">
          <h1 className="text-4xl py-5">About</h1>
          <p className="leading-loose">
            Welcome to my portfolio! I&apos;m a driven Computer Science major
            and aspiring professional developer from Toronto, Canada.
          </p>
          <p className="leading-loose pt-2">
            My practical experience revolves around crafting responsive web
            applications with modern technology, currently focusing on mastering
            Next.js. My passion for software drives me to take every opportunity
            to enhance my skills.
          </p>
          <p className="leading-loose pt-2">
            Recently, I participated in a Hackathon, collaborating with a group
            of three developers to tackle an interesting project with practical
            applications for educators. Thank you for visiting!
          </p>
        </div>
      </div>
      <TechStack />
    </section>
  );
};

export default About;
