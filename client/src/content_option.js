const BASE_URL = "https://api.xhunter.in";
// use in dev mode only
// const BASE_URL = "http://localhost:3006/";

const logotext = "XHUNTER";
const meta = {
  title: "XHunter",
  description:
    "I’m hardcore gamer with a mission of recording gameplays of every Nintendo switch game possible",
};

const introdata = {
  title: "The name is XHunter",
  animated: {
    first: "I am a hardcore gamer",
    second: "I love to play games",
    third: "I code mobile & web apps",
  },
  description:
    "Here on a mission to record gameplays of every Nintendo switch game possible",
  //   your_img_url: "http://assets/images/profile.png",
};

const dataabout = {
  title: "About",
  aboutme:
    " I'm Kartikey Kushwah, rocking the CEO hat during the day, and at night, you'll find me owning the gaming realm. Balancing bytes and battles, life's a thrilling ride! 🌐🎮",
};
const worktimeline = [
  {
    jobtitle: "Started Switch Gaming",
    where: "",
    date: "2022",
  },
  {
    jobtitle: "Started PC Gaming",
    where: "",
    date: "2010",
  },
  {
    jobtitle: "Started Playstation Gaming",
    where: "",
    date: "2008",
  },
  {
    jobtitle: "Started Video Gaming",
    where: "",
    date: "2004",
  },
];

const skills = [
  {
    name: "Gaming",
    value: 90,
  },
  {
    name: "Development",
    value: 85,
  },
  {
    name: "Chai",
    value: 80,
  },
  {
    name: "Procrastination",
    value: 60,
  },
  {
    name: "Sleeping",
    value: 85,
  },
];

const services = [
  {
    title: "Mutiplayer Gaming",
    description:
      "Join the excitement, challenge me to a game, and let's make some gaming memories together!",
  },
  {
    title: "Web Apps",
    description:
      "Versatile online companions, delivering dynamic content and services through browsers, transcending device boundaries for accessible and efficient user interactions.",
  },
  {
    title: "Mobile Apps",
    description:
      "Pocket-sized powerhouses, bringing convenience to your fingertips with seamless functionality and personalized experiences.",
  },
];

const dataportfolio = [
  {
    img: "https://assets1.ignimgs.com/2017/09/01/super-mario-odyssey-button-fin-1504225715322.jpg?width=300&crop=1%3A1%2Csmart&auto=webp",
    description: "Embark on a cap-tivating, globe-trotting adventure",
    link: "https://www.youtube.com/watch?v=wGQHQc_3ycE",
  },
  {
    img: "https://upload.wikimedia.org/wikipedia/en/e/e7/Kirby_and_The_Forgotten_Land_Icon.jpg",
    description:
      "Join Kirby in an unforgettable journey through a mysterious world in a 3D platforming adventure",
    link: "https://www.youtube.com/watch?v=H3LAkr0ANgw",
  },
  {
    img: "https://upload.wikimedia.org/wikipedia/en/a/aa/It_Takes_Two_cover_art.png",
    description: "A genre-bending platform adventure created purely for co-op",
    link: "https://www.youtube.com/watch?v=mo6Ynbt90yM",
  },
  {
    img: "https://upload.wikimedia.org/wikipedia/en/f/fb/DKC5_box_art.jpg",
    description:
      "Traverse islands packed with platforming perfection and nonstop action",
    link: "https://www.youtube.com/watch?v=1psp2t0Zi9o",
  },
  {
    img: "https://upload.wikimedia.org/wikipedia/en/d/de/Crash_Bandicoot_N._Sane_Trilogy_cover_art.jpg",
    description:
      "Spin, jump, wump and repeat as you take on the epic challenges",
    link: "https://www.youtube.com/watch?v=Y53JPo_2zLI",
  },
  {
    img: "https://upload.wikimedia.org/wikipedia/en/f/f7/Metroid_Dread_Banner.png",
    description:
      "Parkour over obstacles, slide through tight spaces, counter enemies, and battle your way through the planet.",
    link: "https://www.youtube.com/watch?v=AOvefm5U250",
  },

  {
    img: "https://upload.wikimedia.org/wikipedia/en/e/eb/Cuphead_%28artwork%29.png",
    description:
      "Experience the classic run and gun action with a pal in 2-player local co-op",
    link: "https://www.youtube.com/watch?v=XwF67xkNSn8",
  },
  {
    img: "https://upload.wikimedia.org/wikipedia/en/f/f0/Unravel_2_cover_art.jpg",
    description:
      "Begin your adventure in a cold and imposing land, then watch your surroundings blossom with new life as you chase the spark of adventure",
    link: "https://www.youtube.com/watch?v=JOIn34q_oT8",
  },
  {
    img: "https://upload.wikimedia.org/wikipedia/en/3/38/Luigi%27s_Mansion_3.jpg",
    description:
      "Luigi's invited to the towering Last Resort hotel, but when Mario and friends go missing, our green-clad hero will have to conquer his fears to save them.",
    link: "https://www.youtube.com/watch?v=RSGgCfbYrg0",
  },
  {
    img: "https://upload.wikimedia.org/wikipedia/en/c/c6/The_Legend_of_Zelda_Breath_of_the_Wild.jpg",
    description:
      "Step into a world of discovery, exploration and adventure in the legend of Zelda:",
    link: "https://www.youtube.com/watch?v=zw47_q9wbBE",
  },
  {
    img: "https://upload.wikimedia.org/wikipedia/commons/0/0f/Celeste_box_art_full.png",
    description:
      "Brave hundreds of hand-crafted challenges in this super-tight platformer, as you help Madeline survive her journey to the top of Celeste Mountain!",
    link: "https://www.youtube.com/watch?v=iofYDsA2yqg",
  },
  {
    img: "https://upload.wikimedia.org/wikipedia/en/b/b1/Bayonetta_2_box_artwork.png",
    description:
      "Wield wild weapons and execute deadly moves—like the powerful Umbran Climax—to take out angels and demons",
    link: "https://www.youtube.com/watch?v=-nzBjXXcn7o",
  },
];

