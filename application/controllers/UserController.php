<?php

namespace application\controllers;
use application\core\Controller;

class UserController extends Controller {

    public function loginAction() {
        $this->view->render('Login');
    }

    public function registrationAction() {
        $this->view->render('Registration');
    }

    public function logoutAction() {
        $this->view->render('Logout');
    }

    public function profileAction() {
        $this->view->render('Profile');
    }

    public function cartAction() {
        $this->view->render('Cart');
    }

}   