<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Cviebrock\EloquentSluggable\Sluggable;
use GeneaLabs\LaravelModelCaching\Traits\Cachable;

class Category extends Model
{
    use Sluggable;
    use Cachable;

    protected $fillable = [
        'parent_id',
        'name',
        'slug',
        'description',
    ];

    /**
     * Return the sluggable configuration array for this model.
     *
     * @return array
     */
    public function sluggable()
    {
        return [
            'slug' => [
                'source' => 'name'
            ]
        ];
    }

    public static function getList() {
        return self::get(['id', 'name', 'slug', 'description', 'status']);
    }
}
