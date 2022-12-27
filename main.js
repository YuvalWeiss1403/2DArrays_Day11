//Ex0
//------------------------------------------------------------------------------------------------------------------
function printMatrix(matrix){
    for (let i = 0; i < matrix.length; i++) {
        let row ="" ;
        for (let j = 0; j < matrix[i].length; j++) {
            row += `${matrix[i][j]} `;
        }
        console.log(row);
        
    }
}
const matrix_ex0 = [['yuval','weiss','PT'],['alon','ozeri','CS'],['shaked','weiss','TA'],['yarden','holtzer','TA']];
printMatrix(matrix_ex0);

//Ex1
//------------------------------------------------------------------------------------------------------------------
function sumOfColumns(matrix){
    let columnSums = [0,0,0];
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            columnSums[j] = parseInt(columnSums[j]) + parseInt(matrix[i][j]);
        }        
    }
    return columnSums;    
}

const matrix_ex1 = [[1,2,3],[4,5,6],[7,8,9]];
console.log(sumOfColumns(matrix_ex1));

//Ex2
//------------------------------------------------------------------------------------------------------------------
function smallestInRow(matrix){
    let minNumInRow = [];
    for (let i = 0; i < matrix[0].length; i++) {
        let min =0;
        for (let j = 0; j < matrix[i].length; j++) {
            min += matrix[i][0];
            if (min > matrix[i][j]){
                min = matrix[i][j];
            }else{
                continue;
            }
            minNumInRow.push(min);
        }        
    }
    return minNumInRow;    
}
const matrix_ex2 = [[1,2,3],[4,5,6],[7,8,9]];
console.log(smallestInRow(matrix_ex2));



//Ex4
//------------------------------------------------------------------------------------------------------------------
function sortTheArray(matrix){
    let sortedArray = [];
    let numindex=0;
    let charindex=0;
    for (let i = 0; i < matrix.length; i++) {
        if(Number.isInteger(matrix[i])){
            sortedArray.unshift(matrix[i]);
            numindex++;
        }else{
            sortedArray.push(matrix[i]);
            charindex++;
        }
    }
    return sortedArray.sort();
}

console.log(sortTheArray(["b", 6, "a", "q", 7, 2]));


//Ex5
//------------------------------------------------------------------------------------------------------------------
function shuffle(array) {
    let currentIndex = array.length;
    let randomIndex;
    while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
    return array;
  }

console.log(shuffle([10, 12, 15])) 


//Ex7
//------------------------------------------------------------------------------------------------------------------
function printPattern(){

    for (let i = 0; i < 5; i++) {
        let row = ` `.repeat(i);
        for (let j = 0; j < 3; j++) {
            row += ` *`;
        }
        console.log(row);
    }
}

printPattern();


//Ex8
//------------------------------------------------------------------------------------------------------------------
function printPattern2(){
    
    for (let i = 0; i<5; i++) {
        let row = " ".repeat(i);
        let temp = 5-i;
        while(temp>0){
            row+="*";
            temp--;
        }
        console.log(row);
    }
}

printPattern2();