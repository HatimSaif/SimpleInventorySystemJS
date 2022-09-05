import { categoryController } from "./category-controller.js";
import { uiController } from "./ui-controller.js";
export const App = (function(categoryController, uiController){
    return{
        Init: ()=>{
            console.log('App Init');
        }
    }
})(categoryController, uiController);

App.Init();