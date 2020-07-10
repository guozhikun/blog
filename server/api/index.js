var mysql = require('mysql');
var models = require('../db');
var $sql = require('../sqlMap');
var router = express.Router();

//使用连接池链接数据库
var pool = mysql.createPool(models.mysql);