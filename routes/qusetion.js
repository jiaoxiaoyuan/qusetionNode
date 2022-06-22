const router = require('express').Router()
const multer = require('multer')
const path = require('path')

// 上传文件存到项目文件下
const storage = multer.diskStorage({
    // 存在什么地方
    destination: function (req, file, cb) {
        cb(null, './public/upload')
    },
    // 文件得名字  防止缓存所以添加时间戳
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
})

const upload = multer({ storage: storage })

// 显示上传文件的页面
router.get('/qusetion', (req, res) => {
    res.type('html')
    res.render('qusetion')
})

// 上传文件的路由
router.post('/qusetion', upload.single('file'), (req, res) => {
    console.log(req.file)
    res.send({
        code: 0,
        msg: '上传成功！',
        // req.file是  file的信息
        // 返回文件的路径给前端   路径是当前静态资源目录加上文件名（来自上面multer保存的filename）
        data: '/static/upload/' + req.file.filename
    })
})

module.exports = router
