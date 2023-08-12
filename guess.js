let rand =Math.floor(Math.random()*101);
      const guess=()=>{
        let input=document.getElementById("input").value;
        
        if(input==rand){
          document.getElementById("output").innerHTML= "Great guess";
        }
        else if(input>rand){
          document.getElementById("output").innerHTML= "Its too high..";
        }
        else{
          document.getElementById("output").innerHTML="Its too low..";
        }
      }