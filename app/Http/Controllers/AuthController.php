<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Http;

class AuthController extends Controller
{
    //
    public function login(Request $request)
    {
        try {
            $response = Http::post(config('services.passport.login_endpoint'), [
                'grant_type' => 'password',
                'client_id' => config('services.passport.client_id'),
                'client_secret' => config('services.passport.client_secret'),
                'username' => $request->username,
                'password' => $request->password,
                'scope' => '',
            ]);
            return $response->json();
        } catch (\Throwable $th) {
            return $th->getMessage();
        }
    }
}
