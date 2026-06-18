'use strict';

import {
    fib
} from './lab2.js';

/**
 * Возвращает дробную часть числа.
 * @param {number} num - Число.
 * @returns {number} Дробная часть числа.
 */
export function getDecimal(num) {
    const fractional = Math.abs(num % 1);
    return num >= 0 ? +fractional.toFixed(2) : +(1 - fractional).toFixed(2);
}

/**
 * Делит числа с остатком.
 * @param {number} dividend - Делимое.
 * @param {number} divisor - Делитель.
 * @returns {Array<number>} Массив [частное, остаток].
 */
export function divmod(dividend, divisor) {
    // Проверка на деление на ноль
    if (divisor === 0) {
        return [NaN, NaN];
    }
    
    // Вычисляем частное с округлением вниз (floor) для отрицательных чисел
    const quotient = Math.floor(dividend / divisor);
    const remainder = dividend - quotient * divisor;
    
    return [quotient, remainder];
}

/**
 * Нормализует URL, добавляя https://.
 * @param {string} url - Адрес сайта.
 * @returns {string} Нормализованный URL.
 */
export function normalizeUrl(url) {
    if (!url.startsWith("http://") && !url.startsWith("https://"))
        return "https://" + url;

    return url.replace("http://", "https://");
}

/**
 * Проверяет наличие спама в строке.
 * @param {string} str - Входная строка.
 * @returns {boolean} true, если строка содержит спам, иначе false.
 */
export function checkSpam(str) {
    const lowerStr = str.toLowerCase();
    return lowerStr.includes('viagra') || lowerStr.includes('xxx');
}

/**
 * Усекает строку до указанной длины и добавляет многоточие, если необходимо.
 * @param {string} str - Входная строка.
 * @param {number} maxlength - Максимальная длина строки.
 * @returns {string} Усеченная строка.
 */
export function truncate(str, maxlength) {
    if (str.length > maxlength)
        return str.slice(0, maxlength - 1) + "…";

    return str;
}

/**
 * Преобразует строку вида 'var-test-text' в 'varTestText'.
 * @param {string} str - Входная строка.
 * @returns {string} Преобразованная строка.
 */
export function camelize(str) {
    return str.split('-').map((word, index) => {
        if (index === 0)
            return word;

        return word ? word[0].toUpperCase() + word.slice(1) : '';
    }).join('');
}

/**
 * Возвращает массив чисел Фибоначчи до указанного числа n.
 * @param {number} n - Количество чисел Фибоначчи.
 * @returns {Array<BigInt>} Массив чисел Фибоначчи.
 */
export function fibs(n) {
    let arr = [];
    for (let i = 0; i < n; i++) arr.push(fib(i));
    return arr;
}

/**
 * Возвращает массив, отсортированный по убыванию.
 * @param {Array<number>} arr - Входной массив.
 * @returns {Array<number>} Отсортированный массив по убыванию.
 */
export function arrReverseSorted(arr) {
    return arr.slice().sort((a, b) => b - a);
}

/**
 * Возвращает массив уникальных значений.
 * @template T
 * @param {Array<T>} arr - Входной массив.
 * @returns {Array<T>} Массив уникальных значений.
 */
export function unique(arr) {
    return [...new Set(arr)];
}