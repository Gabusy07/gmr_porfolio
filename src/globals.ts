import type { ResumeData } from "./interfaces/resumeData.ts";
import  { RESUME }  from "./resume-en.ts";

export let currentResume:ResumeData = RESUME.en;

export function changeCurrentLanguage (code : String){
    if (code === 'es') currentResume = RESUME.en;
    else currentResume= RESUME.en;
    console.log(currentResume)

}
