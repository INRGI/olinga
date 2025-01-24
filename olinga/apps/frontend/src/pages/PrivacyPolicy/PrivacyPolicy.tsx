import React from 'react';
import { BlockHeader, Container, Content } from './PrivacyPolicy.styled';
import { useTranslation } from 'react-i18next';

const PrivacyPolicy: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <BlockHeader>
        <h2>Polityka Prywatności Salonu Masażu OLINGA</h2>
      </BlockHeader>
      <Content>
        <p><strong>Postanowienia ogólne</strong></p>
        <p>Salon masażu OLINGA zapewnia, że wszelkie informacje uzyskane od klientów będą przetwarzane zgodnie z obowiązującymi przepisami dotyczącymi ochrony danych, z poszanowaniem praw i prywatności naszych klientów. Zobowiązujemy się do wykorzystywania danych osobowych wyłącznie w celu świadczenia usług, przekazywania informacji o naszych ofertach i akcjach marketingowych, a także w celu poprawy jakości obsługi.</p>

        <p><strong>Zbieranie danych</strong></p>
        <p>Zbieramy następujące dane:</p>
        <ul>
          <li>Dane osobowe (imię, numer kontaktowy, adres e-mail).</li>
          <li>Informacje o wizytach w salonie (daty i godziny wizyt, historia usług, preferencje klientów).</li>
          <li>Informacje podane przez klienta podczas rejestracji na usługi (np. alergie, preferencje).</li>
        </ul>
        <p>Dane te mogą być zbierane za pośrednictwem:</p>
        <ul>
          <li>Rejestracji na usługi poprzez system Booksy, rozmowy telefoniczne lub e-mail.</li>
          <li>Ankiet i formularzy mających na celu poprawę jakości obsługi.</li>
        </ul>

        <p><strong>Metody ochrony danych</strong></p>
        <ul>
          <li>Szyfrowanie danych: Wszystkie dane przesyłane drogą elektroniczną są chronione za pomocą nowoczesnych technologii szyfrowania.</li>
          <li>Przechowywanie danych: Dane osobowe klientów przechowywane są w zabezpieczonej bazie danych, do której dostęp mają wyłącznie upoważnieni pracownicy posiadający odpowiednie uprawnienia.</li>
          <li>Ograniczony dostęp: Dane osobowe klientów są dostępne tylko dla pracowników, którzy ich potrzebują w celu wykonywania swoich obowiązków.</li>
          <li>Usuwanie danych: Dane, które nie są już potrzebne do realizacji usług, będą usuwane lub anonimizowane zgodnie z wymogami prawnymi.</li>
        </ul>

        <p><strong>Wykorzystanie danych</strong></p>
        <ul>
          <li>Świadczenie usług: Dane osobowe są wykorzystywane do potwierdzania rezerwacji, przypominania o wizytach oraz wysyłania powiadomień.</li>
          <li>Akcje marketingowe: Możemy wykorzystywać dane kontaktowe do wysyłania informacji o specjalnych ofertach, promocjach i nowościach – wyłącznie za zgodą klienta.</li>
          <li>Informacje zwrotne: Dane mogą być wykorzystywane w celu poprawy jakości usług, przeprowadzania ankiet lub zbierania opinii od klientów.</li>
        </ul>

        <p><strong>Udostępnianie danych</strong></p>
        <p>Nie udostępniamy danych osobowych osobom trzecim, z wyjątkiem przypadków przewidzianych przez prawo lub w celu realizacji zobowiązań wobec klienta (np. przekazanie danych w przypadku zwrotu środków przez bank). Możemy korzystać z usług zewnętrznych do obsługi płatności i zarządzania rezerwacjami (np. Booksy), które mogą mieć dostęp do części danych, jednak zobowiązane są one do przestrzegania standardów bezpieczeństwa danych.</p>

        <p><strong>Prawa klientów</strong></p>
        <ul>
          <li>Prawo dostępu: Każdy klient ma prawo do uzyskania informacji o przechowywanych danych osobowych oraz do otrzymania ich kopii.</li>
          <li>Prawo do sprostowania: Klienci mogą zażądać poprawienia lub aktualizacji swoich danych w przypadku nieścisłości lub zmian.</li>
          <li>Prawo do usunięcia: Klienci mogą zażądać usunięcia swoich danych osobowych, jeśli nie są one już potrzebne do realizacji usług lub na ich wniosek.</li>
          <li>Prawo do sprzeciwu: Klienci mogą w każdej chwili zrezygnować z otrzymywania materiałów marketingowych, składając stosowny wniosek w salonie.</li>
        </ul>

        <p><strong>Zmiany w Polityce Prywatności</strong></p>
        <p>Zastrzegamy sobie prawo do wprowadzania zmian w Polityce Prywatności. Wszelkie zmiany będą publikowane na naszej stronie internetowej, a klienci zostaną o nich poinformowani za pośrednictwem podanych danych kontaktowych.</p>

        <p><strong>Kontakt</strong></p>
        <p>W przypadku pytań dotyczących przetwarzania danych osobowych prosimy o kontakt telefoniczny lub za pośrednictwem formularza kontaktowego dostępnego na naszej stronie internetowej.</p>
      </Content>
    </Container>
  );
};

export default PrivacyPolicy;
