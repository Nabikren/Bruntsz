<meta charset="utf-8">
<?php
error_reporting(E_ERROR);

if (isset($_POST['username'])) {
  $username = $_POST['username'];
  if ($username == '') {
    unset($username);
  }
}
if (isset($_POST['userphone'])) {
  $userphone = $_POST['userphone'];
  if ($userphone == '') {
    unset($userphone);
  }
}
if (isset($_POST['useremail'])) {
  $useremail = $_POST['useremail'];
  if ($useremail == '') {
    unset($useremail);
  }
}
if (isset($_POST['usercompany'])) {
  $usercompany = $_POST['usercompany'];
  if ($usercompany == '') {
    unset($usercompany);
  }
}
if (isset($_POST['usercomments'])) {
  $usercomments = $_POST['usercomments'];
  if ($usercomments == '') {
    unset($usercomments);
  }
}
if (isset($_POST['sab'])) {
  $sab = $_POST['sab'];
  if ($sab == '') {
    unset($sab);
  }
}

if (isset($username)) {
  $username = stripslashes($username);
  $username = htmlspecialchars($username);
}
if (isset($userphone)) {
  $userphone = stripslashes($userphone);
  $userphone = htmlspecialchars($userphone);
}
if (isset($useremail)) {
  $useremail = stripslashes($useremail);
  $useremail = htmlspecialchars($useremail);
}
if (isset($usercompany)) {
  $usercompany = stripslashes($usercompany);
  $usercompany = htmlspecialchars($usercompany);
}
if (isset($usercomments)) {
  $usercomments = stripslashes($usercomments);
  $usercomments = htmlspecialchars($usercomments);
}

$message = "
Имя: $username \r\n
Телефон: $userphone \r\n
Почта: $useremail \r\n
Комания: $usercompany  \r\n
Комментарии: $usercomments
";

$message = wordwrap($message, 70);

$headers = 'From: andrey@andrew.ru' . "\r\n" .
  'Reply-To: andrey@andrew.ru' . "\r\n" .
  'X-Mailer: PHP/' . phpversion();

var_dump(mail('chernigovsky108@gmail.com', 'Регистрация заявки - Brunt', $message, $headers));
echo "<div style='max-width:1024px; margin:0 auto; padding:0 20px; text-align: center;'>
<p style='color:green;'>Уважаемый(ая) <b style='color:red; font-size:24px'>$username</b> Ваше письмо отправленно успешно. Спасибо. <br>Вам перезвонят в течении 2 часов на номер<b style='color:red;'><span style='letter-spacing: 2px;'> $userphone</span></b>.</p>
</div>";
echo "<a style='font-size: 24px; text-align: center' href='izosimov-andrew.ru'>Вернуться на главную</a>"
  ?>