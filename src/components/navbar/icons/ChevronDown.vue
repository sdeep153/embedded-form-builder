<template>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" :viewBox="viewBox" :stroke-width="strokeWidth" :stroke="strokeColor" :class="classes" width="12" height="12">
      <path :stroke-linecap="linecap" :stroke-linejoin="linejoin" :d="pathData" />
    </svg>
  </template>
  
  <script>
  export default {
    data() {
      return {
        viewBox: '0 0 24 24',
        strokeWidth: 2.5,
        strokeColor: 'white',
        classes: 'w-4 h-4',
        linecap: 'round',
        linejoin: 'round',
        pathData: 'M19.5 8.25l-7.5 7.5-7.5-7.5',
      };
    },
  };
  </script>
  