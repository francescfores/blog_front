/** @type {Partial<ThemeConfig & {extend: Partial<ThemeConfig>}> & {animation: Record<"none" | "spin" | "ping" | "pulse" | "bounce", string>; aria: Record<"checked" | "disabled" | "expanded" | "hidden" | "pressed" | "readonly" | "required" | "selected", string>; aspectRatio: Record<"auto" | "square" | "video", string>; backgroundImage: Record<"none" | "gradient-to-t" | "gradient-to-tr" | "gradient-to-r" | "gradient-to-br" | "gradient-to-b" | "gradient-to-bl" | "gradient-to-l" | "gradient-to-tl", string>; backgroundPosition: Record<"bottom" | "center" | "left" | "left-bottom" | "left-top" | "right" | "right-bottom" | "right-top" | "top", string>; backgroundSize: Record<"auto" | "cover" | "contain", string>; blur: Record<"0" | "none" | "sm" | "DEFAULT" | "md" | "lg" | "xl" | "2xl" | "3xl", string>; borderRadius: Record<"none" | "sm" | "DEFAULT" | "md" | "lg" | "xl" | "2xl" | "3xl" | "full", string>; borderWidth: Record<"0" | "2" | "4" | "8" | "DEFAULT", string>; boxShadow: Record<"sm" | "DEFAULT" | "md" | "lg" | "xl" | "2xl" | "inner" | "none", string>; brightness: Record<"0" | "50" | "75" | "90" | "95" | "100" | "105" | "110" | "125" | "150" | "200", string>; columns: Record<"1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12" | "auto" | "3xs" | "2xs" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl", string>; content: Record<"none", string>; contrast: Record<"0" | "50" | "75" | "100" | "125" | "150" | "200", string>; cursor: Record<"auto" | "default" | "pointer" | "wait" | "text" | "move" | "help" | "not-allowed" | "none" | "context-menu" | "progress" | "cell" | "crosshair" | "vertical-text" | "alias" | "copy" | "no-drop" | "grab" | "grabbing" | "all-scroll" | "col-resize" | "row-resize" | "n-resize" | "e-resize" | "s-resize" | "w-resize" | "ne-resize" | "nw-resize" | "se-resize" | "sw-resize" | "ew-resize" | "ns-resize" | "nesw-resize" | "nwse-resize" | "zoom-in" | "zoom-out", string>; dropShadow: Record<"sm" | "DEFAULT" | "md" | "lg" | "xl" | "2xl" | "none", string | string[]>; flex: Record<"1" | "auto" | "initial" | "none", string>; flexGrow: Record<"0" | "DEFAULT", string>; flexShrink: Record<"0" | "DEFAULT", string>; fontFamily: Record<"sans" | "serif" | "mono", string[]>; fontSize: Record<"xs" | "sm" | "base" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl" | "8xl" | "9xl", [string, {lineHeight: string}]>; fontWeight: Record<"thin" | "extralight" | "light" | "normal" | "medium" | "semibold" | "bold" | "extrabold" | "black", string>; gradientColorStopPositions: Record<"0%" | "5%" | "10%" | "15%" | "20%" | "25%" | "30%" | "35%" | "40%" | "45%" | "50%" | "55%" | "60%" | "65%" | "70%" | "75%" | "80%" | "85%" | "90%" | "95%" | "100%", string>; grayscale: Record<"0" | "DEFAULT", string>; gridAutoColumns: Record<"auto" | "min" | "max" | "fr", string>; gridAutoRows: Record<"auto" | "min" | "max" | "fr", string>; gridColumn: Record<"auto" | "span-1" | "span-2" | "span-3" | "span-4" | "span-5" | "span-6" | "span-7" | "span-8" | "span-9" | "span-10" | "span-11" | "span-12" | "span-full", string>; gridColumnEnd: Record<"1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12" | "13" | "auto", string>; gridColumnStart: Record<"1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12" | "13" | "auto", string>; gridRow: Record<"auto" | "span-1" | "span-2" | "span-3" | "span-4" | "span-5" | "span-6" | "span-full", string>; gridRowEnd: Record<"1" | "2" | "3" | "4" | "5" | "6" | "7" | "auto", string>; gridRowStart: Record<"1" | "2" | "3" | "4" | "5" | "6" | "7" | "auto", string>; gridTemplateColumns: Record<"1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12" | "none", string>; gridTemplateRows: Record<"1" | "2" | "3" | "4" | "5" | "6" | "none", string>; hueRotate: Record<"0" | "15" | "30" | "60" | "90" | "180", string>; invert: Record<"0" | "DEFAULT", string>; keyframes: Record<"spin" | "ping" | "pulse" | "bounce", Record<string, CSSDeclarationList>>; letterSpacing: Record<"tighter" | "tight" | "normal" | "wide" | "wider" | "widest", string>; lineHeight: Record<"3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "none" | "tight" | "snug" | "normal" | "relaxed" | "loose", string>; listStyleType: Record<"none" | "disc" | "decimal", string>; listStyleImage: Record<"none", string>; lineClamp: Record<"1" | "2" | "3" | "4" | "5" | "6", string>; minHeight: Record<"0" | "full" | "screen" | "min" | "max" | "fit", string>; minWidth: Record<"0" | "full" | "min" | "max" | "fit", string>; objectPosition: Record<"bottom" | "center" | "left" | "left-bottom" | "left-top" | "right" | "right-bottom" | "right-top" | "top", string>; opacity: Record<"0" | "5" | "10" | "20" | "25" | "30" | "40" | "50" | "60" | "70" | "75" | "80" | "90" | "95" | "100", string>; order: Record<"1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12" | "first" | "last" | "none", string>; outlineOffset: Record<"0" | "1" | "2" | "4" | "8", string>; outlineWidth: Record<"0" | "1" | "2" | "4" | "8", string>; ringOffsetWidth: Record<"0" | "1" | "2" | "4" | "8", string>; ringWidth: Record<"0" | "1" | "2" | "4" | "8" | "DEFAULT", string>; rotate: Record<"0" | "1" | "2" | "3" | "6" | "12" | "45" | "90" | "180", string>; saturate: Record<"0" | "50" | "100" | "150" | "200", string>; scale: Record<"0" | "50" | "75" | "90" | "95" | "100" | "105" | "110" | "125" | "150", string>; screens: Record<"sm" | "md" | "lg" | "xl" | "2xl", string>; sepia: Record<"0" | "DEFAULT", string>; skew: Record<"0" | "1" | "2" | "3" | "6" | "12", string>; spacing: Record<"0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12" | "14" | "16" | "20" | "24" | "28" | "32" | "36" | "40" | "44" | "48" | "52" | "56" | "60" | "64" | "72" | "80" | "96" | "px" | "0.5" | "1.5" | "2.5" | "3.5", string>; strokeWidth: Record<"0" | "1" | "2", string>; textDecorationThickness: Record<"0" | "1" | "2" | "4" | "8" | "auto" | "from-font", string>; textUnderlineOffset: Record<"0" | "1" | "2" | "4" | "8" | "auto", string>; transformOrigin: Record<"center" | "top" | "top-right" | "right" | "bottom-right" | "bottom" | "bottom-left" | "left" | "top-left", string>; transitionDelay: Record<"0" | "75" | "100" | "150" | "200" | "300" | "500" | "700" | "1000", string>; transitionDuration: Record<"0" | "75" | "100" | "150" | "200" | "300" | "500" | "700" | "1000" | "DEFAULT", string>; transitionProperty: Record<"none" | "all" | "DEFAULT" | "colors" | "opacity" | "shadow" | "transform", string>; transitionTimingFunction: Record<"DEFAULT" | "linear" | "in" | "out" | "in-out", string>; willChange: Record<"auto" | "scroll" | "contents" | "transform", string>; zIndex: Record<"0" | "10" | "20" | "30" | "40" | "50" | "auto", string>}} */

