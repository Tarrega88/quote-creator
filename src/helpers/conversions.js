const conversionFactors = {
    length: {
        inch: { "foot": 1 / 12, "yard": 1 / 36, "meter": 0.0254, "kilometer": 0.0000254, "mile": 1 / 63360 },
        foot: { "inch": 12, "yard": 1 / 3, "meter": 0.3048, "kilometer": 0.0003048, "mile": 1 / 5280 },
        yard: { "inch": 36, "foot": 3, "meter": 0.9144, "kilometer": 0.0009144, "mile": 1 / 1760 },
        mile: { "inch": 63360, "foot": 5280, "yard": 1760, "meter": 1609.34, "kilometer": 1.60934 },
        meter: { "inch": 39.3701, "foot": 3.28084, "yard": 1.09361, "kilometer": 0.001, "mile": 1 / 1609.34 },
        kilometer: { "inch": 39370.1, "foot": 3280.84, "yard": 1093.61, "meter": 1000, "mile": 0.621371 }
    },
    area: {
        "square inch": { "square foot": 1 / 144, "square yard": 1 / 1296, "square meter": 0.00064516, "acre": 1 / 6272640, "hectare": 1 / 15500031 },
        "square foot": { "square inch": 144, "square yard": 1 / 9, "square meter": 0.092903, "acre": 1 / 43560, "hectare": 1 / 107639 },
        "square yard": { "square inch": 1296, "square foot": 9, "square meter": 0.836127, "acre": 1 / 4840, "hectare": 1 / 11960 },
        "square meter": { "square inch": 1550, "square foot": 10.7639, "square yard": 1.19599, "acre": 1 / 4046.86, "hectare": 1 / 10000 },
        acre: { "square inch": 6272640, "square foot": 43560, "square yard": 4840, "square meter": 4046.86, "hectare": 0.404686 },
        hectare: { "square inch": 15500031, "square foot": 107639, "square yard": 11960, "square meter": 10000, "acre": 2.47105 }
    },
    volume: {
        "cubic inch": { "cubic foot": 1 / 1728, "cubic yard": 1 / 46656, "cubic meter": 0.0000163871, "gallon": 1 / 231, "liter": 0.0163871 },
        "cubic foot": { "cubic inch": 1728, "cubic yard": 1 / 27, "cubic meter": 0.0283168, "gallon": 7.48052, "liter": 28.3168 },
        "cubic yard": { "cubic inch": 46656, "cubic foot": 27, "cubic meter": 0.764555, "gallon": 201.974, "liter": 764.555 },
        "cubic meter": { "cubic inch": 61023.7, "cubic foot": 35.3147, "cubic yard": 1.30795, "gallon": 264.172, "liter": 1000 },
        gallon: { "cubic inch": 231, "cubic foot": 1 / 7.48052, "cubic yard": 1 / 201.974, "cubic meter": 1 / 264.172, "liter": 3.78541 },
        liter: { "cubic inch": 61.0237, "cubic foot": 1 / 28.3168, "cubic yard": 1 / 764.555, "cubic meter": 0.001, "gallon": 1 / 3.78541 }
    },
    weight: {
        ounce: { "pound": 1 / 16, "ton": 1 / 32000, "gram": 28.3495, "kilogram": 0.0283495, "metric ton": 0.0000283495 },
        pound: { "ounce": 16, "ton": 1 / 2000, "gram": 453.592, "kilogram": 0.453592, "metric ton": 0.000453592 },
        ton: { "ounce": 32000, "pound": 2000, "gram": 907184, "kilogram": 907.184, "metric ton": 0.907184 },
        gram: { "ounce": 1 / 28.3495, "pound": 1 / 453.592, "ton": 1 / 907184, "kilogram": 0.001, "metric ton": 0.000001 },
        kilogram: { "ounce": 35.274, "pound": 2.20462, "ton": 1 / 907.184, "gram": 1000, "metric ton": 0.001 },
        "metric ton": { "ounce": 35274, "pound": 2204.62, "ton": 1.10231, "gram": 1000000, "kilogram": 1000 }
    }
};



const convertUnit = (value, fromUnit, toUnit, type) => {
    if (!conversionFactors[type] || !conversionFactors[type][fromUnit] || !conversionFactors[type][fromUnit][toUnit]) {
        throw new Error(`Conversion from ${fromUnit} to ${toUnit} not supported in ${type}`);
    }
    return value * conversionFactors[type][fromUnit][toUnit];
};

