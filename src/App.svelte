<script lang="ts">

  import { newGame, verifyAnswer } from "./lib/firebase/api"

  let config = {
    length: 4,
    shuffle_n: 20
  }
  let gameID = ""
  let input = ""

  const startHandler = () => {

    newGame(config)
      .then((value:any) => {
        gameID = value.data
      })
      .catch((error) => {
        console.error(error)
      })
  }

  const checkHandler = () => {

    verifyAnswer({id:gameID, submit:input})
      .then((response:any) => {

        let data = response.data
        if(typeof(data) === "string"){
          throw data
        }
        console.log(data)
      })
      .catch((error) => {
        alert(error)
      })
  }




</script>

<div class="main">
  <h1>1A2B Game</h1>
  <button on:click={startHandler}>Start</button>
  <span>
    <input type="text" bind:value={input}>
    <button on:click={checkHandler}>Check</button>
  </span>
</div>

<style lang="scss">

  .main{
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 5rem;
    gap: 2rem;

    button{
      padding: 1rem;
      font-size: 1.5rem;
      border-radius: 1rem;
      color: black;
      background-color: lightgray;
      border: 2px black solid;
      cursor: pointer;

      &:hover{
        color: white;
        background-color: gray;
        border-color: black;
      }
    }

    input{
      font-size: 2rem;
      margin-right: 1rem;
    }
  }

</style>