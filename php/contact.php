<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json; charset=utf-8');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $response = [
        'success' => true,
        'message' => 'Request processed successfully',
        'data' => $_POST
    ];

    echo json_encode($response);
    exit;
} else {
    http_response_code(405);
    echo json_encode([
        'success' => false,
        'message' => 'Request not processed',
    ]);
    exit;
}