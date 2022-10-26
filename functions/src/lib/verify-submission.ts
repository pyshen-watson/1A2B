function verifySubmission(submit:string, answer:string){

    if(isNaN(submit as any)){
        throw "Error: Invalid Input"
    }
    else if(submit.length !== answer.length){
        throw "Error: The length of submmision is not matched to the answer."
    }

    let A = 0
    let B = 0
    const A_index = []

    for(let i=0; i<submit.length; i++){

        const matchID = answer.indexOf(submit[i])

        if(matchID < 0)
            continue
        if(matchID === i){
            A += 1
            A_index.push(i)
        }
        else
            B += 1
    }

    let condition = ""
    if(A>0)
        condition += `${A}A`
    if(B>0)
        condition += `${B}B`
    if(condition.length === 0)
        condition = "0B"

    return {condition, A_index}
}

export default verifySubmission


