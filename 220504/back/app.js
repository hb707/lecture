const express = require('express')
const { Sequelize, DataTypes } = require('sequelize') // 클래스
const mysql = require('mysql2')
const app = express()
const sequelize = new Sequelize('example', 'hanbin', 'hanbin00', {
    host: 'localhost',
    dialect: 'mysql'
}) // 클래스로 접속정보를 담은 객체생성
// 인자4개 : db명, username, password, 기본설정객체 (host, 사용할 db종류 포함)

// sequelize.sync().then(data => {
//     console.log('db접속성공')
// }).catch(error => {
//     console.log(error)
//     console.log('db접속실패')
// })

async function init() {
    try {
        comment() // 모델(define)은 위에 sync 위에  -> db에 해당 테이블이 있는지 없는지 여부를 확인해서 다르게 처리하도록
        await sequelize.sync() // sync()의 인자로 {force:true} 넣어주면 실행할때마다 강제로 기존 테이블 드랍 후 새 테이블 생성
        console.log('db접속성공')
        insert()
    } catch (e) {
        console.log('db접속실패 : ', e)
    }
}
init()

function comment() {
    // model
    // sequelize.define : 모델을 정의 (테이블 생성 + 테이블 정보 받아와서 정의). 인자1:테이블명 / 인자2:객체. 필드내용 / 인자3:옵션
    const COMMENT = sequelize.define('comment', {
        subject: {
            type: DataTypes.STRING, // db종류마다 데이터타입명이 조금씩 달라서 시퀄라이즈에서 만든 데이터타입객체 내의 데이터타입종류를 사용
            allowNull: false
        },
        content: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        // 옵션 ( 테이블이름 변경하기, )
        tableName: 'newComment',
        timestamps: false
    })

    return COMMENT
}
// comment 실행시에
// Executing (default): CREATE TABLE IF NOT EXISTS `comments` (`id` INTEGER NOT NULL auto_increment , `subject` VARCHAR(255) NOT NULL, `content` VARCHAR(255) NOT NULL, `createdAt` DATETIME NOT NULL, `updatedAt` DATETIME NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB;
// Executing (default): SHOW INDEX FROM `comments`
// 테이블명은 comment's'로 생성되고, 설정하지 않은 필드인 id, createdAt, updatedAt 필드가 자동으로 생성됨 (옵션으로 생성여부 설정가능)

async function insert() {
    const COMMENT = comment()
    COMMENT.create({ subject: 'asdf', content: 'asdfasdfasdf' })
}