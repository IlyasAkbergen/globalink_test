<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class CompanyCategory extends Model
{
    protected $with = ['children'];

    public function children() {
        return $this->hasMany(self::class, 'parent_id')
            ->orderBy('name');
    }
}
