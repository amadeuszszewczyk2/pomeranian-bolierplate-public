import { getParsedRouterDataList } from '../../router-data/parseRouterData';
import { Exercise_exampleMetaData } from './Exercise_example/router-data';
import { SelectorsAndCascadeMetaData } from './SelectorsAndCascade/router-data';
import { GoogleFontsMetaData } from './GoogleFonts/router-data';
import { ExerciseBoxModelMetaData } from './ExerciseBoxModel/router-data';
import { TablesMetaData } from './Tables/router-data';
import { Tables2MetaData } from './Tables2/router-data';
import { Tables3MetaData } from './Tables3/router-data';
import { FloatsMetaData } from './Floats/router-data';
import { FloatsFigmaDesignMetaData } from './FloatsFigmaDesign/router-data';
import { SignupMetaData } from './Signup/router-data';
import { HomepageMetaData } from './Homepage/router-data';

export const blockRouterMetaData = [
  Exercise_exampleMetaData,
  SelectorsAndCascadeMetaData,
  GoogleFontsMetaData,
  ExerciseBoxModelMetaData,
  TablesMetaData,
  Tables2MetaData,
  FloatsMetaData,
  Tables3MetaData,
  FloatsFigmaDesignMetaData,
  SignupMetaData,
  HomepageMetaData,
];

export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
