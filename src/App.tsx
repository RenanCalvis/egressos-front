import { Button } from '@/components/ui/button';
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { AppSidebar } from './components/AppSidebar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ImportPage from './pages/ImportPage';

function App() {
  return (
    <BrowserRouter>
      <SidebarProvider>
        <AppSidebar />
        <SidebarTrigger />
        <main className="flex flex-1 min-h-svh flex-col items-center justify-center p-4">
          <Routes>
            <Route path="/import" element={<ImportPage />} />
          </Routes>
        </main>
      </SidebarProvider>
    </BrowserRouter>
  );
}

export default App;
