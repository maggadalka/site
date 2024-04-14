<?php

namespace application\core;

use Exception;

class Router {
    protected $routes = [];
    protected $params = [];

    public function __construct() {
        $arr = require "application/config/routes.php";
        foreach ($arr as $key => $value) {
            $this->add($key, $value);
        }
    }

    protected function add($route, $params) {
        $route = "#^".$route."$#";
        $this->routes[$route] = $params;
    }

    protected function match() {
        $url = trim($_SERVER['REQUEST_URI'], "/");
        foreach ($this->routes as $route => $params) {
            if (preg_match($route, $url, $mathches)) {
                $this->params = $params;
                return true;
            }
        }
        return false;
    }

    public function run() {
        if ($this->match()) {
            try {
                $path = 'application\\controllers\\'.ucfirst($this->params['controller'].'Controller');
                $controller = new $path($this->params);
                $action = $this->params['action'].'Action';
                $controller->$action();
            } catch(Exception $ex) {
                View::error(404);
            }
        }
    }
}