const riverLevels1 = [15, 17, 30];
const expected1 = 15; // 30 - 15 = 15

const riverLevels2 = [15, 17, 30, 14, 5, 16, 25, 9, 3];
const expected2 = 20; // 25 - 5 = 20

const riverLevels3 = [21, 18, 10, 11, 14, 9, 5, 13, 15, 7, 1, 6, 12, 4];
const expected3 = 11; // 12 - 1 = 11

const riverLevels4 = [1, 5];
const expected4 = 4;

const riverLevels5 = [5, 1];
const expected5 = -1;

const riverLevels6 = [9, 7, 7, 7];
const expected6 = -1;

const riverLevels7 = [42];
const expected7 = -1;

function measureWaterLevels(waterLevels) {
    let maxRise = 0;
    for (let i = 0; i < waterLevels.length; i++) {
        let currentRise = 0;
        while (waterLevels[i + 1] < waterLevels[i]) {
            i++;
        }
        while (waterLevels[i + 1] > waterLevels[i]) {
            currentRise += waterLevels[i + 1] - waterLevels[i];
            i++;
        }
        if (currentRise > maxRise) {
            maxRise = currentRise;
        }
    }
    return maxRise > 0 ? maxRise : -1
}

// Find the largest rise in water levels during a day
console.log(measureWaterLevels(riverLevels1));
console.log(measureWaterLevels(riverLevels2));
console.log(measureWaterLevels(riverLevels3));
console.log(measureWaterLevels(riverLevels4));
console.log(measureWaterLevels(riverLevels5));
console.log(measureWaterLevels(riverLevels6));
console.log(measureWaterLevels(riverLevels7));

***********************************************************

    function measureWaterLevels2(waterLevels) {

        let low = 9999;
        let high = 0;
        let difference = 0;

        for (var i = 0; i < waterLevels.length - 1; i++) {
            for (var j = i + 1; j < waterLevels.length; j++) {

                if (waterLevels[i] < low) {
                    low = waterLevels[i]
                }

                if (waterLevels[j] < low) {
                    low = 9999;
                    high = 0;
                    break
                }

                if (waterLevels[j] > high) {
                    high = waterLevels[j]
                    if (difference < (high - low)) {
                        difference = (high - low);
                    }
                }
            }
        }

        if (difference === 0) {
            difference = -1;
        }

        return difference
    }

console.log(measureWaterLevels2(riverLevels1));
console.log(measureWaterLevels2(riverLevels2));
console.log(measureWaterLevels2(riverLevels3));
console.log(measureWaterLevels2(riverLevels4));
console.log(measureWaterLevels2(riverLevels5));
console.log(measureWaterLevels2(riverLevels6));
console.log(measureWaterLevels2(riverLevels7));