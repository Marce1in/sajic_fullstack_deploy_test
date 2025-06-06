<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::rename('lecture_user', 'lecture_attendances');
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::rename('lecture_attendances', 'lecture_user');
    }
};
