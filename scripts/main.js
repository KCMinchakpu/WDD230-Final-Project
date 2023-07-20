
/*JS for Last Modified date */

document.getElementById("year").innerHTML = (new Date().toLocaleString());

/* JS for Local Storage */

const drinksH3 = document.querySelector('#drinks h3')
if (drinksH3) {
    drinksH3.textContent = displayDrinks();
}
function displayDrinks() {
    if (localStorage.getItem('drinksTotal') == 0 || localStorage.getItem('drinksTotal') == null) {
        return "You did not submitted any drink yet!"
    }
    else {
        return `You have submitted ${localStorage.getItem('drinksTotal')} specialty drinks`
    }
}

/* Image Lazy Loading */

// LAZY LOAD

const imagesToLoad = document.querySelectorAll("img[data-src]");

const imgOptions = {
    threshold: 1,
    rootMargin: "0px 0px 50px 0px"
}

const loadImages = (image) => {
  image.setAttribute("src", image.getAttribute("data-src"));
  image.onload = () => {image.removeAttribute("data-src");};
};

if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((items, observer) => {
        items.forEach((item) => {
        if (item.isIntersecting) {
            loadImages(item.target);
            observer.unobserve(item.target);
        }
        });
    }, imgOptions);

    imagesToLoad.forEach((img) => {
        observer.observe(img);
    });
} 
else {
    imagesToLoad.forEach((img) => {
        loadImages(img);
    });
}