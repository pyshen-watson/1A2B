function randomNumberGenerator(length: number, shuffle_n: number){

    if(length > 10 || length < 1){
        console.error("Invalid Length");
        return;
    }

    const ALL_NUM = "1234567890";
    const NUM_LIST = ALL_NUM.split(''); // ['0', '1', ..., '9']

    // Randomly swap two number
    for(let i=0; i<shuffle_n; i++){
        const rand1 = Math.floor(Math.random() * 10);
        const rand2 = Math.floor(Math.random() * 10);
        [NUM_LIST[rand1], NUM_LIST[rand2]] = [NUM_LIST[rand2], NUM_LIST[rand1]];

    }

    const result = NUM_LIST.slice(0, length).join('');

    return result
}

export default randomNumberGenerator
