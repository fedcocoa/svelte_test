<script>
    export let name = "Unnamed counter";
    let score = 0;

    function buttonEvent() {
        score++;
    }
</script>

<style>

</style>

<h2>{name}: {score}</h2>
<button on:click={buttonEvent}>Increase {name}</button>
