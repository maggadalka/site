<?php

namespace application\core;

abstract class Controller {

    public $route;

    public function __construct($route) {
        $this->route = $route;
        var_dump($this->route);
    }
}