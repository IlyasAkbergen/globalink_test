<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Meeting extends Model
{
    protected $fillable = ['title', 'date', 'description'];
    protected $with = ['user', 'status', 'type'];

    public function company()
    {
        return $this->belongsTo(Company::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function status()
    {
        return $this->belongsTo(MeetingStatus::class, 'status_id');
    }

    public function type()
    {
        return $this->belongsTo(MeetingType::class, 'type_id');
    }
}
