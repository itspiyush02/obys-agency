function loadinganimation(){
    
  // var h5timer = document.querySelector("#line1-part1 h4")
  // var grow =0
  // setInterval(function(){
  //     if  (grow<100){
  //       h5timer.innerHTML = grow++
  //     }
  //     else{
  //         h5timer.innerHTML = grow
  //     }
  // },33)
  var tl = gsap.timeline()
  tl.from(".line h1",{
      y:150, 
      stagger:0.25,
      delay:0.5,
      duration:0.6 ,
  })
  tl.from("#line1-part1 , .line h2",{
      opacity: 0,
      // onStart is commonly used as a callback that is triggered when an animation begins.
      onStart: function(){
          var h5timer = document.querySelector("#line1-part1 h4")
  var grow =0
  setInterval(function(){
      if  (grow<100){
        h5timer.innerHTML = grow++
      }
      else{
          h5timer.innerHTML = grow
      }
  },33)
      }
  })
  tl.to("#loader",{
      opacity:0,
      delay:3,
      duration:0.2,
  });
  
  
  tl.from( "#page1",{
      y:1600,
      opacity:0,
      delay:0.5,
      duration:0.5,
  
  
  })
  tl.to("#loader",{
      display:"none",
  })
  tl.from("#nav", {
  opacity:0
  })
  tl.from("#hero h1",{
      y:150,
      stagger:0.2,
  })
  tl.from("#hero h2",{
      y:150,
      stagger:0.2,
  })
  tl.from("#hero h3",{
      y:150,
      stagger:0.2,
  })
  }
 
    


function scroll(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}

// function loadinganimation(){
    
// // var h5timer = document.querySelector("#line1-part1 h4")
// // var grow =0
// // setInterval(function(){
// //     if  (grow<100){
// //       h5timer.innerHTML = grow++
// //     }
// //     else{
// //         h5timer.innerHTML = grow
// //     }
// // },33)
// var t1 = gsap.timeline()
// t1.from(".line h1",{
//     y:150, 
//     stagger:0.25,
//     delay:0.5,
//     duration:0.6 ,
// })
// t1.from("#line1-part1 , .line h2",{
//     opacity: 0,
//     // onStart is commonly used as a callback that is triggered when an animation begins.
//     onStart: function(){
//         var h5timer = document.querySelector("#line1-part1 h4")
// var grow =0
// setInterval(function(){
//     if  (grow<100){
//       h5timer.innerHTML = grow++
//     }
//     else{
//         h5timer.innerHTML = grow
//     }
// },33)
//     }
// })
// t1.to("#loader",{
//     opacity:0,
//     delay:3,
//     duration:0.2,
// });


// t1.from( "#page1",{
//     y:1600,
//     opacity:0,
//     delay:0.5,
//     duration:0.5,


// })
// t1.to("#loader",{
//     display:"none",
// })
// t1.from("#nav", {
// opacity:0
// })
// t1.from("#hero h1",{
//     y:150,
//     stagger:0.2,
// })
// t1.from("#hero h2",{
//     y:150,
//     stagger:0.2,
// })
// t1.from("#hero h3",{
//     y:150,
//     stagger:0.2,
// })
// }
// loadinganimation()

// function cursore(){
//   shery.mousefollower({
//     skew:true,
//     display:1,
//     ease:"cubic-bezier(0.23, 1, 0.320, 1)",
//   });
//   Shery.makeMagnet("#nav-part1 h3");
// }
  
 document.addEventListener("mousemove", function(dets){
    gsap.to("#crsr",{
       left:dets.x,
       top:dets.y,
    //    delay: 0.3,
    })
 })

 Shery.makeMagnet("#nav-part1 h3");

 var videocontainer = document.querySelector("#video-container")
 var video = document.querySelector("#video-container video")

 videocontainer.addEventListener("mouseenter", function(){
  videocontainer.addEventListener("mousemove", function(dets){
    gsap.to("#crsr",{
      opacity:0,
      display:"none",
    })
    gsap.to("#video-cursor",{
      left:dets.x -390,
      y:dets.y -200,
    })
  })
 }) 

 videocontainer.addEventListener("mouseleave", function(){
  gsap.to("#crsr",{
    opacity:1,
    display:"initial",
    delay:2,
  })
  gsap.to("#video-cursor",{
    top: "-10%",
    left: "70%",
  })
})
 var flag = 0
videocontainer.addEventListener("click", function(){
  if (flag == 0){
  video.play()
 video.style.opacity = 1
  document.querySelector("#video-cursor").innerHTML = `<i class="ri-pause-line"></i>`
   gsap.to("#video-cursor",{
    scale:0.5,
   })
   flag=1
  }else{
    video.pause()
    video.style.opacity = 0
     document.querySelector("#video-cursor").innerHTML = `<i class="ri-play-line"></i>`
      gsap.to("#video-cursor",{
       scale:1,
      })
      flag = 0
  }
})
 
 
   function gooeye(){
    Shery.imageEffect(".image-div", {
      style: 2, //Select Style
      config:{"resolutionXY":{"value":100},"distortion":{"value":true},"mode":{"value":-3},"mousemove":{"value":0},"modeA":{"value":1},"modeN":{"value":0},"speed":{"value":1,"range":[-500,500],"rangep":[-10,10]},"frequency":{"value":50,"range":[-800,800],"rangep":[-50,50]},"angle":{"value":0.5,"range":[0,3.141592653589793]},"waveFactor":{"value":1.4,"range":[-3,3]},"color":{"value":10212607},"pixelStrength":{"value":3,"range":[-20,100],"rangep":[-20,20]},"quality":{"value":5,"range":[0,10]},"contrast":{"value":1,"range":[-25,25]},"brightness":{"value":1,"range":[-1,25]},"colorExposer":{"value":0.18,"range":[-5,5]},"strength":{"value":0.2,"range":[-40,40],"rangep":[-5,5]},"exposer":{"value":8,"range":[-100,100]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.7272749932567818},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.31,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":0},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.46,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.35,"range":[0,2]},"noise_scale":{"value":8.4,"range":[0,100]}},
      gooey:true
    });
    
   }
 
  loadinganimation()
  scroll()
  gooeye()
  // cursore()



