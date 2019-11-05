<template>
  <div id="app">
    <meta name="viewport" content="width=device-width, initial-scale=1">
      <nav class="flex items-center justify-between flex-wrap bg-gray-900 p-4 shadow-lg">
        <div class="flex items-center flex-shrink-0 text-white mr-6">
          <router-link to="/">
          <span class="font-semibold hover:text-white text-gray-300 text-xl tracking-tight"><img class="h-10 px-2 inline" src="./assets/img/icons/MetalSyntax-Logo.png" alt="Logo">Wonder Diaz</span>
           </router-link>
        </div>
        <div class="block lg:hidden">
          <button @click="toggle" class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
            <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
          </button>
        </div>
        <div :class="open ? 'block': 'hidden'" class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div class="text-sm lg:flex-grow">
            <router-link to="/" class="block mt-4 lg:inline-block lg:mt-0 text-teal-400 hover:text-white mr-4 text-base p-2">
               {{ $t('menu1') }}
            </router-link>
            <router-link to="/portfolio" class="block mt-4 lg:inline-block lg:mt-0 text-teal-400 hover:text-white mr-4 text-base p-2">
              {{ $t('menu2') }}
            </router-link>
            <router-link to="/achievements" class="block mt-4 lg:inline-block lg:mt-0 text-teal-400 hover:text-white mr-4 text-base p-2">
              {{ $t('menu3') }}
            </router-link>    
          </div>
           <button class="bg-teal-500 p-2 rounded leading-none flex items-center bg-white block mt-4 lg:inline-block lg:mt-0 text-gray-800 hover:text-white mr-4" v-on:click="switchLocale()">{{ displayLocale }}</button>
        </div>
      </nav>
    
    <router-view />
   
   <footer class="footer">
    <div class="flex mb-0">
      <div class="w-full bg-gray-900 p-4 shadow-lg">
        <p class="text-center text-white"> {{ $t('footertext') }}</p>
      </div>
    </div>
  </footer>
  </div>
</template>

<script>
import i18n from '@/plugins/i18n';
    export default {
        name: 'app',
        components: {
        },
        data() {
            return {
                open: false,
                showNav: false,
                /*languages: [
                    { language: 'en', title: 'English' },
                    { language: 'es', title: 'Español' }
                ]*/
            };
        },
        methods: {
            toggle(){
              this.open = !this.open;
            },
            changeLocale(locale) {
                i18n.locale = locale;
                },
            switchLocale () {
              if (this.$i18n.locale === 'en') {
              this.$i18n.locale = 'es'
               } else {
              this.$i18n.locale = 'en'
                  }
                }
              },
            computed: {
              displayLocale () {
              let other = 'EN'
              if (this.$i18n.locale === 'en') {
              other = 'ES'
              }
              return other
            }
          }
        }
</script>

<style>
#app {
  min-height: 100vh;
  overflow: hidden;
  display: block;
  position: relative;
  background: #F7FAFC;
  padding-bottom: 60px;
}
footer {
 position: absolute;
 bottom: 0;
 width: 100%;
}
</style>
