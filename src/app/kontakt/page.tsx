'use client';

import React from 'react';
import styled from 'styled-components';
import Contact from '@/components/Contact/Contact';

const ContactPageContainer = styled.main`
  padding-top: 80px;
  background-color: ${({ theme }) => theme.colors.background};
`;

export default function ContactPage() {
  return (
    <ContactPageContainer>
      <Contact />
    </ContactPageContainer>
  );
}
