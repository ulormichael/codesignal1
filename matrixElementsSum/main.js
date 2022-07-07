function ssolution(matrix) {

    let sum = 0;
    for ( row = 0; row < matrix.lenth; row++) {
        const currRow = matrix[row];
        for (let col = 0; col < currRow.length; col++) {

    // they refuse to stay in any of the free rooms 
    if (currRow[col] === 0) {

    // or any of the rooms below any of the free rooms
    if (row + 1 < matrix.length) {
        
        matrix[row + 1][col] = 0;
    }
    } else {
        sum += currRow[col];
    }
        }
    }
    return sum;
}