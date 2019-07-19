import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Superheroes'
  heroOnCall = false
  
  superheroes : object = [
    { name: "batman",
      alterEgo: "bruce wayne",
      superpowers: ["genius intellect", "vast wealth", "indomitable will"]
    },
    { name: "sprocketman",
      alterEgo: "",
      superpowers: ["throws sprockets"]
    },
    { name: "wonder woman",
      alterEgo: "Princess Diana of Themyscira",
      superpowers: ["superhuman strength", "fly", "uses boomerang tiara"]
    },
    { name: "northstar",
      alterEgo: "Jean-Paul Beaubier",
      superpowers: ["superhuman speed", "fly", "project photonic blasts"]
    },
    { name: "superlopez",
      alterEgo: "Juan López Fernández",
      superpowers: ["superhuman strength", "flight", "X-ray vision"]
    }
  ]
  
  callSuperHero = message => { 
    if (!this.heroOnCall) {
      this.heroOnCall = true
      alert(`${message.toUpperCase()} has been called!`)
    } else {
      alert('A hero has already been called and it is going to save the world!')
    }
  }
}
