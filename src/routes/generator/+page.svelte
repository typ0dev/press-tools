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
        name: 'Выберите шаблон',
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

    function clear() {
        let canvas = document.getElementById("canvas")
        let ctx = canvas.getContext("2d")
        ctx.clearRect(0, 0, canvas.width, canvas.height)
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
        constructor.lines.forEach(element => {
            element.value = ''
        });
        clear()

    }

    function download() {
        let link = document.createElement('a')
        link.download = `${constructor.template}_${cyrillicToTranslit({ preset: "ru" }).transform(constructor.lines[0].value, "_").toLowerCase()}.png`
        link.href = document.getElementById('canvas').toDataURL()
        link.click()
    }

    function update() {
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

    function change(id, template, width, height, noimage, lines, name) { 
        console.log('change')
        constructor.noimage = noimage
        constructor.id = id,
        constructor.name = name,
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
        console.log(name)
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
    let opened = false
    function open() {
        if (opened == true) { opened = false; return }
        if (opened == false) { opened = true; return }
    }

    onMount(() => update())
</script>
<a href="{base}/">Назад</a>
<Divider title="Результат"/>
<canvas width="{constructor.width}" height="{constructor.height}" id="canvas"></canvas>

<Divider title="Настройка"/>

<div class="select" style="width: 295px; height: 40px">
    <div class="select-dropdown" opened={opened}>
        <div class="select-dropdown-placeholder" style="width: 295px; height: 40px">{constructor.name}</div>
        {#each templates as item}
            <div class="select-dropdown-option" 
            on:keypress={() => { open(); change(item.id, item.value, item.width, item.height, item.noimage, item.lines, item.name)}} 
            on:click={() => { open(); change(item.id, item.value, item.width, item.height, item.noimage, item.lines, item.name)}}>
                {item.name}
            </div>
        {/each}
    </div>
    {constructor.name}
    <div class="select-button" on:click={open} on:keypress={open}>
        <svg class="select-button-icon" opened={opened} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" height="16" width="16"><path d="M.5,3.85,6.65,10a.48.48,0,0,0,.7,0L13.5,3.85" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round"></path></svg>
    </div>
</div>

{#if constructor.template}
    {#if constructor.noimage == false}
        <span class="subtitle">Позиционирование</span>
        <span class="range">Zoom <input type="range" min="50" max="500" bind:value={constructor.pos.zoom} title="{constructor.pos.zoom / 100}" on:input={update}></span>
        <span class="range">X <input type="range" min="-{constructor.width*(constructor.pos.zoom / 100)}" max="{constructor.width*(constructor.pos.zoom / 100)}" bind:value={constructor.pos.x} title={constructor.pos.x} on:input={update}></span>
        <span class="range">Y <input type="range" min="-{constructor.height*(constructor.pos.zoom / 100)}" max="{constructor.height*(constructor.pos.zoom / 100)}" bind:value={constructor.pos.y} title={constructor.pos.y} on:input={update}></span>
        <label class="input-file" on:change={upload}>
            <input type="file" multiple accept="image/*">
            <span>{constructor.filename}</span>
        </label>
    {/if}
    {#each constructor.lines as input}
        <input type="text" placeholder="{input.placeholder}" bind:value={input.value} on:input={update}/>
    {/each}

    <Divider title="Сохранение"/>
    <button class="ok" on:click={download}>Скачать</button>
    <button class="reset" on:click={reset}>Сбросить</button>
{/if}

<style>
    .select-dropdown-option:hover {
        background-color: var(--dark-blue-10);
    }

    .select-dropdown-option {
        width: 100%;
        height: 40px;
        border-radius: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        background-color: var(--dark-blue-5);
    }
    
    .select-button-icon[opened="true"] {
        transform: rotate(180deg);
    }

    .select-button-icon[opened="false"] {
        transform: rotate(0deg);
    }

    .select-dropdown-placeholder {
        font-size: 15px;
        position: absolute;
        top: 0px;
        background-color: var(--violet-100);
        border-radius: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 10 !important;
    }

    .select-dropdown[opened="false"] {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 0px 15px 15px;
        gap: 15px;
        border-radius: 10px;
        background-color: var(--dark-blue-5);
        position: absolute;
        top: 0px;
        z-index: 9;
        visibility: hidden;
        opacity: 0;
    }

    .select-dropdown[opened="true"] {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 55px 15px 15px;
        gap: 15px;
        border-radius: 10px;
        background-color: var(--dark-blue-5);
        position: absolute;
        top: 0px;
        opacity: 1;
    }

    .select-button:hover {
        background-color: var(--violet-1000);
    }

    .select-button {
        background-color: var(--violet-100);
        border-radius: 10px;
        aspect-ratio: 1 / 1;
        height: 100%;
        right: 0px;
        top: 0px;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        z-index: 11 !important;
    }

    .select {
        font-size: 15px;
        position: relative;
        background-color: var(--violet-100);
        border-radius: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 10 !important;
    }

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
