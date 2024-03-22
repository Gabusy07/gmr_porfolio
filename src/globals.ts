import  { RESUME_EN }  from "./resume-en.ts";
import  { RESUME_ES } from "./resume-es.ts";

export let currentResume = RESUME_EN;

export function changeCurrentLanguage (code : String){
    if (code === 'es') currentResume = RESUME_ES;
    else currentResume= RESUME_EN;
    console.log(currentResume)

}
