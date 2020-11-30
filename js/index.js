const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

//navBar
const servicesLink = document.createElement('a');
servicesLink.textContent = "Services";
document.querySelector('nav').prepend(servicesLink);


const productLink = servicesLink.nextElementSibling;
productLink.textContent = "Product";

const visionLink = productLink.nextElementSibling;
visionLink.textContent = "Vision";

const featuresLink = visionLink.nextElementSibling;
featuresLink.textContent = "Features";

const aboutLink = featuresLink.nextElementSibling;
aboutLink.textContent = "About";

const contactLink = aboutLink.nextElementSibling;
contactLink.textContent = "Contact";

//cta section
const mainTitle = document.querySelector('h1');

mainTitle.innerHTML = "DOM <br /> Is <br /> Awesome" ;

const button = document.querySelector('button');
button.textContent = "Get Started";

const imageCircle = document.getElementById('cta-img');
console.log(imageCircle);
imageCircle.src = '../img/header-img.png';

//main-content 
const mainContent = document.querySelectorAll(".text-content");
mainContent[0].querySelector("h4").textContent = "Features";
mainContent[0].querySelector("p").textContent = "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio,in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metusscelerisque quis.";

mainContent[1].querySelector("h4").textContent = "About";
mainContent[1].querySelector("p").textContent = "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

mainContent[2].querySelector("h4").textContent = "Services";
mainContent[2].querySelector("p").textContent = "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio,in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metusscelerisque quis.";

mainContent[3].querySelector("h4").textContent = "Product";
mainContent[3].querySelector("p").textContent = "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, iinterdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metusscelerisque quis.";
mainContent[4].querySelector("h4").textContent = "Vision";
mainContent[4].querySelector("p").textContent = "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, ininterdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

//main-content image
const maincontentImg = document.getElementById('middle-img');
maincontentImg.src = '../img/mid-page-accent.jpg';

//contact

const contactTitle = document.querySelector('.contact h4');
contactTitle.textContent = "Contact";
console.log(contactTitle)

const address = contactTitle.nextElementSibling;
address.innerHTML = "123 Way 456 Street <br /> Somewhere, USA";

const phoneNumber = address.nextElementSibling;
phoneNumber.textContent = "1 (888) 888-8888";

const email = phoneNumber.nextElementSibling;
email.textContent = "sales@greatidea.io";

//footer

const footer = document.querySelector('footer');
footer.textContent = "Copyright Great Idea! 2018"