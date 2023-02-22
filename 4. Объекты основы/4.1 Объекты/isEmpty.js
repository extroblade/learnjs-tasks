const isEmpty = (obj) => {
    for (let values in obj) {
      return false;
    }
    return true;
}