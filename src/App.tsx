import { Button } from '@/components/ui/button';
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { AppSidebar } from './components/AppSidebar';

function App() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarTrigger />
      <main className="flex flex-1 min-h-svh flex-col items-center justify-center p-4">
        {/* <div className="absolute top-4 left-4"> */}
        {/* </div> */}
        <div className="w-xl h-[36rem] bg-amber-100"></div>
        <Button className=" cursor-pointer justify-center items-center">
          Click me
        </Button>
      </main>
    </SidebarProvider>
  );
}

export default App;
