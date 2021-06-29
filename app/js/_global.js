var queryarr = document.querySelector("query");
// Global
app.global = {
    init: function(){ // Load all global functions here
        console.log("load global functions");
        app.global.loadHeader();
        
    },
    loadHeader: function(){ // Some specific function
        console.log("loadHeader()");
    },
    classCheck: function(arr){
        
    }
}

// Run the global stuff
app.global.init();

// dom listeners 
var query = document.getElementsByClassName("query");

for (var i = 0 ; i < query.length; i++) {
    
    query[i].addEventListener('click' , function(){
        

        if(this.classList.contains("active")) {
            this.classList.remove("active");
        }else {

            for (var j = 0 ; j < query.length; j++) {
                query[j].classList.remove("active");

            }

            this.classList.add("active");

        }

    }) ; 
}
