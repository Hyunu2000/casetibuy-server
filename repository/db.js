/**
 * 1. DB 연동 라이브러리 호출 - DB서버주소, user, password, port 
 */
import mysql from 'mysql2';

const pool = mysql.createPool({
    host: 'hyunu2000db.cfcsuo2oi4f7.ap-northeast-2.rds.amazonaws.com',
    port: 3306,
    user: 'admin',
    password: 'aArkdgusdn2',
    database: 'casetibuy',
    charset: 'utf8mb4'
});

export const db = pool.promise();
