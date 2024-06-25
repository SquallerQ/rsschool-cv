# Eugeniy Potapchuk
---
## Contacts
  - __Location:__ Warsaw, Poland
  - __Phone:__ +48 793 236 023
  - __Email:__ John199502031@gmail.com
  - __GitHub:__ [SquallerQ](https://github.com/SquallerQ)
  - __Telegram:__ @SquallerQ
---

## About Me
Hello. I'm learning web development. I create custom websites and actively study JS. Previously worked with CCTV cameras, set up remote connections and created networks.

---

## Skills
 - __Html__
 - __Css/Sass__
 - __Gulp__
 - __Git__
 - __JavaScript__

 ---
 ## Code Examples
 ```
const tabButtons = document.querySelectorAll('[data-tab]');
const contentBoxes = document.querySelectorAll('[data-tab-content]');
if (tabButtons) {
  tabButtons.forEach(function(item) {
  item.addEventListener('click', function(){
    contentBoxes.forEach(function(item) {
      item.classList.add('hidden');
    });
    const contentBox = document.querySelector('#' + this.dataset.tab);
    contentBox.classList.remove('hidden');
  })
});
} 
 ```
 ---
 ## Links to some of my projects that are not on GIT
 - [Beauty salon](https://vsalonbeauty.pl/index.html)
 - [Rabitz](https://setka-rabitsa.by/)

 ---