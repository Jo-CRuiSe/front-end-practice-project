const firstList = [
    "Expanding Cards",
    "Progress Steps",
    "Rotating Navigation",
    "Hidden Search Widget",
    "Blurry Loading",
    "Scroll Animation",
    "Split Landing Page",
    "Form Wave",
];

const secondList = [
    "WeChat Mini App DEMO",
];

const groupList1 = document.querySelector('.collapse1').querySelector('.list-group');
const groupList2 = document.querySelector('.collapse2').querySelector('.list-group');


firstList.forEach(item => {
    let itemName = item.toLowerCase().replace(/ /g, '-');
    let itemList = document.createElement('li');
    let listIcon = document.createElement('i');
    let listLink = document.createElement('a');
    itemList.classList.add('list-group-item');
    listIcon.classList.add('fa', 'far', 'fa-file');
    listLink.classList.add('mx-2');
    listLink.target = '_blank';
    listLink.href = '/front-end-practice-project/'+ itemName; 
    listLink.innerText = item;
    itemList.append(listIcon, listLink);
    groupList1.appendChild(itemList);
})

secondList.forEach(item => {
    let itemName = item.toLowerCase().replace(/ /g, '-');
    let itemList = document.createElement('li');
    let listIcon = document.createElement('i');
    let listLink = document.createElement('a');
    itemList.classList.add('list-group-item');
    listIcon.classList.add('fa', 'far', 'fa-file');
    listLink.classList.add('mx-2');
    listLink.target = '_blank';
    listLink.href = '/front-end-practice-project/'+ itemName; 
    listLink.innerText = item;
    itemList.append(listIcon, listLink);
    groupList2.appendChild(itemList);
})


document.querySelectorAll('.collapse1').forEach(collapse => {
    document.querySelectorAll('.catogry-trigger').forEach(trigger => {
        trigger.addEventListener('click', (e) => {
            collapse.classList.toggle('show');
        })
    })

    // collapse.classList.toggle('show');
});

window.addEventListener('scroll', () => {
    const sticky = document.querySelector(".nav-bar").getBoundingClientRect().top + 20;
    if(window.scrollY > sticky) {
        document.querySelector(".nav-bar").classList.add("full");
    } else {
        document.querySelector(".nav-bar").classList.remove("full");
    }
});