<?php

namespace application\lib;

class Database {

    protected $database;

    public function __construct() {
        $config = require 'application/config/db.php';
        $database = mysqli_connect($config['host_ip'], $config['user'], $config['password'], $config['database_name']);
    }

}