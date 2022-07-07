function solution(sequence) {
    let flag = 0;
    for (let i = 0; i < sequence.length; i++) {
        if (sequence[i] >= sequence[i+1]){
            flag++;
            if(i !== 0 && sequence[i] >= sequence[i+2]){
                if (sequence[i-1] >= sequence[i+1])
                return false;
            }
        }
    }
    return flag < 2;
}