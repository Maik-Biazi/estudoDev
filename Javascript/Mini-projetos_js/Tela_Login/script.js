class Validator{
    constructor(){
        this.validations =[
         'data-min-length',   
        ]
    }
    //iniciar a validaçao de todos os campos de campos
    validate(form){


        //pegar os inputs
        let inputs = form.getElementsByTagName('input')

       
        //Transforma uma HtmlCollection -> array
        let inputsArray= [...inputs]
        
        //loop mos inputs e validação mediante ao que for encontrado
        inputsArray.forEach(function(input){
            for(let i=0; this.validations.lenght > i;i++)    {
                if(input.getAttribute(this.validations[i]) !=null){
                    console.log(input.getAttribute(this.validations[i]))
                    console.log("achou validçao")
                }
            }
        },this)
    }
     minlength(){

    }
}

let form = document.getElementById("register-form")
let submit = document.getElementById("btn-submit")

let validator= new Validator()

//evento que dispara as validaçoes
submit.addEventListener("click", function(e) {
    e.preventDefault()

   validator.validate(form)


})
