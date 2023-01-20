<template>
	<section>
		<NuxtLink to="/" id="nav" exact-active-class="active">Accueil</NuxtLink>
		<a v-if="$route.path == '/'" href="https://discord.com/oauth2/authorize?client_id=1063498685763297290&permissions=2147559424&scope=bot" target="_blank" id="ref">Inviter Hypsipyle</a>
		<NuxtPage></NuxtPage>
	</section>
</template>

<style scoped>
a{
	z-index: 1;
	margin: 50px;
	position: absolute;
	font-size: 1.5em;
	font-weight: 700;
	text-decoration: none;
	color: black;
	transition: color .25s ease-in-out;}
a::before{
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
a:hover::before{
	bottom: 0;
	background-color: rgba(0,0,0,1);
}
#ref{
	top: 0;
	right: 0;
}
#nav{
	top: 0;
	left: 0;
}
#nav.active{
	cursor: default;
	color: rgba(0,0,0,0.25);}
#nav.active:hover::before{background-color: rgba(0,0,0,0);}
</style>