gsap.registerPlugin(ScrollTrigger);

const animations = () => {
  const heroPage = () => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".content2",
        start: "top bottom",
        end: "+=50",
        scrub: true,
      },
    });

    const text1 = document.querySelectorAll(".text1");
    console.log(window.scrollY);

    tl.to(text1, {
      opacity: 1,
      y: 0,
      stagger: 0.5,
    });

    gsap.to(".textRotate", {
      rotate: 360,
      scrollTrigger: {
        trigger: ".content2",
        start: "top 94%",
        end: "+=100",
        scrub: true,
      },
    });

    let tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".content2",
        start: "top 65%",
        end: "+=250",
        scrub: true,
      },
    });
    const textArray = Array.from(text1);

    // Reverse the array
    const reversedArray = textArray.reverse();

    tl2.to(reversedArray, {
      y: -500,
      opacity: 0,
      stagger: 0.5,
    });

    gsap.to(".aeroplaneImg", {
      x: 1400,
      scrollTrigger: {
        trigger: ".content2",
        start: "top bottom",
        end: "+=3000",
        scrub: true,
      },
    });
  };
  heroPage();

  const tribecaPage = () => {
    gsap.to(".compass", {
      opacity: 1,
      scrollTrigger: {
        trigger: ".content2",
        start: "top 65%",
        end: "+=450",
        scrub: true,
      },
    });

    gsap.to(".compassImage", {
      y: 475,
      scale: 0.5,
      scrollTrigger: {
        trigger: ".cloud2",
        start: "bottom 80%",
        end: "+=450",
        scrub: true,
      },
    });
    gsap.to(".compassImage", {
      x: -500,
      scrollTrigger: {
        trigger: ".cloud2",
        start: "bottom -20%",
        end: "+=350",
        scrub: true,
      },
    });

    const text2 = document.querySelectorAll(".text2");
    let tl3 = gsap.timeline({
      scrollTrigger: {
        trigger: ".content2",
        start: "top 35%",
        end: "+=250",
        scrub: true,
      },
    });

    tl3.to(text2, {
      y: 0,
      opacity: 1,
      stagger: 0.5,
    });

    // const text3 = document.querySelectorAll(".text2");
    gsap.to(".textTribeca", {
      y: -468,
      x: -130,
      scale: 0.4,
      stagger: 0.5,
      scrollTrigger: {
        trigger: ".cloud2",
        start: "bottom 80%",
        end: "+=150",
        scrub: true,
      },
    });

    gsap.to(".bg-circle", {
      opacity: 1,
      scrollTrigger: {
        trigger: ".cloud2",
        start: "top center",
        end: "+=300",
        scrub: true,
      },
    });
    let tlCountry = gsap.timeline({
      scrollTrigger: {
        trigger: ".cloud2",
        start: "top 10%",
        end: "+=750",
        scrub: true,
      },
    });
    tlCountry.to(".circleCountry", {
      rotate: 360,
    });
    tlCountry.to(".circleCountry", {
      x: -400,
    });
  };
  tribecaPage();

  const sticky = () => {
    window.onscroll = function () {
      if (window.scrollY > 58) {
        document.querySelector(".hide-text1").classList.add("sticky20");
        document.querySelector(".hide-text2").classList.add("sticky24");
        document.querySelector(".hide-text3").classList.add("sticky28");
        document.querySelector(".compassImage").classList.add("sticky35");
      }
      if (window.scrollY > 160) {
        document.querySelector(".textRotate").style.padding = "0px";
        document.querySelector(".textRotate").style.transition = "padding 1s";
      } else {
        document.querySelector(".textRotate").style.padding = "0 1rem";
      }
      if (window.scrollY > 760) {
        document.querySelector(".textTribeca").classList.add("sticky10");
      }
      if (window.scrollY > 1624) {
        document.querySelector(".circleCountry").classList.add("stickyCountry");
      }
    };
  };
  sticky();
};
animations();
