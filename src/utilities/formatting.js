const timeConversionFactors = {
    ms: 1,
    s: 1000,
    min: 60000
};

const timeFormatter = (time, unit) => {
    const timeInMS = time * timeConversionFactors[unit];
    return Math.floor(timeInMS / 1000);
}

export { timeFormatter };