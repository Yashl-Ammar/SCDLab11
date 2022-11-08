function searchArr(x) {
    let arr = [];
    for(let i = 1 ; i <= 20 ; i++){
        arr.push(i);
    }

    for(i = 0 ; i < arr.length ; i++){
        if(arr[i] === x){
            return true;
        }
    }
    return false;

}


module.exports = {searchArr};