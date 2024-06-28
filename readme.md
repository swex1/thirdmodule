step 1. write a smart contract that implements the require(), assert() and revert() statements.
step 2. simplly code start with smart contract syntex basic .
        and then intiallising state variable like count , value, owner.
step 3. //  intiallised constructor 
         * set owner to the address deploying the constract.
           owner =msg.sender.
step 4 . create the function of setNum() .
         increment the count varible by 1 each time the function is called ..
         uses a require statement to ensure that nly the constract owner can call this function . if the caller is not the owner 
         ,the transaction is reverted with the message " 
          
