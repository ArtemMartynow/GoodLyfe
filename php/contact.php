<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json; charset=utf-8');

function validatePhoneNumber($phone) {
  return preg_match('/^\+1\s?\(\d{3}\)\s?\d{3}-\d{4}$/', $phone);
}

function validateEmail($email) {
  return filter_var($email, FILTER_VALIDATE_EMAIL);
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  $input = json_decode(file_get_contents('php://input'), true);

  if (!isset($input['email']) || !isset($input['phone'])) {
    echo json_encode([
      'success' => false,
      'message' => 'Missing email or phone number.'
    ]);
    exit;
  }

  $phone = $input['phone'];
  $email = $input['email'];
  $subject = 'Test Email';
  $message = 'Thank you!';
  $headers = 'From: example@example.com';

  if (!validateEmail($email)) {
    $response = [
      'success' => false,
      'message' => 'Invalid email address.',
    ];
    echo json_encode($response);
    exit;
  }

  if (!validatePhoneNumber($phone)) {
    $response = [
      'success' => false,
      'message' => 'Phone number must be in the format +1 (XXX) XXX-XXXX.',
    ];
    echo json_encode($response);
    exit;
  }
  
  if (mail($email, $subject, $message, $headers)) {
      $response = [
          'success' => true,
          'message' => 'Email sent successfully!',
      ];
  } else {
    $response = [
      'success' => false,
      'message' => 'Failed to send email.',
    ];
  }

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
?>