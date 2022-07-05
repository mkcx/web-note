# HTTP
HTTP（hypertext transport protocol）协议『超文本传输协议』，协议详细规定了浏览器和万维网服务器之间互相通信的规则。
约定, 规则

## 请求报文
重点是格式与参数(请求包含4部分：行、头、空行、体)
```
行      POST  /s?ie=utf-8  HTTP/1.1 
头      Host: atguigu.com
        Cookie: name=guigu
        Content-type: application/x-www-form-urlencoded
        User-Agent: chrome 83
空行
体      username=admin&password=admin
```
##### 请求行包含3部分
* 请求类型：GET POST DELETE...
* URL路径/查询字符串
* HTTP协议的版本  

## 响应报文
```
行      HTTP/1.1  200  OK
头      Content-Type: text/html;charset=utf-8
        Content-length: 2048
        Content-encoding: gzip
空行    
体      <html>
            <head>
            </head>
            <body>
                <h1>每个人的身上都有毛毛</h1>
            </body>
        </html>
```
##### 响应行分为3个部分  
* HTTP协议版本 HTTP/1.1
* 响应状态码 200
* 响应状态字符串 ok    

[常用状态码](/http/statusCode)