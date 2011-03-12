<?php

$badLogin = false;
$username = "";
if (isset($_POST['username'])) {
	if ($_POST['username'] == 'shaun' &&  $_POST['password'] == 'winchester') {
		$_SESSION['loggedIn'] = true;
		header("Location: /");
	} else {
		$badLogin = true;
		$username = $_POST['username'];
	}
} else if (isset($_GET['logout'])) {
	$_SESSION['loggedIn'] = false;
	header("Location: /");
}
?>

<h2>Login</h2>

<?php if ($badLogin) : ?>
<div class="error">You've got red on you.</div>
<?php endif; ?>

<form id="loginForm" method="POST" action="">
	<label for="username">Username:</label>
	<input id="username" name="username" type="text" value="<?php echo $username; ?>" /><br />

	<label for="password">Password:</label>
	<input id="password" name="password" type="password" value="" /><br />

	<button type="submit">Login</button>
</form>
