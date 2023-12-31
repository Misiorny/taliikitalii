import {
  Footer, Header, Main
} from '@/src/components/templates'

export default function OtherPage () {
  return (
    <div className=" landing flex min-h-screen flex-col bg-[url('/team2.jpg')] bg-cover relative ">
      <div className="absolute z-10 h-full w-full opacity-60 bg-main-light"></div>
      <Header />
      <Main>
       <p>Here will be other activities offers</p>
      </Main>
      <Footer/>

    </div>

  )
}
