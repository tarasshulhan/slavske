import React from "react";
import Image from "next/image";
import Link from "next/link";
import BookButton from "./bookButton";

const Entertainment = () => {
  const entertainment = [
    {
      id: "horses",
      name: "Кінні Прогулянки",
      description:
        'Уміння сидіти на коні – це ще не кінний туризм. Кінний туризм починається тоді, коли, завітавши відпочити у котедж "4 Сезони", сівши верхи на коня, взявши в руки вуздечку, Ви маєте змогу помандрувати не манежем чи лісопарком, що оточує конюшню, а маршрутом, який заздалегідь оберете Ви самі, і який пролягатиме невідомими карпатськими просторами.',
      price: 500,
      image: "/horses0.jpg",
    },
    {
      id: "atv",
      name: "Прогулянки на Квадроциклах",
      description:
        "Котедж виконаний в гуцульському стилі майстрами гуцульщини. Двоповерховий будинок, який складається з двох окремих входів з терасами, маючи свої вітальні, забезпечить вам комфорт і гарний настрій.",
      price: 1000,
      image: "/atv0.jpg",
    },
    {
      id: "pottery",
      name: "Гончарство",
      description:
        "З-під Ваших рук вже за годину часу на гончарному крузі можуть народитись такі вироби як чашечка, тарілочка чи глечик. Або просто виліпіть собі пташечку-свищик чи баранчика. Проводимо також групові майстер-класи для дорослих та дітей.",
      price: 300,
      image: "/pottery0.jpg",
    },
    {
      id: "chan",
      name: "Чани на Травах",
      description:
        "Купання у чанах на травах було відоме в Європі з давніх давен, особливо в гірських регіонах Альп, Карпат та Піреней. Сидять люди у чані так, щоб серце було над водою. Під чаном розпалюють вогнище. Температура у чані підтримується на рівні до 40 °C (для витривалих клієнтів можна й до 45 °C). Одночасно в чані можуть перебувати до 6 осіб.",
      price: 1400,
      image: "/chan00.jpg",
    },
    {
      id: "sauna",
      name: "Сауна",
      description:
        "Оздоровча спа процедура з ароматом гірських трав. Чудове місце для душевного та тілесного відпочинку.",
      price: 1000,
      image: "/sauna0.jpg",
    },
    {
      id: "pub",
      name: "Шинок",
      description:
        "Насолоджуйтесь стравами карпатської кухні. Скуштуйте духмяний свіжий хліб прямо з печі та натуральний чай з карпатських трав.",
      price: null,
      image: "/pub0.jpg",
    },
    {
      id: "excursions",
      name: "Екскурсії",
      description:
        "Екскурсії на водоспади, гірські озера, перевали, Закарпаття та інші місця за вашим бажанням. Перевірте себе на витривалість та насолодіться краєвидами та мальовничою природою Карпат.",
      price: null,
      image: "/excursions0.jpg",
    },
    {
      id: "playground",
      name: "Дитячий Майданчик",
      description:
        "Для любителів активного відпочинку та жвавої малечі на території присутні спортивний та дитячий майданчики, стіл для настільного тенісу, та батут.",
      price: null,
      image: "/playground0.jpg",
    },
    {
      id: "apitherapy",
      name: "Сон на Вуликах",
      description:
        "Апітерапія - сон на вуликах. Знімає втому, стрес, та покращує самопочуття.",
      price: 100,
      image: "/apitherapy0.jpg",
    },
    {
      id: "hay",
      name: "Поваляйтесь на Сіні",
      description: "Поваляйтесь на сіні та відчуйте аромат різнотрав'я.",
      price: null,
      image: "/hay0.jpg",
    },
    {
      id: "hammocks",
      name: "Гамаки",
      description:
        "Розслабтесь та погойдайтесь у гамаку, споглядаючи пейзажі Славського.",
      price: null,
      image: "/hammocks0.jpg",
    },
  ];

  return (
    <section id="entertainment">
      <h1>Розваги</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {entertainment.map((item, index) => (
          <div
            key={index}
            className="rounded-lg p-4 orange-transparent flex flex-col items-center justify-center"
          >
            <Image
              src={item.image}
              alt={item.name}
              width={600}
              height={400}
              className="rounded-lg mb-4"
            />
            <h3 className="text-2xl font-bold mb-2">{item.name}</h3>
            {item.price && <p className="text-lg">Від {item.price} грн/год</p>}
            <Link
              href={`/entertainment/${item.id}`}
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
      <BookButton />
    </section>
  );
};

export default Entertainment;
