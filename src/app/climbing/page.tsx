import {
  Footer, Header, Main
} from '@/src/components/templates'
import {
  KilimanjaroRoutes
} from '@/src/components/templates/ClimbingCards/KilimanjaroRoutes'
import {
  MountMeruRoutes
} from '@/src/components/templates/ClimbingCards/MountMeruRoutes'

export default function ClimbingPage () {
  return (
    <div className=" landing flex min-h-screen flex-col bg-[url('/kili.jpg')] bg-center bg-cover relative ">
      <div className="absolute z-10 h-full w-full opacity-60 bg-main-light"></div>
      <Header />
      <Main>
       <KilimanjaroRoutes/>
        <MountMeruRoutes/>
      </Main>
      <Footer/>
    </div>

  )
}
