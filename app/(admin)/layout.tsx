import SettingsSidebar from "./settings/components/SettingsSidebar"

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>){

    return(
        <div className="AdminLayout flex min-h-0 justify-start items-stretch flex-1">
            <SettingsSidebar />
            <main className="flex justify-center items-center flex-1 self-stretch">
                {children}
            </main>
        </div>
    )
} 