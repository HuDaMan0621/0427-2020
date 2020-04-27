//header

const addresses = [
    "https://google.com",
    "https://bing.com",
    "https://duckduckgo.com",
    "https://google.com",
    "https://bing.com",
    "https://duckduckgo.com"

];

// const navLinks = document.createElement('ul');
// const navContainer = document.querySelector('.js-link-container');

// navContainer.appendChild(navLinks);

// for (let index = 0; index < addresses.length; index++) {
//     const element = addresses[index];
//     const aTag = document.createElement('a');
//     aTag.textContent = element;
//     aTag.setAttribute ('href', element)
//     const listItem = document.createElement('li');
//     listItem.appendChild(aTag); //put the a inside the listItem
//     navLinks.appendChild(listItem)
// }





const header = querySelector('.header');
const headerInfo = document.createElement('a');
// const ladyBug = document.createElement('a');
// const about = document.createElement('a');
// const program = document.createElement('a');
// const community = document.createElement('a');
// const events = document.createElement('a');
// const getStarted = document.createElement('a');
header.appendChild(headerInfo);

for (let index = 0; index < addresses.length; index++) {
    const element = addresses[index];
    const aTag = document.createElement('a');
    aTag.textContent = element; 
    aTag.setAttribute('href', element);
    headerInfo.appendChild(aTag);

}
