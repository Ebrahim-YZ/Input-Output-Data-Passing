import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  standalone: true, // Mark as standalone
})
export class ChildComponent implements OnInit {
  Message = "Message From Childe"
  @Input() data!: string
  @Output() event= new EventEmitter<string>()
  SentMessage(){
    this.event.emit(this.Message)
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