const contactConfig = {
  YOUR_EMAIL: "kartikmysterio@gmail.com",
  YOUR_FONE: "+91 7819800649",
  description:
    "Got game-related questions or just want to chat? I'm all ears! Let's dive into the gaming universe and amp up your experience. Your thoughts and stories are not just welcome; they're encouraged. Game on!",
  YOUR_SERVICE_ID: "service_9fmkj1f",
  YOUR_TEMPLATE_ID: "template_id0mkns",
  YOUR_USER_ID: "YcWoBHvA9VenxNUnv",
};

const socialprofils = {
  github: "https://github.com/1stdevfriend",
  linkedin: "https://in.linkedin.com/in/kartikey-kushwah-57283614b",
  instagram: "https://instagram.com/1stdevfriend",
};

const donationPageData = {
  title: "Funding",
  heading: "Donate for Device Elegato HD60 S",
  description:
    " This device can help me capture premium quality game records.Throwing in your support can seriously level up my game recordings. Big or small, your contribution means the world to me!",
};

const productList = [
  {
    productName: "Gaming Console",
    productImage:
      "https://i.pcmag.com/imagery/reviews/04dRlD6i7f8OrAtbWbNfZoB-3.fit_scale.size_1028x578.v1569482971.jpg",
  },
  {
    productName: "Gaming PC",
    productImage:
      "https://imgs.search.brave.com/j_nGr15TooFsRPylodJCLwP3_gtpofUHfpDwqS4nQUw/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvZmVhdHVy/ZWQvZ2FtaW5nLWJh/Y2tncm91bmQtazA4/aW5jeTNzemlmdzQy/ZS5qcGc",
  },
  {
    productName: "Gaming Laptop",
    productImage:
      "https://imgs.search.brave.com/Jd-gXripl5i2FgEqJ7_k0_qXGFyegdGgFdC6dfFm5Q0/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvZmVhdHVy/ZWQvZ2FtaW5nLXBp/Y3R1cmVzLW12c3ox/a2toMXhkbHNmNjgu/anBn",
  },
  {
    productName: "Gaming Mouse",
    productImage:
      "https://imgs.search.brave.com/yk2lYjhLmMvgHMn7QglHekURFTh7P2OL-Csg5KCJh3Y/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by8z/ZC13b3Jrc3RhdGlv/bi13aXRoLWNvbXB1/dGVyLXBlcmlwaGVy/YWwtZGV2aWNlc18y/My0yMTUwNzE0MjAx/LmpwZz9zaXplPTYy/NiZleHQ9anBn",
  },
  {
    productName: "Gaming Keyboard",
    productImage:
      "https://i.pcmag.com/imagery/reviews/04dRlD6i7f8OrAtbWbNfZoB-3.fit_scale.size_1028x578.v1569482971.jpg",
  },
  {
    productName: "Gaming Headset",
    productImage:
      "https://imgs.search.brave.com/j_nGr15TooFsRPylodJCLwP3_gtpofUHfpDwqS4nQUw/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvZmVhdHVy/ZWQvZ2FtaW5nLWJh/Y2tncm91bmQtazA4/aW5jeTNzemlmdzQy/ZS5qcGc",
  },
  {
    productName: "Gaming Monitor",
    productImage:
      "https://imgs.search.brave.com/yk2lYjhLmMvgHMn7QglHekURFTh7P2OL-Csg5KCJh3Y/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by8z/ZC13b3Jrc3RhdGlv/bi13aXRoLWNvbXB1/dGVyLXBlcmlwaGVy/YWwtZGV2aWNlc18y/My0yMTUwNzE0MjAx/LmpwZz9zaXplPTYy/NiZleHQ9anBn",
  },
  {
    productName: "Gaming Controller",
    productImage:
      "https://imgs.search.brave.com/j_nGr15TooFsRPylodJCLwP3_gtpofUHfpDwqS4nQUw/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvZmVhdHVy/ZWQvZ2FtaW5nLWJh/Y2tncm91bmQtazA4/aW5jeTNzemlmdzQy/ZS5qcGc",
  },
  {
    productName: "VR Headset",
    productImage:
      "https://i.pcmag.com/imagery/reviews/04dRlD6i7f8OrAtbWbNfZoB-3.fit_scale.size_1028x578.v1569482971.jpg",
  },
  {
    productName: "Gaming Capture Card",
    productImage:
      "https://imgs.search.brave.com/yk2lYjhLmMvgHMn7QglHekURFTh7P2OL-Csg5KCJh3Y/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by8z/ZC13b3Jrc3RhdGlv/bi13aXRoLWNvbXB1/dGVyLXBlcmlwaGVy/YWwtZGV2aWNlc18y/My0yMTUwNzE0MjAx/LmpwZz9zaXplPTYy/NiZleHQ9anBn",
  },
];

export {
  meta,
  dataabout,
  dataportfolio,
  worktimeline,
  skills,
  services,
  introdata,
  contactConfig,
  socialprofils,
  logotext,
  donationPageData,
  BASE_URL,
  productList,
};
