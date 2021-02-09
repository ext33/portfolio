import Vue from 'vue'
import { MLInstaller, MLCreate, MLanguage } from 'vue-multilanguage'

Vue.use(MLInstaller)

export default new MLCreate({
    initial: 'en',
    save: process.env.NODE_ENV === 'production',
    languages: [
        new MLanguage('en').create({
            canvas: "developer",
            skillTitle: "Skills",
            frontTitle: "Frontend",
            backTitle: "Backend",
            toolTitle: "Tools",
            contactsTitle: "Contacts",
            emailDesc: "You may contact me with email",
            telegramDesc: "Also you may contact me with telegram",
            instDesc: "If you interested, my instagram",
            gitDesc: "All my projects on github",
            habrDesc: "My portfolio",
            footerDesc: "by",
        }),

        new MLanguage('ru').create({
            canvas: "разработчик",
            skillTitle: "Навыки",
            frontTitle: "Фронтенд",
            backTitle: "Бэкенд",
            toolTitle: "Инструменты",
            contactsTitle: "Контакты",
            emailDesc: "Вы можете связаться со мной по почте",
            telegramDesc: "Также вы можете написать мне в телеграм",
            instDesc: "Если вам интересно, мой instagram",
            gitDesc: "Все мои проекты вы можете найти на github",
            habrDesc: "Мое портфолио",
            footerDesc: "by"
        })
    ]
})