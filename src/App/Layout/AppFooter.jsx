import './styles/footer.css';

const email = 'amadeusz.szewczyk@gmail.com';
const phone = '+48 502 667 736';

export function AppFooter() {
  const isMobile = window.innerWidth <= 768;

  return (
    <footer>
      {!isMobile && (
        <div className="hide-on-mobile">
          Projekt uzyskał dofinansowanie ze środków Unii Europejskiej z
          Europejskiego Funduszu Rozwoju
        </div>
      )}

      {!isMobile && <a href={`mailto:${email}`}>{`${email}`}</a>}

      {!isMobile && (
        <div className="hide-on-mobile">
          Regionalnego w ramach projektu grantowego „Invest in Pomerania 2020”.
        </div>
      )}

      {!isMobile && <a href={`tel:${phone}`}>{`Tel: ${phone}`}</a>}
    </footer>
  );
}
