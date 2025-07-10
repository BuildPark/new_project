const express = require('express')
const app = express()
const port = 3000

const users = [] // 회원데이터(명부)

app.use(express.json()) // json 데이터 형식 해석

app.use(express.urlencoded({extended: true})) // www-form-data (폼데이터) 해석

// 요청 :   request header
//     :   request body
//     :   request line

app.get('/', (req, res) => {
    
}) // : 서버의 자원을 획득

app.post('/create', (req, res) => {
    users.push(req.body);
    console.log("회원 데이터", users)
    res.status(200).json({
        success: true,
        message: "회원등록 성공"
    })
}) // : 서버의 자원을 생성(저장)

// app.delete() : 서버의 자원을 삭제

// app.put() : 서버의 자원을 전체 수정

// app.patch() : 서버의 자원을 일부 수정

// get     :    가져오기
// post    :   보내기
// patch   :   (부분) 수정
// put     :   (전체) 수정
// delete  :   삭제

// Data 교환 포맷
// 1) JSON
// 2) XML
// 3) CSV
// 4) HTML

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
