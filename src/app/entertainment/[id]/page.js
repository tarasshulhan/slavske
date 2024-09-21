import Image from "next/image";
import Link from "next/link";
import BookButton from "../../components/bookButton";

const items = [
  {
    id: "horses",
    name: "Кінні Прогулянки",
    description:
      'Уміння сидіти на коні – це ще не кінний туризм. Кінний туризм починається тоді, коли, завітавши відпочити у котедж "4 Сезони", сівши верхи на коня, взявши в руки вуздечку, Ви маєте змогу помандрувати не манежем чи лісопарком, що оточує конюшню, а маршрутом, який заздалегідь оберете Ви самі, і який пролягатиме невідомими карпатськими просторами.',
    priceDesc: "Ціна 500 грн на годину з особи",
    images: [
      "/horses2.jpg",
      "/horses3.jpg",
      "/horses4.jpg",
      "/horses5.jpg",
      "/horses6.jpg",
      "/horses7.jpg",
    ],
  },
  {
    id: "atv",
    name: "Прогулянки на Квадроциклах",
    description:
      "Квадроцикли - це прекрасний екстремальний відпочинок для людей, які знають смак життя! Лише сильна духом людина, сповнена авантюризму та жаги до нових відчуттів може сісти за кермо потужного чотириколісного агрегата і проїхати на його «спині» по гірському бездоріжжю.",
    priceDesc: "Ціна 1000 грн на годину з особи",
    images: [
      "/atv1.jpg",
      "/atv2.jpg",
      "/atv3.jpg",
      "/atv4.jpg",
      "/atv5.jpg",
      "/atv6.jpg",
    ],
  },

  {
    id: "pottery",
    name: "Гончарство",
    description:
      "З-під Ваших рук вже за годину часу на гончарному крузі можуть народитись такі вироби як чашечка, тарілочка чи глечик. Або просто виліпіть собі пташечку-свищик чи баранчика. Проводимо також групові майстер-класи для дорослих та дітей.",
    priceDesc: "Ціна 300 грн на годину з особи",
    images: [
      "/pottery1.jpg",
      "/pottery2.jpg",
      "/pottery3.jpg",
      "/pottery4.jpg",
      "/pottery5.jpg",
      "/pottery6.jpg",
    ],
  },

  {
    id: "chan",
    name: "Чани на Травах",
    description:
      "Купання у чанах на травах було відоме в Європі з давніх давен, особливо в гірських регіонах Альп, Карпат та Піреней. Сидять люди у чані так, щоб серце було над водою. Під чаном розпалюють вогнище. Температура у чані підтримується на рівні до 40 °C (для витривалих клієнтів можна й до 45 °C). Одночасно в чані можуть перебувати до 6 осіб.",
    priceDesc: "Ціна 1500 грн за дві години (до 6 осіб)",
    images: [
      "/chan01.jpg",
      "/chan02.jpg",
      "/chan03.jpg",
      "/chan04.jpg",
      "/chan05.jpg",
      "/chan06.jpg",
    ],
  },

  {
    id: "sauna",
    name: "Сауна",
    description:
      "Оздоровча спа процедура з ароматом гірських трав. Чудове місце для душевного та тілесного відпочинку.",
    priceDesc: "Ціна 1000 грн за дві години (до 6 осіб)",
    images: ["/sauna0.jpg", "/sauna1.jpg", "/sauna2.jpg", "/sauna3.jpg"],
  },

  {
    id: "pub",
    name: "Шинок",
    description:
      "Насолоджуйтесь стравами карпатської кухні. Скуштуйте духмяний свіжий хліб прямо з печі та натуральний чай з карпатських трав.",
    images: [
      "/pub1.jpg",
      "/pub2.jpg",
      "/pub3.jpg",
      "/pub4.jpg",
      "/pub5.jpg",
      "/pub6.jpg",
    ],
  },

  {
    id: "excursions",
    name: "Екскурсії",
    description:
      "Екскурсії на водоспади, гірські озера, перевали, Закарпаття та інші місця за вашим бажанням. Перевірте себе на витривалість та насолодіться краєвидами та мальовничою природою Карпат.",
    priceDesc: "Ціни уточняйте на місці",
    images: [
      "/excursions1.jpg",
      "/excursions2.jpg",
      "/excursions3.jpg",
      "/excursions4.jpg",
    ],
  },

  {
    id: "playground",
    name: "Дитячий Майданчик",
    description:
      "Для любителів активного відпочинку та жвавої малечі на території присутні спортивний та дитячий майданчики, стіл для настільного тенісу, та батут.",
    images: ["/playground0.jpg"],
  },
  {
    id: "apitherapy",
    name: "Сон на Вуликах",
    description:
      "Апітерапія - сон на вуликах. Знімає втому, стрес, та покращує самопочуття.",
    priceDesc: "Ціна 100 грн на годину з особи",
    images: ["/apitherapy0.jpg"],
  },
  {
    id: "hay",
    name: "Поваляйтесь на Сіні",
    description: "Поваляйтесь на сіні та відчуйте аромат різнотрав'я.",
    images: ["/hay0.jpg"],
  },

  {
    id: "hammocks",
    name: "Гамаки",
    description:
      "Розслабтесь та погойдайтесь у гамаку, споглядаючи пейзажі Славського.",
    images: ["/hammocks0.jpg"],
  },
];

export default function Entertainment({ params }) {
  const item = items.find((r) => r.id === params.id);

  if (!item) {
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
        <h1 className="text-4xl font-bold mb-6">{item.name}</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="rounded-lg orange-transparent">
            <h2 className="text-3xl font-semibold mb-4 mt-4">Опис</h2>
            <p className="text-lg mb-8 ml-4 mr-4">{item.description}</p>

            <h2 className="text-3xl font-semibold">Ціни</h2>
            {item.priceDesc && <p className="text-lg mb-4">{item.priceDesc}</p>}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {item.images.map((img, index) => (
              <Image
                key={index}
                src={img}
                alt={`${item.name} - image ${index + 2}`}
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
