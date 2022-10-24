<script lang="ts">

    import { verifyAnswer } from "../firebase/api"
    import { createEventDispatcher } from 'svelte'
    import Logger from "./Logger.svelte"


    export let gameID: string
    export let gameDifficulty: number

    let attempt = []
    let log = []

    const inputHandler = (input:number) => {

        attempt = [...attempt, input]

        if(attempt.length === gameDifficulty){
            verify()
            setTimeout(() => {
                attempt.length = 0
            }, 500)
        }
    }

    const verify = () => {

        const submit = attempt.join('')

        verifyAnswer({id:gameID, submit:submit})

            .then((response:any) => {
                let data = response.data
                if(typeof(data) === "string"){
                    throw data
                }
                const condition = data.condition
                const A_index = data.A_index

                log = [...log, {submit, condition, A_index}]

                if(condition === '4A'){
                    setTimeout(() => {
                        declareWin(submit)
                    }, 500);
                }

            })
            .catch((error) => {
                alert(error)
            })
    }

    const dispatcher = createEventDispatcher()
    const declareWin = (answer: string) => {
        dispatcher('win', {attempts: log.length, answer})
    }


</script>

<div class="page">
    <div class="control">
        <div class="submit">
            {#each attempt as digit}
            <div class="digit">{digit}</div>
            {/each}
        </div>
        <div class="keyboard">
            {#each Array(10) as _,i}
                <button
                value={i}
                on:click={() => {inputHandler(i)}}
                disabled={attempt.includes(i)}>
                {i}
            </button>
            {/each}
        </div>
    </div>
    <div class="logger">
        <Logger {gameDifficulty} {log}/>
    </div>
</div>

<style lang="scss">

    .page{
        display: grid;
        grid-template-columns: 2fr 1fr;
        align-items: flex-start;

        .control{
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            width: 100%;
            min-height: 100%;
            gap: 2rem;

            .submit{
                width: 80%;
                height: 3rem;
                background-color: #222222;
                border-radius: 5px;
                display: flex;
                line-height: 2.5rem;
                padding-left: 2rem;

                .digit{
                    font-size: 2rem;
                }

            }

            .keyboard{

                display: grid;
                grid-template-columns: repeat(5, 1fr);
                gap: 1px;

                button{
                    border-radius: 0px;
                }

                .active, :disabled{
                    background-color: #222222;
                    color: white;
                }
            }
        }

        .logger{
            margin-right: 1rem;
        }
    }


</style>