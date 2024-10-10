// Увімкнути/вимкнути FLS (Full Logging System) (в роботі)
window['FLS'] = false;

// Підключення основного файлу стилів
import '../scss/style.scss';

// Функціонал ========================================================================================================================================================================================================================================================

import * as functions from './files/functions.js';

/* Додавання loaded для HTML після повного завантаження сторінки */
functions.addLoadedClass();
/* Модуль для роботи з меню (Бургер) */
functions.menuInit();

// Спостерігач за об'єктами з атрибутом data-watch
import './libs/watcher.js';

// Модуль паралаксу
import './libs/parallax.js';

// Функції роботи скролом
import * as scroll from './files/scroll/scroll.js';

scroll.headerScroll();

/* Підключення файлів з іншими скриптами */
import './files/script.js';
//============================================================================================================================================================================================================================================
