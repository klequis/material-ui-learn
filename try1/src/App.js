import React from 'react';
import Button from 'material-ui/Button';
import Typography from './Typography'
import SomeTextFields from './SomeTextFields'
import Pallet from './Palette'
import H3 from './H3'
import Section from './Section'
import DarkTheme from './DarkTheme'
import CustomVariables from './CustomVariables'

const App = () => {
  return (<div>
    <Section>
      <CustomVariables />
    </Section>
    <Section>
      <DarkTheme />
    </Section>
    <Section>
      <Pallet />
    </Section>
    <Section>
      <SomeTextFields />
    </Section>
    <Section>
      <H3>Just a Button</H3>
      <Button variant="raised" color="primary">
        Hello World
      </Button>
    </Section>
    <Section>
      <Typography />
    </Section>
  </div>)
}

export default App;
