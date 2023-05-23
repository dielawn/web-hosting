const hostingPackages = [
    {name: 'Basic',
    price: '$250*',
    storage: '10GB SSD Storage',
    siteQty: '1',
    description: 'Custom WP Themes',
    ssl: 'Free SSL',
    hosting: '1yr web hosting Free',
    },
    {name: 'Plus',
    price: '$350*',
    storage: '40GB SSD Storage',
    siteQty: '1',
    description: 'Custom WP Themes',
    ssl: 'Free SSL',
    hosting: '1yr web hosting Free',
    },
    {name: 'Premium',
    price: '$400*',
    storage: '100GB SSD Storage',
    siteQty: '1',
    description: 'Custom WP Themes',
    ssl: 'Free SSL',
    hosting: '1yr web hosting Free',
    },
    {name: 'Custom Site',
    price: '$500*',
    storage: '100GB SSD Storage',
    siteQty: '1',
    description: '',
    ssl: 'Free SSL',
    hosting: '1yr web hosting Free',
    },
]
const exampleSites = [
{name: 'RaylessTan',
url: 'raylesstan.com',
img: 'images/rayless-thumb.png',
mobile: 'images/rayless-mobile-thumb.jpg'
},
{name: 'Chroma Salon',
url: 'chromasalontacoma.com',
img: 'images/chroma-thumb.png',
mobile: 'images/chroma-mobile-thumb.jpg'
},
{name: 'Grocery List App',
url: 'dielawn.github.io/grocery-list-app',
img: 'images/grocery-list-thumb.png',
mobile: 'images/grocery-mobile-thumb.jpg'
}

]

const homeNavLink = document.getElementById('homeBtn');
const hostNavLink = document.getElementById('hostingBtn');
const siteNavLink = document.getElementById('sitesBtn');
const abouNavLInk = document.getElementById('aboutBtn');

const introDiv = document.getElementById('introDiv');
const hostingDiv = document.getElementById('hosting')
const siteDiv = document.getElementById('sites')
const aboutDiv = document.getElementById('about')

const createBtn = (parent, text, btnName) => {
    const parentDiv = document.getElementById(parent)
    let btn = document.createElement('button');
      parentDiv.appendChild(btn);
      btn.textContent = text;
      btn.classList.add(btnName);
      btn.id = btnName
  }
    
window.onload = () => {
    handleDisplay()
    introDiv.style.display = 'block';    
    displayPkgs(hostingPackages)
    displaySites(exampleSites)
}


createBtn('introMsg', 'Contact', 'contactBtn')
contactBtn.addEventListener('click', function() {
    window.open(`mailto:dmercill@protonmail.com`);
})

homeNavLink.addEventListener('click', () => {
    handleDisplay()
    introDiv.style.display = 'block';     
    handleNav()
    homeNavLink.classList.add('active')
})

hostNavLink.addEventListener('click', () => {
    handleDisplay()
    hostingDiv.style.display = 'flex'
    handleNav()
    hostNavLink.classList.add('active')
    
});

siteNavLink.addEventListener('click', () => {
    handleDisplay()
    siteDiv.style.display = 'flex'
    handleNav()
    siteNavLink.classList.add('active')
});

abouNavLInk.addEventListener('click', () => {
    handleDisplay()
    aboutDiv.style.display = 'block'
    handleNav()
    abouNavLInk.classList.add('active')
});
const handleDisplay = () => {
    introDiv.style.display = 'none'
    hostingDiv.style.display = 'none'
    siteDiv.style.display = 'none'
    aboutDiv.style.display = 'none'
}

const displaySites = (list) => {  
    for (let i = 0; i < list.length; i++) {
        console.log(list.length)
      let card = document.createElement('div');
      card.classList.add('demoCrd');
      siteDiv.appendChild(card);
  
      // Name
      let name = document.createElement('h2');
      name.classList.add('cardName');
      name.innerText = list[i].name;
      card.appendChild(name);
  
// URL link
let link = document.createElement('a');
link.classList.add('cardLink');
link.href = list[i].url;

// Image thumbnail
let image = document.createElement('img');
image.classList.add('cardImage');
let mobile = document.createElement('img');
mobile.classList.add('mobileImg')
if (list[i].img) {
  image.src = list[i].img;
  mobile.src = list[i].mobile;
} else {
  image.src = 'placeholder.jpg'; // Set a placeholder image if the URL is not available
}

link.appendChild(image);
link.appendChild(mobile);
card.appendChild(link);
}
};


const displayPkgs = (list) => {    
    for(let i = 0; i < list.length; i++){
        let card = document.createElement('div')        
        card.classList.add('pkgCard')
        hostingDiv.appendChild(card)
//name
    let name = document.createElement('h2')
    name.classList.add('pkgName')
    name.innerText = list[i].name
    card.appendChild(name)
//price
    let price = document.createElement('p')
    price.classList.add('price')
    price.innerText = list[i].price
    card.appendChild(price)
//storage
    let storage = document.createElement('p')
    storage.classList.add('storage')
    storage.innerText = list[i].storage
    card.appendChild(storage)
//siteQty
    let siteQty = document.createElement('p')
    siteQty.classList.add('siteQty')
    siteQty.innerText = list[i].siteQty
    card.appendChild(siteQty)
//description
let description = document.createElement('p')
description.classList.add('description')
description.innerText = list[i].description
card.appendChild(description)
//ssl
let sslCertificate = document.createElement('p')
sslCertificate.classList.add('sslCertificate')
sslCertificate.innerText = list[i].ssl
card.appendChild(sslCertificate)
// //hosting
// let hosting = document.createElement('p')
// hosting.classList.add('hosting')
// hosting.innerText = list[i].hosting
// card.appendChild(hosting)

    }
}


const handleNav = () => {  
   homeNavLink.classList.remove('active')
   hostNavLink.classList.remove('active')
   siteNavLink.classList.remove('active')
   abouNavLInk.classList.remove('active')
}
