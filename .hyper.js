module.exports = {
  config: {
    updateChannel: 'stable',

    fontSize: 11,

    fontFamily: 'Menlo, "DejaVu Sans Mono", Consolas, "Lucida Console", monospace',

    fontWeight: 'normal',

    fontWeightBold: 'bold',

    cursorColor: '#fff',

    cursorAccentColor: '#000',

    cursorShape: 'UNDERLINE',

    cursorBlink: false,

    foregroundColor: '#F8F8F0',

    backgroundColor: '#282828',

    selectionColor: 'rgba(248,28,229,0.3)',

    borderColor: '#282828',

    windowSize: [636, 810],

    css: '',

    termCSS: '',

    showHamburgerMenu: '',

    showWindowControls: '',

    padding: '12px 14px',

    colors: { // テーマなしの場合の配色
      black: '#282828',
      red: '#F92672',
      green: '#A6E22E',
      yellow: '#FD971F',
      blue: '#AE81FF',
      magenta: '#66D9EF',
      cyan: '#38CCD1',
      white: '#ffffff',
      lightBlack: '#49483E',
      lightRed: '#F92672',
      lightGreen: '#A6E22E',
      lightYellow: '#FD971F',
      lightBlue: '#AE81FF',
      lightMagenta: '#66D9EF',
      lightCyan: '#38CCD1',
      lightWhite: '#ffffff'
    },

    shell: '',

    shellArgs: ['--login'],

    env: {},

    bell: 'SOUND',

    copyOnSelect: false,

    defaultSSHApp: true,

    /**
     * plugin option
     */
    hyperAkari: {
      illust: false,
      opacity: 0.3,
    },
    hyperStatusLine: {
      dirtyColor: '#8EBBBA',
    },
    alwaysOnTop: {
      default: false,
    },
  },

  plugins: [
    "hyperlinks",
    "hyper-statusline",
    "hypercwd",
    "hyper-always-on-top",
    "hyper-akari",
    "hyper-dialog"
  ],

  localPlugins: [
  ],


  keymaps: {
  },
}
