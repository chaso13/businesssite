const { fontFamily } = require("tailwindcss/defaultTheme")

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      keyframes: {
        hamburger: {
          '0%': {
            transform: 'translateY(40%)',

          },

          '30%': {
            transform: 'translateY(0px)',
            opacity: '1'
          },

          '100%': {
            bottom: '0',
            transform: 'rotate(-90deg)',
          }
        },
        hamburgerBefore: {
          '0%': {
            transform: 'translateY(40%)',
          },
          '30%': {
            transform: 'translateY(0px)',
            opacity: '1'
          },
          '100%': {
            transform: 'translateY(0px)',
            opacity: '1'
          }
        },
        hamburgerAfter: {
          '0%': {
            transform: 'translateY(40%)',
          },

          '30%': {
            transform: 'translateY(0px)',
            opacity: '1'
          },

          '100%': {
            transform: 'translateY(0px)',
            opacity: '1'
          }
        },
        progress: {
          '0%': {
            strokeDasharray: '0 100'
          }
        },
        inUp: {
          '0%': {
            transform: 'translateY(40%)',

          },

          '100%': {
            transform: 'translateY(0px)',
            opacity: '1'
          }
        },
        fromMiddle: {
          '0%': {
            letterSpacing: '-0.5em',
            transform: 'translateZ(-700px)',
            opacity: '0'
          },

          '40%': {
            opacity: '0.6'
          },

          '100%': {
            transform: 'translateZ(0px)',
            opacity: '1'
          }
        },
        contactOpen: {
          '0%': {
            transform: 'translateX(-70px) translateY(-70px)'
          },

          '10%': {

          },
          '20%': {

          },
          '30%': {

          },
          '40%': {

          },
          '50%': {

          },
          '60%': {

          },
          '70%': {

          },
          '80%': {

          },
          '90%': {

          },

          '100%': {
            transform: 'translateZ(0px)',
            opacity: '1'
          }
        },
        contactClose: {
          '0%': {
            letterSpacing: '-0.5em',
            transform: 'translateZ(-700px)',
            opacity: '0'
          },

          '40%': {
            opacity: '0.6'
          },

          '100%': {
            transform: 'translateZ(0px)',
            opacity: '1'
          }
        },
        fadeIn: {
          '0%': {
            opacity: '0'
          },

          '40%': {
            opacity: '0.6'
          },

          '100%': {
            opacity: '1'
          }
        },
        fillIt: {
          '0%': { strokeDasharray: '100', strokeDashoffset: '100', stroke: '#107bdf' },
          '100%': { strokeDasharray: '100', strokeDashoffset: '0', stroke: '#107bdf' }
        },
        textFill: {
          '0%': { backgroundPosition: '100%' },
          '100%': { backgroundPosition: '0% 100%' }
        },
        floater: {
          '0%, 100%': { transform: 'translate(0%,0%)' },
          '50%': { transform: 'translate(4%,4%)' },
        }



      },
      animation: {
        'fill-text': 'textFill 400ms ease-in-out forwards',
        'filler-up': 'fillIt 500ms ease-in forwards ',
        'fill-circle': 'progress 1s ease-out forwards',
        'in-up': 'inUp 1s ease-in',
        'from-middle': 'fromMiddle 6s ease-in',
        'fade-in': 'fadeIn 2s ease-in',
        'floater': 'floater 9s ease-in-out infinite'

      },
      boxShadow: {
        "2xl": "-40px 0px 30px 0px rgb(1 1 1 / 0.2)"
      },
      colors: {
        primary: "#00040f",
        secondary: "#00f6ff",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
        'page-speed-text': "#080",
        'page-speed-fill': "#0C6"

      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        crimsonPro: ["Crimson Pro", "sans-serif"],
        Jost: ["Jost", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [require("tailwindcss-animate")],

};




const { fontFamily } = require("tailwindcss/defaultTheme")

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["app/**/*.{ts,tsx}", "components/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: `var(--radius)`,
        md: `calc(var(--radius) - 2px)`,
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
        darkMode: ["class"],
        content: ["app/**/*.{ts,tsx}", "components/**/*.{ts,tsx}"],
        theme: {
          container: {
            center: true,
            padding: "2rem",
            screens: {
              "2xl": "1400px",
            },
          },
          extend: {
            colors: {
              border: "hsl(var(--border))",
              input: "hsl(var(--input))",
              ring: "hsl(var(--ring))",
              background: "hsl(var(--background))",
              foreground: "hsl(var(--foreground))",
              primary: {
                DEFAULT: "hsl(var(--primary))",
                foreground: "hsl(var(--primary-foreground))",
              },
              secondary: {
                DEFAULT: "hsl(var(--secondary))",
                foreground: "hsl(var(--secondary-foreground))",
              },
              destructive: {
                DEFAULT: "hsl(var(--destructive))",
                foreground: "hsl(var(--destructive-foreground))",
              },
              muted: {
                DEFAULT: "hsl(var(--muted))",
                foreground: "hsl(var(--muted-foreground))",
              },
              accent: {
                DEFAULT: "hsl(var(--accent))",
                foreground: "hsl(var(--accent-foreground))",
              },
              popover: {
                DEFAULT: "hsl(var(--popover))",
                foreground: "hsl(var(--popover-foreground))",
              },
              card: {
                DEFAULT: "hsl(var(--card))",
                foreground: "hsl(var(--card-foreground))",
              },
            },
            borderRadius: {
              lg: `var(--radius)`,
              md: `calc(var(--radius) - 2px)`,
              sm: "calc(var(--radius) - 4px)",
            },
            fontFamily: {
              sans: ["var(--font-sans)", ...fontFamily.sans],
            },
            keyframes: {
              "accordion-down": {
                from: { height: 0 },
                to: { height: "var(--radix-accordion-content-height)" },
              },
              "accordion-up": {
                from: { height: "var(--radix-accordion-content-height)" },
                to: { height: 0 },
              },
            },
            animation: {
              "accordion-down": "accordion-down 0.2s ease-out",
              "accordion-up": "accordion-up 0.2s ease-out",
            },
          },
        },
        plugins: [require("tailwindcss-animate")],
      
    },
  },
 
}
