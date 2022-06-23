import "./DefaultPosts.css";

import {
  randomLikes,
  randomReplies,
  randomShares,
} from "../Pages/Credit/UI/Input-utils";
import agarishev from "./img/agarishev.jpg";
import biden from "./img/biden.jpg";
import cross from "./img/cross.jpg";
import delvon from "./img/Delvon.jpg";
import elon from "./img/elon.png";
import jackson from "./img/jackson.jpg";
import putin from "./img/putin.jpg";
import scott from "./img/scott.jpg";
import twitter from "./img/twitter.png";
import bogdan from "./img/bogdan.jpg";
import drake from "./img/drake.jpg";
import haisenberg from "./img/haisenberg.jpg";
import kasparov from "./img/kasparov.jpg";
import kobb from "./img/kobb.jpg";
import lennon from "./img/lennon.jpg";
import mccartney from "./img/mccartney.jpg";
import mcgregor from "./img/mcGregor.jpg";
import react from "./img/react.jpg";
import rockstar from "./img/rockstar.png";
import twitterOwner from "./img/twitterOwner.jpg";
import barsick from "./img/barsick.jpg";

import { getTime, getDayAndMonth } from "./dateUtils";

const defaultPosts = [
  {
    id: 3452342,
    picture: twitterOwner,
    author: "Jack Dorsey",
    title:
      "Всем привет,я понял что хочу двигаться в другом направлении. Встречайте, мой новый проект - Cross Posts. Техническим дериктором назначен - Богдан Безуглый.",
    date: getDayAndMonth(),
    time: getTime(),

    likes: randomLikes(),
    replies: randomReplies(),
    shares: randomShares(),
  },
  {
    id: 234132414,
    picture: elon,
    author: "Elon Musk",
    title:
      "Только что завершилась моя сделка по полному выкупу прав на язык программирования 1С. Планируем использовать его чуткий синтаксис в новых моделях автопилотов Tesla!",
    date: getDayAndMonth(),
    time: getTime(),

    likes: randomLikes(),
    replies: randomReplies(),
    shares: randomShares(),
  },

  {
    id: 12343124,
    picture: scott,
    author: "Michael Scott",
    title: "The city...",
    date: getDayAndMonth(),
    time: getTime(),

    likes: randomLikes(),
    replies: randomReplies(),
    shares: randomShares(),
  },

  {
    id: 23412341241,
    picture: twitter,
    author: "Twitter",
    title: "Ребята, вы реально красавцы, увидимся в суде!)",
    date: getDayAndMonth(),
    time: getTime(),

    likes: randomLikes(),
    replies: randomReplies(),
    shares: randomShares(),
  },

  {
    id: 23423432,
    picture: jackson,
    author: "Michael Jackson",
    title:
      "Привет это Майкл Джексон. На самом деле я не умер, скиньте  по 600руб на сберОнлайн по номеру телефона, чтобы я мог вернуться в Америку и продолжить выступать.",
    date: getDayAndMonth(),
    time: getTime(),

    likes: randomLikes(),
    replies: randomReplies(),
    shares: randomShares(),
  },

  {
    id: 67867876,
    picture: biden,
    author: "Joe Biden",
    title: "Кто я",
    date: getDayAndMonth(),
    time: getTime(),

    likes: randomLikes(),
    replies: randomReplies(),
    shares: randomShares(),
  },
  {
    id: 87876,
    picture: agarishev,
    author: "Jamez Deann",
    title: "Еду в Питер, я приеду в Питер, и...",
    date: getDayAndMonth(),
    time: getTime(),

    likes: randomLikes(),
    replies: randomReplies(),
    shares: randomShares(),
  },

  {
    id: 67585655,
    picture: cross,
    author: "Кросс Нации",
    title: "Скоро сами все услышите...",
    date: getDayAndMonth(),
    time: getTime(),
    likes: randomLikes(),
    replies: randomReplies(),
    shares: randomShares(),
  },

  {
    id: 675856552,
    picture: bogdan,
    author: "Богдан Безуглый",
    title: "Отличный старт, продолжаем в том же духе!",
    date: getDayAndMonth(),
    time: getTime(),
    likes: randomLikes(),
    replies: randomReplies(),
    shares: randomShares(),
  },

  {
    id: 675856553,
    picture: drake,
    author: "Drake",
    title: `Хочу анонсировать свой новый альбом здесь! "Девочки, любимые, как же я вас люблю..." - скоро на всех площадках`,
    date: getDayAndMonth(),
    time: getTime(),
    likes: randomLikes(),
    replies: randomReplies(),
    shares: randomShares(),
  },

  {
    id: 675856555,
    picture: haisenberg,
    author: "Walter White",
    title: "купить футболку хайзенберг екатеринбург",
    date: getDayAndMonth(),
    time: getTime(),
    likes: randomLikes(),
    replies: randomReplies(),
    shares: randomShares(),
  },

  {
    id: 675856556,
    picture: kasparov,
    author: "Гарри Каспаров",
    title: "Кто хочет в шахматы - добавляйтесь.",
    date: getDayAndMonth(),
    time: getTime(),
    likes: randomLikes(),
    replies: randomReplies(),
    shares: randomShares(),
  },

  {
    id: 675856557,
    picture: kobb,
    author: "Dominic Cobb",
    title: "Всем привет, я только проснулся",
    date: getDayAndMonth(),
    time: getTime(),
    likes: randomLikes(),
    replies: randomReplies(),
    shares: randomShares(),
  },

  {
    id: 6758565523,
    picture: lennon,
    author: "John Lennon",
    title: "Peace!",
    date: getDayAndMonth(),
    time: getTime(),
    likes: randomLikes(),
    replies: randomReplies(),
    shares: randomShares(),
  },

  {
    id: 6712585655,
    picture: barsick,
    author: "Барсик",
    title: "Поздравляю своего друга с релизом!",
    date: getDayAndMonth(),
    time: getTime(),
    likes: randomLikes(),
    replies: randomReplies(),
    shares: randomShares(),
  },

  {
    id: 65532215,
    picture: rockstar,
    author: "Rockstar Games",
    title: "Открываем бета-тест GTA VI для пользователей Cross Post!",
    date: getDayAndMonth(),
    time: getTime(),
    likes: randomLikes(),
    replies: randomReplies(),
    shares: randomShares(),
  },
  {
    id: 6758565555,
    picture: mccartney,
    author: "Paul McCartney",
    title: "Как же было круто в Битлз!",
    date: getDayAndMonth(),
    time: getTime(),
    likes: randomLikes(),
    replies: randomReplies(),
    shares: randomShares(),
  },

  {
    id: 675825655,
    picture: mcgregor,
    author: "Conor McGregor",
    title:
      "Посмотрел зарплаты Senior Frontend Developer на hh.ru... Надо было кодить.",
    date: getDayAndMonth(),
    time: getTime(),
    likes: randomLikes(),
    replies: randomReplies(),
    shares: randomShares(),
  },

  {
    id: 6734585655,
    picture: react,
    author: "React",
    title: "Иногда понимаешь, что ради таких проектов и стоит жить дальше!",
    date: getDayAndMonth(),
    time: getTime(),
    likes: randomLikes(),
    replies: randomReplies(),
    shares: randomShares(),
  },
];

export default defaultPosts;
