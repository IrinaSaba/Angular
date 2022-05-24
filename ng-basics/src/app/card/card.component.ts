import {Component, OnInit} from '@angular/core'

@Component({
   selector: 'app-card',
   templateUrl: './card.component.html',
   styleUrls: ['./card.component.scss'],
  //  interpolation: ['[[',']]']
  //  template: `
  // <div class="card">
  //   <h2>Card component</h2>
  //   <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio, delectus.</p>
  // </div>
  //  `,
  //  styles: [
  //  ` .card {
  //     padding: .5rem 1rem;
  //     border: 1px dashed red;
  //     margin-bottom: 1rem;
  //  }
  //  h2 {
  //   margin-bottom: .5rem;
  //   }` 
  //  ] 
})
export class CardComponent implements OnInit {
  title: string = 'Irina is the best'
  text: string = 'trying to study Angular'
  // number: number = 42
  // array: number[] = [1,2,3,4,5,6]
  // obj: object = {name: 'irina', 
  //   info: {
  //   age: 37,
  //   job: 'frontend'
  // }
  // }
  textColor: string = ''
  imageUrl : string = 'https://loga-engineering.com/wp-content/uploads/2019/10/angular-logo.png'
  disabled = false
  ngOnInit() {
   setTimeout(() => {
     this.imageUrl = 'https://149611589.v2.pressablecdn.com/wp-content/uploads/2016/09/reactjs.png'
     this.disabled = true
   }, 3000)
  }
  getInfo() : string {
    return 'this is so difficult'
  }
  changeTitle() {
    this.title = 'Title have been changed'
  }
  inputHandler(event:any){
    this.title = event.target.value
  }
  changeHandler(){
    console.log(this.title)
    
  }
}