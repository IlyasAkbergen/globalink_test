<?php

namespace App\Http\Controllers;

use App\Http\Resources\MeetingResource;
use App\Meeting;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class MeetingController extends Controller
{
    public function index()
    {
        $meetings = Auth::user()->meetings;

        return $this->responseSuccess(
            MeetingResource::collection($meetings)
        );
    }

    public function store(Request $request)
    {
        $meeting = new Meeting();
        $meeting->fill($request->only(['title', 'date', 'description']));

        $meeting->company_id = $request->company['id'];
        $meeting->status_id = $request->status['id'];
        $meeting->type_id = $request->type['id'];
        $meeting->user_id = $request->user()->id;

        $meeting->date = Carbon::parse($request->date . ' ' . $request->time);

        $meeting->save();

        $this->responseSuccess(
            new MeetingResource($meeting)
        );
    }

    public function update(Request $request, $id)
    {
        $meeting = Meeting::find($id);
        $meeting->fill($request->only(['title', 'date', 'description']));

        $meeting->company_id = $request->company['id'];
        $meeting->status_id = $request->status['id'];
        $meeting->type_id = $request->type['id'];
        $meeting->user_id = $request->user()->id;

        $meeting->save();

        $this->responseSuccess(
            new MeetingResource($meeting)
        );
    }
}
