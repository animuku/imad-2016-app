var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articleOne={
    title:'Article One|Anirudh Mukundan',
    heading:'Article One',
    date:'September 23rd 2016',
     content:`<p>
                This is my first article.This is my first article.This is my first article.
                This is my first article.This is my first article.
            </p>
             <p>
                This is my first article.This is my first article.This is my first article.
                This is my first article.This is my first article.
            </p>
            
             <p>
                This is my first article.This is my first article.This is my first article.
                This is my first article.This is my first article.
            </p>
 `   
};

function createTemplate(data){
    var title=data.title;
    var date=data.date;
    var heading=data.heading;
    var content=data.content;
var htmlTemplate=` 
<html lang="en">
    <head>
        <title>
            ${heading}
        </title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link href="/ui/style.css" rel="stylesheet" />
    </head>
    <body>
        <div class="container">
        <div>
            <a href="/">Home</a>
        </div>
        <br/>
        <h1>
           ${title}
        </h1>
        <div>
            ${date}
        </div>
        <div>
            ${content}
            
          </div>  
        </div>
    </body>
    
</html>
`;
return htmlTemplate;
}



app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
 res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

var counter=0;
app.get('/counter',function(req,res){
    counter=counter+1;
    res.send(counter.toString());
});


app.get('/ui/main.js', function (req, res) {
 res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/article-one', function(req,res){
    res.send(createTemplate(articleOne));
});

app.get('/article-two', function(req,res){
    res.send('Article two will be served here');
});

app.get('/article-three', function(req,res){
    res.send('Article three will be served here');
});


app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
