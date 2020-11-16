import './library/jquery.lazyload.min.js'
/* 公告栏滚动 */
window.onload = function() {
    let show = document.getElementById("show");
    let show = document.getElementById("bgshow");
    let h = 0;
    let timer;
    timer = setInterval(function() {
        show.style.top = h + 'px';
        h = h - 40;
        while (h == -200) {

            h = 0;
        };
    }, 1000);

    bgshow.onmouseenter = function() {
        clearInterval(timer);
    }



}

/* 懒加载图片 */
$(function() {
    $("img.lazy").lazyload({
        effect: "fadeIn",
        placehoder: "../img/loading.gif"
    });
});

/* 右边固定导航楼梯效果 */
$(function() {
    $('#list>li>a').on('click', function() {
        // console.log(1);
        // 获得 被点击的a元素对应的div元素距离页面顶部的高度
        let top = $(`#${$(this).attr('title')}`).offset().top;
        $('html').animate({
            scrollTop: top
        }, 600);
    });
    $(window).on('scroll', function() {
        // console.log(1);
        // 当前文档距离顶部的高度
        let top = $(document).scrollTop();
        // console.log(top);

        let index = Math.round(top / 600);
        $('#list>li>a').removeClass('active').eq(index).addClass('active');
    });
});

 /* 拖动条scrollTop拖到3000时显示右边固定导航 */
window.onload = function() {
    let show = document.getElementById("navright");
    let scrolltop = document.scrollTop;

    if (scrolltop == 3000) {
        show.style.display = "block";
    };



};