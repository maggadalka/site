<?php

namespace application\controllers;
use application\core\Controller;

class MainController extends Controller {
    public function indexAction() {
        echo "<p>index called</p>";
    }
}