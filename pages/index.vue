<template>
    <main id="servers">
        <h1>Serveurs disponible</h1>
        <section>
            <NuxtLink v-for="server in data" :to="server.server_id">
                <div class="server">
                    <div class="avatar" :style="`background-image: url(https://cdn.discordapp.com/icons/${server.server_id}/${server.avatar}.png?size=64);`"></div>
                    <div class="info">
                        <h2 v-text="server.name"></h2>
                        <h3 v-text="server.server_id"></h3>
                    </div>
                </div>
            </NuxtLink>
        </section>
    </main>
</template>

<script setup>
const client = useSupabaseClient()

const { data } = await useAsyncData(async () => {
    const { data, error } = await client.from("Servers").select(`*`)
    if(error) throw error
    return data
})
</script>

<style>
@font-face {
    font-family: "Inter";
    src: url(@/assets/Inter.ttf);
}
* {
    margin: 0;
    border: 0;
    box-sizing: border-box;
    font-family: "Inter";
    font-weight: 600;
}
main{
    width: calc(100% - 40vw);
    height: calc(100% - 20vh);
    margin: 10vh 20vw;
}
main#servers > h1{
    font-weight: 900;
    font-size: 2.5em;
    user-select: none;
    position: relative;
    width: fit-content;
}
main#servers > h1::after{
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 5px;
    background-color: red;
    border-radius: 50px;
    animation: colorMoving infinite 2.5s ease-in;
}
@keyframes colorMoving {
    0%{
        width: 100%;
        background-color: #000;}
    50%{
        width: 110%;
        background-color: #12b886;}
    100%{
        width: 100%;
        background-color: #000;}
}
main#servers > section{
    margin-top: 50px;
    width: 100%;
    height: auto;
    display: grid;
    gap: 20px;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto;
}
main#servers > section .server:hover{
    background-color: rgba(30, 33, 36, 0.9);
}
main#servers > section .server{
    color: #fff;
    cursor: pointer;
    width: 100%;
    height: 64px;
    background-color: rgba(30, 33, 36, 1);
    border-radius: 40px 15px 15px 15px;
    display: grid;
    grid-template-columns: 64px auto;
    transition: background-color .1s ease-in-out;
}
main#servers > section .server > div.avatar{
    width: 64px;
    height: 64px;
    border-radius: 50%;
    background-color: rgba(30, 33, 36, 0.75);
}
main#servers > section .server > div.info{
    padding: 10px;
}
main#servers > section .server > div.info > h3{
    font-size: 0.75em;
    color: rgba(255,255,255,0.5);}
a{text-decoration: none;}
</style>