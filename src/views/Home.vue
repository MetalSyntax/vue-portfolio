<template>
    <div>
        <!--<div id="herohome" class="herohome" style="background-image:url('https://images.pexels.com/photos/169573/pexels-photo-169573.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260')">
          <h1 class="title-home font-semibold text-white text-center text-5xl">Wonder Díaz</h1>
            <vue-typed-js :strings="['Desarrollador Web', 'Ingeniero Industrial']">
              <h2 class="fancy-text font-semibold text-white text-center text-3xl typing"></h2>
            </vue-typed-js>
        </div>-->
        <div class="bg-gray-100">
        <div class="flex flex-wrap py-6 px-4">
            <div class="w-full">
                <h6 class="text-gray-800 text-center text-xl">{{ $t('supratitle') }}</h6>
                <h1 class="text-teal-700 text-center text-4xl">{{ $t('title') }}</h1>
                <h3 class="text-gray-800 text-center text-2xl">{{ $t('subtitle') }}</h3>
            </div>
            <div class="flex flex-wrap py-4 px-4">
              <div class="sm:w-full md:w-1/6 lg:w-1/6 "></div>
              <div class="sm:w-full md:w-4/6 lg:w-4/6">
                 <p class="text-gray-800 text-center text-base">{{ $t('heroparagraph1') }}<b>Wonder Diaz</b>{{ $t('heroparagraph2') }}<b> HTML, CSS, JavaScript, PHP, SQL and NoSQL</b>{{ $t('heroparagraph3') }}<b>Vue, Angular, React, Bootstrap, WordPress</b>{{ $t('heroparagraph4') }}</p>
              </div>
            </div>
        </div>
        </div>
  <div class="py-4 px-2 bg-gray-100">
  <div class="flex flex-wrap -mx-2">
  <div class="sm:w-full md:w-1/2 lg:w-1/3 px-2" data-aos="fade">
  <div class="rounded overflow-hidden shadow-lg my-2 px-4 bg-white">
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2 text-center">
      <img class="h-10 px-2 inline" src="../assets/img/icons/engineering_100px.png" alt="Engineering">
      {{ $t('title1') }}
      </div>
    <p class="text-gray-700 text-base text-center">
      {{ $t('text1') }}
    </p>
  </div>
  </div>
    </div>
    <div class="sm:w-full md:w-1/2 lg:w-1/3 px-2" data-aos="fade">
     <div class="rounded overflow-hidden shadow-lg my-2 px-4 bg-white">
  <div class="px-6 py-6">
    <div class="font-bold text-xl mb-2 text-center">
       <img class="h-10 px-2 inline" src="../assets/img/icons/source_code_64px.png" alt="Engineering">
      {{ $t('title2') }}</div>
    <p class="text-gray-700 text-base text-center">
       {{ $t('text2') }}
    </p>
  </div>
  </div>
    </div>
    <div class="sm:w-full md:w-1/2 lg:w-1/3 px-2" data-aos="fade">
     <div class="rounded overflow-hidden shadow-lg my-2 px-4 bg-white">
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2 text-center">
       <img class="h-10 px-2 inline" src="../assets/img/icons/design_100px.png" alt="Engineering">
      {{ $t('title3') }}</div>
    <p class="text-gray-700 text-base text-center">
       {{ $t('text3') }}
    </p>
  </div>
  </div>
    </div>
    <div class="sm:w-full md:w-1/2 lg:w-1/3 px-2" data-aos="fade">
  <div class="rounded overflow-hidden shadow-lg my-2 px-4 bg-white">
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2 text-center">
       <img class="h-10 px-2 inline" src="../assets/img/icons/commercial_100px.png" alt="Engineering">
      {{ $t('title4') }}</div>
    <p class="text-gray-700 text-base text-center">
      {{ $t('text4') }}
    </p>
  </div>
  </div>
    </div>
    <div class="sm:w-full md:w-1/2 lg:w-1/3 px-2" data-aos="fade">
     <div class="rounded overflow-hidden shadow-lg my-2 px-4 bg-white">
  <div class="px-8 py-4">
    <div class="font-bold text-xl mb-2 text-center">
       <img class="h-10 px-2 inline" src="../assets/img/icons/graph_100px.png" alt="Engineering">
      {{ $t('title5') }}</div>
    <p class="text-gray-700 text-base text-center">
       {{ $t('text5') }}
    </p>
  </div>
  </div>
    </div>
    <div class="sm:w-full md:w-1/2 lg:w-1/3 px-2" data-aos="fade">
     <div class="rounded overflow-hidden shadow-lg my-2 px-4 bg-white">
  <div class="px-8 py-4">
    <div class="font-bold text-xl mb-2 text-center">
       <img class="h-10 px-2 inline" src="../assets/img/icons/service_100px.png" alt="Engineering">
      {{ $t('title6') }}</div>
    <p class="text-gray-700 text-base text-center">
       {{ $t('text6') }}
    </p>
  </div>
  </div>
  </div>
  </div>
</div>
<div class="flex mb-4">
  <div class="w-full bg-gray-500"></div>
</div>
  </div>
</template>

<script>
export default {
    name: "home",
};
</script>

<style>
  #herohome {
    background: center no-repeat;
    height: calc(100vh - 72px);
    align-items: center;
    background-size: cover;
    justify-content: center;
  }
  .title-home{
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
    vertical-align: middle;
    height: 15%;
    }
  .fancy-text{
    height: 10%;
  }
</style>