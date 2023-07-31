import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { blockRouterMetaData as blockRouterMetaDataJsVariables1 } from './Exercise-js-variables-1/router-data';
import { blockRouterMetaData as blockRouterMetaDataJsVariables2 } from './Exercise-js-variables-2/router-data';
import { blockRouterMetaData as blockRouterMetaDataJsFunction1 } from './Exercise-js-functions/router-data';
import { IFMetaData } from './IF/router-data';
import { JsArraysBasicsMetaData } from './JsArraysBasics/router-data'
import { SortFunctionsMetaData } from './SortFunctions/router-data';
import { TimeMetaData } from './Time/router-data';
import { Time2MetaData } from './Time2/router-data';
import { Time3MetaData } from './Time3/router-data';
import { HitTheMoleGameMetaData } from './HitTheMoleGame/router-data';
import { MemoGameMetaData } from './MemoGame/router-data';
import { JSONMetaData } from './JSON/router-data';
import { JSON2MetaData } from './JSON2/router-data';
import { JSON3MetaData } from './JSON3/router-data';
import { JSON4MetaData } from './JSON4/router-data';
import { NoughtsAndCrossesMetaData } from './NoughtsAndCrosses/router-data';
import { DataTypesMetaData } from './DataTypes/router-data';
import { BooleanMetaData } from './Boolean/router-data';
import { ObjectsMetaData } from './Objects/router-data';
import { Array1MetaData } from './Array1/router-data';
import { MapMetaData } from './Map/router-data';
import { IF2MetaData } from './IF2/router-data';
import { TryMetaData } from './Try/router-data';
import { Try2MetaData } from './Try2/router-data';
import { Try3MetaData } from './Try3/router-data';
import { UseStateMetaData } from './UseState/router-data';
import { UseEffectMetaData } from './UseEffect/router-data';
import { ForMetaData } from './For/router-data';
import { WhileMetaData } from './While/router-data';
import { Try4MetaData } from './Try4/router-data';
import { PrototypeMetaData } from './Prototype/router-data';
import { ThisMetaData } from './This/router-data';
import { Try5MetaData } from './Try5/router-data';
import { ProjectLibraryMetaData } from './ProjectLibrary/router-data';
import { FetchMetaData } from './Fetch/router-data';
import { Try6MetaData } from './Try6/router-data';
import { Try7MetaData } from './Try7/router-data';
import { Try8MetaData } from './Try8/router-data';


export const blockRouterMetaData = [
  blockRouterMetaDataJsFunction1,
  DataTypesMetaData,
  blockRouterMetaDataJsVariables1,
  blockRouterMetaDataJsVariables2,
  BooleanMetaData,
  ObjectsMetaData,
  IF2MetaData,
  IFMetaData,
  ForMetaData,
  WhileMetaData,
  Array1MetaData,
  JsArraysBasicsMetaData,
  SortFunctionsMetaData,
  MapMetaData,
  UseStateMetaData,
  UseEffectMetaData,
  TimeMetaData,
  Time2MetaData,
  Time3MetaData,
  HitTheMoleGameMetaData,
  MemoGameMetaData,
  NoughtsAndCrossesMetaData,
  JSONMetaData,
  JSON2MetaData,
  JSON3MetaData,
  JSON4MetaData,
  TryMetaData,
  Try2MetaData,
  Try3MetaData,
  Try4MetaData,
  Try5MetaData,
  Try6MetaData,
  Try7MetaData,
  Try8MetaData,
  PrototypeMetaData,
  ThisMetaData,
  ProjectLibraryMetaData,
  FetchMetaData,
];

export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
