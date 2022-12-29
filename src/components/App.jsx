import Feedback from './Feedback/Feedback';

export const App = () => {
  return (
    <div style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          color: 'grey'
      }}>
      <Feedback />
    </div>
  );
};