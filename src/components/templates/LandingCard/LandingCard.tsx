import { LandingCeo }  from '@/src/components/templates/LandingCard/LandingCeo'
import { LandingTeam } from '@/src/components/templates/LandingCard/LandingTeam'
import {
  LandingParagraph
}                      from '@/src/components/templates/LandingCard/LandingParagraph'
import {
  LandingBtnArea
} from '@/src/components/templates/LandingCard/LandingBtnArea'

export const LandingCard = () => {
  return (
    <section className="landing max-w-screen-2xl ">
      <LandingCeo/>
      <LandingParagraph
        text="It would be an absolute pleasure to organize your tour in Tanzania. We are happy to ensure you that your request is available and we can accommodate your request in a highly professional manner. See our offer. "
      />
      <LandingTeam/>
      <LandingParagraph
        text="Our team is dedicated to providing a uniquely memorable experience that is flexible and tailored to your specific preferences."
      />
      <LandingBtnArea/>
    </section>
  )
}