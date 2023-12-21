
import { getServerSession } from "next-auth"
import { signOut } from "next-auth/react"
import { redirect } from "next/navigation"
import { authOptions } from "../../api/auth/[...nextauth]/route"
import { LoginButton, LogoutButton } from "../../auth"
import { User } from "../../user"


export default async function Dashboard() {

     const session =await getServerSession(authOptions)
     
     const name= session?.user?.name
    

  return (
    <div>
      <br/>
      <h1> Welocme {name}</h1>
      <br/>
      <div>
      <h1>Server</h1>
      <pre>{JSON.stringify(session)}</pre>
      <User/>
     
      
      </div>
  
    </div>
  )
}
