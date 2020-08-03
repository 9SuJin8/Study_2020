var http = require('http');
var fs = require('fs');
var url = require('url'); //node.js에 있는 모듈을 사용

function templateHTML(title, list, body) {
  return `
  <!doctype html>
  <html>
  <head>
    <title>WEB1 - ${title}</title>
    <meta charset="utf-8">
  </head>
  <body>
    <h1><a href="/">WEB</a></h1>
    ${list}
    ${body}
  </body>
  </html>
  `;
}

function templateList(filelist){
  var list = '<ul>';
  var i = 0;
  while(i < filelist.length) {
    list = list + `<li><a href="/?id=${filelist[i]}">${filelist[i]}</a></li>`;
    i = i + 1;
  }
  list = list + '<ul>';
  return list;
}

var app = http.createServer(function(request,response){
    var _url = request.url;
    var queryData = url.parse(_url, true).query; //객체가 저장
    var pathname = url.parse(_url, true).pathname;

    if(pathname === '/'){
      if(queryData.id === undefined){
        
        fs.readdir('./data', function(error, filelist){
          var title = 'Welcome';
          var description = 'Hello Node.js';
          var list = templateList(filelist);
          var template = templateHTML(title, list, `<h2>${title}</h2>${description}`);
          response.writeHead(200);
          response.end(template);
        });
         
    } else {
      fs.readdir('./data', function(error, filelist){
      fs.readFile(`data/${queryData.id}`, 'utf8', function(err, description){
        var title = queryData.id;
        var list = templateList(filelist);
        var template = templateHTML(title, list, `<h2>${title}</h2>${description}`);
        response.writeHead(200);
        response.end(template);
      });
    });
  }   
    //response.end(fs.readFileSync(__dirname + _url));
    //__dirname + url에 어떤 코드를 넣느냐에 따라서 사용자에게 전송하는 데이터가 바뀐다
    //아파치는x node.js나 파이썬이나 장고는 가능
  }
  else {
    response.writeHead(404); //파일을 찾을 수 없다.
    response.end('Not found');
  }
});
app.listen(3000);