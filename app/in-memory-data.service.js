"use strict";
var InMemoryDataService = (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var heroes = [
            {
                id: 11,
                name: 'Arduino Uno',
                details: 'ololo',
                price: 20,
                mainpic: 'https://www.arduino.cc/en/uploads/Main/A000066_iso_both.jpg',
                quantity: 0,
                promo: ['ni10%', 'ni33%', 'ni10$'],
                promoused: false
            },
            {
                id: 12,
                name: 'Arduino Zero',
                details: 'ololo',
                price: 42.90,
                mainpic: 'https://www.arduino.cc/en/uploads/Main/ABX0003_iso_both.jpg',
                quantity: 0,
                promo: ['ni10%', 'ni33%', 'ni10$'],
                promoused: false
            },
            {
                id: 13,
                name: 'Arduino Micro',
                details: 'ololo',
                price: 18,
                mainpic: 'https://www.arduino.cc/en/uploads/Main/A000053_iso_both1.jpg',
                quantity: 0,
                promo: ['ni10%', 'ni33%', 'ni10$'],
                promoused: false
            },
            {
                id: 14,
                name: 'Genuino Zero',
                details: 'The Genuino UNO R3 is a microcontroller board based on the ATmega328. It has 14 digital input/output pins (of which 6 can be used as PWM outputs), 6 analog inputs, a 16 MHz crystal oscillator, a USB connection, a power jack, an ICSP header, and a reset button. It contains everything needed to support the microcontroller; simply connect it to a computer with a USB cable (not included) or power it with a AC-to-DC adapter or battery to get started. The UNO differs from all preceding boards because it does not use the FTDI USB-to-serial driver chip.',
                price: 42.90,
                mainpic: 'https://store.arduino.cc/bmz_cache/5/5034b9bee911dab9564610a6f8e5102d.image.538x354.jpg',
                quantity: 0,
                promo: ['ni10%', 'ni33%', 'ni10$'],
                promoused: false
            },
            { id: 15,
                name: 'EarthMake - ArLCD',
                details: 'ololo',
                price: 72,
                mainpic: 'https://store.arduino.cc/bmz_cache/c/c5475309e64bdfaee446ae20cfc850dd.image.446x354.jpg',
                quantity: 0,
                promo: ['ni10%', 'ni33%', 'ni10$'],
                promoused: false
            },
            { id: 16,
                name: 'Ultra Sonic range measurement module',
                details: 'ololo',
                price: 12,
                mainpic: 'https://store.arduino.cc/bmz_cache/6/64a3a88291c5a6a54cb2dbb7a23b8a66.image.447x354.jpg',
                quantity: 0,
                promo: ['ni10%', 'ni33%', 'ni10$'],
                promoused: false
            },
            { id: 17,
                name: '10 BC547 transistor',
                details: 'ololo',
                price: 0.9,
                mainpic: 'https://store.arduino.cc/bmz_cache/4/4d135c0b43db6eb3539816587f32b373.image.446x354.jpg',
                quantity: 0,
                promo: ['ni10%', 'ni33%', 'ni10$'],
                promoused: false
            },
            { id: 18,
                name: 'Make: Electronics 2nd Ed.',
                details: 'ololo',
                price: 31.17,
                mainpic: 'https://store.arduino.cc/bmz_cache/8/86b6e86cf363265fec6a805199dccb65.image.447x354.jpg',
                quantity: 0,
                promo: ['ni10%', 'ni33%', 'ni10$'],
                promoused: false
            },
            { id: 19,
                name: 'Sew Electric',
                details: 'ololo',
                price: 31.95,
                mainpic: 'https://store.arduino.cc/bmz_cache/e/ee39027a049c406410f44e7920aa13ff.image.447x354.jpg',
                quantity: 0,
                promo: ['ni10%', 'ni33%', 'ni10$'],
                promoused: false
            }
        ];
        return { heroes: heroes };
    };
    return InMemoryDataService;
}());
exports.InMemoryDataService = InMemoryDataService;
/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 
//# sourceMappingURL=in-memory-data.service.js.map