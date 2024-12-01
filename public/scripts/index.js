
const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');
menuToggle.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
  });
  
    let count = 1;

    function increaseCount() {
      count++;
      updateCountDisplay();
    }
  
    function decreaseCount() {
      if (count > 1) {
        count--;
        updateCountDisplay();
      }
    }
      function updateCountDisplay() {
      document.getElementById('countDisplay').textContent = `${count} تعداد`;
    }
 

    const container = document.getElementById('product-container');
    const scrollLeftBtn = document.getElementById('scroll-left-btn');
    const scrollRightBtn = document.getElementById('scroll-right-btn');
  
    // Adjust scroll direction for RTL
    scrollRightBtn.addEventListener('click', () => {
      container.scrollBy({ left: -300, behavior: 'smooth' });
    });
  
    scrollLeftBtn.addEventListener('click', () => {
      container.scrollBy({ left: 300, behavior: 'smooth' });
    });



    document.getElementById('scroll-left-btn-2').addEventListener('click', function() {
      document.getElementById('product').scrollBy({
        left: -250, 
        behavior: 'smooth'
      });
    });
  
    document.getElementById('scroll-right-btn-2').addEventListener('click', function() {
      document.getElementById('product').scrollBy({
        left: 250, 
        behavior: 'smooth'
      });
    })

   document.getElementById('scroll-left-btn-3').addEventListener('click', function() {
  document.getElementById('product-2').scrollBy({
    left: -250,          
    behavior: 'smooth'
  });
});

document.getElementById('scroll-right-btn-3').addEventListener('click', function() {
  document.getElementById('product-2').scrollBy({
    left: 250, 
    behavior: 'smooth'
  });
});









