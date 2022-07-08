var navLink=document.querySelectorAll('#navigation')
for (x of navLink) {
document.documentElement.style.scrollBehavior = "smooth";
}
function changeColor()
{
  for(x of navLink)
  {
  x.style.color='white'
  }
}
for (every of navLink)
{every.addEventListener('click',changeColor)}
