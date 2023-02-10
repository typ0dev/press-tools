<script>
    export let title
</script>

<div class="divider">
    <div class="divider-text">{title}</div>
    <div class="divider-line"/>
</div>

<style>
    .divider-text {
        font-size: 16px;
        font-weight: 600;
        opacity: .2;
        width: 100%;
        margin-bottom: 10px;
        text-align: center;
    }
    .divider-line {
        width: 100%;
        height: 3px;
        opacity: .01;
        background: var(--bw-white);
    }   
    .divider {
        width: clamp(200px, 350px, 80vw);
    }
</style>