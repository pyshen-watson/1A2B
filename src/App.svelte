<script lang="ts">
  import Home from "./lib/component/Home.svelte"
  import Level from "./lib/component/Level.svelte"
  import Game from "./lib/component/Game.svelte"
  import Win from "./lib/component/Win.svelte"

  let atHome = true
  let atLevel = false
  let atGame = false

  let gameID:string
  let gameDifficulty:number
  let attempts:number
  let answer:string

  const startHandler = () => {
    atHome = false
    atLevel = true
  }

  const newGameHandler = (e:CustomEvent) => {
    gameID = e.detail.gameID
    gameDifficulty = e.detail.length
    atLevel = false
    atGame = true
  }
  const winHandler = (e:CustomEvent) => {
    attempts = e.detail.attempts
    answer = e.detail.answer
    atGame = false
  }

  const againHandler = () => {
    atHome = true
  }

</script>

<div class="main">
  {#if atHome}
    <Home on:start={startHandler}/>
  {:else if atLevel}
    <Level on:newGame={newGameHandler}/>
  {:else if atGame}
    <Game {gameID} {gameDifficulty} on:win={winHandler}/>
  {:else}
    <Win {answer} {attempts} on:again={againHandler}/>
  {/if}
</div>

<style lang="scss">

  .main{
    display: flex;
    background-color: gray;
    margin: 5% 30%;
    border-radius: 5%;
    min-height: 70vh;
  }

</style>