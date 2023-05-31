const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const headerSearch = $('.header__search')
const searchBox = $('.header__search-box');
const searchBtn = $('.search__btn')
const searchBoxIcon = $('.header__search i');
console.log(searchBoxIcon)

searchBtn.addEventListener("click",function() {
    headerSearch.classList.toggle('active');
    searchBox.focus();
});


