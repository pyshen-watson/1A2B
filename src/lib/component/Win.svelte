<script lang="ts">
    export let answer: string
    export let attempts: number

    import { createEventDispatcher } from 'svelte'

    const dispatcher = createEventDispatcher()
    const playAgainHandler = () => {
        dispatcher('again')
    }
</script>

<div class="page">
    <h1>You Win!</h1>
    <h2>The answer is: {answer}</h2>
    <h2>You've tried: {attempts} time(s)</h2>
    <button on:click={playAgainHandler}>Play Again</button>
</div>
