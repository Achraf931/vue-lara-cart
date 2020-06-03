<?php

use Illuminate\Database\Seeder;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = \Faker\Factory::create('fr_FR');
        for ($i = 0; $i < 10; $i++)
        {
            $product = new \App\Product();
            $product->name = $faker->sentence(1);
            $product->price = mt_rand(15, 752);
            $product->description = $faker->realText(150);
            $product->save();
        }
    }
}
