import Image from "next/image";
import BookButton from "./bookButton";

const AboutSection = () => {
  return (
    <section>
      <h1 className="mb-4">Про нас</h1>
      <div className="flex flex-col items-center justify-center">
        <Image
          src="/about.jpg"
          alt="Котеджі 4 Сезони у Славську"
          width={800}
          height={600}
          className="rounded-lg mb-4"
        />
        <p>
          Ласкаво запрошуємо вас відвідати котеджі "4 Сезони", розташовані у
          мальовничому куточку Карпат – Славську. Туризм в Карпатах – це саме
          той відпочинок, що допоможе забути про буденні проблеми та відпочити
          на лоні природи.
        </p>
        <BookButton />
      </div>
    </section>
  );
};

export default AboutSection;
