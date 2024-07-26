<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

// Route::get('/dashboard', function () {
//     return Inertia::render('Backend/Dashboard');
// })->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/dashboard', function () {
        return Inertia::render('Backend/Dashboard');
    })->name('dashboard');

    Route::get('/users', function () {
        return Inertia::render('Backend/Users/Index');
    })->name('users');

    Route::get('/comming-soon', function () {
        return Inertia::render('Backend/CommingSoon/Index');
    });

    Route::get('/error-404', function () {
        return Inertia::render('Backend/Error404/Index');
    });

    Route::get('/apps', function () {
        return Inertia::render('Backend/Apps/Index');
    });

    Route::get("/settings/profile", function () {
        return Inertia::render('Backend/Settings/Profile/Index');
    });
    Route::get('/settings/account', function () {
        return Inertia::render('Backend/Settings/Account/Index');
    });
});


Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
