import { AppRoutes } from './routes';
import { QueryClientProvider, QueryClient } from 'react-query';

const client = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={client}>
      <AppRoutes />
    </QueryClientProvider>
  )
}

export default App
