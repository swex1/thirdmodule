step 1. write a smart contract that implements the require(), assert() and revert() statements.


step 2. simplly code start with smart contract syntex basic .
        and then intiallising state variable like count , value, owner.


step 3. //  intiallised constructor 
         * set owner to the address deploying the constract.
           owner =msg.sender.


step 4 . create the function of setNum() .
         increment the count varible by 1 each time the function is called ..
         uses a require statement to ensure that only the constract owner can call this function . if the caller is not the 
         owner ,the transaction is reverted with the message " address are not same ".


step 5. create the second function of assNum().
        this Function to check if the caller 's address is less than the owner 's address.
        this is an used assert , this used for internaal consistency.
        assert that the  the caller's address is less than the owner's address
        // If this condition fails, it indicates a serious issue and stops execution.


Step 6. Here Create Function revNum() to check if the caller is the owner using revert.
       // If the caller is not the owner, revert with the error message "fake user"
 
        
       
          
