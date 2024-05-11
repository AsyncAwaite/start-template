import Swiper from "swiper";
import {FreeMode, Navigation, Pagination, Thumbs} from "swiper/modules";
import {getElement, getElements} from "../core/index.js";



function functionNameSlider(item, inHeader = false) {
    if (!getElement('[data-gallery]', item)) return;
    const options = {
        spaceBetween: 20,
        slidesPerView: 1,


    };
    if (!inHeader) {
        options.modules = [Navigation, Pagination];
        options.navigation = {
            nextEl: getElement('.next', item),
            prevEl: getElement('.prev', item),
        };
        options.pagination = {
            el: getElement('.swiper-pagination', item),
            clickable: true,
        }
    }
    new Swiper(getElement('[data-gallery]', item), options);
}

export {


}