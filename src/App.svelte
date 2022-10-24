<script lang="ts">

</script>

<div class="main">
  <h1>1A2B Game</h1>
  <button>Start</button>
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
  }

</style>