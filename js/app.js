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
 var menuElem = this.querySelectorAll('.menu')[0];
  if(menuElem.style.display === 'block'){
    menuElem.style.display = 'none';
  }else{
    menuElem.style.display = 'block'
  }
}

/*3) to the thumbs down icon that will add a count (counter) for each time the icon is clicked on.*/

var thumb = document.getElementsByClassName('thumb')[0];
var spanElem = document.createElement('span');
spanElem.innerHTML = 0;
spanElem.style.display = 'none';
spanElem.style.whiteSpace = "nowrap";
spanElem.style.color = 'red';
thumb.style.display = 'inline';
thumb.style.whiteSpace = "nowrap";
thumb.appendChild(spanElem);
thumb.addEventListener('click', function(){
  console.log('test');
  spanElem.style.display = 'inline-block';
  spanElem.innerHTML ++;})

var thumb1 = document.getElementsByClassName('thumb')[1];
var spanElem1 = document.createElement('span');
spanElem1.innerHTML = 0;
spanElem1.style.display = 'none';
spanElem1.style.whiteSpace = "nowrap";
spanElem1.style.color = 'red';
thumb1.style.display = 'inline';
thumb1.style.whiteSpace = "nowrap";
thumb1.appendChild(spanElem1);
thumb1.addEventListener('click', function(){
  console.log('test');
  spanElem1.style.display = 'inline-block';
  spanElem1.innerHTML ++;
})

var thumb2 = document.getElementsByClassName('thumb')[2];
var spanElem2 = document.createElement('span');
spanElem2.innerHTML = 0;
spanElem2.style.display = 'none';
spanElem2.style.whiteSpace = "nowrap";
spanElem2.style.color = 'red';
thumb2.style.display = 'inline';
thumb2.style.whiteSpace = "nowrap";
thumb2.appendChild(spanElem2);
thumb2.addEventListener('click', function(){
  console.log('test');
  spanElem2.style.display = 'inline-block';
  spanElem2.innerHTML ++;
})