const conversionFactors = {
    length: {
        inch: { foot: 1 / 12, yard: 1 / 36, meter: 0.0254, kilometer: 0.0000254, mile: 1 / 63360 },
        foot: { inch: 12, yard: 1 / 3, meter: 0.3048, kilometer: 0.0003048, mile: 1 / 5280 },
        yard: { inch: 36, foot: 3, meter: 0.9144, kilometer: 0.0009144, mile: 1 / 1760 },
        mile: { inch: 63360, foot: 5280, yard: 1760, meter: 1609.34, kilometer: 1.60934 },
        meter: { inch: 39.3701, foot: 3.28084, yard: 1.09361, kilometer: 0.001, mile: 1 / 1609.34 },
        kilometer: { inch: 39370.1, foot: 3280.84, yard: 1093.61, meter: 1000, mile: 0.621371 }
    },
    area: {
        squareInch: { squareFoot: 1 / 144, squareYard: 1 / 1296, squareMeter: 0.00064516, acre: 1 / 6272640, hectare: 1 / 15500031 },
        squareFoot: { squareInch: 144, squareYard: 1 / 9, squareMeter: 0.092903, acre: 1 / 43560, hectare: 1 / 107639 },
        squareYard: { squareInch: 1296, squareFoot: 9, squareMeter: 0.836127, acre: 1 / 4840, hectare: 1 / 11960 },
        squareMeter: { squareInch: 1550, squareFoot: 10.7639, squareYard: 1.19599, acre: 1 / 4046.86, hectare: 1 / 10000 },
        acre: { squareInch: 6272640, squareFoot: 43560, squareYard: 4840, squareMeter: 4046.86, hectare: 0.404686 },
        hectare: { squareInch: 15500031, squareFoot: 107639, squareYard: 11960, squareMeter: 10000, acre: 2.47105 }
    },
    volume: {
        cubicInch: { cubicFoot: 1 / 1728, cubicYard: 1 / 46656, cubicMeter: 0.0000163871, gallon: 1 / 231, liter: 0.0163871 },
        cubicFoot: { cubicInch: 1728, cubicYard: 1 / 27, cubicMeter: 0.0283168, gallon: 7.48052, liter: 28.3168 },
        cubicYard: { cubicInch: 46656, cubicFoot: 27, cubicMeter: 0.764555, gallon: 201.974, liter: 764.555 },
        cubicMeter: { cubicInch: 61023.7, cubicFoot: 35.3147, cubicYard: 1.30795, gallon: 264.172, liter: 1000 },
        gallon: { cubicInch: 231, cubicFoot: 1 / 7.48052, cubicYard: 1 / 201.974, cubicMeter: 1 / 264.172, liter: 3.78541 },
        liter: { cubicInch: 61.0237, cubicFoot: 1 / 28.3168, cubicYard: 1 / 764.555, cubicMeter: 0.001, gallon: 1 / 3.78541 }
    }
};


const convertUnit = (value, fromUnit, toUnit, type) => {
    if (!conversionFactors[type] || !conversionFactors[type][fromUnit] || !conversionFactors[type][fromUnit][toUnit]) {
        throw new Error(`Conversion from ${fromUnit} to ${toUnit} not supported in ${type}`);
    }
    return value * conversionFactors[type][fromUnit][toUnit];
};

