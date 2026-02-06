import { auth, currentUser } from "@clerk/nextjs/server"

export default async function Dashboard(){
    
    const {isAuthenticated} = await auth();

    if (!isAuthenticated){
        return <div>Sign in to view this page</div>
    }

    const user = await currentUser(); 

    return (
        <div className="Dashboard">
            This Container can be replaced by your apps functionalities, { user ? user.firstName : "" }
        </div>
    )
}