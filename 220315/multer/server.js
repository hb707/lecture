const express = require('express')
const nunjucks = require('nunjucks')
const multer = require('multer') // npm i multer
const path = require('path')
const app = express()

app.set('view engine', 'html')
nunjucks.configure('views', {
    express: app,
    watch: true
})

// Req body의 형식에 따라 그를 해석해주는 미들웨어가 필요
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
// multipart/form-data 형식의 req body도 이걸 해석해줄 미들웨어를 설치해줘야함 : 외부라이브러리 multer 사용
// 멀터는 함수. 얘를 객체로 만드는 작업을 해줘야 함.
// 객체 안에 3가지 속성이 있음. 그 3가지가 미들웨어..

// upload 미들웨어는 필요한 라우터에만 설치하는 방식
const upload = multer({
    storage: multer.diskStorage({
        destination: (req, file, done) => { // destination : 콜백함수(done)를 만듦...(?)
            done(null, 'uploads/') // 첫번째인자값은 에러, 두번째인자값으로 디렉토리 <- 만들어주기
        },
        filename: (req, file, done) => {
            // 파일명 생성
            const ext = path.extname(file.originalname) // 파일업로드한 사람의 기존 파일명에서 확장자만 가져옴
            const filename = path.basename(file.originalname, ext) + Date.now() + ext// 기존 파일명에서 확장자를 지운 이름만 + 현재날짜 + 확장자
            done(null, filename) // 첫번째인자값은 에러, 두번째인자값으로 파일명 <- 새로운 파일명을 만들어주어야
        }
    }),
    // 파일용량 제한
    limits: { fileSize: 5 * 1024 * 1024 } // 5MB
}) // 함수인 multer를 객체로 변환해줌

app.get('/', (req, res) => {
    res.render('axios')
})

// upload.single() 까지가 미들웨어, () 내부에는 html에서 지정한 파일업로드 input의 name을 씀 : 얘는 파일이니까 읽지 마!
// req.body 처럼 req 객체에 file이라는 속성을 만들고 거기에 업로드한 파일을 저장함 (req.file) => 다음 미들웨어에서 req.file로 접근 가능
app.post('/upload', upload.single('upload'), (req, res) => {
    console.log(req.file)
    console.log(req.body)
    res.send('upload')
})


app.get('/upload2', (req, res) => {
    res.render('array')
})

// upload.single 대신 upload.array 사용 & req.file 대신 req.files 사용
app.post('/upload2', upload.array('upload'), (req, res) => {
    console.log(req.files) // 여러개의 파일이 배열로 들어옴
    console.log(req.body)
    res.send('upload')
})

app.get('/upload3', (req, res) => {
    res.render('uploads')
})

// uploads.single 대신 uploads.fields 사용 : 인자값으로 각 input name을 객체화한 뒤 배열로 모아서 넣어줌 & req.file 대신 req.files 사용
app.post('/upload3', upload.fields([{ name: 'upload1' }, { name: 'upload2' }, { name: 'upload3' }, { name: 'upload4' }]), (req, res) => {
    console.log(req.files.upload1)
    console.log(req.files.upload2)
    console.log(req.files.upload3)
    console.log(req.files.upload4)
    console.log(req.body)
    res.send('upload')
})

app.listen(3000, () => {
    console.log('server on')
})