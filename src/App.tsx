import "./App.css";
import { DemoForm } from "./Forms/demoForm";
import { Box } from "@mui/material";
import { ThemeProvider, createTheme } from '@mui/material/styles';
function App() {
  const theme = createTheme({
    typography: {
      allVariants: {
        fontFamily: 'Inter',
        textTransform: 'none',
      },
    },
  })
  return (
    <ThemeProvider theme={theme}>
    <Box>
      <DemoForm />
    </Box>
    </ThemeProvider>
  );
}

export default App;
