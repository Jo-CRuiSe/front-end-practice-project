const firstList = [
    "Expanding Cards",
    "Progress Steps",
    "WeChat Mini App DEMO",
    "Rotating Navigation",
    "Hidden Search Widget",
];
const groupList1 = document.querySelector('.collapse1').querySelector('.list-group');

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