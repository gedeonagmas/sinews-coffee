export const animation = () => {
  if (typeof window !== "undefined") {
    window.WOW = require("wowjs");
  }
  new WOW.WOW().init();
};
// Sticky nav
export const stickyNav = () => {
  window.addEventListener("scroll", () => {
    let offset = window.scrollY;
    const sticky = document.querySelectorAll(".header____");
    for (let i = 0; i < sticky.length; i++) {
      const stick = sticky[i];
      if (stick) {
        if (offset > 10) {
          stick.classList.add("sticky");
        } else {
          stick.classList.remove("sticky");
        }
      }
    }
  });
};

export const getPagination = (totalNumber, sort) => {
  let arr = new Array(Math.ceil(totalNumber / sort))
    .fill()
    .map((_, idx) => idx + 1);
  return arr;
};

export const scrollTopFun = () => {
  let scrollUp = document.querySelector(".go-top-button"),
    lastScrollTop = 0;

  window.addEventListener("scroll", () => {
    let st = window.scrollY;
    if (st > 110) {
      scrollUp.classList.add("active");
    } else {
      scrollUp.classList.remove("active");
    }
  });
};

export const pagination = (listClass, sort, active) => {
  let list = document.querySelectorAll(listClass);
  for (let i = 0; i < list.length; i++) {
    const element = list[i];
    if (active === 1) {
      if (i < sort) {
        element.classList.remove("d-none");
      } else {
        element.classList.add("d-none");
      }
    } else {
      if (i >= (active - 1) * sort && i < active * sort) {
        element.classList.remove("d-none");
      } else {
        element.classList.add("d-none");
      }
    }
  }
};

export const calender = () => {
  var curDate = new Date().getDate();
  var curMonth = new Date().getMonth();
  var curYear = new Date().getFullYear();
  var startDay = new Date(curYear, curMonth, 1).getDay();
  var months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  var noofdays = [
    "31",
    "29",
    "31",
    "30",
    "31",
    "30",
    "31",
    "31",
    "30",
    "31",
    "30",
    "31",
  ];
  var prevMonth = noofdays[curMonth - 1];
  if (curMonth == 11) {
    prevMonth = noofdays[0];
  } else if (curMonth == 0) {
    prevMonth = noofdays[11];
  }
  var totalDays = noofdays[curMonth];
  var counter = 0;
  var precounter = prevMonth - (startDay - 1);
  var rightbox = 6;
  var flag = true;
  if (document.querySelector(".curr-month")) {
    document.querySelector(".curr-month b").innerHTML = months[curMonth];

    if (!document.querySelector(".all-date ul li")) {
      for (var i = 0; i < 42; i++) {
        if (i >= startDay) {
          counter++;
          if (counter > totalDays) {
            counter = 1;
            flag = false;
          }
          if (flag === true) {
            document
              .querySelector(".all-date ul")
              .insertAdjacentHTML(
                "beforeend",
                '<li class="monthdate">' + counter + "</li>"
              );
          } else {
            document
              .querySelector(".all-date ul")
              .insertAdjacentHTML(
                "beforeend",
                '<li style="opacity:.8">' + counter + "</li>"
              );
          }
        } else {
          document
            .querySelector(".all-date ul")
            .insertAdjacentHTML(
              "beforeend",
              '<li style="opacity:.8">' + precounter + "</li>"
            );
          precounter++;
        }

        if (i == rightbox) {
          console.log(document.querySelectorAll(".all-date ul li")[rightbox]);
          document
            .querySelectorAll(".all-date ul li")
            [rightbox].classList.add("b-right");
          rightbox = rightbox + 7;
        }

        if (i > 34) {
          document
            .querySelectorAll(".all-date ul li")
            [i].classList.add("b-bottom");
        }

        if (curDate) {
          setTimeout(() => {
            document
              .querySelectorAll(".all-date ul li")
              [curDate + 2].classList.add("current_date");
          }, 500);
        }
      }
    }
  }
};
