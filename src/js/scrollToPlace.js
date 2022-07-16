export function scrollToPlace(){
    document.querySelector(".app").scroll({
    top: window.innerHeight,
    behavior: 'smooth'
  });
}