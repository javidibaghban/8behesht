<!DOCTYPE HTML>
<html>
<head>
<meta charset="utf-8">
<title>Untitled Document</title>
</head>
<body>

<?php
	if ( isset($_POST['fullName']) && isset($_POST['mail']) && isset($_POST['subject']) && isset($_POST['msg']) ){
		$name = $_POST['fullName'];
		$mail = $_POST['mail'];
		$subject = $_POST['subject'];
		$msg = $_POST['msg'];
		if( @mail('hashtbehesht.ir@gmail.com ',$subject,'Name: '.$name. "\n" .$msg,"From:info@hasht-behesht.ir\nReply-To:".$mail) ){
			echo '<h1 style="text-align:center;">پیام شما فرستاده شد.در اسرع وقت پاسخگو هستیم.با تشکر</h1>';
		}else{
			echo '<h1 style="text-align:center;">پیام شما فرستاده نشد! لطفا دوباره فرم را پر کنید.با تشکر</h1>';
		}
	}
?>

</body>
</html>