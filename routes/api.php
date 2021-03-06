<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth.api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('login', 'AuthController@login');
Route::post('register', 'AuthController@register');
Route::post('refresh', 'AuthController@refresh');

// auth
Route::group(['middleware' =>'auth.api'], function () {
    Route::get('logout', 'AuthController@logout');
    Route::apiResource('meetings', 'MeetingController');
    Route::apiResource('companies', 'CompanyController');
    Route::get('company-categories', function () {
       return response()->json(
           \App\Http\Resources\CompanyCategoryResource::collection(
                \App\CompanyCategory::with(['children'])->get()
           )
       );
    });
    Route::get('meeting-statuses', function () {
        return response()->json(
            \App\MeetingStatus::all()
        );
    });
    Route::get('meeting-types', function () {
        return response()->json(
            \App\MeetingType::all()
        );
    });
});
