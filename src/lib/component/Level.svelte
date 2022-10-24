<script lang="ts">

    import { newGame } from "../firebase/api"
    import { createEventDispatcher} from 'svelte'

    let length = 4

    const dispatcher = createEventDispatcher()
    const newGameHandler = () => {

      newGame({length, shuffle_n:20})
        .then((value:any) => {
            const gameID = value.data
            dispatcher('newGame', {gameID, length})
        })
        .catch((error) => {
          alert(error)
        })
    }

  </script>

  <div class="page">
    <h1>Difficuly: {length}</h1>
    <span class="button-row">
        {#each Array(7) as _, i}
            <button
                value={i+4}
                on:click={() => {length=i+4}}
                class:active={length===i+4}>
                {i+4}
            </button>
        {/each}
    </span>
    <button on:click={newGameHandler}>New Game</button>
  </div>

  <style lang="scss">

    .button-row{

        width: 100%;
        padding: 5%;
        display: flex;
        gap: 1px;
        background-color: gray;

        button{
            border-radius: 0px;
            border-width: 0px;
            flex: 1;
        }

        .active{
            background-color: #222222;
            color: white;
        }
    }

  </style>