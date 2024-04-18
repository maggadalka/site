<?php

namespace application\controllers;
use application\core\Controller;
use application\lib\Database;

class MainController extends Controller {

    public function indexAction() {
        $this->view->render('Main');
    }

}