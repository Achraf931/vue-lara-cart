<?php

use Illuminate\Support\Facades\Route;

Route::get('/products', 'ProductController@index');
Route::get('/cart', 'CartController@index');
Route::post('/cart', 'CartController@store');
Route::delete('/cart', 'CartController@destroy');
Route::delete('/cart/{id}', 'CartController@delete');
