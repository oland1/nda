import {Box, styled, Typography} from "@mui/material";
import {BaseButton} from "@/shared/ui";
import {useTranslation} from "react-i18next";

const CardContainer = styled(Box)(({theme}) => ({
  position: 'relative',
  borderRadius: '16px',
  padding: '24px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
  gap: '24px',
  border: '1.5px dashed var(--accent-color)',
  width: '390px',
  [theme.breakpoints.down('sm')]: {
    width: '320px',
  }

}));

const Logo = styled('img')({
  width: '175px',
  height: 'auto',
  objectFit: 'contain',
});

const DownloadInfo = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '6px',
});

const Title = styled(Typography)({
  color: 'white',
  fontSize: '28px',
});

const Subtitle = styled(Typography)({
  color: 'rgba(255, 255, 255, 0.5)',
  fontSize: '15px',
  fontWeight: 400,
});

export const DownloadCard = () => {
  const {t} = useTranslation();
  return (
    <CardContainer>
      <Logo src="/casino-royale.svg" alt="Casino Royale"/>

      <DownloadInfo>
        <Title variant="h4" sx={{
          fontWeight: 600,
        }}>{t("download_game")}</Title>
        <Subtitle variant="body2">
          {t("play_anywhere")}
        </Subtitle>

        <BaseButton
          label={t("install_app")}
          icon={<img src="/download.svg" alt="" style={{width: 24}}/>}
          sx={{
            mt: '8px',
            width: '100%',
            textTransform: "capitalize",
            marginTop: '12px',
          }}
        />
      </DownloadInfo>

    </CardContainer>
  );
};