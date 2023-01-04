module.exports ={ 
    deepCopy (payload) {
        console.log(payload);
        let copy = JSON.stringify(payload);
        return JSON.parse(copy);
    }
}