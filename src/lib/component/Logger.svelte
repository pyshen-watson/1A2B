<script lang="ts">

    type Log = {
        submit: string
        condition: string
        A_index: number[]
    }

    export let gameDifficulty:number
    export let log:Log[]

    let reveal = new Array(gameDifficulty).fill("?")
    $:{
        for(let record of log){
            if(record.A_index.length > 0){
                for(let index of record.A_index){
                    reveal[index] = record.submit[index]
                }
            }
        }
    }
</script>

<div class="page">
    <h1 class="reveal">{reveal.join('')}</h1>
    <div class="log-block">
        {#each log as record}
        <div class="record">
            {record.submit}:{record.condition}
        </div>
        {/each}
    </div>
</div>

<style lang="scss">
    .page{
        justify-content: start;
        padding: 3rem 0;

        .log-block{
            display: flex;
            flex-direction: column;
            overflow-y: scroll;
            width: fit-content;
            max-height: 15rem;
            background-color: #444444;
            padding: 1rem;
            border-radius: 15px;
            &::-webkit-scrollbar{
                visibility:hidden;
            }
        }
    }
</style>