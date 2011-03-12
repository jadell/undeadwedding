<?php
session_start();
$loggedIn = isset($_SESSION['loggedIn']) ? $_SESSION['loggedIn'] : false;
?>
<!DOCTYPE html>
<html>
<head>
	<title>undead wedding - automated full stack testing using zombie and vows</title>
	<meta charset="utf-8" />
	
	<link rel="stylesheet" href="/css/main.css" type="text/css" />

	<!--[if IE]>
		<script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
	<![endif]-->
	<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.5.1/jquery.min.js"></script>

</head>
<?php
$active = function($v){
	if($_SERVER['REQUEST_URI'] == $v){
		echo 'class="active"';
	}
};
?>
<body id="index" class="home">
	
	<header id="banner" class="body">
		<img src="/img/magical_zombie_girl.jpg"/>
		<h1><a href="#">undead wedding!<strong>automated full stack testing using zombie and vows</strong></a></h1>
		<nav><ul>
			<li <?php $active('/') ?>><a href="/">home</a></li>
			<li <?php $active('/zombieland/') ?>><a href="/zombieland/">Zombieland</a></li>
			<li <?php $active('/walking-dead/') ?>><a href="/walking-dead/">Walking Dead</a></li>
			<li <?php $active('/28-days-later/') ?>><a href="/28-days-later/">28 Days Later</a></li>
	<?php if(!$loggedIn): ?>
			<li <?php $active('/login/') ?>><a href="/login/">login</a></li>
	<?php else: ?>
			<li <?php $active('/logout/') ?>><a href="/login?logout=1">logout</a></li>
	<?php endif; ?>
		</ul></nav>
	</header><!-- /#banner -->
	
	<section id="content" class="body">
		<?php
			if(!isset($dir)){
				$dir = __DIR__;
			} 
			require_once($dir.'/content.php'); 
		?>		
	</section><!-- /#content -->

	
	<footer id="contentinfo" class="body">
		<address id="about" class="vcard body">
			<span class="primary">
				<strong><a href="#" class="fn url">Undead Wedding</a></strong>
				<span class="role">Full Stack Testing</span>
			</span><!-- /.primary -->
		
		
			<span class="bio">undead wedding! <strong>automated full stack testing using zombie and vows</strong></span>

		
		</address><!-- /#about -->
	</footer><!-- /#contentinfo -->
</body>
</html>
