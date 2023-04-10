//👉 Write your tests below here:


import {jest} from '@jest/globals';

import { fahrenheitToCelsius } from "./main.js";

test( "fahrenheit to celsius converter ", () => {
    expect(fahrenheitToCelsius(32)).toBe("0°C");
    expect(fahrenheitToCelsius(50)).toBe("10°C");
    expect(fahrenheitToCelsius(212)).toBe("100°C");
    expect(fahrenheitToCelsius(0)).toBe("-18°C");
    
});