import {ThemeProvider} from 'styled-components';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'
import {MainPage} from './pages/main';
import {theme} from './theme';

const queryClient = new QueryClient()

export const App = () =>  (
    <ThemeProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
            <MainPage/>
        </QueryClientProvider>
    </ThemeProvider>
);
