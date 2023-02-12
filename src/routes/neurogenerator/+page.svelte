<script>
    import { base } from "$app/paths";
    import { draw } from "../../assets/scripts/draw";
    import Divider from "../../assets/Divider.svelte";
    import { gen } from "./gen";
    import { titlehead } from "../../assets/scripts/stores";

    titlehead.set('Нейроновости')

    let emojis = ["✌","😂","😝","😁","😱","👉","🙌","🍻","🔥","🌈","☀","🎈","🌹","💄","🎀","⚽","🎾","🏁","😡","👿","🐻","🐶","🐬","🐟","🍀","👀","🚗","🍎","💝","💙","👌","❤","😍","😉","😓","😳","💪","💩","🍸","🔑","💖","🌟","🎉","🌺","🎶","👠","🏈","⚾","🏆","👽","💀","🐵","🐮","🐩","🐎","💣","👃","👂","🍓","💘","💜","👊","💋","😘","😜","😵","🙏","👋","🚽","💃","💎","🚀","🌙","🎁","⛄","🌊","⛵","🏀","🎱","💰","👶","👸","🐰","🐷","🐍","🐫","🔫","👄","🚲","🍉","💛","💚"]
    let constructor = {
        width: 1500,
        height: 1500,
        string: '',
        articles: [],
        lines: [
        {
            placeholder: '',
            value: ''
        }, 
        {
            placeholder: '',
            value: ''
        }],
    }
    function removeItemAll(arr, value) {
    var i = 0;
    while (i < arr.length) {
        if (arr[i] === value) {
        arr.splice(i, 1);
        } else {
        ++i;
        }
    }
    return arr;
    }
    let title
    let randomemoji
    async function update() {
        let canvas = document.getElementById("canvas")
        let ctx = canvas.getContext("2d")
        constructor.articles = []
        let post = await gen()
        constructor.string = post
        draw.randomImage(canvas, constructor.string, constructor)
        let articles = post.split('|')
        articles.forEach(element => {
            if (element.split('').length > 10) constructor.articles.push(element)
        });
        title = constructor.articles[0].split(' ')
        removeItemAll(title, "")
        removeItemAll(title, " ")
        constructor.lines[0].value = `${title[0]} ${title[1]}`
        constructor.lines[0].value = constructor.lines[0].value.split('')
        removeItemAll(constructor.lines[0].value, ",")
        constructor.lines[0].value = constructor.lines[0].value.join('')

        constructor.lines[1].value = `${title[2]} ${title[3]}`
        constructor.lines[1].value = constructor.lines[1].value.split('')
        removeItemAll(constructor.lines[1].value, ",")
        constructor.lines[1].value = constructor.lines[1].value.join('')
        randomemoji = Math.floor(Math.random()*emojis.length)
    }
    function download() {
        let link = document.createElement('a')
        link.download = `neurogenerate_${Date.now()}.png`
        link.href = document.getElementById('canvas').toDataURL()
        link.click()
    }
</script>

<Divider title="Результат"/>
<canvas width="{constructor.width}" height="{constructor.height}" id="canvas"></canvas>
<button style="width: 300px" on:click={update}>Сгенерировать</button>
<button style="width: 300px" class="ok" on:click={download}>Скачать</button>
{#if constructor.string}
    <div class="post">
        #Нейроновости@profkom_uk_lgtu
        <br><br>
        {emojis[randomemoji]} {constructor.lines[1].value.toUpperCase()} {emojis[randomemoji]}
        <br><br>
        {#each constructor.articles as article}
            {article}
            <br><br>
        {/each}
        Ваш, Университетский колледж 💜
        <br><br>
        Автор: Нейросеточка
        <br><br>
        #УК_ЛГТУ<br>
        #УК_МАШИНА<br>
        #Профбюро_УК<br>
        #Профком_студентов_ЛГТУ<br>
    </div>
{/if}

<style>
    .post {
        width: 300px;
        padding: 15px;
        border-radius: 10px;
        background: var(--dark-blue-100);
        user-select: text;
    }
    canvas {
        width: clamp(200px, 300px, 80vw);
        background: var(--dark-blue-100);
        border-radius: 10px;
    }
</style>
