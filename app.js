const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const path = require('path')

// var ejs = require('ejs')

const qusetionRouter = require('./routes/qusetion.js')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// 静态资源中间件
app.use('/static', express.static(path.join(__dirname, 'public')))

// 告诉app视图模板放在哪里
app.set('views', path.join(__dirname, 'views'))

// app.engine('html', require('ejs').renderFile)
// app.set('view engine', 'html')
// 使用哪个模板引擎
app.set('view engine', 'ejs')

// 解决ejs渲染生成html
app.use(express.static(path.join(__dirname, 'views')))
app.use(qusetionRouter)

app.listen(3001, () => {
    console.log('启动成功！请访问http://127.0.0.1:3001')
})
