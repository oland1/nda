import {useState} from "react";
import {BaseButton} from "@/shared/ui";
import {GameModal} from "./GameModal";
import * as Styled from "./OpenGame.styles";
import {useTranslation} from "react-i18next";

const GAME_URL = "https://gateway.eva-digital-playground.com/v0/casino/games/launch?gameId=n2-novomatic-book-of-ra-deluxe&channel=desktop&partnerKey=0wl&lobbyUrl=https://chinchincasino.com&mode=demo&language=en";

export const OpenGame = () => {
  const {t} = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Styled.Wrapper>
      <Styled.Content>
        <Styled.Logo src="/casino-royale.svg" alt="Logo" loading="lazy"/>

        <Styled.OpenBlock>
          <Styled.SlotImage src="/slot.svg" alt="Slot Machine"/>
          <BaseButton
            label={t("open_game")}
            onClick={() => setIsOpen(true)}
            sx={{width: '100%'}}
          />
        </Styled.OpenBlock>
      </Styled.Content>

      <GameModal
        open={isOpen}
        onClose={() => setIsOpen(false)}
        url={GAME_URL}
      />
    </Styled.Wrapper>
  );
};