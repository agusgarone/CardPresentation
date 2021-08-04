let tl = gsap.timeline({repeat: 10, yoyo: true, delay:4.5 });
gsap.fromTo('#pc', {opacity: 0}, {opacity:1, duration :2, delay: 2})
gsap.fromTo("#html", {opacity: 0, x: -200, rotation: 360}, {opacity: 0.7, x: 0, duration: 1.9, rotation: 0, delay: 4.7});
gsap.fromTo("#css", {opacity: 0, x: -200, rotation: 360}, {opacity: 0.7, x: 0, duration: 2.1, rotation: 0, delay: 5.1});
gsap.fromTo("#angular", {opacity: 0, x: 200, rotation: 360}, {opacity: 0.7, x: 0, duration: 1.9, rotation: 0, delay: 4.85});
gsap.fromTo("#js", {opacity: 0, x: 200, rotation: 360}, {opacity: 0.7, x: 0, duration: 2,rotation:0 , delay: 5});
gsap.fromTo("#react", {opacity: 0, x: 200, rotation: 360}, {opacity: 0.7, x: 0, duration: 2.1, rotation:0, delay: 5.3});

gsap.fromTo("#izq", {opacity: 0},{opacity: .9, duration: 0.4, delay:4});
tl.fromTo('#barra', {opacity: 0},{opacity: .9, ease: "none", duration: 0.4});
gsap.fromTo("#der", {opacity: 0},{opacity: .9, duration: 0.4, delay:4.2});
//gsap.to("#barra", {y:100, duration:1 ,delay: 6});
gsap.fromTo("#nombre", {y:50, opacity:0}, {y:0, opacity:1, duration: 1, ease: "expo"});
gsap.fromTo("#titulo", {x:"20%", opacity:0}, {x:"-50%", opacity:1, duration: 1, ease:"expo", delay:1});

gsap.fromTo("#github", {y:20, opacity:0}, {y: 0, opacity:1, duration:1, delay: 7.2});
gsap.fromTo("#Linkedin", {y:20, opacity:0}, {y: 0, opacity:1, duration:1, delay: 7.3});
gsap.fromTo("#Instagram", {y:20, opacity:0}, {y: 0, opacity:1, duration:1, delay: 7.4});



