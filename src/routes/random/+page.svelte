<script>
    import { titlehead, vh } from "../../assets/scripts/stores";
    import { tweened } from 'svelte/motion';
	import { cubicOut } from 'svelte/easing';
    import Page from "../+page.svelte";

    titlehead.set('Рандомайзер')

    let options = {
        open: false,
        from: 0,
        to: 100,
        duration: 5,
        values: {
            from: 0,
            to: 100,
            duration: 5,
        }
    }

    let likes = tweened(0, {
		duration: Number(options.duration)  * 1000,
		easing: cubicOut
	});

    let show = false
    let color = 'blue-1000'
    let open = false

    function random(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

    function roll() {
        if (show == true) { 
            color = 'blue-1000'
            show = false; 
            open = false
            likes.set(0);
            return 
        }
        if (show == false) { 
            show = true; 
            likes.set(random(Number(options.from), Number(options.to)))
            setTimeout(() => { color = 'bw-white'; open = true }, Number(options.duration) * 1000)
            return 
        }
    }

    function optionsopen() {
        if (options.open == true) { 
            options.open = false
            return 
        }
        if (options.open == false) { 
            options.open = true
            return 
        }
    }
    let button = ''
    let buttonval = 'Применить'

    function set() {
        console.log(Number(options.values.from) )
        if (
            Number(options.values.from) !== NaN && 
            Number(options.values.to) !== NaN &&
            Number(options.values.duration) !== NaN
        ) {
            options.from = Number(options.values.from)
            options.to = Number(options.values.to)
            options.duration = Number(options.values.duration)
            console.log(options)
            options.open = false
        } else {
            button = 'error'
            buttonval = 'Не число'
            setTimeout(() => {
                button = ''
                buttonval = 'Применить'
            }, 700)
        }
    }

</script>


<div class="options-content" open={options.open}>
    <span class="title" open={options.open}>Параметры</span>
    <div class="options-content-button" on:click={optionsopen} on:keypress={optionsopen} open={options.open}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" height="20" width="20"><g><rect x="0.5" y="0.5" width="5" height="5" rx="1" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round"></rect><rect x="8.5" y="0.5" width="5" height="5" rx="1" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round"></rect><rect x="0.5" y="8.5" width="5" height="5" rx="1" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round"></rect><rect x="8.5" y="8.5" width="5" height="5" rx="1" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round"></rect></g></svg>
    </div>
    <input type="text" class="options-content-input" bind:value={options.values.from} placeholder="Минимальное значение" open={options.open}>
    <input type="text" class="options-content-input" bind:value={options.values.to} placeholder="Максимальное значение" open={options.open}>
    <input type="text" class="options-content-input" bind:value={options.values.duration} placeholder="Длительность в секундах" open={options.open}>
    <button open={options.open} class="{button}" on:click={set}>{buttonval}</button>
</div>

<div class="content" style="height: {$vh * 100}px">
    <div class="circle" open="{open}"></div>
    <input id="toggle-heart" type="checkbox" on:input={roll}/>
    <label class="heart" for="toggle-heart" aria-label="like" style="color: var(--{color})">
        ⚄
        {#if show == true}
            {Math.round($likes)}
        {/if}
    </label>
</div>






<style>

    .options-content-button:hover {
        background-color: var(--blue-1000);
    }

    .options-content-button {
        width: 50px;
        height: 50px;
        top: 0px;
        right: 0px;
        position: absolute;
        border-radius: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
    }

    .title {
        position: absolute;
        left: 0px;
        top: 0px;
        width: 100%;
        height: 75px;
        font-size: 25px;
        line-height: 75px;
        vertical-align: middle;
    }

    .title[open="false"] {
        opacity: 0;
        visibility: hidden;
        display: none;
    }

    input[open="false"] {
        opacity: 0;
        visibility: hidden;
        display: none;
    }

    button[open="false"] {
        opacity: 0;
        visibility: hidden;
        display: none;
    }

    input {
        width: 200px;
    }
    button {
        width: 200px;
    }

    .options-content[open="false"] {
        width: 50px;
        height: 50px;
        padding: 0px;
        background-color: rgba(0, 0, 0, 0);
    }

    .options-content {
        background-color: var(--dark-blue-5);
        z-index: 100;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 15px;
        padding: 25px;
        padding-top: 75px;
        border-radius: 10px;
        top: 50px;
        right: 50px;
        position: absolute;
        transition: 0s;
    }

    .circle[open="true"] {
        background-color: var(--blue-1000);
        width: 300vh;
        aspect-ratio: 1 / 1;
    }
    .circle[open="false"] {
        background-color: var(--blue-1000);
        width: 0vw;
        aspect-ratio: 1 / 1;
    }
    .circle {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        border-radius: 50%;
    }

    .heart:hover {
        opacity: .7;
    }

    [id='toggle-heart'] {
        position: absolute;
        left: -100vw;
    }
    [id='toggle-heart']:checked + label {
        color: var(--red-1000);
        filter: none;
        will-change: font-size;
        -webkit-animation: heart 2.5s cubic-bezier(0.17, 0.89, 0.32, 1.49);
                animation: heart 2.5s cubic-bezier(0.17, 0.89, 0.32, 1.49);
    }
    [id='toggle-heart']:checked + label:before, [id='toggle-heart']:checked + label:after {
        -webkit-animation: inherit;
                animation: inherit;
        -webkit-animation-timing-function: ease-out;
                animation-timing-function: ease-out;
    }

    [for='toggle-heart'] {
        align-self: center;
        position: relative;
        color: #ffffff;
        font-size: 20vw;
        filter: grayscale(1);
        -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
                user-select: none;
        cursor: pointer;
    }
    [for='toggle-heart']:before, [for='toggle-heart']:after {
        position: absolute;
        z-index: -1;
        top: 50%;
        left: 50%;
        border-radius: 50%;
        content: '';
    }
    [for='toggle-heart']:before {
        box-sizing: border-box;
        margin: 0rem;

        width: 20rem;
        height: 20rem;
        transform: scale(0);
    }

    @-webkit-keyframes heart {
        0%, 17.5% {
            font-size: 0;
        }
    }

    @keyframes heart {
        0%, 17.5% {
            font-size: 0;
        }
    }
    .content {
        width: 100vw;
        position: absolute;
        top: 0px;
        left: 0px;
        display: flex;
        justify-content: center;
        margin: 0;
        overflow: hidden;
    }
</style>