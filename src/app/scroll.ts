import {useEffect} from "react";

export function useScroll(){
    var offsetStart = 0;
    var offsetEnd = 0;

    useEffect(()=>{
      if(typeof window !== 'undefined'){
          window.addEventListener('scroll', () => {
              document.documentElement.style.setProperty('--scroll', ( window.pageYOffset - offsetStart ) / ( document.body.offsetHeight - offsetStart - offsetEnd - window.innerHeight ));
          }, false);

          const observer = new IntersectionObserver((entries) => {
              entries.forEach(entry => {
                  if(entry.isIntersecting) {
                      // console.log("adding animate", entry)
                      var cls = entry.target.getAttribute('data-animate');
                      entry.target.classList.add(cls);
                      entry.target.classList.remove('remove-animate');
                  } else{
                      var cls = entry.target.getAttribute('data-animate');
                      entry.target.classList.remove(cls)
                      entry.target.classList.add('remove-animate');
                  }
              })
          }, {
              root: null,
              rootMargin: "0px",
              threshold: [0, 0.1, 1],
          });

          const tags = document.querySelectorAll(".animate");

          tags.forEach((tag) => {
              observer.observe(tag);
              console.log("This is intersecting", tags);

          })

          console.log("This is intersecting", tags);
      }

    }, [])

}