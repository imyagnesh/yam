/*
 * menu Messages
 *
 * This contains all the text for the menu component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  headerText: {
    id: 'app.views.Contact.HeaderText',
    defaultMessage: 'LETS HAVE A CHAT',
  },
  subHeaderText: {
    id: 'app.views.Contact.SubHeaderText',
    defaultMessage: 'Reach out and send a friendly hello.',
  },
  contactFormHeader: {
    id: 'app.views.Contact.ContactForm.Header',
    defaultMessage: 'Get a website that looks amazing and actually works',
  },
  socialIcons: [
    {
      id: 'app.views.socilaIcons.Facebook',
      defaultMessage: 'Facebook',
      path: '/',
      icon: 'FacebookIcon',
    },
    {
      id: 'app.views.socilaIcons.Twitter',
      defaultMessage: 'Twitter',
      path: '/about',
      icon: 'TwitterIcon',
    },
    {
      id: 'app.views.socilaIcons.LinkedIn',
      defaultMessage: 'LinkedIn',
      path: '/resume',
      icon: 'LinkedInIcon',
    },
    {
      id: 'app.views.socilaIcons.Instagram',
      defaultMessage: 'Instagram',
      path: '/portfolio',
      icon: 'InstagramIcon',
    },
    {
      id: 'app.views.socilaIcons.Github',
      defaultMessage: 'Github',
      path: '/blog',
      icon: 'GithubIcon',
    },
    {
      id: 'app.views.socilaIcons.Mail',
      defaultMessage: 'Mail',
      path: '/contact',
      icon: 'MailIcon',
    },
  ],
});
