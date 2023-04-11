/*
 * @Descripttion: 
 * @version: v0.0.1
 * @Author: ZhouYanPing
 * @Date: 2023-04-10 17:18:51
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2023-04-10 17:56:32
 */
/** @type {import('prettier').Config} */
module.exports = {
    semi: false,
    singleQuote: true,
    endOfLine: 'lf',
    tabWidth: 2,
    jsxBracketSameLine: true,
    trailingComma: 'es5',
    plugins: [require('prettier-plugin-tailwindcss')],
}