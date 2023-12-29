const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="flex justify-center p-5">
      <h1>&copy; Tyler Jackson {year}</h1>
    </div>
  );
};

export default Footer;
