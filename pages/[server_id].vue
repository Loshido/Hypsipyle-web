<template>
    <main class="server">
        <h2 class="server_name">Kali</h2>
        <h3 class="server_id">1063497231275143239</h3>
        <section class="server_members">
            <div v-for="member in data">
                <div class="avatar" :style="`background-image: url(https://cdn.discordapp.com/avatars/${member.user_id}/${member.avatar}.png?size=64);`"></div>
                <h2 v-text="member.username"></h2>
            </div>
        </section>
    </main>
</template>

<script setup>
const client = useSupabaseClient()
const route = useRoute()

const { data } = await useAsyncData(async () => {
    const { data, error } = await client.from("Members").select(`*`).eq("server_id", route.params.server_id)
    if(error) throw error
    return data
})

</script>

<style>
main.server > h2.server_name{
    font-weight: 900;
    font-size: 2.5em;
    user-select: none;
    position: relative;
    width: fit-content;
    margin-bottom: 5px;
}
main.server > h2::after{
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 5px;
    border-radius: 50px;
    animation: colorMoving infinite 2.5s ease-in;
}
main.server > h3{
    font-weight: 400;
    opacity: 0.25;
}
main.server > section.server_members{
    margin-top: 20px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: auto;
    gap: 20px;
    width: 100%;
    height: auto;
}
main.server > section.server_members > div{
    width: 100%;
    height: 64px;
    background-color: rgba(30, 33, 36, 1);
    border-radius: 35px 10px;
    display: grid;
    grid-template-columns: 64px auto;
    justify-items: center;
    align-items: center;
}
main.server > section.server_members > div > div.avatar{
    width: 100%;
    height: 100%;
    border-radius: 50% 0;
}
main.server > section.server_members > div > h2{
    color: #fff;
}
</style>