function SumOfMultiples(x,y,z) {

    if(z < 1){
        return 'Error';
    }

    let sum = 0;
    for(i = 1 ; i < z ; i++){
        if(i % x == 0 || i % y == 0){
            sum += i;
        }
    }

    return sum;
}


module.exports = SumOfMultiples;