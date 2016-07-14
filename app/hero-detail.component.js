"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var hero_1 = require('./hero');
var hero_service_1 = require('./hero.service');
var HeroDetailComponent = (function () {
    function HeroDetailComponent(heroService, route) {
        this.heroService = heroService;
        this.route = route;
        this.close = new core_1.EventEmitter();
        this.navigated = false; // true if navigated here
    }
    HeroDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            if (params['id'] !== undefined) {
                var id = +params['id'];
                _this.navigated = true;
                _this.heroService.getHero(id)
                    .then(function (hero) { return _this.hero = hero; });
            }
            else {
                _this.navigated = false;
                _this.hero = new hero_1.Hero();
            }
        });
    };
    HeroDetailComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    HeroDetailComponent.prototype.save = function () {
        var _this = this;
        totalPrice += 1;
        this.heroService
            .save(this.hero)
            .then(function (hero) {
            _this.hero = hero; // saved hero, w/ id if new
            _this.goBack(hero);
        })
            .catch(function (error) { return _this.error = error; }); // TODO: Display error message
    };
    HeroDetailComponent.prototype.goBack = function (savedHero) {
        if (savedHero === void 0) { savedHero = null; }
        this.close.emit(savedHero);
        if (this.navigated) {
            window.history.back();
        }
    };
    HeroDetailComponent.prototype.checkPromo = function () {
        if (!this.hero.promoused) {
            var promoholder = document.getElementById('forpromo').value;
            for (var i = 0; i < this.hero.promo.length; i++) {
                if (promoholder == this.hero.promo[0]) {
                    this.hero.price *= 0.9;
                    this.hero.promoused = true;
                    break;
                }
                else if (promoholder == this.hero.promo[1]) {
                    this.hero.price *= 0.33;
                    this.hero.promoused = true;
                    break;
                }
                else if (promoholder == this.hero.promo[2]) {
                    if (this.hero.price >= 10) {
                        console.log(this.hero.price);
                        this.hero.price = this.hero.price - 10;
                        console.log("new price");
                        console.log(this.hero.price);
                    }
                    else {
                        this.hero.price = 0;
                    }
                    this.hero.promoused = true;
                    break;
                }
                else { }
            }
        }
        else {
            alert("You've already used promo code");
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', hero_1.Hero)
    ], HeroDetailComponent.prototype, "hero", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], HeroDetailComponent.prototype, "close", void 0);
    HeroDetailComponent = __decorate([
        core_1.Component({
            selector: 'my-hero-detail',
            templateUrl: 'app/hero-detail.component.html',
            styleUrls: ['app/hero-detail.component.css']
        }), 
        __metadata('design:paramtypes', [hero_service_1.HeroService, (typeof (_a = typeof router_1.ActivatedRoute !== 'undefined' && router_1.ActivatedRoute) === 'function' && _a) || Object])
    ], HeroDetailComponent);
    return HeroDetailComponent;
    var _a;
}());
exports.HeroDetailComponent = HeroDetailComponent;
/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 
//# sourceMappingURL=hero-detail.component.js.map