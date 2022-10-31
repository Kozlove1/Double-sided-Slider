const upBtn = document.querySelector(".up-button");
const downBtn = document.querySelector(".down-button");
const colorsSlidesContainer = document.querySelector(".colorsSlidesContainer");
const photosSlidesContainer = document.querySelector(".photosSlidesContainer");
const slidesCount = photosSlidesContainer.querySelectorAll("div").length;
const slider = document.querySelector(".slider");

colorsSlidesContainer.style.top = `-${(slidesCount - 1) * 100}vh`;

let activeSlideIdx = 0;

const changeSlide = (direction) => {
  if (direction === "up") {
    activeSlideIdx++;
    if (activeSlideIdx === slidesCount) {
      activeSlideIdx = 0;
    }
  } else if (direction === "down") {
    activeSlideIdx--;
    if (activeSlideIdx < 0) {
      activeSlideIdx = slidesCount - 1;
    }
  }

  const height = slider.clientHeight;

  photosSlidesContainer.style.transform = `translateY(-${
    activeSlideIdx * height
  }px)`;
  colorsSlidesContainer.style.transform = `translateY(${
    activeSlideIdx * height
  }px)`;
};

upBtn.addEventListener("click", () => {
  changeSlide("up");
});

downBtn.addEventListener("click", () => {
  changeSlide("down");
});
