<?php

namespace application\controllers;
use application\core\Controller;

class CatalogController extends Controller {

    public function indexAction() {
        $this->view->render("Index");
    }

    public function detailAction() {

    }
    
}