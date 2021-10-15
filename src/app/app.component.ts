import { Component, OnInit } from '@angular/core';
import { NodeService } from './nodeservice';
import { TreeNode } from 'primeng/api';
import { TreeDragDropService } from 'primeng/api';
import { MessageService } from 'primeng/api';
 
import { v4 as uuid } from 'uuid';
import { TreeItem } from './tree-item.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [TreeDragDropService, MessageService],
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //files1: TreeNode[] = [];
  constructor(private nodeService: NodeService) { }


  files1: TreeItem[] = [
    {
      "key": uuid(),
      "label": "Website Questionnaire - Section ",
      "data": null,
      "draggable": true,
      "droppable": false,
      "expanded": true,
      "children": [
        {
          "key": uuid(),
          "title": "1. How much time do you spend using [product or service]?",
          "type": "subNode",
          "data": {
            "questionType": "textbox",
            "options": [
              {
                "id": uuid(),
                "answerText": "Less than a minute",
              },
              {
                "id": uuid(),
                "answerText": "About 1 - 2 minutes",
              },
              {
                "id": uuid(),
                "answerText": "Between 2 and 5 minutes",
              }
            ]
          },
          "draggable": true,
          "droppable": false,
        },
        {
          "key": uuid(),
          "type": "subNode",
          "title": "2. In the last month, what has been your biggest pain point?",
          "data": {
            "questionType": "textbox",
            "options": [
              {
                "id": uuid(),
                "answerText": "Finding enough time for important tasks",
              },
              {
                "id": uuid(),
                "answerText": "Delegating work",
              },
              {
                "id": uuid(),
                "answerText": "Having enough to do",
              }
            ]
          },
          "draggable": true,
          "droppable": false,

        }
      ]
    },
    {
      "key": uuid(),
      "type": "subNode",
      "title": "Im a Question",
      "data": {
        "questionType": "textbox",
        "options": [
          {
            "id": uuid(),
            "answerText": "Finding a faster way to work",
          },
          {
            "id": uuid(),
            "answerText": "Problem-solving",
          }
        ]
      },
      "draggable": true,
      "droppable": false,
      "expanded": true
    }
  ];
  ngOnInit() {
   // this.files1 = [];
  }

  addAnswer(text: any, SelectKey: string) {
    let isFound = false;
    for (let parent of this.files1) {
      parent.children?.filter(data => {
        if (data.key == SelectKey) {
          isFound = true;
          let answer = {
            "id": uuid(),
            "answerText": text,
          }
          data.data?.options.push(answer);
        }
      });
    }

    if(isFound == false){
      this.files1.filter(data => {
        if (data.key == SelectKey) {
          isFound = true;
          let answer = {
            "id": uuid(),
            "answerText": text,
          }
          data.data?.options.push(answer);
        }
      });
    }

    if(isFound == false){
      for (let parent of this.files1) {
        parent.children?.filter(children => {
          children.children?.filter(data => {
            if (data.key == SelectKey) {
              isFound = true;
              let answer = {
                "id": uuid(),
                "answerText": text,
              }
              data.data?.options.push(answer);
            }
          });         
        });
      }
    }


  }

  addSection(textValue:string){
    this.files1.push({
      "key": uuid(),
      "label": textValue,
      "type": "sectionCreate",
      "data": { "questionType": "", "options" :[] },
      "draggable": true,
      "droppable": false,
      "expanded": true,
      "children": []
    });
  }

addSubSection(textValue:string,SelectKey:any){
  this.files1.filter(data => {
    if (data.key == SelectKey) {

      let question = {
        "key": uuid(),
        "label": textValue,
        "type": "lastSection",
        "data": { "questionType": "", "options" :[] },
        "draggable": true,
        "droppable": false,
        "expanded": true,
        "children": []
      }
      data.children?.push(question);
    }
  });

}
addSubQuestion(textValue:string,SelectKey:any){

    this.files1.filter(data => {
      if (data.key == SelectKey) {

        let question = {
          "key": uuid(),
          "type": "subNode",
          "title":textValue,
          "data": { "questionType": "", "options" :[] },
          "draggable": true,
          "droppable": false,
          "expanded": true
        }
        data.children?.push(question);
      }
    });
  
}

addSubQuestionForLastSection(textValue:any,SelectKey:any){
  for (let parent of this.files1) {
    parent.children?.filter(data => {
      if (data.key == SelectKey) {

        let question = {
          "key": uuid(),
          "type": "subNode",
          "title": textValue,
          "data": { "questionType": "", "options" :[] },
          "draggable": true,
          "droppable": false,
          "expanded": true
        }
        data.children?.push(question);
      }
    });
  }
}


save(){
  console.log(this.files1);
}


  onDrop(event: any) {
    console.log(this.files1);
    console.log(event);
    // if (my_condition) {
    //      event.accept();
    //   } else {

    //    }
  }
}
