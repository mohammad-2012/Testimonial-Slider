const data = [
  {
    id: 1,
    name: "Tahsin Soufizade",
    job: "FrontEnd Developer",
    img: "./assets/1-user.jpg",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab ad asperiores autem beatae dolore, ducimus eveniet illum labore maiores odio, odit officia pariatur perspiciatis provident quidem repellat sequi tempora totam vitau.",
  },
  {
    id: 2,
    name: "Mahsa Golabi",
    job: "Barber",
    img: "./assets/2-user.jpg",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab ad asperiores autem ore maiores odio, odit officia pariatur perspiciatis provident quidem repellat sequi tempora totam vitae voluptatibus! Amet cum",
  },
  {
    id: 3,
    name: "Ghasem Kargar",
    job: "Baker",
    img: "./assets/3-user.jpg",
    text: "Lorem ipsum dolor sit amet, consectetur adipe maiores odio, odit officia pariatur perspiciatis provident quidem repellat sequi tempora totam vitae voluptatibus! Amet cum dolor fugiat iusto tempore! Autem, fuga.",
  },
  {
    id: 4,
    name: "Helma Mahdavi",
    job: "BackEnd Developer",
    img: "./assets/4-user.jpg",
    text: "Lorem ipsum dolor sit amet,maiores odio, odit officia pariatur perspiciatis provident quidem repellat sequi tempora totam vitae voluptatibus! Amet cum dolor fugiat iusto tempore! Autem, fuga.",
  },
];

const commentBox = document.querySelector(".comment-info-box");
const prevButton = document.querySelector(".prev-btn");
const nextButton = document.querySelector(".next-btn");
const randomButton = document.querySelector(".random-btn");
const autoplayBtn = document.getElementById("autoplayBtn");
const progressFill = document.getElementById("progressFill");

let currentIndex = 0;
let autoplayInterval = null;
let progressInterval = null;
let isAutoplay = false;

const shuffledData = [...data].sort(() => Math.random() - 0.5);

function showComment() {
  const comment = shuffledData[currentIndex];

  const commentItem = `
    <div class="comment-img-wrapper">
      <img src="${comment.img}" alt="${comment.name}" class="comment-img" />
      <i class="fas fa-quote-right comment-img-icon"></i>
    </div>
    <div class="comment-info">
      <h2 class="comment-name">${comment.name}</h2>
      <p class="comment-job"><i class="fas fa-briefcase"></i> ${comment.job}</p>
      <p class="comment-text">${comment.text}</p>
    </div>
  `;

  commentBox.innerHTML = commentItem;
}

function setPrevComment() {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = shuffledData.length - 1;
  }
  showComment();
  resetAutoplay();
}

function setNextComment() {
  currentIndex++;
  if (currentIndex > shuffledData.length - 1) {
    currentIndex = 0;
  }
  showComment();
  resetAutoplay();
}

function setRandomComment() {
  let randomIndex;
  do {
    randomIndex = Math.floor(Math.random() * shuffledData.length);
  } while (randomIndex === currentIndex && shuffledData.length > 1);
  currentIndex = randomIndex;
  showComment();
  resetAutoplay();
}

function startAutoplay() {
  if (autoplayInterval) {
    clearInterval(autoplayInterval);
    clearInterval(progressInterval);
  }

  isAutoplay = true;
  autoplayBtn.classList.add("active");
  autoplayBtn.innerHTML = '<i class="fas fa-pause"></i> Pause';

  let progress = 0;
  progressFill.style.width = "0%";

  progressInterval = setInterval(() => {
    progress += 1;
    progressFill.style.width = progress + "%";
  }, 50);

  autoplayInterval = setInterval(() => {
    setNextComment();
    progress = 0;
    progressFill.style.width = "0%";
  }, 5000);
}

function stopAutoplay() {
  if (autoplayInterval) {
    clearInterval(autoplayInterval);
    clearInterval(progressInterval);
    autoplayInterval = null;
    progressInterval = null;
  }
  isAutoplay = false;
  autoplayBtn.classList.remove("active");
  autoplayBtn.innerHTML = '<i class="fas fa-play"></i> Auto';
  progressFill.style.width = "0%";
}

function resetAutoplay() {
  if (isAutoplay) {
    stopAutoplay();
    setTimeout(() => startAutoplay(), 300);
  }
}

function toggleAutoplay() {
  if (isAutoplay) {
    stopAutoplay();
  } else {
    startAutoplay();
  }
}

window.addEventListener("DOMContentLoaded", () => {
  showComment();
  startAutoplay();
});

prevButton.addEventListener("click", setPrevComment);
nextButton.addEventListener("click", setNextComment);
randomButton.addEventListener("click", setRandomComment);
autoplayBtn.addEventListener("click", toggleAutoplay);

document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowLeft") {
    setPrevComment();
    e.preventDefault();
  } else if (e.key === "ArrowRight") {
    setNextComment();
    e.preventDefault();
  }
});
