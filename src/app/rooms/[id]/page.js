import Image from "next/image";
import Link from "next/link";
import BookButton from "../../components/bookButton";

const rooms = [
  {
    id: "boykivsky",
    name: "Котедж Бойківський",
    description:
      "Котедж з смерекового бруса виконаний в бойківському стилі руками місцевих майстрів. Трьохповерховий будинок сімейного типу розрахований на компанію до 10 осіб.",
    priceDesc: "Ціни за добу на 10 осіб",
    images: [
      "/boykivsky1.jpg",
      "/boykivsky2.jpg",
      "/boykivsky5.jpg",
      "/boykivsky6.jpg",
      "/boykivsky3.jpg",
      "/boykivsky4.jpg",
    ],
    priceGrid: [
      { season: "Літо", price: 4000 },
      { season: "Зима", price: 5500 },
      { season: "Міжсезоння", price: 3500 },
      { season: "Високий сезон", price: 6000 },
    ],
  },
  {
    id: "hutsulsky",
    name: "Котедж Гуцульський",
    description:
      "Котедж виконаний в гуцульському стилі майстрами Гуцульщини. Двоповерховий будинок, який складається з двох окремих входів з терасами, маючи свої вітальні, забезпечить Вам комфорт і гарний настрій. Котедж розділений на дві половини, кожна має окремий вхід з терасами, вітальню в якій є: мяка частина, телевізор, супутникове телебачення, міні-кухня на другому поверсі дві сімейні кімнати. В кожній кімнаті є санвузол, душова, та свій балкон.",
    priceDesc: "Ціни за добу на 4 особи",
    images: [
      "/hutsulsky1.jpg",
      "/hutsulsky5.jpg",
      "/hutsulsky6.jpg",
      "/hutsulsky2.jpg",
      "/hutsulsky4.jpg",
      "/hutsulsky3.jpg",
    ],
    priceGrid: [
      { season: "Літо", price: 1250 },
      { season: "Зима", price: 1750 },
      { season: "Міжсезоння", price: 1000 },
      { season: "Високий сезон", price: 2000 },
    ],
  },
  {
    id: "kolyba",
    name: "Котедж Колиба",
    description:
      'Котедж "Колиба", назва від форми колиби, зібрана з бруса-кругляка, добре захищає взимку від морозів, влітку від спеки. Колиба розрахована на дві пари, або велику сім\'ю. Довкола будинку є відкрита та закрита тераси. В Колибі знаходяться: вітальня, мінікухня, санвузол з душовою та дві затишні двомісні спальні.',
    priceDesc: "Ціни за добу на 4 особи",
    images: [
      "/kolyba1.jpg",
      "/kolyba2.jpg",
      "/kolyba3.jpg",
      "/kolyba4.jpg",
      "/kolyba5.jpg",
      "/kolyba6.jpg",
    ],
    priceGrid: [
      { season: "Літо", price: 2200 },
      { season: "Зима", price: 3000 },
      { season: "Міжсезоння", price: 2000 },
      { season: "Високий сезон", price: 3500 },
    ],
  },
  {
    id: "chan",
    name: "Котедж Над Чаном",
    description:
      "Сімейні апартаменти, в яких знаходиться вітальня, мінікухня, спальня, та санвузол з душовою. Вхід з затишної тераси, овитої деревами та з іншого боку балкон з видом на річку і гори. УВАГА, КОТЕДЖ НАД ЧАНОМ ЗНАХОДИТЬСЯ НАД ЧАНОМ У ЯКОМУ МОЖУТЬ ВІДПОЧИВАТИ ВІДВІДУВАЧІ!",
    priceDesc: "Ціни за добу на сім'ю (2 дорослих + 2 дітей)",
    images: [
      "/chan1.jpg",
      "/chan2.jpg",
      "/chan3.jpg",
      "/chan4.jpg",
      "/chan5.jpg",
      "/chan6.jpg",
    ],
    priceGrid: [
      { season: "Літо", price: 1800 },
      { season: "Зима", price: 2200 },
      { season: "Міжсезоння", price: 1400 },
      { season: "Високий сезон", price: 2500 },
    ],
  },
  {
    id: "khatynka",
    name: "Котедж Хатинка",
    description:
      "Одноповерховий котедж сімейного типу з терасою, санвузлом, та міні-кухнею.",
    priceDesc: "Ціни за добу на сім'ю (2 дорослих + 2 дітей)",
    images: [
      "/khatynka1.jpg",
      "/khatynka2.jpg",
      "/khatynka3.jpg",
      "/khatynka4.jpg",
      "/khatynka5.jpg",
      "/khatynka6.jpg",
    ],
    priceGrid: [
      { season: "Літо", price: 1500 },
      { season: "Зима", price: 1750 },
      { season: "Міжсезоння", price: 1200 },
      { season: "Високий сезон", price: 2000 },
    ],
  },
  {
    id: "admin",
    name: "Адмiнбудинок",
    description:
      "Адмінбудинок містить вітальню, санвузол з душовою, та два двомісні номери в мансардному поверсі з окремим входом. УВАГА, АДМІНБУДИНОК ЗНАХОДИТЬСЯ НАД КУХНЕЮ ШИНКУ!",
    priceDesc: "Ціни за добу за обидва номери",
    images: [
      "/admin1.jpg",
      "/admin3.jpg",
      "/admin4.jpg",
      "/admin5.jpg",
      "/admin2.jpg",
      "/admin6.jpg",
    ],
    priceGrid: [
      { season: "Літо", price: 1200 },
      { season: "Зима", price: 1600 },
      { season: "Міжсезоння", price: 1000 },
      { season: "Високий сезон", price: 1800 },
    ],
  },
];

export default function RoomPage({ params }) {
  const room = rooms.find((r) => r.id === params.id);

  if (!room) {
    return (
      <div className="flex flex-col justify-center items-center h-screen text-4xl font-bold">
        <Link href="/">
          <span className="inline-block ml-4 mr-4">← Котедж не знайдено</span>
        </Link>
      </div>
    );
  }

  return (
    <main>
      <section className="mt-8">
        <h1 className="text-4xl font-bold mb-6">{room.name}</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="rounded-lg orange-transparent">
            <h2 className="text-3xl font-semibold mb-4 mt-4">Опис</h2>
            <p className="text-lg mb-8 ml-4 mr-4">{room.description}</p>

            <h2 className="text-3xl font-semibold">Ціни</h2>
            <p className="text-lg mb-4">{room.priceDesc}</p>
            <div className="grid grid-cols-2 gap-2">
              {room.priceGrid.map((price, index) => (
                <div key={index} className="p-2 rounded">
                  <span className="text-lg">{price.season} :</span>{" "}
                  {price.price} грн/доба
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {room.images.map((img, index) => (
              <Image
                key={index}
                src={img}
                alt={`${room.name} - image ${index + 2}`}
                width={600}
                height={400}
                className="rounded-lg"
              />
            ))}
          </div>
        </div>
        <BookButton />
        <Link
          href="/"
          className="back-button mt-4 flex items-center justify-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 ml-2"
            viewBox="0 0 20 20"
            fill="currentColor"
            style={{ transform: "scaleX(-1)" }}
          >
            <path
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
          На Головну Сторінку
        </Link>
      </section>
    </main>
  );
}
