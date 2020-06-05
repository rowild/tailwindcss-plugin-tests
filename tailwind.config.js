module.exports = {
  purge: false,
  theme: {
    gradientColors: { // defaults to {}
      pink: ['#731B38', '#4F031C'],
      'gray-medium': ['#4a5568', '#2d3748'],
      'gray-dark': ['#2d3748', '#1a202c'],
      red: '#f00',
      'red-blue': ['#f00', '#00f'],
      'red-green-blue': ['#f00', '#0f0', '#00f'],
      'black-white-with-stops': ['#000', '#000 45%', '#fff 55%', '#fff']
    },
    // ------------------------
    // ANIMATIONS
    // ------------------------
    animations: { // defaults to {}; the following are examples
      spin: {
        from: {
          transform: 'rotate(0deg)'
        },
        to: {
          transform: 'rotate(360deg)'
        }
      },
      jump: {
        '0%': {
          transform: 'translateY(0%)'
        },
        '50%': {
          transform: 'translateY(-100%)'
        },
        '100%': {
          transform: 'translateY(0%)'
        }
      }
    },
    animationDuration: { // defaults to these values
      default: '1s',
      '0s': '0s',
      '1s': '1s',
      '2s': '2s',
      '3s': '3s',
      '4s': '4s',
      '5s': '5s'
    },
    animationTimingFunction: { // defaults to these values
      default: 'ease',
      linear: 'linear',
      ease: 'ease',
      'ease-in': 'ease-in',
      'ease-out': 'ease-out',
      'ease-in-out': 'ease-in-out'
    },
    animationDelay: { // defaults to these values
      default: '0s',
      '0s': '0s',
      '1s': '1s',
      '2s': '2s',
      '3s': '3s',
      '4s': '4s',
      '5s': '5s'
    },
    animationIterationCount: { // defaults to these values
      default: 'infinite',
      once: '1',
      infinite: 'infinite'
    },
    animationDirection: { // defaults to these values
      default: 'normal',
      normal: 'normal',
      reverse: 'reverse',
      alternate: 'alternate',
      'alternate-reverse': 'alternate-reverse'
    },
    animationFillMode: { // defaults to these values
      default: 'none',
      none: 'none',
      forwards: 'forwards',
      backwards: 'backwards',
      both: 'both'
    },
    animationPlayState: { // defaults to these values
      running: 'running',
      paused: 'paused'
    },
    // ------------------------
    // GRADIENTS
    // ------------------------
    linearGradientDirections: { // defaults to these values
      t: 'to top',
      tr: 'to top right',
      r: 'to right',
      br: 'to bottom right',
      b: 'to bottom',
      bl: 'to bottom left',
      l: 'to left',
      tl: 'to top left'
    },
    linearGradientColors: { // defaults to {}
      red: '#f00',
      'red-blue': ['#f00', '#00f'],
      'red-green-blue': ['#f00', '#0f0', '#00f'],
      'black-white-with-stops': ['#000', '#000 45%', '#fff 55%', '#fff']
    },
    radialGradientShapes: { // defaults to this value
      default: 'ellipse'
    },
    radialGradientSizes: { // defaults to this value
      default: 'closest-side'
    },
    radialGradientPositions: { // defaults to these values
      default: 'center',
      t: 'top',
      tr: 'top right',
      r: 'right',
      br: 'bottom right',
      b: 'bottom',
      bl: 'bottom left',
      l: 'left',
      tl: 'top left'
    },
    radialGradientColors: { // defaults to {}
      red: '#f00',
      'red-blue': ['#f00', '#00f'],
      'red-green-blue': ['#f00', '#0f0', '#00f'],
      'black-white-with-stops': ['#000', '#000 45%', '#fff 55%', '#fff']
    },
    conicGradientStartingAngles: { // defaults to this value
      default: '0'
    },
    conicGradientPositions: { // defaults to these values
      default: 'center',
      t: 'top',
      tr: 'top right',
      r: 'right',
      br: 'bottom right',
      b: 'bottom',
      bl: 'bottom left',
      l: 'left',
      tl: 'top left'
    },
    conicGradientColors: { // defaults to {}
      red: '#f00',
      'red-blue': ['#f00', '#00f'],
      'red-green-blue': ['#f00', '#0f0', '#00f'],
      checkerboard: ['white 90deg', 'black 90deg 180deg', 'white 180deg 270deg', 'black 270deg']
    },
    repeatingLinearGradientDirections: theme => theme('linearGradientDirections'), // defaults to this value
    repeatingLinearGradientColors: theme => theme('linearGradientColors'), // defaults to {}
    repeatingLinearGradientLengths: { // defaults to {}
      sm: '25px',
      md: '50px',
      lg: '100px'
    },
    repeatingRadialGradientShapes: theme => theme('radialGradientShapes'), // defaults to this value
    repeatingRadialGradientSizes: { // defaults to this value
      default: 'farthest-corner'
    },
    repeatingRadialGradientPositions: theme => theme('radialGradientPositions'), // defaults to this value
    repeatingRadialGradientColors: theme => theme('radialGradientColors'), // defaults to {}
    repeatingRadialGradientLengths: { // defaults to {}
      sm: '25px',
      md: '50px',
      lg: '100px'
    },
    repeatingConicGradientStartingAngles: theme => theme('conicGradientStartingAngles'), // defaults to this value
    repeatingConicGradientPositions: theme => theme('conicGradientPositions'), // defaults to this value
    repeatingConicGradientColors: { // defaults to {}
      red: '#f00',
      'red-blue': ['#f00', '#00f'],
      'red-green-blue': ['#f00', '#0f0', '#00f'],
      starburst: ['white 0 5deg', 'blue 5deg']
    },
    repeatingConicGradientLengths: { // defaults to {}
      sm: '10deg',
      md: '20deg',
      lg: '40deg'
    },
    linearGradients: theme => ({
      colors: theme('gradientColors')
    }),
    radialGradients: theme => ({
      colors: theme('gradientColors')
    })
  },
  variants: {
    backgroundColor: ['responsive', 'hover'],
    backgroundOpacity: ['responsive', 'hover'],
    borderColor: ['responsive', 'hover'],
    borderOpacity: ['responsive', 'hover'],
    borderWidth: ['responsive'],
    boxShadow: ['responsive', 'hover', 'focus'],
    fill: ['responsive', 'hover', 'group-hover'],
    inset: ['responsive'],
    margin: ['responsive', 'hover', 'group-hover'],
    rotate: ['responsive', 'hover', 'group-hover'],
    scale: ['responsive', 'hover', 'group-hover'],
    textColor: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
    textOpacity: ['responsive', 'hover'],
    transform: ['responsive'],
    translate: ['responsive', 'active'],
    willChange: ['responsive'],
    zIndex: ['responsive', 'hover'],
    // ANIMATIONS
    animations: ['responsive'],
    animationDuration: ['responsive'],
    animationTimingFunction: ['responsive'],
    animationDelay: ['responsive'],
    animationIterationCount: ['responsive'],
    animationDirection: ['responsive'],
    animationFillMode: ['responsive'],
    animationPlayState: ['responsive'],
    // GRADIENTS
    conicGradients: ['responsive'],
    linearGradients: ['responsive'],
    radialGradients: ['responsive'],
    repeatingLinearGradients: ['responsive'],
    repeatingRadialGradients: ['responsive'],
    repeatingConicGradients: ['responsive']
  },
  plugins: [
    require('tailwindcss-animations'),
    require('tailwindcss-gradients')
  ]
}
