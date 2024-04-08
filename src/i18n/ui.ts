
export const languages = {
    spanish : 'es',
    english : 'en'
}

export const defaultLang:string = languages.english;

export const ui: any = {
    es: {
         'title.about':'Sobre mi',
         'title.lang':'Idiomas',
         'title.experience':'My experiencia',
         'title.project':'Proyectos',
         'title.skill':'Conocimientos tecnicos',
         'title.education':'Educación',
         'nav.contact':'Contactame',
         errorPages: {
            '404Title': '',
            '404Description': '',
            '404Advice': '',
            '404Redirect': '',


         }
        
    },
    en : {
         'title.about':'About me',
         'title.lang':'Languages',
         'title.experience':'My experience',
         'title.project':'My projects',
         'title.skill':'My Skills',
         'title.education':'Education',
         'nav.contact':'Contact me',
         errorPages: {
            '404Title': 'The address you are looking for has not been found',
            '404Advice': ' You can return to the beginning through the following link ',
            '404Description': '',
            '404Redirect': 'return to the start',

         }

    }
}