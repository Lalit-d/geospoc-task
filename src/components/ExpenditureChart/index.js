/**
 *
 * ExpenditureChart
 *
 */

import React from 'react';
import { Bar } from 'react-chartjs-2';

import { Container, Section, Pincode } from './styles';
import { getAxisState, options, expenditure } from './constants';

/* eslint-disable react/prefer-stateless-function */

export class ExpenditureChart extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      selectedPincodedata: {},
    };
  }
  onPincodeClick = selectedPincodedata => {
    this.setState({
      selectedPincodedata,
    })
  }
  render() {
    const { selectedPincodedata } = this.state;

    return (
      <Container>
        <div> Click on below Pincodes to get expenditure</div>
        <Section>
        {expenditure && expenditure.map(p => {
          return(
            <Pincode key={p.pincode}>
              <button onClick={() => this.onPincodeClick(p)}>{p.pincode}</button>
            </Pincode>
          )
        })}
        </Section>
        <Bar
          data={getAxisState(selectedPincodedata)}
          height={408}
          width={510}
          options={options}
        />
      </Container>
    );
  }
}
