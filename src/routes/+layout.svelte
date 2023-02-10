<script>
    import { vh } from "../assets/scripts/stores"
    import "../assets/fonts/font-faces.css"
    vh.set(window.innerHeight * 0.01)
    window.addEventListener('resize', function(event) {
        vh.set(window.innerHeight * 0.01)
    }, true);
</script>

<main style="min-height: {$vh * 100}px; width: 100vw; background: var(--dark-blue-1000); overflow-x: hidden;">
    <slot></slot>
</main>

<style>
    
    main {
        padding: 50px;
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        justify-content: flex-start;
        align-items: center;
        align-content: stretch;
        overflow: scroll;
        gap: 25px;
        min-height: 0
    }

    :global(:root) {
        --dark-blue-1000: #07090d;
        --dark-blue-100: #0b0e14;
        --dark-blue-50: #0c1017;
        --dark-blue-10: #121721;
        --dark-blue-5: #151c28;
        --red-1000: #d92626;
        --red-100: #dc3c3c;
        --red-10: #e46767;
        --blue-1000: #2662d9;
        --blue-100: #3c71dc;
        --blue-10: #6791e4;
        --yellow-1000: #d98026;
        --yellow-100: #dc8c3c;
        --yellow-10: #e4a667;
        --violet-1000: #6226d9;
        --violet-100: #713cdc;
        --violet-10: #9167e4;
        --green-1000: #62d926;
        --green-100: #72dc3c;
        --green-10: #91e467;
        --bw-dark-gray: #404040;
        --bw-gray: #808080;
        --bw-white: #ffffff;
        --bw-black: #000000;
    }

    :global(body) {
        margin: 0px;
        background-color: var(--dark-blue-1000);
        min-width: 300px;
        user-select: none;
        font-family: Rubik;
        color: var(--bw-white);
    }

    :global(img) {
        pointer-events: none;
    }

    :global(::-webkit-scrollbar) {
        width: 5px;
        height: 5px;
    }

    :global(::-webkit-scrollbar-track) {
        border-radius: 10px;
    }

    :global(::-webkit-scrollbar-thumb) {
        background:var(--bw-white);
        opacity: .5;
        border-radius: 10px;
    }

    :global(::-webkit-scrollbar-thumb:hover) {
        background:var(--bw-white);
        opacity: .7;
    }

    :global(::selection) {
        background: var(--bw-gray);
    }

    :global(*) {
        box-sizing: border-box;
        transition: .4s ease-in-out;
    }

    :global(a) {
        display: inline-block;
        -webkit-appearance: button;
        -moz-appearance: button;
        appearance: button;
        width: 295px;
        height: 40px;
        border-radius: 10px;
        color: var(--bw-white);
        outline: none; 
        border: none;
        cursor: pointer;
        line-height: 40px;
        background-color: var(--blue-100);
        font-family: Rubik;
        text-align: center;
        vertical-align: middle;
        text-decoration: none;
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: center;
        align-items: center;
        align-content: stretch;
        font-size: 15px;
    }

    :global(a:hover) {
        background-color: var(--blue-1000);
    }

    :global(a[disabled]) {
        background-color: var(--bw-dark-gray);
        pointer-events: none;
        color: var(--bw-gray);
        cursor: not-allowed;
    }
    
    :global(button) {
        width: 295px;
        height: 40px;
        border-radius: 10px;
        color: var(--bw-white);
        outline: none; 
        border: none;
        text-align: center; 
        cursor: pointer;
        line-height: 100%;
        background-color: var(--blue-100);
        font-family: Rubik;
        vertical-align: middle;
        font-size: 15px;
        font-weight: 600;
    }

    :global(button:hover) {
        background-color: var(--blue-1000);
    }

    :global(button:disabled) {
        background-color: var(--bw-dark-gray);
        color: var(--bw-gray);
        cursor: not-allowed;
    }

    :global(button.ok) {
        background-color: var(--green-1000);
    }

    :global(button.ok:hover) {
        background-color: var(--green-100);
    }

    :global(button.ok:disabled) {
        background-color: var(--bw-dark-gray);
        color: var(--bw-gray);
        cursor: not-allowed;
    }

    :global(button.reset) {
        background-color: var(--red-100);
    }

    :global(button.reset:hover) {
        background-color: var(--red-1000);
    }

    :global(button.reset:disabled) {
        background-color: var(--bw-dark-gray);
        color: var(--bw-gray);
        cursor: not-allowed;
    }

    :global(select) {
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
        position: relative;
        font-family: Rubik;
        font-size: 15px;
    }

    :global(select:disabled) {
        background-color: var(--bw-dark-gray);
        color: var(--bw-gray);
        cursor: not-allowed;
    }

    :global(input[type="text"]) {
        width: 295px;
        height: 40px;
        border-radius: 10px;
        background-color: var(--dark-blue-50);
        color: var(--bw-white);
        outline: none; 
        border: none;
        text-align: center; 
        transition: 0.4s;
        box-sizing: border-box;
        font-family: Rubik;
        font-size: 15px;
    }

    :global(input[type="file"]) {
        display: none;
    }
    
    :global(input:hover[type="text"]) {
        background-color: var(--dark-blue-10);
        transition: 0.4s;
    }

    :global(input:focus[type="text"]) {
        background-color: var(--dark-blue-10);
        border: 2px solid var(--blue-1000);
        transition: 0.4s;
    }

    :global(input:not(:empty):invalid[type="text"]) {
        background-color: var(--dark-blue-10);
        border: 2px solid var(--red-1000);
        transition: 0.4s;
    }

    :global(input:disabled[type="text"]) {
        background-color: var(--bw-dark-gray);
        color: var(--bw-gray);
        cursor: not-allowed;
        transition: 0.4s;
    }
</style>