<script>
    import { base } from "$app/paths";
    import logo_light from "../assets/img/light-logo.svg"
    import powered from "../assets/img/powered.svg"
    import Divider from "../assets/Divider.svelte";
</script>

<img class="logo" src="{logo_light}" alt="">
<span class="title">Привет!</span>
<span class="subtitle">Добро пожаловать в удобный инструмент созданный специально для Университетского Колледжа и его пресс-центра</span>
<Divider title="Пресса"/>
<a href="{base}/generator">Генератор картинок</a>
<Divider title="Мероприятия"/>
<a href="{base}/random" disabled>Рандомайзер</a>
<a href="{base}/roulette" disabled>Рулетка</a>
<Divider title="Поддержка"/>
<div class="support">
    <a style="width: 40px" href="https://t.me/xlsoftware" rel="noreferrer" target="_blank">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="20" width="20"><path fill="#ffffff" fill-rule="evenodd" d="M12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23ZM4.64406 11.4408C4.54886 11.4766 4.48206 11.5731 4.48206 11.6749C4.48206 11.7766 4.54886 11.8731 4.64406 11.9088L7.63106 12.9998L13.7851 9.82185C13.8498 9.78967 13.9346 9.81171 13.9755 9.87135C14.0164 9.93099 14.0064 10.018 13.9531 10.0668L9.81121 13.7818L14.4521 17.5188C14.5187 17.5672 14.6087 17.5794 14.6859 17.5507C14.763 17.522 14.8231 17.454 14.8421 17.3738L17.3001 7.03585C17.3213 6.94739 17.2904 6.84986 17.2221 6.78978C17.1538 6.72971 17.0531 6.7115 16.9681 6.74385L4.64406 11.4408Z" clip-rule="evenodd"></path></svg>
    </a>
    <a style="width: 40px;" href="https://vk.me/xlsoftware" rel="noreferrer" target="_blank">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="20" width="20"><path fill="#ffffff" d="M5 6L5 5.5L1 5.50003L1 6.00003C1.00003 8.98601 2.05997 12.3381 3.94597 14.9521C5.83439 17.5695 8.5947 19.5 12 19.5H14V14.7182C14.9332 14.9497 16.0539 15.4226 17.0041 16.0853C18.1724 16.9002 18.9663 17.9163 19.0002 19.0155L19.0152 19.5H23V19C23 17.4512 22.2785 15.9895 21.3006 14.7787C20.5082 13.7975 19.5247 12.9519 18.5476 12.3223C20.5361 10.852 22 8.62201 22 6V5.5H18V6C18 7.12701 17.4254 8.07857 16.5391 8.8288C15.8133 9.44311 14.9002 9.90109 14 10.179V5.50002H10V15.0718C8.56146 14.4364 7.37551 13.1619 6.51247 11.6039C5.5264 9.82387 5.00002 7.73875 5 6Z"></path></svg>
    </a>
    <a style="width: 40px;" href="https://github.com/xl-soft/press-tools" rel="noreferrer" target="_blank">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="20" width="20"><path fill="#ffffff" fill-rule="evenodd" d="M12 5C9.92438 5 9 5.5 9 5.5C7.05525 3.78091 5.82206 3.19087 3.5 2.5C2.59849 4.63672 2.44934 5.83948 2.5 8C2.5 8 1 9.1688 1 13C1 19.6226 6.48809 21.5 12 21.5C17.5119 21.5 23 19.6226 23 13C23 9.1688 21.5 8 21.5 8C21.5507 5.83948 21.4015 4.63672 20.5 2.5C18.1779 3.19087 16.9448 3.78091 15 5.5C15 5.5 14.0756 5 12 5ZM9.94981 11.3342C7.25665 11.0196 4.31748 10.6762 4.00001 14.5002C3.57613 19.6061 8.39445 19.5441 11.3297 19.5064L11.3301 19.5064C11.5669 19.5033 11.7915 19.5005 12 19.5005C12.2086 19.5005 12.4331 19.5033 12.6699 19.5064L12.6703 19.5064C15.6056 19.5441 20.4239 19.6061 20 14.5002C19.6826 10.6762 16.7434 11.0196 14.0502 11.3342C13.3311 11.4182 12.6295 11.5002 12 11.5002C11.3706 11.5002 10.669 11.4182 9.94981 11.3342ZM9.75 15.25C9.75 16.4926 9.07843 17.5 8.25 17.5C7.42157 17.5 6.75 16.4926 6.75 15.25C6.75 14.0074 7.42157 13 8.25 13C9.07843 13 9.75 14.0074 9.75 15.25ZM15.75 17.5C16.5784 17.5 17.25 16.4926 17.25 15.25C17.25 14.0074 16.5784 13 15.75 13C14.9216 13 14.25 14.0074 14.25 15.25C14.25 16.4926 14.9216 17.5 15.75 17.5Z" clip-rule="evenodd"></path></svg>
    </a>
</div>
<span class="subtitle">Так же пишите для предложений по функционалу!</span>
<img class="developer" src="{powered}" alt="">

<style>
    .support {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: center;
        align-items: center;
        align-content: stretch;
        gap: 15px;
    }

    :global(.title) {
        width: clamp(200px, 300px, 80vw);
        text-align: center;
        font-size: 40px;
        font-weight: 200
    }

    :global(.subtitle) {
        width: clamp(200px, 300px, 80vw);
        text-align: center;
        font-size: 16px; 
        font-weight: 100; 
        opacity: .3
    }

    .logo {
        width: clamp(200px, 300px, 80vw);
        z-index: 100000;
    }

    .developer {
        opacity: .3;
        width: clamp(100px, 150px, 50vw);
        cursor: pointer;
    }
</style>

