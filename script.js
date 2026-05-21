const dramaData = {
  cloy: ["images/c1.jpg", "images/c2.jpg", "images/c3.jpg"],

  td: ["images/td1.jpg", "images/td2.jpg", "images/td3.jpg"],
  vz: ["images/vz1.jpg", "images/vz2.jpg", "images/vz3.jpg"],

  hp: ["images/hp1.jpg", "images/hp2.jpg", "images/hp3.jpg"],

  ws: ["images/ws1.jpg", "images/ws2.jpg", "images/ws3.jpg"],
};

const dramaThemes = {
  cloy: {
    bg: "#dce8f2",
    text: "#1f3b57",
  },

  td: {
    bg: "#111111",
    text: "#f5c542",
  },

  vz: {
    bg: "#0c041f",
    text: "#f8e9d2",
  },

  hp: {
    bg: "#d8efe3",
    text: "#355c4b",
  },

  ws: {
    bg: "#f7d6e0",
    text: "#db65b1",
  },
};

const dramas = document.querySelectorAll(".drama");

const img1 = document.getElementById("img1");
const img2 = document.getElementById("img2");
const img3 = document.getElementById("img3");

dramas.forEach((drama) => {
  drama.addEventListener("mouseenter", () => {
    const images = dramaData[drama.id];

    img1.src = images[0];
    img2.src = images[1];
    img3.src = images[2];

    img1.style.opacity = "1";
    img2.style.opacity = "1";
    img3.style.opacity = "1";

    img1.style.filter = "blur(0px)";
    img2.style.filter = "blur(0px)";
    img3.style.filter = "blur(0px)";

    img1.style.transform = "translateX(0) scale(1)";
    img2.style.transform = "translateY(0) scale(1)";
    img3.style.transform = "translateX(0) scale(1)";

    const theme = dramaThemes[drama.id];
    document.body.style.backgroundColor = theme.bg;
    document.body.style.color = theme.text;
  });

  drama.addEventListener("mouseleave", () => {
    img1.style.opacity = "0";
    img2.style.opacity = "0";
    img3.style.opacity = "0";

    img1.style.filter = "blur(10px)";
    img2.style.filter = "blur(10px)";
    img3.style.filter = "blur(10px)";

    img1.style.transform = "translateX(-100px) scale(0.8)";
    img2.style.transform = "translateY(-100px) scale(0.8)";
    img3.style.transform = "translateX(100px) scale(0.8)";
    });
});
