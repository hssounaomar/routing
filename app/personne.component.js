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
var personne_service_1 = require('./personne.service');
var PersonneComponent = (function () {
    function PersonneComponent(personneService, router) {
        this.personneService = personneService;
        this.router = router;
    }
    PersonneComponent.prototype.getHeroes = function () {
        var _this = this;
        this.personneService
            .getPersonnes()
            .then(function (heroes) { return _this.personnes = heroes; });
    };
    PersonneComponent.prototype.add = function (name) {
        var _this = this;
        name = name.trim();
        if (!name) {
            return;
        }
        this.personneService.create(name)
            .then(function (hero) {
            _this.personnes.push(hero);
            _this.selectedHero = null;
        });
    };
    PersonneComponent.prototype.delete = function (hero) {
        var _this = this;
        this.personneService
            .delete(hero.id)
            .then(function () {
            _this.personnes = _this.personnes.filter(function (h) { return h !== hero; });
            if (_this.selectedHero === hero) {
                _this.selectedHero = null;
            }
        });
    };
    PersonneComponent.prototype.ngOnInit = function () {
        this.getHeroes();
    };
    PersonneComponent.prototype.onSelect = function (hero) {
        this.selectedHero = hero;
    };
    PersonneComponent.prototype.gotoDetail = function () {
        this.router.navigate(['/detail', this.selectedHero.id]);
    };
    PersonneComponent = __decorate([
        core_1.Component({
            selector: 'my-heroes',
            templateUrl: 'app/personne.component.html',
            styleUrls: ['app/personne.component.css']
        }), 
        __metadata('design:paramtypes', [personne_service_1.PersonneService, router_1.Router])
    ], PersonneComponent);
    return PersonneComponent;
}());
exports.PersonneComponent = PersonneComponent;
//# sourceMappingURL=personne.component.js.map