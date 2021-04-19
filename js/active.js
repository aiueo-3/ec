
function menu_toggle(){
    var button = document.getElementById('hamburger');
    var close = document.getElementsByClassName('head_hamburger--line');
    var menu = document.getElementsByClassName('head_menu');

    button.addEventListener('click',function(){
        for(var i=0; i<close.length; i++){
        close[i].classList.toggle('close');
        }
        menu[0].classList.toggle('close');
    });
}menu_toggle();

function cate_show(){
    var btn =$(".glnav ul li a");    
    
    btn.click(function(){
        $('.product').css('display','none');
        
        $(btn).removeClass('active');
        $(this).addClass('active');

        // 表示
        var cate = $(this).data('filter');
        $('.product.'+cate).show("normal"); 
    })
}cate_show();
