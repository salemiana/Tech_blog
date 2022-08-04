const { Post } = require("../models");

const postdata = [
  {
    title: "Nulla tellus.",
    content: "https://lycos.com/natoque/penatibus/et.html",
    user_id: 1,
  },
  {
    title:
      "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.",
    content: "https://gmpg.org/lorem.jpg",
    user_id: 3,
  },
  {
    title:
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.",
    content: "https://paginegialle.it/mattis/egestas.jsp",
    user_id: 2,
  },
  {
    title: "In hac habitasse platea dictumst.",
    content: "http://wikia.com/turpis/eget.jpg",
    user_id: 6,
  },
  {
    title: "Etiam justo.",
    content: "https://shareasale.com/quis.json",
    user_id: 5,
  },
  {
    title: "Nulla ut erat id mauris vulputate elementum.",
    content:
      "http://java.com/diam/neque/vestibulum/eget/vulputate/ut/ultrices.png",
    user_id: 6,
  },
  {
    title:
      "Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
    content: "https://java.com/at/nibh/in.png",
    user_id: 7,
  },
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
