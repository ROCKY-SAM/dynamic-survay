import {SurveyGeneralData} from './survey-general-data.model';
import {TreeItem} from './tree-item.model';

export interface Survey {
    generalData : SurveyGeneralData;
    status : string;
    items : TreeItem[];
}
