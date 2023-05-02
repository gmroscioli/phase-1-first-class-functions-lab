const returnFirstTwoDrivers = function (drivers) {
    return [drivers[0], drivers[1]];
}

const returnLastTwoDrivers = function (drivers) {
    let last = drivers.length;
    return [drivers[last - 2], drivers[last - 1]];
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function (num) {
    return (fare) => fare * num;
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = function(arrayOfDrivers, func) {
    return func(arrayOfDrivers);
}