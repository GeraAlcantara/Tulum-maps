import { red } from "@material-ui/core/colors"
import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles"

// A custom theme for this app

let theme = createMuiTheme({
  palette: {
    primary: {
      main: "#556cd6",
    },
    secondary: {
      main: "#F34B68",
    },
    error: {
      main: red.A400,
    },
    background: {
      default: "#fff",
    },
    mycolor: {
      main: "#fff",
    },
  },
  typography: {
    fontFamily: '"Fredoka One", "Helvetica", "Arial", sans-serif',
    
  },
  
})
theme = responsiveFontSizes(theme, ["xs", "sm", "md", "lg", "xl"])

export default theme

