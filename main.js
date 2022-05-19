var opt = document.getElementById('sel1')
var all = document.getElementById('all')
var yash = document.getElementById('yashirin')
var a = 0

var width = document.getElementById('qator1').style.height



opt.addEventListener('change', function(){
    yash.innerHTML = opt.value
    a = yash.offsetWidth
    opt.style.width = yash.offsetWidth + 'px'
    all.style.width = a + 'px'
})



console.log(width)