<!doctype html>
<html lang="{{ app()->getLocale() }}">

<head>
    <title>Laravel</title>
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <link rel="stylesheet" type="text/css" href="{{ asset('css/app.css') }}">
</head>

<body>
    <div id="app">
        <App></App>
    </div>

    <script src="{{ asset('js/app.js') }}"></script>
</body>

</html>