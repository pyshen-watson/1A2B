<script lang="ts">
    import { createEventDispatcher} from 'svelte'

    const dispatcher = createEventDispatcher()
    const startHandler = () => {
        dispatcher('start')
    }
</script>

<div class="page">
    <h1>1A2B Game</h1>
    <button on:click={startHandler}>Start</button>
</div>
