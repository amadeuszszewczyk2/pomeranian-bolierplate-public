import { getParsedRouterDataList } from '../../router-data/parseRouterData';
import { blockRouterMetaData as blockRouterMetaData121220231 } from './Exercise-example-12-12-2023-1/router-data';
import { SelectorsAndCascadeMetaData as SelectorsAndCascadeMetaData } from './SelectorsAndCascade/router-data';
import { GoogleFontsMetaData as GoogleFontsMetaData } from './GoogleFonts/router-data';
import { TextFundamentsMetaData } from './TextFundaments/router-data';

export const blockRouterMetaData = [blockRouterMetaData121220231, SelectorsAndCascadeMetaData, TextFundamentsMetaData, GoogleFontsMetaData];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
