<script>
    import { base } from "$app/paths";
    import Divider from "../../assets/Divider.svelte";
    import cyrillicToTranslit from 'cyrillic-to-translit-js';
    import { draw } from "../../assets/scripts/draw";
    import background from "../../assets/img/background.png"
    import { onMount } from "svelte";


    let templates = [
        {
            name: "Стандарт (горизонтальный)",
            value: "standarthoriz",
            width: 2000,
            height: 1500,
            id: 0,
            noimage: false,
            lines: [
            {
                placeholder: 'Заголовок',
                value: ''
            }, 
            {
                placeholder: 'Подзаголовок',
                value: ''
            }],
        },
        {
            name: "Стандарт (вертикальный)",
            value: "standartvert",
            width: 1500,
            height: 2000,
            id: 1,
            noimage: false,
            lines: [
            {
                placeholder: 'Заголовок',
                value: ''
            }, 
            {
                placeholder: 'Подзаголовок',
                value: ''
            }],
        },
        {
            name: "Стандарт (квадратный)",
            value: "standartsq",
            width: 1500,
            height: 1500,
            id: 2,
            noimage: false,
            lines: [
            {
                placeholder: 'Заголовок',
                value: ''
            }, 
            {
                placeholder: 'Подзаголовок',
                value: ''
            }],
        },
        {
            name: "День рождения",
            value: "birthday",
            width: 1500,
            height: 1500,
            id: 3,
            noimage: false,
            lines: [
            {
                placeholder: 'Имя Фамилия',
                value: ''
            }, 
            {
                placeholder: 'Должность',
                value: ''
            }],
        },
        {
            name: "Стипком",
            value: "stipcom",
            width: 1920,
            height: 325,
            id: 4,
            noimage: true,
            lines: [
            {
                placeholder: 'До какого числа',
                value: ''
            }],
        },
    ]

    let constructor = {
        id: undefined,
        template: undefined,
        width: 1000,
        height: 1000,
        pos: {
            x: 0,
            y: 0,
            zoom: 100
        },
        filename: 'Загрузить изображение',
        lines: [
        {
            placeholder: 'Заголовок',
            value: ''
        }, 
        {
            placeholder: 'Подзаголовок',
            value: ''
        }],
        image: '',
        noimage: false
    }

    function reset() {
        constructor.noimage = constructor.noimage
        constructor.id = constructor.id,
        constructor.template = constructor.template,
        constructor.width = constructor.width,
        constructor.height = constructor.height,
        constructor.filename = 'Загрузить изображение',
        constructor.lines = constructor.lines,
        constructor.image = ''
        constructor.pos = {
            x: 0,
            y: 0,
            zoom: 100
        }
        clear()
    }

    function download() {
        let link = document.createElement('a')
        link.download = `${constructor.template}_${cyrillicToTranslit({ preset: "ru" }).transform(constructor.lines[0].value, "_").toLowerCase()}.png`
        link.href = document.getElementById('canvas').toDataURL()
        link.click()
    }

    function clear() {
        let canvas = document.getElementById("canvas")
        let ctx = canvas.getContext("2d")
        ctx.clearRect(0, 0, canvas.width, canvas.height)
    }

    function update() {
        console.log(constructor)
        let canvas = document.getElementById("canvas")
        let ctx = canvas.getContext("2d")
        clear()
        let background_img = new Image(); background_img.src = background
        background_img.onload = () => {
            ctx.drawImage(background_img, 0, 0, canvas.width, canvas.height)
            switch (constructor.template) {
                case 'stipcom':
                    draw.stipcom(ctx, constructor, canvas)
                break;
                case 'birthday':
                    draw.birthday(ctx, constructor, canvas)
                break;
                case 'standarthoriz':
                    draw.standartwide(ctx, constructor, canvas)
                break;
                case 'standartvert':
                    draw.standart(ctx, constructor, canvas)
                break;
                case 'standartsq':
                    draw.standart(ctx, constructor, canvas)
                break;
            }
        }
    }

    function change(id, template, width, height, noimage, lines) { 
        constructor.noimage = noimage
        constructor.id = id,
        constructor.template = template,
        constructor.width = width,
        constructor.height = height,
        constructor.image = ''
        constructor.filename = 'Загрузить изображение'
        constructor.pos = {
            x: 0,
            y: 0,
            zoom: 100
        }
        constructor.lines = lines
        clear()
        update()
    }

    function upload(e) {
        constructor.pos = {
            x: 0,
            y: 0,
            zoom: 100
        }
        const file = e.target.files[0]
        constructor.filename = file.name
        const reader = new FileReader()
        reader.onloadend = () => {
            constructor.image = reader.result
            update()
        };
        reader.readAsDataURL(file);
    }

    onMount(() => update())
