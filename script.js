// validation code
function validateForm() {
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    
    let nameError = document.getElementById('nameError');
    let emailError = document.getElementById('emailError');
    
    let valid = true;
  
    if (name === '') {
      nameError.textContent = 'Name is required';
      valid = false;
    } else {
      nameError.textContent = '';
    }
  
    if (email === '') {
      emailError.textContent = 'Email is required';
      valid = false;
    } else if (!validateEmail(email)) {
      emailError.textContent = 'Invalid email format';
      valid = false;
    } else {
      emailError.textContent = '';
    }
  
    return valid;
  }
  
  function validateEmail(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

  // Image Cycling
  let currentImageIndex = 0;
  const images = document.querySelectorAll('.image-container img');
  const totalImages = images.length;
  
  function cycleImages() {
      images[currentImageIndex].style.display = 'none';
      
      currentImageIndex = (currentImageIndex + 1) % totalImages;
  
      images[currentImageIndex].style.display = 'block';
  }
  
  setInterval(cycleImages, 1500); // Change image every 1.5 seconds
  
// Image Gallery
const galleryImages = document.querySelectorAll('#slider img');
const gallery = document.getElementById('gallery');

function openGallery() {
  gallery.style.display = 'block';
}

function closeGallery() {
  gallery.style.display = 'none';
}

galleryImages.forEach(image => {
  image.addEventListener('click', () => {
    openGallery();
    const galleryThumbnails = document.querySelectorAll('.gallery img');
    galleryThumbnails.forEach((thumbnail, index) => {
      thumbnail.src = galleryImages[index].src;
      thumbnail.alt = galleryImages[index].alt;
    });
  });
});

// calcultor 

// Function to update total
function updateTotal() {
    var itemList = document.getElementById('item-list').getElementsByTagName('li');
    var total = 0;
    for (var i = 0; i < itemList.length; i++) {
      var price = parseFloat(itemList[i].textContent.match(/\$\d+(?:\.\d+)?/)[0].slice(1));
      total += price;
    }
    document.getElementById('total').textContent = '$' + total.toFixed(2);
  }
  
  // Function to add item
  function addItem() {
    var itemName = document.getElementById('itemName').value;
    var itemPrice = parseFloat(document.getElementById('itemPrice').value);
  
    if (!itemName || isNaN(itemPrice)) {
      alert("Please enter valid item name and price.");
      return;
    }
  
    var itemList = document.getElementById('item-list');
    var li = document.createElement("li");
    li.textContent = itemName + ': $' + itemPrice.toFixed(2);
    itemList.appendChild(li);
  
    updateTotal();
  
    // Clear input fields
    document.getElementById('itemName').value = "";
    document.getElementById('itemPrice').value = "";
  }
  
  //Sliding Panels

  let panels = document.querySelectorAll('.panel');

function slidePanel() {
  panels.forEach(panel => {
    panel.classList.toggle('slide');
  });
}

//Rollovers

function changeImage(element, newSrc = "") {
  if (!newSrc) {
    newSrc = element.dataset.hover;
  }
  element.src = newSrc || element.src;
}

let image = document.querySelectorAll('.image-container img');

Array.from(image).forEach(img => {
  img.addEventListener('mouseover', () => {
    if (!img.classList.contains('hovered')) {
      changeImage(img);
    }
  });

  img.addEventListener('mouseout', () => {
    if (!img.classList.contains('hovered')) {
      changeImage(img, '');
    }
  });
});

//new Window

document.getElementById('openWindowBtn').addEventListener('click', function() {
  window.open('https:monkeytype.com/', '_blank');
});




