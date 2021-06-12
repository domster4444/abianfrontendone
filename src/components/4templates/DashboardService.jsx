import React from 'react';
import { Redirect } from 'react-router-dom';
import DashboardServiceCardSection from './DashboardServiceCardSection';
export default function DashboardService(props) {
  if (props.loggedInStateProps === 'true') {
    return (
      <>
        <main id="DashboardServiceSection">
          <DashboardServiceCardSection />
          <section className="card container grid">
            <div className="card__container grid">
              {/*==================== CARD 1 ====================*/}
              <article className="card__content grid">
                <div className="card__pricing">
                  <div className="card__pricing-number">
                    <span className="card__pricing-symbol">$</span>0
                  </div>
                  <span className="card__pricing-month">/month</span>
                </div>
                <header className="card__header">
                  <div className="card__header-circle grid">
                    <img
                      src="https://fadzrinmadu.github.io/hosted-assets/responsive-pricing-card-using-html-and-css/free-coin.png"
                      alt=""
                      className="card__header-img"
                    />
                  </div>
                  <span className="card__header-subtitle">Free plan</span>
                  <h1 className="card__header-title">Basic</h1>
                </header>
                content <br />
                content <br />
                content <br />
                content <br />
                content <br />
                content
                <button className="card__button">Choose this plan</button>
              </article>
              {/*==================== CARD 2 ====================*/}
              <article className="card__content grid">
                <div className="card__pricing">
                  <div className="card__pricing-number">
                    <span className="card__pricing-symbol">$</span>19
                  </div>
                  <span className="card__pricing-month">/month</span>
                </div>
                <header className="card__header">
                  <div className="card__header-circle grid">
                    <img
                      src="https://fadzrinmadu.github.io/hosted-assets/responsive-pricing-card-using-html-and-css/pro-coin.png"
                      alt=""
                      className="card__header-img"
                    />
                  </div>
                  <span className="card__header-subtitle">Most popular</span>
                  <h1 className="card__header-title">Professional</h1>
                </header>
                content <br />
                content <br />
                content <br />
                content <br />
                content <br />
                content
                <button className="card__button">Choose this plan</button>
              </article>
              {/*==================== CARD 3 ====================*/}
              <article className="card__content grid">
                <div className="card__pricing">
                  <div className="card__pricing-number">
                    <span className="card__pricing-symbol">$</span>29
                  </div>
                  <span className="card__pricing-month">/month</span>
                </div>
                <header className="card__header">
                  <div className="card__header-circle grid">
                    <img
                      src="https://fadzrinmadu.github.io/hosted-assets/responsive-pricing-card-using-html-and-css/enterprise-coin.png"
                      alt=""
                      className="card__header-img"
                    />
                  </div>
                  <span className="card__header-subtitle">For agencies</span>
                  <h1 className="card__header-title">Enterprise</h1>
                </header>
                content <br />
                content <br />
                content <br />
                content <br />
                content <br />
                content
                <button className="card__button">Choose this plan</button>
              </article>
            </div>
          </section>
        </main>
      </>
    );
  } else {
    return (
      <>
        <Redirect to="/login" />
      </>
    );
  }
}
