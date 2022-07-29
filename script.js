var navbar, shopping, slider;

// Describe this function...
function displayNavbar() {
  if(--window.LoopTrap <= 0) throw "Infinite loop.";
  while (!!navbar.length) {
    if(--window.LoopTrap <= 0) throw "Infinite loop.";
    let element_links = document.getElementById('links');
    let new_li = document.createElement('li');
    let new_a = document.createElement('a');
    new_a.innerText = navbar.shift();
    new_a.setAttribute("href", navbar.shift());

    new_li.appendChild(new_a);

    element_links.appendChild(new_li);
  }
  let element_img = document.getElementById('img');
  slider.push(slider[0]);
  element_img.setAttribute("src", slider.shift());
}

function getNumberOrString(value) {
  // Convert a string value to a number if possible
  let number_value = Number(value);
  if (Number.isNaN(number_value)) {
    return value
  } else {
    return number_value
  }
}

// Describe this function...
function displayShopping() {
  if(--window.LoopTrap <= 0) throw "Infinite loop.";
  let element_shaping_basket = document.getElementById('shaping_basket');
  element_shaping_basket.innerText = shopping;
}


navbar = ['CYF Blocks', 'https://tinyurl.com/2c4vs96b', 'Shop', 'https://flower-shop-by-mo.netlify.app/', 'Shopping', '#'];
slider = ['https://www.burgeon.co.uk/Content/Images/gallery/gallery-corporate.jpg', 'https://www.burgeon.co.uk/Content/Images/gallery/gallery-weddings.jpg', 'https://www.burgeon.co.uk/Content/Images/gallery/gallery-parties.jpg', 'https://www.burgeon.co.uk/Content/Images/gallery/gallery-christmas.jpg'];
shopping = [];
displayNavbar();


document.getElementById('next').addEventListener('click', (event) => {
  let element_img2 = document.getElementById('img');
  slider.push(slider[0]);
  element_img2.setAttribute("src", slider.shift());

});

document.getElementById('previous').addEventListener('click', (event) => {
  let element_img3 = document.getElementById('img');
  slider.unshift(slider.slice(-1)[0]);
  element_img3.setAttribute("src", slider.pop());

});

document.getElementById('submit').addEventListener('click', (event) => {
  if (getNumberOrString(document.getElementById('text').value) > '') {
    let element_response = document.getElementById('response');
    element_response.innerText = 'Thanks for visiting us. 😊';
  } else {
    let element_response2 = document.getElementById('response');
    element_response2.innerText = 'Please leave a comment!';
  }

});

document.getElementById('button_1').addEventListener('click', (event) => {
  shopping = (typeof shopping === 'number' ? shopping : 0) + 1;
  event.target.innerText = 'Item added to basket';
  displayShopping();

});

document.getElementById('button_2').addEventListener('click', (event) => {
  shopping = (typeof shopping === 'number' ? shopping : 0) + 1;
  event.target.innerText = 'Item added to basket';
  displayShopping();

});

document.getElementById('button_3').addEventListener('click', (event) => {
  shopping = (typeof shopping === 'number' ? shopping : 0) + 1;
  event.target.innerText = 'Item added to basket';
  displayShopping();

});
