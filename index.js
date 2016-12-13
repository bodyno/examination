const request = require('request')
const nodemailer = require('nodemailer')

var transporter = nodemailer.createTransport('smtps://az8321550%40gmail.com:jmknrhzdsgyvrahs@smtp.gmail.com')

var mailData = {
  from: 'az8321550@gmail.com',
  to: 'az8321550@gmail.com;nobody@bodyno.com;az8321550@163.com',
  subject: '网站异常 - 来自nobody的健康检查',
  text: '网站异常 - 来自nobody的健康检查',
  html: '网站异常 - 来自nobody的健康检查'
}

function sendMail () {
  transporter.sendMail(mailData, function(error, info){
    if(error){
      return console.log(error)
    }
    console.log('Message sent: ' + info.response)
  })
}

function examination () {
  return new Promise (function(resolve, reject) {
    request('https://bodyno.com/images/avatar.jpg', function (error, response, body) {
      if (!error && response.statusCode == 200) {
        console.log('健康检查成功')
      }
      if (error) {
        console.log(error)
        sendMail()
      }
    })
  })
}

examination()

setInterval(examination, 1000 * 60 * 10)
