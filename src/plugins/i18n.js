import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

const messages = {
    'en': {
        menu1: 'Home',
        menu2: 'Portfolio',
        menu3:  'Achievements',
        supratitle: 'Convergence of Knowledge',
        title: 'Developer Web',
        subtitle: 'Experience in designing and developing Websites and Web Apps',
        heroparagraph1: 'Hi, I am ',
        heroparagraph2: ' Industrial engineer and web developer. A passionate about technology. With experience in',
        heroparagraph3: ' in addition to Frameworks, Libraries and CMS such as ',
        heroparagraph4: ', among others.',
        title1: 'Engineering',
        text1: 'Implemented management knowledge, Lean Manufacturing, continuous improvement and quality to offer the best results.',
        title2: 'Developing',
        text2: 'Creation of attractive and dynamic websites. Immersive and intuitive web apps with native looks.',
        title3: 'Design',
        text3: 'Thinking about the User Experience (UX) and the design of Interfaces (UI) to provide unique experiences in each person.',
        title4: 'Marketing',
        text4: 'Development of plans for users to feel identified with the brand through the main social networks and SEO.',
        title5: 'Analysis',
        text5: 'Interpreting the data with the most powerful tools to grow business and carry out scalability planning.',
        title6: 'Support',
        text6: 'Checking the availability, accessibility and security of websites to meet the demand for services.',
        footertext:'Develop by MetalSyntax with Vue.js and TailWindCss.',
        titlePort:'Portfolio',
        titleAch:'Achievements'
    },
    'es': {
        menu1: 'Inicio',
        menu2: 'Portafolio',
        menu3:  'Certificados',
        supratitle: 'Convergencia del conocimiento',
        title: 'Desarrollador Web',
        subtitle: 'Experiencia en diseño y desarrollo de sitios web y aplicaciones web',
        heroparagraph1: 'Hola, soy ',
        heroparagraph2: ' Ingeniero industrial y desarrollador web. Un apasionado de la tecnología. Con experiencia en',
        heroparagraph3: ' ademas de Frameworks, Librerias y CMS como ',
        heroparagraph4: ', entre otras.',
        title1: 'Ingenieria',
        text1: 'Implementado conocimientos de Gestion, Lean Manufacturing, Mejora Continua y Calidad para ofrecer los mejores resultados.',
        title2: 'Desarrollo',
        text2: 'Creacion de sitios webs atractivos y dinamicos. Web apps inmersiva e intuitivas con apariencia nativas.',
        title3: 'Diseño',
        text3: 'Pensando en la Experiencia del Usuario (UX) y el diseño de Interfaces (UI) para brindar experiencias unicas en cada persona.',
        title4: 'Marketing',
        text4: 'Desarrollo de planes para que los usuarios se sientan identificados con la marca a traves de las principales redes sociales y SEO.',
        title5: 'Analisis',
        text5: 'Interpretando los datos con las herramientas mas pontentes para hacer crecer los negocios y realizar planificaciones de escalabilidad.',
        title6: 'Soporte',
        text6: 'Comprobando la disponibilidad, accesibilidad y seguridad de los sitios web para sastifacer la demanda de los servicios.',
        footertext:'Desarrollador por MetalSyntax con Vue.js y TailWindCss.',
        titlePort:'Portafolio',
        titleAch:'Certificaciones'
    }
};

const i18n = new VueI18n({
    locale: 'en', 
    fallbackLocale: 'es', 
    messages, 
});

export default i18n;