import type { Config } from 'tailwindcss';

const config: Config = {
    darkMode: ['class'],
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
        './UI/**/*.{js,ts,jsx,tsx}',
    ],
    safelist: [
        'air',
        'energy',
        'water',
        'residues',
        'transport',
        'experience',
        'default',
    ],
    theme: {
  	extend: {
    		colors: {
    			background: 'hsl(var(--background))',
    			foreground: 'hsl(var(--foreground))',
                spanishOrange: {
                    700: '#FDD1B5',
                    800: '#FBB383',
                    900: '#F99551',
                    1000: '#F76707',
                    1100: '#F87620',
                    1200: '#DE5D06',
                    1300: '#AD4805',
                    1400: '#632903',
                },
                blackenedBlue: {
                    500: '#919698',
                    600: '#7A8083',
                    700: '#646B6F',
                    800: '#4E565A',
                    900: '#384146',
                    1000: '#222C31',
                },
                snowWhite: {
                    400: '#F6F6F6',
                    500: '#E9EAEA',
                    600: '#D3D5D6',
                    700: '#BDC0C1',
                    800: '#A7ABAD',
                    900: '#919698',
                    1000: '#FFF',
                },
                orange: {
                    600: '#FDE1CD',
                    700: '#FCC29C',
                    800: '#FAA46A',
                    900: '#F98539',
                    1000: '#F76707',
                    1100: '#C65206',
                    1200: '#943E04',
                    1300: '#632903',
                    1400: '#311501'
                },
                blueGreen: {
                    600: '#CEE3E7',
                    700: '#9DC7CE',
                    800: '#6DAAB6',
                    900: '#3C8E9D',
                    1000: '#0B7285',
                    1100: '#095B6A',
                    1200: '#074450',
                    1300: '#042E35',
                    1400: '#02171B'
                },
                yellowBanana: {
                    600: '#FFF8D4',
                    700: '#FFF1A8',
                    800: '#FFEA7D',
                    900: '#FFE351',
                    1000: '#FFDC26',
                    1100: '#CCB01E',
                    1200: '#998417',
                    1300: '#66580F',
                    1400: '#332C08'
                },
                gray: {
                    '000': '#FFFFFF',
                    600: '#FDFDFD',
                    700: '#D3D3D3',
                    800: '#7B7B7B',
                    900: '#4F4F4F',
                    1000: '#232323',
                    1100: '#1C1C1C',
                    1200: '#1E1E1E'
                },
                grayBlue: {
                    600: '#F5F6F8',
                    700: '#EBEEF0',
                    800: '#E2E5E9',
                    900: '#D8DDE1',
                    1000: '#CED4DA',
                    1100: '#A5AAAE',
                    1200: '#7C7F83',
                    1300: '#525557',
                    1400: '#292A2C'
                },
                info: {
                    600: '#D4E4EF',
                    700: '#A9CADF',
                    800: '#7EAFD0',
                    900: '#287AB0',
                    1000: '#287AB0',
                    1100: '#20628D',
                    1200: '#18496A',
                    1300: '#103146',
                    1400: '#081823'
                },
                warning: {
                    600: '#FDECCC',
                    700: '#FBD999',
                    800: '#F9C566',
                    900: '#F7B233',
                    1000: '#F59F00',
                    1100: '#C47F00',
                    1200: '#935F00',
                    1300: '#624000',
                    1400: '#312000'
                },
                error: {
                    600: '#F9D6D6',
                    700: '#F3ADAD',
                    800: '#EC8383',
                    900: '#E65A5A',
                    1000: '#E03131',
                    1100: '#B32727',
                    1200: '#861D1D',
                    1300: '#5A1414',
                    1400: '#2D0A0A'
                },
                success: {
                    600: '#E0EECF',
                    700: '#C2DC9F',
                    800: '#A3CB6F',
                    900: '#85B93F',
                    1000: '#66A80F',
                    1100: '#52860C',
                    1200: '#3D6509',
                    1300: '#294306',
                    1400: '#142203'
                },
                social: {
                    google: {
                        blue: {
                            1000: '#4285F4',
                            1100: '3367D6'
                        }
                    }
                },
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'var(--primary)',
  				foreground: 'var(--primary-foreground)'
  			},
  			secondary: {
  				DEFAULT: 'var(--secondary)',
  				foreground: 'var(--secondary-foreground)'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: {
                    background: 'var(--input-background)',
                    border: 'var(--input-border)'
                },
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  	}
    },
    plugins: [require('tailwindcss-animate')],
};
export default config;
