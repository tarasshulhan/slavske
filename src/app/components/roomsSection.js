import Image from "next/image";
import Link from "next/link";

const RoomsSection = () => {
  const rooms = [
    {
      id: "boykivsky",
      name: "Котедж Бойківський",
      description:
        "Котедж з смерекового бруса виконаний в бойківському стилі руками місцевих майстрів. Трьохповерховий будинок сімейного типу розрахований на компанію до 10 осіб.",
      price: 3500,
      image: "/boykivsky0.jpg",
    },
    {
      id: "hutsulsky",
      name: "Котедж Гуцульський",
      description:
        "Котедж виконаний в гуцульському стилі майстрами гуцульщини. Двоповерховий будинок, який складається з двох окремих входів з терасами, маючи свої вітальні, забезпечить вам комфорт і гарний настрій.",
      price: 1000,
      image: "/hutsulsky0.jpg",
    },
    {
      id: "kolyba",
      name: "Котедж Колиба",
      description:
        'Котедж "Колиба", назва від форми колиби, зібрана з бруса-кругляка, добре захищає взимку від морозів, а влітку від спеки. Колиба розрахована на дві пари або велику сім\'ю. Довкола будинку є відкрита та закрита тераси.',
      price: 2000,
      image: "/kolyba0.jpg",
    },
    {
      id: "chan",
      name: "Котедж Над Чаном",
      description:
        "Сімейні апартаменти, в яких знаходиться вітальня, мінікухня, спальня та санвузол з душовою. Вхід з затишної тераси, овитої деревами, а з іншого боку балкон з видом на річку і гори.",
      price: 1400,
      image: "/chan0.jpg",
    },
    {
      id: "khatynka",
      name: "Котедж Хатинка",
      description:
        "Одноповерховий котедж сімейного типу з терасою, санвузлом, та міні-кухнею.",
      price: 1200,
      image: "/khatynka0.jpg",
    },
    {
      id: "admin",
      name: "Адмiнбудинок",
      description:
        "Адмінбудинок містить два двомісні номери в мансардному поверсі з окремим входом.",
      price: 1000,
      image: "/admin0.jpg",
    },
  ];

  return (
    <section className="mt-8">
      <h1>Наші котеджі</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {rooms.map((room, index) => (
          <div
            key={index}
            className="rounded-lg p-4 orange-transparent flex flex-col items-center justify-center"
          >
            <Image
              src={room.image}
              alt={room.name}
              width={600}
              height={400}
              className="rounded-lg mb-4"
            />
            <h3 className="text-2xl font-bold mb-2">{room.name}</h3>
            <p className="text-lg">Від {room.price} грн/доба</p>
            <Link
              href={`/rooms/${room.id}`}
              className="button mt-4 flex items-center"
            >
              Детальніше
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RoomsSection;
