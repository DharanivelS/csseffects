var express=require('express')
var path=require('path')
var hbs=require('hbs')

var app=express()

const htmlpath=path.join(__dirname,'../public')
const viewpath=path.join(__dirname,'../public')

app.use(express.static(htmlpath))
app.set('view engine','hbs')
app.set('views',viewpath)

app.get('',function(rq,rs){
    rs.render('index')
})
app.get('/download/3d_layered_social_media',function(rq,rs){
    rs.download('../public/external/downloadfiles/3d_layered_social_media.rar')
})
app.get('/download/box-hover',function(rq,rs){
    rs.download('../public/external/downloadfiles/box-hover.rar')
})
app.get('/download/custom-checkbox',function(rq,rs){
    rs.download('../public/external/downloadfiles/custom-checkbox.rar')
})
app.get('download/email-validation-check',function(rq,rs){
    rs.download('../public/external/downloadfiles/email-validation-check.rar')
})
app.get('/download/fullscreen-video-background',function(rq,rs){
    rs.download('../public/external/downloadfiles/fullscreen-video-background.rar')
})
app.get('/download/neon-light-button',function(rq,rs){
    rs.download('../public/external/downloadfiles/neon-light-button.rar')
})
app.get('/download/responsive-contact-us-page',function(rq,rs){
    rs.download('../public/external/downloadfiles/responsive-contact-us-page.rar')
})
app.get('/download/responsive-sidebar',function(rq,rs){
    rs.download('../public/external/downloadfiles/responsive-sidebar.rar')
})
app.get('/download/responsive-website-design',function(rq,rs){
    rs.download('../public/external/downloadfiles/responsive-website-design.rar')
})
app.get('/download/soft_text',function(rq,rs){
    rs.download('../public/external/downloadfiles/soft_text.rar')
})
app.get('/download/sticky-navbar',function(rq,rs){
    rs.download('../public/external/downloadfiles/sticky-navbar.rar')
})
app.get('/download/wrap-text-around-circle',function(rq,rs){
    rs.download('../public/external/downloadfiles/wrap-text-around-circle.rar')
})

app.listen(8080,function(){
    console.log("server is running")
})