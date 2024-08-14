import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Navbar8 from '../components/navbar8'
import Hero17 from '../components/hero17'
import Features24 from '../components/features24'
import CTA26 from '../components/cta26'
import Features25 from '../components/features25'
import Pricing14 from '../components/pricing14'
import Steps2 from '../components/steps2'
import Testimonial17 from '../components/testimonial17'
import Contact10 from '../components/contact10'
import Footer4 from '../components/footer4'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Growing Well To Do Squirrel</title>
        <meta property="og:title" content="Growing Well To Do Squirrel" />
      </Helmet>
      <Navbar8
        page4Description={
          <Fragment>
            <span className="home-text100 thq-body-small">
              Page Four Description
            </span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="home-text101">Main Action</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="home-text102 thq-link thq-body-small">
              Features
            </span>
          </Fragment>
        }
        page1={
          <Fragment>
            <span className="home-text103 thq-body-large">Page One</span>
          </Fragment>
        }
        link1={
          <Fragment>
            <span className="home-text104 thq-link thq-body-small">Home</span>
          </Fragment>
        }
        page4={
          <Fragment>
            <span className="home-text105 thq-body-large">Page Four</span>
          </Fragment>
        }
        page2={
          <Fragment>
            <span className="home-text106 thq-body-large">Page Two</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="home-text107 thq-link thq-body-small">
              Contact
            </span>
          </Fragment>
        }
        page1Description={
          <Fragment>
            <span className="home-text108 thq-body-small">
              Page One Description
            </span>
          </Fragment>
        }
        page2Description={
          <Fragment>
            <span className="home-text109 thq-body-small">
              Page Two Description
            </span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="home-text110 thq-link thq-body-small">
              About Us
            </span>
          </Fragment>
        }
        page3={
          <Fragment>
            <span className="home-text111 thq-body-large">Page Three</span>
          </Fragment>
        }
        page3Description={
          <Fragment>
            <span className="home-text112 thq-body-small">
              Page Three Description
            </span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="home-text113">Secondary Action</span>
          </Fragment>
        }
      ></Navbar8>
      <Hero17
        action2={
          <Fragment>
            <span className="home-text114 thq-body-small">Learn More</span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="home-text115 thq-body-small">Get Started</span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <h1 className="home-text116 thq-heading-1">
              Build Your DeFi DApp with Us
            </h1>
          </Fragment>
        }
        content1={
          <Fragment>
            <p className="home-text117 thq-body-large">
              Create a cutting-edge DeFi application with our expert team. We
              provide top-notch services for wallet connectivity, token
              swapping, and real-time visualization of cryptocurrency prices.
            </p>
          </Fragment>
        }
      ></Hero17>
      <Features24
        feature3Description={
          <Fragment>
            <span className="home-text118 thq-body-small">
              View real-time updates of cryptocurrency prices with interactive
              charts and graphs.
            </span>
          </Fragment>
        }
        feature3Title={
          <Fragment>
            <h2 className="home-text119 thq-heading-2">
              Real-time Price Visualization
            </h2>
          </Fragment>
        }
        feature2Description={
          <Fragment>
            <span className="home-text120 thq-body-small">
              Effortlessly swap different cryptocurrencies with a user-friendly
              interface.
            </span>
          </Fragment>
        }
        feature1Title={
          <Fragment>
            <h2 className="home-text121 thq-heading-2">Wallet Connectivity</h2>
          </Fragment>
        }
        feature1Description={
          <Fragment>
            <span className="home-text122 thq-body-small">
              Seamlessly connect to various cryptocurrency wallets for easy
              transactions.
            </span>
          </Fragment>
        }
        feature2Title={
          <Fragment>
            <h2 className="home-text123 thq-heading-2">Token Swapping</h2>
          </Fragment>
        }
      ></Features24>
      <CTA26
        heading1={
          <Fragment>
            <span className="home-text124 thq-heading-2">
              Ready to revolutionize DeFi?
            </span>
          </Fragment>
        }
        content1={
          <Fragment>
            <p className="home-text125 thq-body-large">
              Let&apos;s build your custom DeFi application today and unlock the
              future of decentralized finance.
            </p>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="home-text126">Get in touch with us</span>
          </Fragment>
        }
      ></CTA26>
      <Features25
        feature3Description={
          <Fragment>
            <span className="home-text127 thq-body-small">
              Provide real-time visualization of cryptocurrency prices to keep
              users informed about market trends.
            </span>
          </Fragment>
        }
        feature1Description={
          <Fragment>
            <span className="home-text128 thq-body-small">
              Seamlessly connect users&apos; wallets to the DeFi application for
              secure transactions.
            </span>
          </Fragment>
        }
        feature2Title={
          <Fragment>
            <h2 className="home-text129 thq-heading-2">Token Swapping</h2>
          </Fragment>
        }
        feature1Title={
          <Fragment>
            <h2 className="home-text130 thq-heading-2">Wallet Connectivity</h2>
          </Fragment>
        }
        feature2Description={
          <Fragment>
            <span className="home-text131 thq-body-small">
              Enable users to swap different cryptocurrencies within the DeFi
              platform with ease.
            </span>
          </Fragment>
        }
        feature3Title={
          <Fragment>
            <h2 className="home-text132 thq-heading-2">
              Real-time Price Visualization
            </h2>
          </Fragment>
        }
      ></Features25>
      <Pricing14
        plan3Price={
          <Fragment>
            <h3 className="home-text133 thq-heading-3">$299/month</h3>
          </Fragment>
        }
        plan3Action={
          <Fragment>
            <span className="home-text134 thq-body-small">Get Started</span>
          </Fragment>
        }
        plan11={
          <Fragment>
            <span className="home-text135 thq-body-large">Basic plan</span>
          </Fragment>
        }
        plan1Action={
          <Fragment>
            <span className="home-text136 thq-body-small">Get Started</span>
          </Fragment>
        }
        plan31={
          <Fragment>
            <span className="home-text137 thq-body-large">Enterprise plan</span>
          </Fragment>
        }
        plan3Feature41={
          <Fragment>
            <span className="home-text138 thq-body-small">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan1Feature2={
          <Fragment>
            <span className="home-text139 thq-body-small">Token Swapping</span>
          </Fragment>
        }
        plan2Feature11={
          <Fragment>
            <span className="home-text140 thq-body-small">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan3Feature51={
          <Fragment>
            <span className="home-text141 thq-body-small">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan2Feature41={
          <Fragment>
            <span className="home-text142 thq-body-small">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan2Feature2={
          <Fragment>
            <span className="home-text143 thq-body-small">
              Advanced Analytics
            </span>
          </Fragment>
        }
        plan3Feature21={
          <Fragment>
            <span className="home-text144 thq-body-small">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan2Feature4={
          <Fragment>
            <span className="home-text145 thq-body-small">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan2Yearly={
          <Fragment>
            <p className="home-text146 thq-body-large">or $299 yearly</p>
          </Fragment>
        }
        plan1Action1={
          <Fragment>
            <span className="home-text147 thq-body-small">Get started</span>
          </Fragment>
        }
        plan2Action={
          <Fragment>
            <span className="home-text148 thq-body-small">Get Started</span>
          </Fragment>
        }
        plan3Feature1={
          <Fragment>
            <span className="home-text149 thq-body-small">
              All features in Plan 2
            </span>
          </Fragment>
        }
        plan2Feature3={
          <Fragment>
            <span className="home-text150 thq-body-small">
              Customizable Dashboard
            </span>
          </Fragment>
        }
        plan1Price1={
          <Fragment>
            <h3 className="home-text151 thq-heading-3">$200/yr</h3>
          </Fragment>
        }
        plan2={
          <Fragment>
            <p className="home-text152 thq-body-large">Business plan</p>
          </Fragment>
        }
        plan2Feature21={
          <Fragment>
            <span className="home-text153 thq-body-small">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan2Action1={
          <Fragment>
            <span className="home-text154 thq-body-small">Get started</span>
          </Fragment>
        }
        plan3Feature2={
          <Fragment>
            <span className="home-text155 thq-body-small">
              Risk Management Tools
            </span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text156 thq-body-small">
              Choose the perfect plan for you
            </span>
          </Fragment>
        }
        plan2Feature1={
          <Fragment>
            <span className="home-text157 thq-body-small">
              All features in Plan 1
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <h2 className="home-text158 thq-heading-2">Pricing plan</h2>
          </Fragment>
        }
        plan3Feature31={
          <Fragment>
            <span className="home-text159 thq-body-small">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan1={
          <Fragment>
            <p className="home-text160 thq-body-large">Basic plan</p>
          </Fragment>
        }
        plan21={
          <Fragment>
            <span className="home-text161 thq-body-large">Business plan</span>
          </Fragment>
        }
        plan1Feature11={
          <Fragment>
            <span className="home-text162 thq-body-small">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan1Feature21={
          <Fragment>
            <span className="home-text163 thq-body-small">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan3Feature5={
          <Fragment>
            <span className="home-text164 thq-body-small">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan2Yearly1={
          <Fragment>
            <span className="home-text165 thq-body-large">or $29 monthly</span>
          </Fragment>
        }
        plan2Price={
          <Fragment>
            <h3 className="home-text166 thq-heading-3">$199/month</h3>
          </Fragment>
        }
        plan3Yearly1={
          <Fragment>
            <span className="home-text167 thq-body-large">or $49 monthly</span>
          </Fragment>
        }
        plan2Feature31={
          <Fragment>
            <span className="home-text168 thq-body-small">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan3Feature11={
          <Fragment>
            <span className="home-text169 thq-body-small">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan1Yearly1={
          <Fragment>
            <span className="home-text170 thq-body-large">or $20 monthly</span>
          </Fragment>
        }
        plan2Price1={
          <Fragment>
            <h3 className="home-text171 thq-heading-3">$299/yr</h3>
          </Fragment>
        }
        plan3Yearly={
          <Fragment>
            <p className="home-text172 thq-body-large">or $499 yearly</p>
          </Fragment>
        }
        plan3Feature4={
          <Fragment>
            <span className="home-text173 thq-body-small">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan3Price1={
          <Fragment>
            <h3 className="home-text174 thq-heading-3">$499/yr</h3>
          </Fragment>
        }
        plan1Feature31={
          <Fragment>
            <span className="home-text175 thq-body-small">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan1Feature3={
          <Fragment>
            <span className="home-text176 thq-body-small">
              Real-time Price Visualization
            </span>
          </Fragment>
        }
        plan1Yearly={
          <Fragment>
            <p className="home-text177 thq-body-large">or $200 yearly</p>
          </Fragment>
        }
        plan1Feature1={
          <Fragment>
            <span className="home-text178 thq-body-small">
              Wallet Connectivity
            </span>
          </Fragment>
        }
        plan3Feature3={
          <Fragment>
            <span className="home-text179 thq-body-small">API Access</span>
          </Fragment>
        }
        content2={
          <Fragment>
            <p className="home-text180 thq-body-large">
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </p>
          </Fragment>
        }
        plan3Action1={
          <Fragment>
            <span className="home-text183 thq-body-small">Get started</span>
          </Fragment>
        }
        plan1Price={
          <Fragment>
            <h3 className="home-text184 thq-heading-3">$99/month</h3>
          </Fragment>
        }
        plan3={
          <Fragment>
            <p className="home-text185 thq-body-large">Enterprise plan</p>
          </Fragment>
        }
      ></Pricing14>
      <Steps2
        step1Description={
          <Fragment>
            <span className="home-text186 thq-body-small">
              Gather requirements, define features, and determine project
              timeline.
            </span>
          </Fragment>
        }
        step3Description={
          <Fragment>
            <span className="home-text187 thq-body-small">
              Implement wallet connectivity, token swapping functionality, and
              real-time price visualization.
            </span>
          </Fragment>
        }
        step2Title={
          <Fragment>
            <h2 className="home-text188 thq-heading-2">
              Design User Interface
            </h2>
          </Fragment>
        }
        step2Description={
          <Fragment>
            <span className="home-text189 thq-body-small">
              Create wireframes and design user-friendly interface for seamless
              user experience.
            </span>
          </Fragment>
        }
        step1Title={
          <Fragment>
            <h2 className="home-text190 thq-heading-2">Define Project Scope</h2>
          </Fragment>
        }
        step3Title={
          <Fragment>
            <h2 className="home-text191 thq-heading-2">
              Develop DeFi Application
            </h2>
          </Fragment>
        }
        step4Description={
          <Fragment>
            <span className="home-text192 thq-body-small">
              Thoroughly test the application for bugs and security
              vulnerabilities before deploying it for public use.
            </span>
          </Fragment>
        }
        step4Title={
          <Fragment>
            <h2 className="home-text193 thq-heading-2">Test and Deploy</h2>
          </Fragment>
        }
      ></Steps2>
      <Testimonial17
        author2Position={
          <Fragment>
            <span className="home-text194 thq-body-small">
              CTO, Company XYZ
            </span>
          </Fragment>
        }
        author1Position={
          <Fragment>
            <span className="home-text195 thq-body-small">
              CEO, Company ABC
            </span>
          </Fragment>
        }
        author1Name={
          <Fragment>
            <strong className="home-text196 thq-body-large">John Doe</strong>
          </Fragment>
        }
        author3Name={
          <Fragment>
            <strong className="home-text197 thq-body-large">David Lee</strong>
          </Fragment>
        }
        review2={
          <Fragment>
            <span className="home-text198 thq-body-small">
              I was amazed by the seamless wallet connectivity and token
              swapping features of the DeFi application developed by the team.
              Their attention to detail and commitment to excellence are
              commendable.
            </span>
          </Fragment>
        }
        author2Name={
          <Fragment>
            <strong className="home-text199 thq-body-large">Jane Smith</strong>
          </Fragment>
        }
        author4Position={
          <Fragment>
            <span className="home-text200 thq-body-small">
              CMO, Company XYZ
            </span>
          </Fragment>
        }
        author4Name={
          <Fragment>
            <strong className="home-text201 thq-body-large">
              Sarah Johnson
            </strong>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text202 thq-body-small">
              Working with the team on our DeFi DApp development was a
              game-changer for our business. Their expertise and dedication to
              delivering top-notch solutions were truly impressive.
            </span>
          </Fragment>
        }
        author3Position={
          <Fragment>
            <span className="home-text203 thq-body-small">
              COO, Company 123
            </span>
          </Fragment>
        }
        review1={
          <Fragment>
            <span className="home-text204 thq-body-small">
              The team exceeded our expectations and delivered a DeFi
              application that not only met our requirements but also provided
              additional value to our users. Highly recommended!
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <h2 className="home-text205 thq-heading-2">Testimonials</h2>
          </Fragment>
        }
        review3={
          <Fragment>
            <span className="home-text206 thq-body-small">
              The real-time visualization of cryptocurrency prices in our DeFi
              application has significantly improved user engagement and
              retention. Kudos to the team for their innovative approach!
            </span>
          </Fragment>
        }
        review4={
          <Fragment>
            <span className="home-text207 thq-body-small">
              Our experience working with the team on developing a DeFi
              application was nothing short of exceptional. They were
              responsive, professional, and delivered results that exceeded our
              expectations.
            </span>
          </Fragment>
        }
      ></Testimonial17>
      <Contact10
        content1={
          <Fragment>
            <p className="home-text208 thq-body-large">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in ero.
            </p>
          </Fragment>
        }
        location1Description={
          <Fragment>
            <p className="home-text209 thq-body-large">
              123 Main Street, New York, NY 10001
            </p>
          </Fragment>
        }
        heading1={
          <Fragment>
            <h2 className="home-text210 thq-heading-2">Locations</h2>
          </Fragment>
        }
        location2Description={
          <Fragment>
            <p className="home-text211 thq-body-large">
              456 Market Street, San Francisco, CA 94105
            </p>
          </Fragment>
        }
        location1={
          <Fragment>
            <h3 className="home-text212 thq-heading-3">New York Office</h3>
          </Fragment>
        }
        location2={
          <Fragment>
            <h3 className="home-text213 thq-heading-3">San Francisco Office</h3>
          </Fragment>
        }
      ></Contact10>
      <Footer4
        link5={
          <Fragment>
            <span className="home-text214 thq-body-small">FAQ</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="home-text215 thq-body-small">Services</span>
          </Fragment>
        }
        link1={
          <Fragment>
            <span className="home-text216 thq-body-small">Home</span>
          </Fragment>
        }
        termsLink={
          <Fragment>
            <span className="home-text217 thq-body-small">
              Terms and Conditions
            </span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="home-text218 thq-body-small">About Us</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="home-text219 thq-body-small">Contact Us</span>
          </Fragment>
        }
        cookiesLink={
          <Fragment>
            <span className="home-text220 thq-body-small">Cookies Policy</span>
          </Fragment>
        }
        privacyLink={
          <Fragment>
            <span className="home-text221 thq-body-small">Privacy Policy</span>
          </Fragment>
        }
      ></Footer4>
    </div>
  )
}

export default Home
