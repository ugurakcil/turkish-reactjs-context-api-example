import {CirkinOrdekSaglayici, OrdekSaglayici} from './baglam';
import OrdekBelirleyici from './OrdekBelirleyici';
import CirkinOrdekBelirleyici from './CirkinOrdekBelirleyici';

function App() {
  return (
    <div>
    <OrdekSaglayici>
      <OrdekBelirleyici />
    </OrdekSaglayici>
    <hr />
    <CirkinOrdekSaglayici>
      <CirkinOrdekBelirleyici />
    </CirkinOrdekSaglayici>
    </div>
  );
}

export default App;
