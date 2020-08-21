<?php

use App\Models\Category;
use Illuminate\Database\Seeder;
use Faker\Factory;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = Factory::create();

        for ($i = 1; $i <= 10; $i++) {
            Category::updateOrCreate([
                'name' => $faker->sentence(2),
                'description' => $faker->text(),
                'status' => 1,
            ]);
        }
    }
}
