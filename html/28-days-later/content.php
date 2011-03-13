<?php
if (!isset($_SESSION['votes'])) {
	$_SESSION['votes'] = array('Ax','Chainsaw','Shotgun','Ax','Chainsaw','Shotgun','Shotgun','Shotgun','Chainsaw','Shotgun');
}

if (!$loggedIn) {
	header("Location: /login");
} else if (isset($_POST['vote'])) {
	$_SESSION['votes'][] = $_POST['vote'];
}

$preferredWeapon = array();
foreach ($_SESSION['votes'] as $choice) {
	$choice = trim($choice);
	if ($choice) {
		if (!isset($preferredWeapon[$choice])) {
			$preferredWeapon[$choice] = 0;
		}
		$preferredWeapon[$choice]++;
	}
}

arsort($preferredWeapon);
?>

<h2>Preferred Zombie Dispatching Implement</h2>
<ul id="weapon">
	<?php foreach ($preferredWeapon as $weapon => $count) : ?>
		<li><span class="choice"><?php echo $weapon; ?></span>: <span class="count"><?php echo $count; ?></span></li>
	<?php endforeach; ?>
</ul>

<form id="voteForm" method="POST" action="">
	<label for="vote">Your choice:</label>
	<input id="vote" name="vote" type="text" value="" /><br />

	<button type="submit">Vote</button>
</form>
