

const createBtn = (parent, text, btnName) => {
    const parentDiv = document.getElementById(parent)
    let btn = document.createElement('button');
      parentDiv.appendChild(btn);
      btn.textContent = text;
      btn.classList.add(btnName);
      btn.id = btnName
  }
let introMsg = document.getElementById('introMsg')
  createBtn('introMsg', 'Contact Today', 'contactBtn')
  contactBtn.addEventListener('click', function() {
    window.open(`mailto:dmercill@protonmail.com`);
})


const homeNavLink = document.getElementById('homeBtn');
const hostNavLink = document.getElementById('hostingBtn');
const siteNavLink = document.getElementById('sitesBtn');
const abouNavLInk = document.getElementById('aboutBtn');

const introDiv = document.getElementById('introDiv');
const constructionDiv = document.getElementById('constructionDiv');

homeNavLink.addEventListener('click', () => {
    introDiv.style.display = 'block'; 
})
hostNavLink.addEventListener('click', () => {
    underConstruction(constructionDiv, introDiv);
});

siteNavLink.addEventListener('click', () => {
    underConstruction(constructionDiv, introDiv);
});

abouNavLInk.addEventListener('click', () => {
    underConstruction(constructionDiv, introDiv);
});

const underConstruction = (parent, hideDiv) => {

    hideDiv.style.display = 'none';    

    const parentDiv = document.getElementById(parent);
    let h1Element = document.createElement('h1');
    h1Element.textContent = 'Under Construction';
    parentDiv.appendChild(h1Element);
    h1Element.style.display = 'block';
    
};
