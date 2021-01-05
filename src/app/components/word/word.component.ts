import { AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit } from "@angular/core";
import { Word } from "src/app/models/word";

@Component({
  selector: "app-word-component",
  templateUrl: "./word.component.html",
  styleUrls: ["./word.component.scss"],
})
export class WordComponent implements OnChanges,OnInit, DoCheck,AfterContentInit,AfterContentInit, AfterViewInit, AfterViewChecked, OnDestroy {
  @Input() word: Word;
 
  constructor() {

  }

  
  ngOnChanges(){
    //console.log("WordComponent ngOnChanges()");
  }

  ngOnInit() {
   //console.log("WordComponent " + this.word.name + " ngOnInit().");
  }

  ngDoCheck(){
    //console.log("WordComponent " + this.word.name + " ngDoCheck()");
  }

  ngAfterContentInit(){
    //console.log("WordComponent " + this.word.name + " ngAfterContentInit()");
    
  }

  ngAfterContentChecked(){
    //console.log("WordComponent " + this.word.name + " ngAfterContentChecked()");
  }

  ngAfterViewInit(){
    //console.log("WordComponent " + this.word.name + " ngAfterViewInit()");
   
  }

  ngAfterViewChecked(){
    //console.log("WordComponent " + this.word.name + " ngAfterViewChecked()");
  }

  ngOnDestroy(){
    //console.log("WordComponent " + this.word.name + " ngOnDestroy()");
  }
}
