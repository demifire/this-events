//Secret Menu Challenge
//Add event listeners to the following:


/*1) to the navmenu items (Home, Location, Blog) that will show and hide the contents for that specific navmenu item.*/

function makeHoverFunction(parent, child) {
//add '.' before child class within function
    var parentVar = document.getElementsByClassName(parent);

for(var i = 0; i<parentVar.length; i++){
  parentVar[i].addEventListener('mouseover', showMenu)
}

for(var i = 0; i<parentVar.length; i++){
    parentVar[i].addEventListener('mouseout', hideMenu)
  }

function showMenu() {
    var menuHover = this.querySelectorAll(child)[0];
    //if(menuHover.style.display === 'block'){
    //  menuHover.style.display = 'none';
    //}else{
      menuHover.style.display = 'block';
    //}
}

function hideMenu() {
    var menuHover = this.querySelectorAll(child)[0];
      menuHover.style.display = 'none';
}

}

makeHoverFunction('navi', '.inner')

/*2) to each restaurant name that will show and hide (toggle) the secret menu item for that particular restaurant.*/

var restElem = document.getElementsByClassName('name');

for(var i = 0; i<restElem.length; i++){
  restElem[i].addEventListener('click', showMenu)
  
}

function showMenu(){
 var priceElem = this.querySelectorAll('.menu')[0];
  if(priceElem.style.display === 'block'){
    priceElem.style.display = 'none';
  }else{
    priceElem.style.display = 'block'
  }
}

/*3) to the thumbs down icon that will add a count (counter) for each time the icon is clicked on.*/
