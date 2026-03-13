import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes";
import { AppMenuLateral } from "./shared/components";
import { AppDrawerProvider, AppThemeProvider } from "./shared/contexts";

export const App = () => {
  return (
    <AppThemeProvider>
      <AppDrawerProvider>
        <BrowserRouter>
          <AppMenuLateral>
            <AppRoutes/>
          </AppMenuLateral>
        </BrowserRouter>
      </AppDrawerProvider>
    </AppThemeProvider>
  );
};



