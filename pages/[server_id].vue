<template>
    <main class="server">
        <h2 class="server_name">Kali</h2>
        <h3 class="server_id">1063497231275143239</h3>
        <section class="server_members">
            <div v-for="member in data">
                <div class="avatar" :style="`background-image: url(https://cdn.discordapp.com/avatars/${member.user_id}/${member.avatar}.png?size=64);`"></div>
                <div class="info">
                    <h2 v-text="member.username"></h2>
                    <span>
                        <svg viewBox="0 0 24 24" width="10" height="10">
                            <path
                                d="M11.24,24a2.262,2.262,0,0,1-.948-.212,2.18,2.18,0,0,1-1.2-2.622L10.653,16H6.975A3,3,0,0,1,4.1,12.131l3.024-10A2.983,2.983,0,0,1,10,0h3.693a2.6,2.6,0,0,1,2.433,3.511L14.443,8H17a3,3,0,0,1,2.483,4.684l-6.4,10.3A2.2,2.2,0,0,1,11.24,24Z" />
                        </svg>
                        <h3 v-text="member.xp"></h3>
                    </span>
                </div>
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
main.server > section.server_members ::selection{
    background-color: #fff;
    color: black;
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
main.server > section.server_members > div > div.info{color: #fff;}
main.server > section.server_members > div > div.info > span svg path{fill: rgba(255, 255, 255, 0.3);}
main.server > section.server_members > div > div.info > span{
    font-size: 0.75em;
    display: inline-flex;
    align-items: center;
    gap: 5px;
    color: rgba(255, 255, 255, 0.3);
}

</style>