</script>
<a href="{base}/">Назад</a>
<Divider title="Результат"/>
<canvas width="{constructor.width}" height="{constructor.height}" id="canvas"></canvas>

<Divider title="Настройка"/>
<select bind:value={constructor.template} on:click={update}>
    <option value="" disabled selected>Выберите шаблон</option>
    {#each templates as item}
        <option value={item.value} on:click={() => { update(); change(item.id, item.value, item.width, item.height, item.noimage, item.lines)}}>{item.name}</option>
    {/each}
</select>

{#if !constructor.template}
<span class="subtitle">Пожалуйста, выберите шаблон</span>
{/if}

{#if constructor.template}
    {#each constructor.lines as input}
        <input type="text" placeholder="{input.placeholder}" bind:value={input.value} on:input={update}/>
    {/each}
    {#if constructor.noimage == false}
        <label class="input-file" on:change={upload}>
            <input type="file" multiple accept="image/*">
            <span>{constructor.filename}</span>
        </label>
        <span class="subtitle">Позиционирование</span>
        <span class="range">Zoom <input type="range" min="50" max="500" bind:value={constructor.pos.zoom} title="{constructor.pos.zoom / 100}" on:click={update}></span>
        <span class="range">X <input type="range" min="-{constructor.width*(constructor.pos.zoom / 100)}" max="{constructor.width*(constructor.pos.zoom / 100)}" bind:value={constructor.pos.x} title={constructor.pos.x} on:click={update}></span>
        <span class="range">Y <input type="range" min="-{constructor.height*(constructor.pos.zoom / 100)}" max="{constructor.height*(constructor.pos.zoom / 100)}" bind:value={constructor.pos.y} title={constructor.pos.y} on:click={update}></span>
    {/if}
    <Divider title="Сохранение"/>
    <button class="ok" on:click={download}>Скачать</button>
    <button class="reset" on:click={reset}>Сбросить</button>
{/if}

<style>
    .range {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: space-between;
        align-items: center;
        align-content: center;
        gap: 10px;
        width: 295px;
    }

    .range input {
        width: 75%;
    }

    label {
        position: relative;
        display: flex;
        width: 295px;
        height: 40px;
        border-radius: 10px;
        color: var(--bw-white);
        outline: none; 
        border: none;
        text-align: center; 
        cursor: pointer;
        line-height: 100%;
        background-color: var(--violet-100);
        font-family: Rubik;
        vertical-align: middle;
        font-size: 15px;
        font-weight: 600;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        white-space: nowrap;
    }

    label input[type=file] {
        position: absolute;
        z-index: -1;
        opacity: 0;
        display: block;
        width: 0;
        height: 0;
    }
 
    label:hover {
        background-color: var(--violet-1000);
    }

    label input[type=file]:disabled {
        background-color: var(--bw-dark-gray);
        color: var(--bw-gray);
        cursor: not-allowed;
    }

    canvas {
        width: clamp(200px, 300px, 80vw);
        background: var(--dark-blue-100);
        border-radius: 10px;
    }
    a {
        position: fixed;
        top: 50px;
        left: 50px;
        width: 100px;
        z-index: 1000;
    }
</style>
