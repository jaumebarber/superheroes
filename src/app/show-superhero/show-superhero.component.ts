import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core'
import { Superhero } from '../model/superhero.model'

@Component({
  selector: 'app-show-superhero',
  templateUrl: './show-superhero.component.html',
  styleUrls: ['./show-superhero.component.scss']
})
export class ShowSuperheroComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() hero : Superhero
  @Output() called = new EventEmitter<string>()

  callSuperHero () {
    this.called.emit(this.hero.name)
  }
}
