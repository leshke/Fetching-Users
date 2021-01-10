export const pluralYears = (age) => {
    let remainder10 = (age % 10);
    let remainder100 = (age % 100);

    if (remainder100 > 10 && remainder100 < 20) {
        return "years"
    } else if (remainder10 === 1) {
        return "years"
    } else if (remainder10 > 1 && remainder10 < 5) {
        return "years"
    }
    return "years"
}