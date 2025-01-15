<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json; charset=utf-8');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  $email = $_POST['email'];
  $subject = 'Test Email';
  $message = 'Thank you!';
  $headers = 'From: example@example.com';
  
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
