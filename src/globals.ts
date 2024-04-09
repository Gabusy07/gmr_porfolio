import type { ResumeData } from "./interfaces/resumeData.ts";
import  { RESUME }  from "./resume.ts";

export let currentResume:ResumeData = RESUME.en;

function changeCurrentLanguage (code : String): ResumeData{
    if (code === 'es') currentResume = RESUME.en;
    else currentResume= RESUME.es;
    console.log(currentResume)
    return currentResume;

}

changeCurrentLanguage('es')
