import Image from "next/image";
import BookButton from "./bookButton";

const AboutSection = () => {
  return (
    <section className="mt-8">
      <h1 className="mb-4">Про нас</h1>
      <div className="flex flex-col items-center justify-center">
        <p>
          Ласкаво запрошуємо вас відвідати котеджі "4 Сезони", розташовані у
          мальовничому куточку Карпат – Славську. Туризм в Карпатах – це саме
          той відпочинок, що допоможе забути про буденні проблеми та відпочити
          на лоні природи.
        </p>
        <Image
          src="/about0.jpg"
          alt="Котеджі 4 Сезони у Славську"
          width={800}
          height={600}
          className="rounded-lg mb-4 w-full"
        />
        <BookButton />
      </div>
    </section>
  );
};

export default AboutSection;
