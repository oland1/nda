import {Box, styled, Typography} from "@mui/material";
import {useTranslation} from "react-i18next";

const SOCIALS_DATA = [
  {name: "instagram", url: "#"},
  {name: "telegram", url: "#"},
  {name: "x", url: "#"},
  {name: "mail", url: "mailto:support@casino.com"},
];

const SocialsWrapper = styled(Box)(({theme}) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '12px',
  [theme.breakpoints.down('lg')]: {
    alignItems: 'center',
  },
}));

const SocialsTitle = styled(Typography)(({theme}) => ({
  color: "#BABABA",
  fontSize: '16px',
  textAlign: "right",
  fontWeight: 500,
  [theme.breakpoints.down('lg')]: {
    textAlign: 'center',
  },
}));

const IconsContainer = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: '4px',
});

const SocialLink = styled('a')({
  display: 'flex',
  width: '52px',
  height: '52px',
  transition: 'transform 0.2s ease-in-out, filter 0.2s ease-in-out',
  '&:hover': {
    transform: 'translateY(-2px)',
    filter: 'brightness(1.2)',
  },
  '&:active': {
    transform: 'translateY(0)',
  }
});

const SocialIcon = styled('img')({
  width: '100%',
  height: '100%',
  cursor: 'pointer',
});

export const SocialLinks = () => {
  const {t} = useTranslation();

  return (
    <SocialsWrapper>
      <SocialsTitle variant="caption">
        {t("follow_us")}
      </SocialsTitle>

      <IconsContainer aria-label="Social media links">
        {SOCIALS_DATA.map(({name, url}) => (
          <SocialLink
            key={name}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Follow us on ${name}`}
          >
            <SocialIcon
              src={`/${name}.svg`}
              alt={`${name} icon`}
              loading="lazy"
            />
          </SocialLink>
        ))}
      </IconsContainer>
    </SocialsWrapper>
  );
};