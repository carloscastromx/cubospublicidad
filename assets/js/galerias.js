document.addEventListener('DOMContentLoaded', function(){
    document.querySelectorAll('.item-galeria').forEach((g) => {
        g.style.backgroundImage = "url('" + g.children[0].getAttribute("src") + "')";
    })

    document.querySelectorAll('.item-galeria').forEach((g) => {
        g.addEventListener('click', () => {
            var img_src = g.children[0].getAttribute("src");
            document.querySelector('#img-modal').setAttribute("src",img_src);
            document.querySelector('#modal').style.display = 'flex';
        });
    })

    document.querySelector('#cerrar-btn').addEventListener('click', function(){
        document.querySelector('#modal').style.display = 'none';
    })
});