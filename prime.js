
  //JavaScript function that takes an integer as an argument and check whether it is prime number or not


    function prime(n){
        let arr=[];
        let m=0;
        
        for(var i=1; i<=n;i++){
            
                if (n%i==0) {
                    m++;
                }
            }


            if (m>2) { //When it is NOT prime number
                let j=0;   
                for(var i=1; i <= n; i++){
                    var z = 0;
                    for (var x=1; x <= i; x++) {

                        if (i%x==0) {
                            z++;
                        }
                    }
                    if (z<=2) {

                        arr[j]=i;
                        j++;
                    }
                }
               return arr;
            }
            else{ //When it is prime number RETURN 1
              return 1;
            }
        }
    
    //Example of calling the function by passing it value 12:    
    console.log(prime(12));
 