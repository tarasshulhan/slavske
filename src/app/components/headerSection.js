import Image from "next/image";
const image = "/andrew-yurkiv-XNZjueEeLO8-unsplash.jpg";

const HeaderSection = () => {
  return (
    <section
      className="flex flex-col justify-around items-center"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "100vh",
        margin: "0",
        width: "100%",
        borderRadius: "0",
      }}
    >
      <Image
        src="/logo.png"
        alt="Котеджі 4 Cезони Logo"
        width={177}
        height={76}
        className="mb-4"
      />
      <div className="absolute bottom-8 animate-bounce">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-12 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeaderSection;
