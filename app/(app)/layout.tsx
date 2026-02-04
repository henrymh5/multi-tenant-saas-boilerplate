import Sidebar from "./components/Sidebar"

export default function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>){

    return(
        <div className="AppLayout flex min-h-0 justify-start items-stretch flex-1">
            <Sidebar />
            <main className="flex justify-center items-center flex-1 self-stretch">
                {children}
            </main>
        </div>
    )
}