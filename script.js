function smoothScrolling(){
    const lenis = new Lenis()
  
    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
  }
  
  smoothScrolling();
  
  
  function formDivAppearance(){
    var formDiv = document.querySelector(".form-div");
    var form = document.querySelector("form");
    var main = document.querySelector(".main");
    var input = document.querySelector("form input");
    
    form.addEventListener("submit",function(e){
      e.preventDefault();
      var user = input.value;
      localStorage.setItem("username",user);
      formDiv.style.display = "none";
      main.style.display = "initial";
    
      page1Loading();
    });
    
    if(localStorage.length > 0){
      formDiv.style.display = "none";
      main.style.display = "initial";
    }
  }
    
  formDivAppearance();
  
  
  function page1Loading(){
    let tl = gsap.timeline();
     
    tl.from(".page1-hero img",{
      y:50,
      opacity:0,
      duration:0.6,

      stagger:0.2
    });
  
    tl.from(".page1-hero h3",{
      y:20,
      opacity:0,
      duration:0.3,
      stagger:0.2
    },"-=0.6");
  
    tl.from(".bg-img1",{
      x:-100,
      duration:0.4
    },"-=0.6");
  
    tl.from(".bg-img2",{
      x:100,
      duration:0.4
    },"-=0.6");
  }
  
  
  function loadingAnimation(){
    var loader = document.querySelector(".loader");
    var growth = document.querySelector(".loader-growth");
    var grow = 0;
    
    var loaderInterval = setInterval(function(){
      grow++;
      growth.style.width = grow + "%";
    },18);
    
    gsap.to(".loader img",{
      rotate:60,
      duration:10,
    });
    
    var tl = gsap.timeline();
    tl.to(".loader img",{
      delay:2.3,
      opacity:0
    });
    tl.to(".loader-text",{
      opacity:0
    })
    tl.to(".loader",{
      top:"-100%",
    })
    tl.to(".loader",{
      delay:1.5
    })
    
    setTimeout(function(){
      clearInterval(loaderInterval);
      page1Loading();
    },3100);
  }
    
  loadingAnimation();
  
  // localStorage.clear();
  
  
  function page2Animation(){
    var tl2 = gsap.timeline({
      scrollTrigger:{
        trigger: ".page2",
        scroller: "body",
        start: "top -5%",
        end: "top -120%",
        scrub: 2,
      },
    });
  
    tl2.to(".page2, .page3, .page1-content",{
      backgroundColor: "#388699",
    });
  
    tl2.to(".page2, .page3",{
      backgroundColor: "#D6E2E5",
    });
  
    var page2h2 = document.querySelector(".page2-content-text h2").textContent;
    var splittedText = page2h2.split(" ");
    var clutter = "";
    splittedText.forEach(function (elem){
      clutter +=`<span>${elem}</span>`;
    });
  
    document.querySelector(".page2-content-text h2").innerHTML = clutter;
  
    var tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".page2-content-text h2",
        start: "top 75%",
        end: "top 45%",
        scrub: 3
      },
    });
  
    tl.from(".page2-content-text h4",{
      opacity: 0,
      duration: 0.5,
    });
  
    tl.from(".page2-content-text h2 span",{
      opacity: 0,
      duration: 1,
      stagger: 0.1,
      y: 15
    });
  
    tl.from(".page2-content-text p",{
      opacity: 0,
      duration: 0.6
    });
  }
  
  page2Animation();
  
   
  function page3Animation(){
    gsap.to(".page3 .page3-side-content",{
      y:-300,
      scrollTrigger: {
        trigger: ".page3",
        scroller: "body",
        start: "top -10%",
        end: "top -60%",
        scrub: 2,
        pin:true,
      },
    });
  }
  
  page3Animation();
  
  
  function page4Animation(){
    var tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".page4-page5",
        scroller: "body",
        start: "top 0",
        end: "top -100%",
        scrub: 1,
        pin: true
      },
    });
    tl.to(".page4-content-inner",{
      y: "-12vh",
      duration: 1,
      delay: 0.5
    },"anim");
    tl.from(".h1two",{
      opacity: 0,
      duration: 1,
      delay: 0.5,
    },"anim");
  
    tl.to(".page4-content-inner",{
      y: "-33.5vh",
      duration: 1,
      delay: 0.5
    },"anim2");
    tl.from(".h1three",{
      opacity: 0,
      duration: 1,
      delay: 0.5
    },"anim2");
    tl.to(".certificate",{
      y: "-65vh",
      duration: 1,
      delay: 0.5
    });
  
  
    document.querySelector(".certificate-content h1").innerHTML = localStorage.getItem('username');
  
  };

  page4Animation();



