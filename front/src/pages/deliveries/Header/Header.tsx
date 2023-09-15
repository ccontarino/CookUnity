import './Header.scss';

interface HeaderProps {
  dates: string[];
}
interface TabProps {
  index: number;
  date: string;
}
export const Header = ({
  dates = ['Monday, August 23', 'Monday, August 24', 'Monday, August 25'],
}: HeaderProps) => {
  const TabComponent = ({ date, index }: TabProps) => (
    <button className={`tab ${index === 0 ? 'active' : ''}`}>
      <span className="date">{date}</span>
    </button>
  );
  return (
    <header className="header-container">
      <div className="page__horizontal-space header">
        <div className="tabs-container">
          <div className="tabs">
            {dates.map((date: string, index: number) => (
              <TabComponent date={date} index={index} key={index} />
            ))}
          </div>
        </div>
        <button
          className="btn-primary btn-buy"
          data-test-id="header-cta"
          onClick={() => alert('Confirmed')}>
          Confirm
        </button>
      </div>
    </header>
  );
};
