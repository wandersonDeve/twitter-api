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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TweetsController = void 0;
const common_1 = require("@nestjs/common");
const tweet_dto_1 = require("./tweet.dto");
const tweet_service_1 = require("./tweet.service");
const passport_1 = require("@nestjs/passport");
let TweetsController = class TweetsController {
    constructor(service) {
        this.service = service;
    }
    findUnique(id) {
        return this.service.findUnique(id);
    }
    create(data) {
        return this.service.create(data);
    }
    update(id, newTweet) {
        return this.service.update(id, newTweet);
    }
};
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], TweetsController.prototype, "findUnique", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [tweet_dto_1.CreateTweetDto]),
    __metadata("design:returntype", Promise)
], TweetsController.prototype, "create", null);
__decorate([
    (0, common_1.Put)('update/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, tweet_dto_1.CreateTweetDto]),
    __metadata("design:returntype", Promise)
], TweetsController.prototype, "update", null);
TweetsController = __decorate([
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    (0, common_1.Controller)('tweets'),
    __metadata("design:paramtypes", [tweet_service_1.TweetsService])
], TweetsController);
exports.TweetsController = TweetsController;
//# sourceMappingURL=tweet.controller.js.map