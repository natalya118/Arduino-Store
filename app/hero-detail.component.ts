import { Component, EventEmitter, Input, OnInit, OnDestroy, Output } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { Hero }        from './hero';
import { HeroService } from './hero.service';

@Component({
  selector: 'my-hero-detail',
  templateUrl: 'app/hero-detail.component.html',
  styleUrls: ['app/hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit, OnDestroy {
  @Input() hero: Hero;
  @Output() close = new EventEmitter();
  error: any;
  sub: any;
  navigated = false; // true if navigated here
  

  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute) {
  }

  ngOnInit() {
  
    this.sub = this.route.params.subscribe(params => {
      if (params['id'] !== undefined) {
        let id = +params['id'];
        this.navigated = true;
        this.heroService.getHero(id)
            .then(hero => this.hero = hero);
      } else {
        this.navigated = false;
        this.hero = new Hero();
      }
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  save() {
    this.heroService
        .save(this.hero)
        .then(hero => {
          this.hero = hero; // saved hero, w/ id if new
          this.goBack(hero);
        })
        .catch(error => this.error = error); // TODO: Display error message
  }
  goBack(savedHero: Hero = null) {
    this.close.emit(savedHero);
    if (this.navigated) { window.history.back(); }
  }
  
  
  checkPromo(){
  if(!this.hero.promoused){
  
  var promoholder = (<HTMLInputElement>document.getElementById('forpromo')).value;

  for(var i=0; i<this.hero.promo.length; i++){
  
  if(promoholder==this.hero.promo[0]){
        this.hero.price *= 0.9;
        this.hero.promoused = true;
        break;
  }
  else if(promoholder==this.hero.promo[1]){
        this.hero.price *= 0.33;
        this.hero.promoused = true;
        break;
  }
  else if(promoholder==this.hero.promo[2]){
  if(this.hero.price >= 10){
  console.log(this.hero.price);
        this.hero.price = this.hero.price-10;
        
  console.log("new price");
  console.log(this.hero.price);
        }
    else{
        this.hero.price = 0;
        }
    this.hero.promoused = true;
    break;
  }
  else{}
}
}
else{
    alert("You've already used promo code");
}
}
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/