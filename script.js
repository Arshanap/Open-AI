document.getElementById('src').addEventListener('click',function(){
    document.getElementById('blr').classList.toggle('ed');
    document.getElementById('sre').classList.toggle('ed');
    document.getElementById('section-1').classList.toggle('bd')
    document.getElementById('section-2').classList.toggle('bd')
    document.getElementById('section-3').classList.toggle('bd')
    document.getElementById('section-4').classList.toggle('bd')
    document.getElementById('section-5').classList.toggle('bd')
    document.getElementById('section-6').classList.toggle('bd')
    document.getElementById('sm').classList.toggle('none');
    document.getElementById('manu').classList.toggle('none');
    document.getElementById('hdr').classList.toggle('coloray');
})

document.getElementById('sm').addEventListener('click',function(){
    document.getElementById('blr').classList.toggle('ed');
    document.getElementById('sre').classList.toggle('ed');
    document.getElementById('section-1').classList.toggle('bd')
    document.getElementById('section-2').classList.toggle('bd')
    document.getElementById('section-3').classList.toggle('bd')
    document.getElementById('section-4').classList.toggle('bd')
    document.getElementById('section-5').classList.toggle('bd')
    document.getElementById('section-6').classList.toggle('bd')
    document.getElementById('src').classList.toggle('none');
    document.getElementById('inpu').classList.toggle('none');
    document.getElementById('hdr').classList.toggle('coloray');
})