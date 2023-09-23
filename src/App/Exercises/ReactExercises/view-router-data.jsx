import { getParsedRouterDataList } from '../../router-data/parseRouterData';
import { ReactRouterEventsMetaData } from './ReactRouterEvents/router-data';
import { Block09MetaData } from './Block09/router-data';
import { MaterialUIBasicElementsMetaData } from './MaterialUIBasicElements/router-data';
import { Buttons3MetaData } from './Buttons3/router-data';
import { BTCMetaData } from './BTC/router-data';
import { MaterialUIBasicElements2MetaData } from './MaterialUIBasicElements2/router-data';
import { MaterialUIBasicElements3MetaData } from './MaterialUIBasicElements3/router-data';
import { UseRefMetaData } from './UseRef/router-data';
import { FormsMetaData } from './Forms/router-data';
// import { Forms2MetaData } from './Forms2/router-data';
import { MoonPhaseMetaData } from './MoonPhase/router-data';
import { PlanetsMetaData } from './Planets/router-data';
import { ReduxMetaData } from './Redux/router-data';
import { BTC3MetaData } from './BTC3/router-data';
import { GamePlatformMetaData } from './GamePlatform/router-data';
import { InvoiceMetaData } from './Invoice/router-data';

export const blockRouterMetaData = [
  ReactRouterEventsMetaData,
  Block09MetaData,
  Buttons3MetaData,
  MaterialUIBasicElementsMetaData,
  MaterialUIBasicElements2MetaData,
  MaterialUIBasicElements3MetaData,
  UseRefMetaData,
  FormsMetaData,
  // Forms2MetaData,
  ReduxMetaData,
  GamePlatformMetaData,
  InvoiceMetaData,
  BTCMetaData,
  BTC3MetaData,
  MoonPhaseMetaData,
  PlanetsMetaData,
];

export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
