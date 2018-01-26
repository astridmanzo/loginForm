$(document).ready(() => {

	const $login = $('#login');
	const $form = $('.hide');
	const $menuButton = $('#menu');
	const $menu = $('.menu')

	$login.on('click', () => {
    	$form.toggle();
    	$menu.hide();
  })

	$menuButton.on('click', () => {
		$menu.toggle();
		$form.hide();
	})
	 
})


