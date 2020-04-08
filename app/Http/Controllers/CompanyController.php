<?php

namespace App\Http\Controllers;

use App\Company;
use App\Http\Resources\CompanyResource;
use Illuminate\Http\Request;

class CompanyController extends Controller
{
    public function index()
    {
        $companies = Company::with(['category'])->get();
        return $this->responseSuccess(
            CompanyResource::collection($companies)
        );
    }

    public function store(Request $request)
    {
        $company = new Company();
        $company->fill($request->only(['name', 'address', 'phone', 'email']));

        $company->category_id = $request->category['id'];

        $company->save();

        $company->load(['category']);

        return $this->responseSuccess(
            new CompanyResource($company)
        );
    }

    public function update(Request $request, $id)
    {
        $company = Company::find($id);
        $company->fill($request->only(['name', 'address', 'phone', 'email']));

        $company->category_id = $request->category['id'];

        $company->save();

        $company->load(['category']);

        return $this->responseSuccess(
            new CompanyResource($company)
        );
    }
}
