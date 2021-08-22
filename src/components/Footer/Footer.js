import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
   <FooterWrapper>
     <LinkList>
     <LinkColumn>
     <LinkTitle>Call</LinkTitle>
     <LinkItem href="tel:8660791126">8660791126</LinkItem>
     </LinkColumn>
     <LinkColumn>
     <LinkTitle>Email</LinkTitle>
     <LinkItem href="mailto:telangamol0909@gmail.com">telangamol0909@gmail.com</LinkItem>
     </LinkColumn>
     </LinkList>
     <SocialIconsContainer>
       <SocialContainer>
       <SocialIcons href='https://github.com'>
       <AiFillGithub size="3rem"/>
     </SocialIcons>
     <SocialIcons href='https://linkdin.com'>
       <AiFillLinkedin size="3rem"/>
     </SocialIcons>
     <SocialIcons href='https://instagram.com'>
       <AiFillInstagram size="3rem"/>
     </SocialIcons>
       </SocialContainer>
    
     </SocialIconsContainer>
   </FooterWrapper>
  );
};

export default Footer;
