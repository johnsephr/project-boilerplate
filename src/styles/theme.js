//MUI
import { amber, deepPurple, red, green, blue } from '@material-ui/core/colors'

// Create custom theme here

// For reference: 
// https://material-ui.com/customization/palette/
// https://material-ui.com/customization/default-theme/

// Breakpoints
const breakpoints = {
    xs: 0,
    sm: 600,
    md: 960,
    lg: 1280,
    xl: 1920,
}

// Palette (is separate to facilitate dynamic theme changes)
export const palette = {
    primary: {
        light: deepPurple[300],
        main: deepPurple[500],
        dark: deepPurple[700]
    },
    secondary: {
        light: amber[300],
        main: amber[500],
        dark: amber[700]
    },
    error: {
        light: red[300],
        main: red[500],
        dark: red[700]
    },
    customClass1: {
        backGroundColor: green[500],
    },
    customClass2: {
        backGroundColor: red[500],
    }
}

// Everything besides palette
export const restOfTheme = {
    spacing: 10,
    breakpoints: {
        keys: ['xs', 'sm', 'md', 'lg', 'xl'],
        up: key => `@media (min-width:${breakpoints[key]}px)`,
    }
}



































// //MUI
// import { createMuiTheme } from '@material-ui/core'
// import { blue, deepPurple, red } from '@material-ui/core/colors'

// // Create custom theme here:
// // For reference: https://material-ui.com/customization/palette/

// const breakpoints = {
//     xs: 0,
//     sm: 600,
//     md: 960,
//     lg: 1280,
//     xl: 1920,
//   }

// const rootTheme = {
//     palette: {
//         primary: {
//             light: blue[300],
//             main: blue[500],
//             dark: blue[700]
//         },
//         secondary: {
//             light: deepPurple[300],
//             main: deepPurple[500],
//             dark: deepPurple[700]
//         },
//         error: {
//             light: red[300],
//             main: red[500],
//             dark: red[700]
//         },
//         type: 'dark'
//     },
//     spacing: 10,
//     breakpoints: {
//         keys: ['xs', 'sm', 'md', 'lg', 'xl'],
//         up: key => `@media (min-width:${breakpoints[key]}px)`,
//       }
// }

// const theme = createMuiTheme(rootTheme)

// export default theme