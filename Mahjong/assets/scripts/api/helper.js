/*
 * @Author: jake
 * @Date: 2019-01-20 11:51:30
 * @Last Modified by: jake
 * @Last Modified time: 2019-03-12 16:28:08
 * 工具类型的封装都放在这里
 */
/**
 * @export
 * @param {查询对象} object
 * @returns
 */
module.exports.type = function(object) {
  let class2type = {
    '[object Boolean]': 'boolean',
    '[object Number]': 'number',
    '[object String]': 'string',
    '[object Function]': 'function',
    '[object Array]': 'array',
    '[object Date]': 'date',
    '[object RegExp]': 'regExp',
    '[object Object]': 'object',
    '[object Error]': 'error'
  }
  return class2type[Object.prototype.toString.call(object)]
}
