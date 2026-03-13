import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes";
import { AppThemeProvider } from "./shared/contexts/ThemeContext";
import { AppMenuLateral } from "./shared/components";

export const App = () => {
  return (
    <AppThemeProvider>
      <BrowserRouter>
        <AppMenuLateral>
          <AppRoutes/>
        </AppMenuLateral>
      </BrowserRouter>
    </AppThemeProvider>
  );
};



