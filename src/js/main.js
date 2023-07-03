import $ from 'jquery';
import './polyfills';
import Preload from './components/preload';
import Fancybox from './components/fancybox';
import LazyLoad from './components/lazyLoad';
import Scrollbar from './components/scrollbar';
import Swiper from './components/swiper';
import Phone from './components/phone';
import Select from './components/select';

import initScrollMagic from './../js/dom/animation';
import initFixedButton from './../js/dom/fixed-btn';
import buildStatsLayout from './dom/stats';

window.$ = window.jQuery = $;

$(function() {
    initScrollMagic();
    initFixedButton();
    buildStatsLayout();

    const preload = new Preload('[data-preload]');

    const fancybox = new Fancybox('[data-fancybox]');

    const lazyLoad = new LazyLoad('[data-src], [data-background-image]');

    const scrollbar = new Scrollbar('[data-scrollbar]');

    const swiper = new Swiper('[data-swiper]', {
        slidesPerView: 1,
        spaceBetween: 20,
        breakpoints: {
            992: {
                slidesPerView: 2
            },
            1200: {
                slidesPerView: 3
            }
        }
    });

    const phone = new Phone('[data-phone]');

    const select = new Select('[data-select]');
});
