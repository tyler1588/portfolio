import Link from "next/link";

const NavBar = () => {
  return (
    <div className="sm:flex hidden justify-between items-center h-20 px-24 fixed w-full top-0 bg-white">
      <Link className="text-5xl cursor-pointer" href="#hero">
        TJ
      </Link>
      <div className="flex gap-5">
        <Link href="#hero">Home</Link>
        <Link href="#about">About</Link>
        <Link href="#projects">Projects</Link>
        <Link href="#contact">Contact</Link>
      </div>
    </div>
  );
};

export default NavBar;
