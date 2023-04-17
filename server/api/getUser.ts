/*
 * @Descripttion:
 * @version: v0.0.1
 * @Author: ZhouYanPing
 * @Date: 2023-04-13 15:08:10
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2023-04-13 15:10:46
 */
export default defineEventHandler((event) => {
  return {
    code: 200,
    data: [
      {
        id: 8,
        name: '前端工程师',
        pId: 7,
        remark: '',
        pName: '技术部',
        createTime: '2022-02-07 14:40:40',
      },
    ],
    message: 'ok',
  }
})
