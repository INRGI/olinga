import React from 'react';
import {
  BlockHeader,
  Container,
  Content,
} from '../PrivacyPolicy/PrivacyPolicy.styled';

const TermsAndConditions: React.FC = () => {
  return (
    <Container>
      <BlockHeader>
        <h2>Regulamin i warunki</h2>
      </BlockHeader>
      <Content>
        <p><strong>Postanowienia ogólne</strong></p>
        <p>
          Niniejszy regulamin określa zasady korzystania z usług świadczonych przez Salon Masażu OLINGA ("Salon"). Rejestrując się na nasze usługi lub korzystając z nich, użytkownik akceptuje warunki określone w niniejszym regulaminie.
        </p>

        <p><strong>Rejestracja i rezerwacja usług</strong></p>
        <ul>
          <li>Klient zobowiązany jest do podania prawdziwych informacji podczas rejestracji na usługę (imię, numer telefonu, adres e-mail).</li>
          <li>Rejestracja na usługi możliwa jest telefonicznie, mailowo lub za pośrednictwem systemu rezerwacji online.</li>
          <li>W przypadku jakichkolwiek zmian w danych kontaktowych, klient powinien niezwłocznie zaktualizować te informacje.</li>
        </ul>

        <p><strong>Polityka płatności</strong></p>
        <p>
          Wszystkie usługi oferowane przez Salon są płatne. Ceny są widoczne przy każdej usłudze i mogą być aktualizowane. Płatność za usługi odbywa się przy rejestracji lub przed rozpoczęciem zabiegu.
        </p>

        <p><strong>Polityka anulowania rezerwacji</strong></p>
        <p>
          Klient może anulować rezerwację najpóźniej na 24 godziny przed zaplanowaną wizytą. W przypadku późniejszego odwołania lub braku pojawienia się na umówionym terminie, mogą zostać naliczone opłaty za anulowanie.
        </p>

        <p><strong>Odpowiedzialność</strong></p>
        <p>
          Salon nie ponosi odpowiedzialności za jakiekolwiek szkody wynikłe z nieprzestrzegania zaleceń dotyczących zdrowia lub bezpieczeństwa przez klienta, ani za straty wynikłe z niewłaściwego korzystania z usług.
        </p>

        <p><strong>Zmiany w regulaminie</strong></p>
        <p>
          Salon zastrzega sobie prawo do wprowadzania zmian w regulaminie. Wszelkie zmiany będą publikowane na stronie internetowej i będą obowiązywać od momentu ich publikacji.
        </p>

        <p><strong>Kontakt</strong></p>
        <p>
          W przypadku pytań lub wątpliwości dotyczących regulaminu, prosimy o kontakt z naszym personelem za pomocą dostępnych kanałów komunikacji.
        </p>
      </Content>
    </Container>
  );
};

export default TermsAndConditions;
