# sails_simple_api

sailsjs 0.10 required.

Simple Parser for converting HTML page to JSON format

Usage 
----------------------
- http://localhost:1337/Json/get?uri=http://www.books.com.tw/products/0010653153?loc=003_002&callback=gogogo
  - Request Param 
    1. **uri**
      - Required. The uri which want to parse
    2. **callback**
      - Optional. For JSONP


Configuration
-----------------------

 - create your own Parsing rule to folder `api/rules/`
    - Example : `api/rules/BooksComTw.js`
    - Reference : https://github.com/cheeriojs/cheerio
 - edit `rules/mapping.js` to config the uri mapping, which use to resolve the requested uri to corresponding parsing rule



