<?php

namespace App\Http\Controllers;

use App\Cart;
use App\Http\Requests\CartRequest;
use App\Product;
use Validator;
use Illuminate\Database\Eloquent\ModelNotFoundException;

class CartController extends Controller
{
    public function index()
    {
         return response()->json(Cart::with('product')->get(), 200);
    }

    public function store(CartRequest $request)
    {
        $validation = Validator::make($request->all(), [
            'quantity' => 'required',
            'product_id' => 'required'
        ]);

        if ($validation->fails())
        {
            $message = $validation->messages()->toArray();
            return response()->json(['error' => $message['product_id'][0]], 422 );
        }

        $product = Product::find($request->get('product_id'));
        if (!$product)
        {
            return response()->json(['error' => 'Unable to find Product with ID'. $request->product_id], 404);
        }

        $product = new Cart();
        $product->quantity = $request->get('quantity');
        $product->product_id = $request->get('product_id');
        $product->save();

        return response()->json(['product' => $product, 'error' => null], 200);
    }

    public function destroy()
    {
        Cart::truncate();
        return response()->json([], 200);
    }

    public function delete($id)
    {
        $cart = Cart::where('id', $id)->first();

        if (!$cart)
        {
            return response()->json(['error' => 'Unable to find Product with ID'], 404);
        }
        $cart->delete();

        return response()->json([], 200);
    }
}
