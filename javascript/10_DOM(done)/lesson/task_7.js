let listCollection = document.getElementsByClassName('social-links__item');

let socialNet = {};

for (list in listCollection) {
    socialNet[list.dataset.name] = list.href;

}



console.log(socialNet);