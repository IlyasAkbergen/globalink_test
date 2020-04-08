<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class MeetingResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'title' => $this->title,
            'date' => $this->date->isoFormat('DD.MM.YYYY HH:mm'),
            'description' => $this->description,
            'status' => $this->when($this->relationLoaded('status'), $this->status),
            'type' => $this->when($this->relationLoaded('type'), $this->type),
            'user' => $this->when($this->relationLoaded('user'), $this->user)
        ];
    }
}
