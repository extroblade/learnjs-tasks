const sumSalaries = (salaries) => {
    return Object.values(salaries).reduce((a, b) => a + b)
}