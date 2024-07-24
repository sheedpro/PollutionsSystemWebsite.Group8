<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $data = [
        'username' => $_POST['username'],
        'first_name' => $_POST['first_name'],
        'last_name' => $_POST['last_name'],
        'email' => $_POST['email'],
        'password' => $_POST['password'],
    ];

    $url = 'http://127.0.0.1:8000/api/pollution/register'; // Ensure this is your actual Laravel app URL

    $options = [
        'http' => [
            'header'  => "Content-Type: application/json",
            'method'  => 'POST',
            'content' => json_encode($data),
        ],
    ];

    $context  = stream_context_create($options);
    $result = @file_get_contents($url, false, $context);

    if ($result === FALSE) {
        $error = error_get_last();
        die('Error registering user: ' . $error['message']);
    }

    $response = json_decode($result, true);

    echo '<h2>Registration Status</h2>';
    if (isset($response['message'])) {
        echo '<p>' . htmlspecialchars($response['message']) . '</p>';
    } elseif (isset($response['errors'])) {
        echo '<p>' . htmlspecialchars(json_encode($response['errors'])) . '</p>';
    } else {
        echo '<p>Unknown error occurred</p>';
    }
}
?>
