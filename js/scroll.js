


const header = document.querySelector('#header');


function scroll() {
    if(document.body.scrollTop > 50|| document.documentElement.scrollTop > 0) {
        header.className = 'hidden_header';
    }else{
        header.className = 'header';
    }
}

function init() {
    window.addEventListener('scroll', scroll);

}

init ();