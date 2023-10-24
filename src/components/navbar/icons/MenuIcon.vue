
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
        path: 'M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5',
      };
    },
  };
  </script>
  