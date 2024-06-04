import IndexM02 from 'components/M2_Class_Evt_State_Form/Index_M_02';
import { GlobalStyle } from './GlobalStyles';

import IndexM01 from 'components/M1_Components_Collections_Styles/index_M_01';
import AppQuiz from 'components/M2_Class_Evt_State_Form/QuizAplication/AppQuiz';
import Index_M_03 from 'components/M3-1-Lifecycle_Methods/Index_M_03';

const headerStyles = { color: 'red', backgroundColor: 'lightgreen' };

export const App = () => {
  return (
    <>
      {/* Глобальные стили */}
      <GlobalStyle />
      {/* <IndexM01 styles={headerStyles}>
        M-01 Компоненти, колекції компонентів. Стилізація. React Icons.
      </IndexM01> */}
      {/* <hr /> */}
      {/* <hr /> */}
      {/*  */}
      {/* M-02 Події та стан - класові компоненти. Передача пропсів дітям, підйом стейту батькам */}
      {/* <IndexM02 styles={headerStyles}>
        M-02 Події та стан - класові компоненти. Передача пропсів дітям, підйом
        стейту батькам
      </IndexM02> */}
      {/* <hr /> */}
      {/* <hr /> */}
      {/*  */}
      {/* M-02-03 AppQuiz - Події та стан - класові і функціональні компоненти. Передача пропсів дітям, підйом стейту батькам, ReactModal, Formik, Yup, життєвий цикл компонента */}
      {/* <AppQuiz /> */}
      {/*  */}
      {/* <hr /> */}
      {/* <hr /> */}
      {/* M-03-Axios */}
      <Index_M_03 />
    </>
  );
};
