<script type="text/javascript">
var health = function(el){
	h = $(el).attr('rel');
	if(h <= 0){
		h = 0;
		$(el).attr('class', 'dead');
	}
	$(el).find('.health').css('width', h+'px');
	$(el).find('.health').css('background-color', 'green');
}
$(document).ready(function() {
        $('#zombies li').click(function(e){
                e.preventDefault();
		ammo = $('#ammo').text();
		ammo--;
		if(ammo < 0){
			alert('Click click. Crap. Zombie eats your face!!');
			return;
		}
		h = $(this).attr('rel');
		h = h - 22;
		$(this).attr('rel', h);
		health($(this));
		$('#ammo').text(ammo);
		return
        });

	$('#zombies li').each(function(){
		health($(this));
	});
});


</script>
<h4>Ammo: <span id="ammo">56</span></h4>

<ul id="zombies">
	<li rel="100">Zombie <div class="health"></div></li>
	<li rel="0" class="dead">Zombie <div class="health"></div></li>
	<li rel="70">Zombie <div class="health"></div></li>
	<li rel="20">Zombie <div class="health"></div></li>
	<li rel="100">Zombie <div class="health"></div></li>
	<li rel="0" class="dead">Zombie <div class="health"></div></li>
	<li rel="20">Zombie <div class="health"></div></li>
	<li rel="0" class="dead">Zombie <div class="health"></div></li>
	<li rel="0" class="dead">Zombie <div class="health"></div></li>
	<li rel="0" class="dead">Zombie <div class="health"></div></li>
	<li rel="100">Zombie <div class="health"></div></li>
	<li rel="22">Zombie <div class="health"></div></li>
	<li rel="1">Zombie <div class="health"></div></li>
	<li rel="0" class="dead">Zombie <div class="health"></div></li>
	<li rel="100">Zombie <div class="health"></div></li>
	<li rel="5">Zombie <div class="health"></div></li>
	<li rel="80">Zombie <div class="health"></div></li>
	<li rel="100">Zombie <div class="health"></div></li>
	<li rel="0" class="dead">Zombie <div class="health"></div></li>
	<li rel="90">Zombie <div class="health"></div></li>
	<li rel="100">Zombie <div class="health"></div></li>
	<li rel="0" class="dead">Zombie <div class="health"></div></li>
	<li rel="100">Zombie <div class="health"></div></li>
	<li rel="100">Zombie <div class="health"></div></li>
</ul>
