import React from 'react';
import Main from './views/Main'
import Admin from './views/Admin'

function App() {
  return (
    <div style={styles.main}>
        <Admin />
        {/* <Main /> */}
    </div>
  );
}

const styles = {
  main:{
    fontFamily: "Kanit"
  }
}

export default App;
