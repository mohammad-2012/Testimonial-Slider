const data = [
  {
    id: 1,
    name: "tahsin soufizade",
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
    name: "Helma mahdavi",
    job: "BackEnd Developer",
    img: "./assets/4-user.jpg",
    text: "Lorem ipsum dolor sit amet,maiores odio, odit officia pariatur perspiciatis provident quidem repellat sequi tempora totam vitae voluptatibus! Amet cum dolor fugiat iusto tempore! Autem, fuga.",
  },
];

//برای اینکه وقتی رفرش می کنیم هر دفعه یکی دیگه بیاد و تکراری نیاد
const shuffledData = data.sort(() => Math.random() - 0.5);
//ELEMENTS
const commentBox = document.querySelector(".comment-info-box");
const prevButton = document.querySelector(".prev-btn");
const nextButton = document.querySelector(".next-btn");
const randomButton = document.querySelector(".random-btn");

window.addEventListener("DOMContentLoaded", showComment); //دام کانتنت لودد زمانی اجرا می شه که تمام مقادیر صفحه ما داکیومنت ما  کاملا اپلود شده باشه  و بعد اون موقع میاد اون فانکش را اجرا می کنه
//دکمه های برگشت و بعدی
prevButton.addEventListener("click", setPrevComment);
nextButton.addEventListener("click", setNextComment);
randomButton.addEventListener("click", setRandomComment);
//تمام دکمه های رفتتت وو و و

let currentIndex = 0;
function showComment() {
  const comment = shuffledData[currentIndex];

  const commentItem = `
      <div class="comment-img-wrapper">
    <img src=${comment.img} alt=${comment.name} class="comment-img" />
    <i class="fa fa-heart comment-img-icon"></i>
  </div>

  <div class="comment-info">
    <h2 class="comment-name">${comment.name}</h2>
    <p class="comment-job">${comment.job}</p>
    <p class="comment-text">
    ${comment.text}
    </p>
  </div>`;
  commentBox.innerHTML = commentItem;
}
// showComment()  //برای اینکه کد هایمان اصولی تر باشه این را کامنت می کنیم وبالا اون کد را باز می کنیم توضیح اون کد بالا هست

//BACK TO PREVIOUSE COMMENT
function setPrevComment() {
  //در اینجا نباید از ارو فانکشن استفاده کنیم چون بالا توی ادد اونت لیستنر ووو خودتن گا کن
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = shuffledData.length - 1;
  }
  showComment(); //یکبار دیگه میاییم این فانکشن را فراخوانی می کنیم چون که ما مقدارش را اپدیت کردیم
}

//GO TO NEXT BUTTON COMMENT
function setNextComment() {
  //در اینجا نباید از ارو فانکشن استفاده کنیم چون بالا توی ادد اونت لیستنر ووو خودتن گا کن
  currentIndex++;
  if (
    currentIndex >
    shuffledData.length - 1
    // ساده تر می گه که از اون کارنت ایندکس ما بیشتر شد از طول ارای ما بیاد برگرده به خونه اول و دوباره از صفر شروع بشه
    /*ما اگر اینجا نگیم که اگر این را نگیم وقتی ما بریم جلو و یکی یکی بریم دیگه می زنه بیرون و می گه که شما بیشتر از 3 تا نداری برای همین ایم را می گیم که بیاد برگرده دوباره به خونه اول مقدارش ضفر بشه */
  ) {
    currentIndex = 0;
  }
  showComment(); //یکبار دیگه میاییم این فانکشن را فراخوانی می کنیم چون که ما مقدارش را اپدیت کردیم
}

//SET RANDOM COMMENT
function setRandomComment() {
  currentIndex = Math.floor(Math.random() * shuffledData.length);
  showComment();
}
