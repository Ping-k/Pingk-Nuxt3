/*
 * @Descripttion:
 * @version: v0.0.1
 * @Author: ZhouYanPing
 * @Date: 2023-04-13 15:20:10
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2023-04-21 09:12:33
 */
export default defineEventHandler((event) => {
  throw new Error("server error");
  // throw createError({ statusCode: 404, statusMessage: '404' })
  // throw createError({ statusCode: 500, statusMessage: '服务异常，稍后再试' })

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
