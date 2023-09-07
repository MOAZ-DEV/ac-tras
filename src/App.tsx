import { FirstCtaLayout } from './layouts/firstCtaLayout';
import { FooterLayout } from './layouts/footerLayout';
import { HeaderLayout } from './layouts/headerLayout'
import { SecondCtaLayout } from './layouts/secondCtaLayout';
import './styling/App.scss';

function App() {

  return (
    <div className='app'>
      <HeaderLayout />
      <FirstCtaLayout />
      <div aria-details='devider' />
      <SecondCtaLayout />
      <FooterLayout />
    </div>
  )
}

export default App
