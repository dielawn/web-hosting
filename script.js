const hostingPackages = [
    {name: 'Basic',
    price: '2.99/mo*',
    storage: '10GB SSD Storage',
    siteQty: '1',
    description: 'Custom WP Themes',
    ssl: 'Free SSL',
    },
    {name: 'Plus',
    price: '4.99/mo*',
    storage: '40GB SSD Storage',
    siteQty: '1',
    description: 'Custom WP Themes',
    ssl: 'Free SSL',
    },
    {name: 'Premium',
    price: '9.99/mo*',
    storage: '100GB SSD Storage',
    siteQty: '1',
    description: 'Custom WP Themes',
    ssl: 'Free SSL',
    },
    {name: 'Custom Site',
    price: '$500',
    storage: '100GB SSD Storage',
    siteQty: '1',
    description: '1yr web hosting Free',
    ssl: 'Free SSL',
    },
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
    introDiv.style.display = 'block'; 
    hostingDiv.style.display = 'none'
    displayPkgs(hostingPackages)
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

    }
}


const handleNav = () => {  
   homeNavLink.classList.remove('active')
   hostNavLink.classList.remove('active')
   siteNavLink.classList.remove('active')
   abouNavLInk.classList.remove('active')
}
