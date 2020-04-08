<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class CompanyResource extends JsonResource
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
            'id' => $this->id,
            'name' => $this->name,
            'address' => $this->address,
            'phone' => $this->phone,
            'email' => $this->email,
            'category' => $this->when($this->relationLoaded('category'),
                new CompanyCategoryResource($this->category)),
            'meetings' => $this->when($this->relationLoaded('meetings'),
                MeetingResource::collection($this->meetings)),
        ];
    }
}
