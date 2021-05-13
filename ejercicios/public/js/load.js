document.addEventListener("DOMContentLoaded", () => {
  loadData();
  images();
});

const loadData = () => {
  fetch("http://localhost:5000/data")
    .then((response) => response.json())
    .then((data) => {
      const container = document.querySelector("#chistes");
      const randomNumber = Math.floor(Math.random() * data.length);

      const chistes = data[randomNumber].joke;
      container.innerText = chistes;
    });
  images();
};

const urls = [
  {
    id: "https://www.beano.com/wp-content/uploads/legacy/66425_FR1-CHIC.png?resize=887%2C499&quality=76&strip=all",
  },
  {
    id: "https://www.beano.com/wp-content/uploads/legacy/62467_00-gen5.jpg?quality=76&strip=all",
  },
  {
    id: "https://www.beano.com/wp-content/uploads/legacy/50901_gen42.jpg?quality=76&strip=all",
  },
  {
    id: "https://www.beano.com/wp-content/uploads/legacy/48300_per-my-last-email.png?resize=887%2C499&quality=76&strip=all",
  },
  {
    id: "https://www.beano.com/wp-content/uploads/legacy/48298_lil-chicks.png?resize=887%2C499&quality=76&strip=all",
  },
];
const images = () => {
  const container = document.querySelector(".image");
  const randomNumber = Math.floor(Math.random() * urls.length);
  container.innerHTML = `<img src="${urls[randomNumber].id}">`;
};
