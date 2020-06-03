<?php

namespace App\Http\Controllers;

use App\Product;
use Illuminate\Database\Eloquent\ModelNotFoundException;

class ProductController extends Controller
{
    public function index()
    {
         return response()->json(Product::orderBy('created_at', 'desc')->get());
    }
}
