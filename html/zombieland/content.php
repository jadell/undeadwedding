<script type="text/javascript">
$(document).ready(function() {
	$('#car-door').click(function(e){
		e.preventDefault();
		var r = confirm('A car Door? Really, Really?');
		if(!r){
			alert('Zombie eats your face.');
		}else{
			alert('ThummPMPmpp!!! It really is the little things.');
		}
	});
	$('#assault-rifle').click(function(e){
		e.preventDefault();
		alert('No ammo. Zombie eats your face.');
	});
	$('#fire').click(function(e){
		e.preventDefault();
		alert('Sweet sweet seared zombie flesh.');
	});
});
</script>


<h2>Zombies approach for the east and west. Which Implement?</h2>
<a id="car-door" href="">Car Door</a>
<a id="assault-rifle" href="">Assault Rifle</a>
<a id="fire" href="">Fire, lots of fire</a>
