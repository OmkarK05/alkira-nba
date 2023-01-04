module.exports ={ 
  deepCopy (payload) {
    let copy = JSON.stringify(payload);
    return JSON.parse(copy);
  }
}