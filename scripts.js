var img = document.getElementById('profile-img');
const cursor = document.querySelector('.cursor');
var timeout;
const listitems = document.querySelectorAll('a');

function nav()
{
   img.style.bottom = '25px';
}
function navover()
{
   img.style.bottom = '-70px'
}

//Mouse takibi
if(window.screen.width >= 620)
{
   document.addEventListener('mousemove' , (e) =>
   {
   let x = e.pageX;
   let y = e.pageY;

   cursor.style.top = y + "px";
   cursor.style.left = x + "px";
   cursor.style.display = 'block';
   //mouse durduruldu efekti
   /*function mouseStopped()
   {
      cursor.style.display = 'none';
   }
   clearTimeout(timeout);
   timeout = setTimeout(mouseStopped , 1000);*/
   });
}
//mouseout efekti
document.addEventListener('mouseout' , () =>
{
   cursor.style.display = 'none';
});

//animasyon
listitems.forEach((item,index) =>
{
   item.style.animation = `movedown 1s ease-in-out forwards ${index / 5}s`;
})