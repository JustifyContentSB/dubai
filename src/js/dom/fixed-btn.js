import $ from 'jquery';

export default () => {
    $(window).scroll(function() {
        if($(window).scrollTop() + $(window).height() == $(document).height()) {
            $('.fixed-btn').addClass('is-active');
        } else {
            $('.fixed-btn').removeClass('is-active');
        }
    });
}
