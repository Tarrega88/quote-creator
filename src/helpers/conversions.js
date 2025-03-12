const conversionFactors = {
    length: {
        inches: { "feet": 1 / 12, "yards": 1 / 36 },
        feet: { "inches": 12, "yards": 1 / 3 },
        yards: { "inches": 36, "feet": 3 }
    },
    area: {
        "square inches": { "square feet": 1 / 144, "square yards": 1 / 1296, "acres": 1 / 6272640 },
        "square feet": { "square inches": 144, "square yards": 1 / 9, "acres": 1 / 43560 },
        "square yards": { "square inches": 1296, "square feet": 9, "acres": 1 / 4840 },
        acres: { "square inches": 6272640, "square feet": 43560, "square yards": 4840 }
    },
    volume: {
        "cubic inches": { "cubic feet": 1 / 1728, "cubic yards": 1 / 46656, "gallons": 1 / 231 },
        "cubic feet": { "cubic inches": 1728, "cubic yards": 1 / 27, "gallons": 7.48052 },
        "cubic yards": { "cubic inches": 46656, "cubic feet": 27, "gallons": 201.974 },
        gallons: { "cubic inches": 231, "cubic feet": 1 / 7.48052, "cubic yards": 1 / 201.974 }
    },
    weight: {
        ounces: { "pounds": 1 / 16, "tons": 1 / 32000 },
        pounds: { "ounces": 16, "tons": 1 / 2000 },
        tons: { "ounces": 32000, "pounds": 2000 }
    }
};




const convertUnit = (value, fromUnit, toUnit, type) => {
    if (!conversionFactors[type] || !conversionFactors[type][fromUnit] || !conversionFactors[type][fromUnit][toUnit]) {
        throw new Error(`Conversion from ${fromUnit} to ${toUnit} not supported in ${type}`);
    }
    return value * conversionFactors[type][fromUnit][toUnit];
};

