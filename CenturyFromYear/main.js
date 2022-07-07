function solution(year) {
    let solutionCount = 0;
    while (year > 0){ 
        year = year - 100;
        solutionCount = solutionCount + 1;
    }
    return solutionCount;
}