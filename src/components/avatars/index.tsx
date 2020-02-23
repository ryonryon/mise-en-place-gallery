import * as React from 'react';

import Section from '../app-components/Section';
import IntroPage from '../app-components/IntroPage';
import avatar from '../../assets/sample-avatar.jpg';

import { Avatar } from 'mise-en-place-ui';

const Avatars = () => (
  <Section title='Avatar'>
    <IntroPage title='Avatar' description=''>
      <Avatar src={avatar} height={'70px'} width={'70px'} />
    </IntroPage>
  </Section>
);

export default Avatars;
