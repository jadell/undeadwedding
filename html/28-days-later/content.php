<?php
$dataFilePath = '../data.txt';

if (!$loggedIn) {
	header("Location: /login");
} else if (isset($_POST['vote'])) {
	file_put_contents($dataFilePath, $_POST['vote']."\n", FILE_APPEND|LOCK_EX);
	header("Location: /28-days-later");
}

$dataFile = file($dataFilePath);
$preferredWeapon = array();
foreach ($dataFile as $choice) {
	if (!isset($preferredWeapon[$choice])) {
		$preferredWeapon[$choice] = 0;
	}
	$preferredWeapon[$choice]++;
}

arsort($preferredWeapon);
?>

<h2>Preferred Zombie Dispatching Implement</h2>
<ul id="weapon">
	<?php foreach ($preferredWeapon as $weapon => $count) : ?>
		<li><?php echo $weapon; ?>: <?php echo $count; ?></li>
	<?php endforeach; ?>
</ul>

<form id="voteForm" method="POST" action="">
	<label for="vote">Your choice:</label>
	<input id="vote" name="vote" type="text" value="" /><br />

	<button type="submit">Vote</button>
</form>
