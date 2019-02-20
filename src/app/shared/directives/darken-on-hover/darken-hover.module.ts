import { NgModule } from "@angular/core";
import { DarkHoverDirective } from "./darken-hover.directive";

@NgModule({
    declarations: [DarkHoverDirective],
    exports: [DarkHoverDirective]
})
export class DarkHoverModule {

}