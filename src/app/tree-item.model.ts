import { TreeNode } from 'primeng-lts/api';
import { QuestionData } from './question-data.model';
export interface TreeItem extends TreeNode{
    data?: QuestionData|any;
    children?: TreeItem[];
    title?: string;
    Description? : string;
    itemType ?: string;
}

