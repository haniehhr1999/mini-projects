var progressBar = document.querySelector('.progress-bar1')
 window.addEventListener('scroll' , function(){
    var winscroll = window.pageYOffset //فاصله اسکرول بار صفحه از بالای صفحه
    var height = document.documentElement.scrollHeight - window.innerHeight
    var scrolled = (winscroll/height) * 100
    progressBar.style.width = `${scrolled}%`
 })