const plugin = require("tailwindcss/plugin");
const colors = require("tailwindcss/colors");
const { createThemes } = require('tw-colors');
// const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    colors: {
      ...colors,
      /*
      'primary': '#2577c1',
      'secondary-bg': '#fff',
      'theme': '#fff',
      'header-color': '#c23fe2',
      'route-link-active': '#fff',
      'link-color': '#555050',
      'border-color': '#555050',

      // Dark theme colors
      'dark-primary': '#ff500b',
      'dark-secondary-bg': '#424242',
      'dark-theme': '#424242',
      'dark-header-color': '#424242',
      'dark-route-link-active': '#ff500b',
      'dark-link-color': '#fff',
      'dark-border-color': '#1cd61c',
      */
    },
    // extend: {
    //   minHeight: {
    //     "screen-75": "75vh",
    //   },
    //   fontSize: {
    //     55: "55rem",
    //   },
    //   opacity: {
    //     80: ".8",
    //   },
    //   zIndex: {
    //     2: 2,
    //     3: 3,
    //   },
    //   inset: {
    //     "-100": "-100%",
    //     "-225-px": "-225px",
    //     "-160-px": "-160px",
    //     "-150-px": "-150px",
    //     "-94-px": "-94px",
    //     "-50-px": "-50px",
    //     "-29-px": "-29px",
    //     "-20-px": "-20px",
    //     "25-px": "25px",
    //     "40-px": "40px",
    //     "95-px": "95px",
    //     "145-px": "145px",
    //     "195-px": "195px",
    //     "210-px": "210px",
    //     "260-px": "260px",
    //   },
    //   height: {
    //     "95-px": "95px",
    //     "70-px": "70px",
    //     "350-px": "350px",
    //     "500-px": "500px",
    //     "600-px": "600px",
    //   },
    //   maxHeight: {
    //     "860-px": "860px",
    //   },
    //   maxWidth: {
    //     "100-px": "100px",
    //     "120-px": "120px",
    //     "150-px": "150px",
    //     "180-px": "180px",
    //     "200-px": "200px",
    //     "210-px": "210px",
    //     "580-px": "580px",
    //   },
    //   minWidth: {
    //     "140-px": "140px",
    //     48: "12rem",
    //   },
    //   backgroundSize: {
    //     full: "100%",
    //   },
    // },
    // fontFamily: {
    //   sans: [
    //     'Montserrat',
    //     'sans-serif',
    //     , ...defaultTheme.fontFamily.sans
    //   ]
    // },
  },
  plugins: [
  //   // require("@tailwindcss/forms"),
  //   // require('tailwind-scrollbar'),
  //   // plugin(function ({ addComponents, theme }) {
  //   //   const screens = theme("screens", {});
  //   //   /* addComponents([
  //   //      {
  //   //        ".container": { width: "100%" },
  //   //      },
  //   //      {
  //   //        [`@media (min-width: ${screens.sm})`]: {
  //   //          ".container": {
  //   //            "max-width": "640px",
  //   //          },
  //   //        },
  //   //      },
  //   //      {
  //   //        [`@media (min-width: ${screens.md})`]: {
  //   //          ".container": {
  //   //            "max-width": "768px",
  //   //          },
  //   //        },
  //   //      },
  //   //      {
  //   //        [`@media (min-width: ${screens.lg})`]: {
  //   //          ".container": {
  //   //            "max-width": "1024px",
  //   //          },
  //   //        },
  //   //      },
  //   //      {
  //   //        [`@media (min-width: ${screens.xl})`]: {
  //   //          ".container": {
  //   //            "max-width": "1280px",
  //   //          },
  //   //        },
  //   //      },
  //   //      {
  //   //        [`@media (min-width: ${screens["2xl"]})`]: {
  //   //          ".container": {
  //   //            "max-width": "1280px",
  //   //          },
  //   //        },
  //   //      },
  //   //    ]);*/
  //   // }),
    createThemes({
      light: {

        'primary': '#0091AD', //green 70C1B3 //red EF476F //yellow FFC43D //blue 0091AD
        'secondary': '#F3A712', //'#70d0f8',
        'ternary': '#29335C', //'#29335C',
        'success': '#70c183', //'#70C1B3',
        'info': '#2E72B2', //'#29335C',
        'warning': '#FFC43D', //'#FFC43D',
        'help': 'rgba(85,49,145,0.73)', //'#29335C',
        'danger': '#EF476F', //'#29335C',
        'bgPrim': '#ffffff',
        'bgSeco': '#e5e5e5',
        'bgTern': '#d3d3d3',
        // 'secondary': '#CBF7ED',
        // 'ternary': '#1D3557',
        // 'quaternary': '#1D3557',
        'textPrimary': '#0e1a2a', //slate 900
        'textSecondary': '#626f80',
        'textTertiary': '#c0c0c0',
        // 'nav-color': '#242b3b',
        // 'theme': '#fff',
        // 'header-color': '#404040',
        // 'route-link-active': '#E85651',
        // 'link-color': '#fff',
        // 'border-color': '#E85651',
      },
      dark: {
        'primary': 'rgba(0,145,173,0.7)',
        'secondary': 'rgba(243,167,18,0.7)',
        'ternary': 'rgba(41,51,92,0.7)',
        'success': 'rgba(112,193,131,0.7)', //'#70C1B3',
        'info': 'rgba(46,114,178,0.7)', //'#29335C',
        'warning': 'rgba(255,196,61,0.7)', //'#FFC43D',
        'help': 'rgba(85,49,145,0.7)', //'#29335C',
        'danger': 'rgba(239,71,111,0.7)', //'#29335C',
        'bgPrim': '#0F1C2E', //0F1C2E
        'bgSeco': '#0A131F',
        'bgTern': '#1e314b',
        // 'secondary': '#CBF7ED',
        // 'ternary': '#1D3557',
        // 'quaternary': '#1D3557',
        'textPrimary': '#CBF7ED',
        'textSecondary': '#658cbb',
        'textTertiary': '#364c69',
        // 'primary-bg': '#404040',
        // 'bt-primary': 'rgb(34,80,77)',
        // 'nav-color': 'rgb(34,80,77)',
        // 'theme': '#424242',
        // 'header-color': '#E85651',
        // 'route-link-active': '#E85651',
        // 'link-color': '#fff',
        // 'border-color': '#E85651',
      },
      fontFamily: {
        // sans: [
        //   'Montserrat',
        //   'sans-serif',
        //   // , ...defaultTheme.fontFamily.sans
        // ]
        poppins: ['Poppins', 'system-ui', 'sans-serif'],
        nunito: ['Nunito Sans', 'sans-serif'],
      },
    }),
  //   // require('tw-elements/dist/plugin'),
  //   // require('@tailwindcss/aspect-ratio'),
  ],
  // safelist: [{
  //   pattern: /.*/
  // }]
};

