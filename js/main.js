let observer = new IntersectionObserver((e)=>{
    e.forEach((texts)=>{
        if (texts.isIntersecting){
            texts.target.style.opacity = 1;
        } else {
            texts.target.style = "";
        }
    })
})

let h1 = document.querySelectorAll('h1')
let a = document.querySelectorAll('a')
let button = document.querySelectorAll('button')
let div = document.querySelectorAll('div')
observer.observe(h1[0])
observer.observe(h1[1])
observer.observe(h1[2])
observer.observe(a[3])
observer.observe(a[4])
observer.observe(button[0])
observer.observe(div[8])
observer.observe(div[9])
observer.observe(div[10])