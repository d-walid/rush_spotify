<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/

$router->get('/', function () use ($router) {
    return $router->app->version();
});

//artists list
$router->get('artists', function (){
    $results = DB::SELECT("SELECT id, name, bio FROM artists");
    return $results;
});

//artists details
$router->get('artists/{id}', function($id){
    $results = DB::SELECT("SELECT * FROM artists WHERE id = $id");
    return $results;
});

//albums list of an artist
$router->get('artists/{id}/{artist_id}', function($artist, $album){
    $results = DB::SELECT("SELECT albums.id, albums.artist_id, albums.name AS 'albumname', 
    albums.cover, albums.description, albums.popularity, albums.release_date 
    FROM albums
    LEFT JOIN artists ON albums.artist_id = artists.id 
    WHERE artists.id = $artist OR albums.artist_id = $album");
    return $results;
});

//albums list
$router->get('albums', function(){
    $results = DB::SELECT("SELECT id, name, cover FROM albums ORDER BY albums.name");
    return $results;
});

//details of an album
$router->get('albums/{id}', function($id){
    $results = DB::SELECT("SELECT * FROM albums WHERE id = $id");
    return $results;
});

//album details and tracks
$router->get('albums/{id}/{album_id}', function($album, $tracks){
    $results = DB::SELECT("SELECT albums.id AS 'albumid', 
    albums.artist_id, albums.cover, albums.name AS 'albumname', 
    albums.popularity, albums.release_date, tracks.id AS 'trackid',
    tracks.album_id, tracks.track_no, tracks.name AS 'trackname',
    tracks.duration, tracks.mp3 FROM albums 
    LEFT JOIN tracks ON albums.id = tracks.album_id 
    WHERE albums.id = $album OR tracks.album_id = $tracks");
    return $results;
});

$router->get('tracks', function() {
    $results = DB::SELECT("SELECT * FROM tracks");
    return $results;
});

//tracks details
$router->get('tracks/{id}', function ($id) {
    $results = DB::SELECT("SELECT * FROM tracks WHERE id = $id");
    return $results;
});

//genres list
$router->get('genres', function () {
    $results = DB::SELECT("SELECT * FROM genres ORDER BY genres.name");
    return $results;
});

//genre detail and albums id having this genre
$router->get('genres/{id}', function ($genre) {
    $results = DB::SELECT("SELECT genres.id AS 'genreid', genres.name AS 'genrename', 
    genres_albums.genre_id, genres_albums.album_id, albums.id, albums.name FROM genres 
    LEFT JOIN genres_albums ON genres.id = genres_albums.genre_id 
    RIGHT JOIN albums ON genres_albums.album_id = albums.id 
    WHERE genres_albums.genre_id = $genre");
    return $results;
});
