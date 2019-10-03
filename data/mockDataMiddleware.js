const Mock = require('mockjs');
const url = require('url');

let map = {
  '/api/banner/list'(response){
    // 需要拦截的请求
    // 使用mock插件，伪造json数据
    let result = Mock.mock({
      'list|100': [
        {
          'id|+1': 1,
          'endPlace':'@city',
          // picUrl: '@image(300x180, @color)'
          'time':'@date',
          'content':'@cparagraph',
          'userPlace':'@city',
          'peopleNum|+2':102
        }
      ] 
    });
    // 序列化json
    let resultStr = JSON.stringify(result);
    // 设置响应头
    response.setHeader('Content-Type', 'application/json; charset=utf-8');
    // 将序列化好的数据给客户端
    response.end(resultStr);
  },
  '/api/near/list'(response){
    // 需要拦截的请求
    // 使用mock插件，伪造json数据
    let result = Mock.mock({
      'list|10-20': [
        {
          'id|+1': 1,
          'endPlace':'深圳',
          // picUrl: '@image(300x180, @color)'
          'time':'@date',
          'content':'@cparagraph',
          'userPlace':'@city',
          'peopleNum|3-20':1
        }
      ] 
    });
    // 序列化json 
    
    let resultStr = JSON.stringify(result);
    // 设置响应头
    response.setHeader('Content-Type', 'application/json; charset=utf-8');
    // 将序列化好的数据给客户端
    response.end(resultStr);
  },
  '/api/goods/detail'(response){
    response.setHeader('Content-Type', 'application/json; charset=utf-8');
    let string = JSON.stringify({a: 1, b: 2});
    response.end(string);
  }
  
}

function mockDataMiddleware(request, response, next){

  // 解析请求的url路径，取得请求url中的pathname
  let {pathname} = url.parse(request.url);

  // 判断请求是否是需要拦截请求
  map[pathname] ? map[pathname](response) : next();
  
}

// 向外输出
module.exports = mockDataMiddleware; 