import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { CardElement, injectStripe } from 'react-stripe-elements';

/**
 * Stripe All In One Form:
 * Card Payment with Card Number, Date, CVC, Zip code
 */
class StripeAllInOneCardForm extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(ev) {
    ev.preventDefault();
    this.props.stripe.createToken().then(payload => console.log(payload));
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <CardElement/>
        <button>Pay</button>
      </form>
    );
  }
}

StripeAllInOneCardForm.propTypes = {
  /**
   * Stripe object - window.Stripe('publishable_key')
   * See: https://dashboard.stripe.com/account/apikeys
   */
  stripe: PropTypes.object.isRequired,
};

export default injectStripe(StripeAllInOneCardForm);