import { HeroService } from "./hero.service";
import { LoggerService } from "./logger.service";
import { UserService } from "./user.service";

const heroServiceFactory=(logger:LoggerService,userService:UserService)=>
new HeroService(logger, userService.user.isAuthorized);

export const heroServiceProvider={
    provide:HeroService,
    useFactory:heroServiceFactory,
    deps:[LoggerService,UserService]
 };