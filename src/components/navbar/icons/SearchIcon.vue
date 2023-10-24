<template>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" :viewBox="viewBox" :stroke-width="strokeWidth" :stroke="stroke" :class="className">
      <path :stroke-linecap="strokeLinecap" :stroke-linejoin="strokeLinejoin" :d="path" />
    </svg>
  </template>
  
  <script>
  export default {
    data() {
      return {
        viewBox: '0 0 24 24',
        strokeWidth: 1.5,
        stroke: 'currentColor',
        className: 'w-6 h-6',
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
        path: 'M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z',
      };
    },
  };
  </script>
  