import Home from '@/components/ui/home'
import Commons from '@/components/ui/comps'
import ExploreDocs from '@/components/ui/explorer'
import FeedbackUI from '@/components/ui/feedback'
import Menu from '@/components/navbar'

export default function HomePage() {
  return (
    <>
      <Menu />
      <Home />
      <Commons />
      <ExploreDocs />
      <FeedbackUI />
    </>
  )
}
