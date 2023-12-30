import {
  Footer, Header, Main
} from '@/src/components/templates'

export default function SafarisPage () {
  return (
    <div
      className=" landing flex min-h-screen flex-col bg-[url('/elephant.jpg')] bg-center bg-cover relative "
    >
      <div
        className="absolute w-full h-full  bg-main-light opacity-60 z-10"
      ></div>
      <Header/>
      <Main>
        <p> Here I will put offers of possible safaris activities depending on time or area
        </p>
      </Main>
      <Footer/>
    </div>

  )
}