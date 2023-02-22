const checkSpam = (str) => {
    let nstr = str.toLowerCase()
    return nstr.includes('viagra') || nstr.includes('xxx');
}