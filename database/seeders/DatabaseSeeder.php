<?php

namespace Database\Seeders;

use App\Models\Lecture;
use App\Models\Room;
use App\Models\Speaker;
use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        Speaker::factory(5)->create();

        Room::create(['number' => '204', 'capacity' => 45]);
        Room::create(['number' => '303', 'capacity' => 30]);
        Room::create(['number' => '404', 'capacity' => 202]);

        Lecture::factory(25)->create();

        $users = User::factory(20)->create();
        foreach ($users as $user) {
            $user->lectures()->attach(1);
        }
    }
}
