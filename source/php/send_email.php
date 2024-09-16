<meta charset="utf-8">
<?php
error_reporting(E_ERROR);

// Инициализация переменных
$username = $userphone = $useremail = $usercompany = $usercomments = $sab = '';

// Проверка и обработка входящих данных
if (isset($_POST['username'])) {
  $username = trim($_POST['username']);
}
if (isset($_POST['userphone'])) {
  $userphone = trim($_POST['userphone']);
}
if (isset($_POST['useremail'])) {
  $useremail = trim($_POST['useremail']);
}
if (isset($_POST['usercompany'])) {
  $usercompany = trim($_POST['usercompany']);
}
if (isset($_POST['usercomments'])) {
  $usercomments = trim($_POST['usercomments']);
}
if (isset($_POST['sab'])) {
  $sab = trim($_POST['sab']);
}

// Проверка на пустые поля
if (empty($username) || empty($userphone) || empty($useremail)) {
  echo "<div style='max-width:1024px; margin:0 auto; padding:0 20px; text-align: center;'>
          <p style='color:red;'>Пожалуйста, заполните все поля перед отправкой.</p>
        </div>";
  echo "<a style='font-size: 24px; text-align: center' href='https://brunt-sz.ru'>Вернуться на главную</a>";
  exit; // Прекращаем выполнение скрипта
}

// Экранирование входящих данных
$username = htmlspecialchars(stripslashes($username));
$userphone = htmlspecialchars(stripslashes($userphone));
$useremail = htmlspecialchars(stripslashes($useremail));
$usercompany = htmlspecialchars(stripslashes($usercompany));
$usercomments = htmlspecialchars(stripslashes($usercomments));

// Формирование сообщения
$message = "
Имя: $username \r\n
Телефон: $userphone \r\n
Почта: $useremail \r\n
Компания: $usercompany \r\n
Комментарии: $usercomments
";

$message = wordwrap($message, 70);

$headers = 'From: order@brunt-sz.ru' . "\r\n" .
  'Reply-To: order@brunt-sz.ru' . "\r\n" .
  'X-Mailer: PHP/' . phpversion();

// Отправка письма
if (mail('brunt-sz@mail.ru', 'Регистрация заявки - Brunt', $message, $headers)) {
  echo "<div style='max-width:1024px; margin:0 auto; padding:0 20px; text-align: center;'>
          <p style='color:green;'>Уважаемый(ая) <b style='color:red; font-size:24px'>$username</b>, Ваше письмо отправлено успешно. Спасибо, наш менеджер с Вами свяжется.</p>
        </div>";
} else {
  echo "<div style='max-width:1024px; margin:0 auto; padding:0 20px; text-align: center;'>
          <p style='color:red;'>Произошла ошибка при отправке сообщения. Пожалуйста, попробуйте позже.</p>
        </div>";
}

echo "<a style='font-size: 24px; text-align: center' href='https://brunt-sz.ru'>Вернуться на главную</a>";
?>