function page7Animation(){
  var tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".page7",
      scroller: "body",
      start: "top 20%",
      end: "top 20%",
      scrub: 2,
    },
  });
  tl.from(".award h5",{
    y: "1vh",
    opacity: 0,
    duration: 0.5,
    delay: 0.5,
    stagger:2
  });
  tl.from(".award h2",{
    y: "2vh",
    opacity: 0,
    duration: 0.5,
    delay: 0.5,
    stagger:2
  });

  gsap.to(".first, .second, .third",{
    y: "-4vh",
    scrollTrigger: {
      trigger: ".page7",
      scroller: "body",
      start: "top -5%",
      end: "top -5%",
      scrub: 2,
    },
  });
};

page7Animation();

function page8Animation(){
  var tl = gsap.timeline({
    scrollTrigger:{
      trigger: ".page8",
      scroller: "body",
      start: "top 2%",
      end: "top -40%",
      scrub: 2,
      //markers: true
    },
  });
  tl.to(".page8 .left-right, .page9",{
    backgroundColor: "#1C4455",
  }, "-=4");
  tl.from(".page8 .left-right .left h2, .left h4, .left p",{
    y: "5vh",
    duration:0.5,
    stagger: 0.2,
    delay: 0.2,
    opacity:0,
  }, "-=4");
  tl.to(".page8 .left-right, .page9",{
    backgroundColor: "#D6E2E5",
  });
}


page8Animation();


function page9Animation(){
  var tl = gsap.timeline({
    scrollTrigger:{
      trigger: ".page9",
      scroller: "body",
      start: "top 65%",
      end: "top -30%",
      scrub: 2,
      //markers: true
    },
  });
  tl.from(".page9 .ab .a",{
    y: "10vh",
    duration: 1,
    delay: 0.5,
    stagger: 0.2,
    opacity: 0
  }, "anim");
  tl.from(".page9 .ab .b p, .cd",{
    y: "10vh",
    duration: 1,
    delay: 0.5,
    stagger: 0.2,
    opacity: 0
  }, "anim");

  tl.from(".page9 .imagecontainer .firstimage",{
    y: "10vh",
    duration:2,
    delay: 0.5,
    stagger: 0.2,
    scrub: 2,
    opacity: 0
  });
  tl.from(".page9 .imagecontainer .thirdimage",{
    y: "10vh",
    duration: 2,
    delay: 0.5,
    stagger: 0.2,
    scrub: 2,
    opacity: 0
  });
  tl.from(".page9 .imagecontainer .secondimage",{
    y: "10vh",
    duration: 2.5,
    delay: 0.5,
    stagger: 0.2,
    scrub: 1,
    opacity: 0
  });
}

page9Animation();


function page10Animation(){
  var tl = gsap.timeline({
    scrollTrigger:{
    trigger: ".page10",
    scroller: "body",
    start: "top 70%",
    end: "top -5%",
    scrub: 2,
    //markers: true
    },
  });
  tl.from(".page10 .questanscontainer",{
    y: "5vh",
    duration: 0.5,
    delay: 0.5,
    stagger: 0.2,
    opacity: 0,
  });

  var quest1 = document.querySelector(".quest1");
  var quest2 = document.querySelector(".quest2");
  var quest3 = document.querySelector(".quest3");

  var quest1Ans = document.querySelector(".question1 .answer1");
  var quest2Ans = document.querySelector(".question2 .answer2");
  var quest3Ans = document.querySelector(".question3 .answer3");

  var quest1Icon = document.querySelector(".quest1 .icon1");
  var quest2Icon = document.querySelector(".quest2 .icon2");
  var quest3Icon = document.querySelector(".quest3 .icon3");

  quest1.addEventListener("click", function(){
    setTimeout(function(){
      if(quest1Ans.style.display === "none" || quest1Ans.style.display === ""){
        quest1Ans.style.display = "initial";
        quest1Icon.innerHTML = `<i class="ri-subtract-fill"></i>`
      }
      else{
        quest1Ans.style.display = "none";
        quest1Icon.innerHTML = `<i class="ri-add-large-fill"></i>`
      }
    });
  }, 300);
  quest2.addEventListener("click", function(){
    setTimeout(function(){
      if(quest2Ans.style.display === "none" || quest2Ans.style.display === ""){
        quest2Ans.style.display = "initial";
        quest2Icon.innerHTML = `<i class="ri-subtract-fill"></i>`
      }
      else{
        quest2Ans.style.display = "none";
        quest2Icon.innerHTML = `<i class="ri-add-large-fill"></i>`
      }
    });
  }, 300);
  quest3.addEventListener("click", function(){
    setTimeout(function(){
      if(quest3Ans.style.display === "none" || quest3Ans.style.display === ""){
        quest3Ans.style.display = "initial";
        quest3Icon.innerHTML = `<i class="ri-subtract-fill"></i>`
      }
      else{
        quest3Ans.style.display = "none";
        quest3Icon.innerHTML = `<i class="ri-add-large-fill"></i>`
      }
    });
  }, 300);
}

page10Animation();