<template>
	<section>
		<NuxtLink to="/" id="nav" exact-active-class="active">Accueil</NuxtLink>
		<NuxtPage></NuxtPage>
	</section>
</template>

<style scoped>
#nav{
	z-index: 1;
	margin: 50px;
	position: absolute;
	left: 0;
	top: 0;
	font-size: 1.5em;
	font-weight: 700;
	text-decoration: none;
	color: black;
	transition: color .25s ease-in-out;}
#nav::before{
	z-index: -1;
	content: "";
	position: absolute;
	bottom: 5px;
	left: 0;
	width: 100%;
	height: 2px;
	background-color: rgba(0,0,0,0);
	transition: all .25s ease-in-out;
}
#nav:hover::before{
	bottom: 0;
	background-color: rgba(0,0,0,1);
}
#nav.active{
	cursor: default;
	color: rgba(0,0,0,0.25);}
#nav.active:hover::before{background-color: rgba(0,0,0,0);}
</style>