import React, { Component } from 'react';
import {
  Button,
  Collapse,
  Form,
  Row,
  Col,
  FormGroup,
  FormControl
} from 'react-bootstrap';
import { connect } from 'react-redux';
import { handleChange } from '../../actions/promoCodeActions';

class PromoCodeDiscount extends Component {
  constructor(props) {
    super(props)

    this.state = {
      open: false,
    };
  }

  handleChange = e => {
    this.props.handleChange(e);
  };

  render() {
    return (
      <div>
        <Button
          className='promo-code-button'
          
          onClick={() => this.setState({open: !this.state.open })}
        >
        {this.state.open === false ? `Apply ` : `Hide `}
        promo code
        {this.state.open === false ? ` +` : ` -`}
        </Button>
        <Collapse in={this.state.open}>
          <div>
            <Row className='show-grid'>
              <Col md={12}>
                <Form>
                  <FormGroup controlId='formInlineName'>
                    <p>Promo Code</p>
                    <FormControl 
                      type='text'
                      placeholder='Enter promo code'
                      vale={this.props.promoCode}
                      onChange={this.handleChange}
                      />
                  </FormGroup>
                  <Button
                    block
                    className='btn-round'
                    disabled={this.props.isDisabled}
                    onClick={this.props.giveDiscount}
                  >
                    Apply
                  </Button>
                  </Form>
              </Col>
            </Row>
          </div>
        </Collapse>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  promoCode: state.promoCode.value
})

export default connect(mapStateToProps, {handleChange})(PromoCodeDiscount) 