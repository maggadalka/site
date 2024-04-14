<?php

return [

    //default route, alias to index.html/php
    '' => [
        'controller' => 'main',
        'action' => 'index'
    ],

    //user routes
    'user/cart' => [
        'controller' => 'user',
        'action' => 'cart'
    ],
    'user/profile' => [
        'controller' => 'user',
        'action' => 'profile'
    ],
    'user/login' => [
        'controller' => 'user',
        'action' => 'login'
    ],
    'user/registration' => [
        'controller' => 'user',
        'action' => 'registration'
    ],
    'user/logout' => [
        'controller' => 'user',
        'action' => 'logout'
    ],

    //catalog related routes
    'catalog' => [
        'controller' => 'catalog',
        'action' => 'index'
    ],
    'catalog/detail' => [
        'controller' => 'catalog',
        'action' => 'detail'
    ]

];
