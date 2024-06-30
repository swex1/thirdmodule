//write a smart contract to create your own ERC20 token and deploy it using HardHat or Remix. 
Once deployed, you should be able to interact with it for your walk-through video. From your chosen tool, 
the contract owner should be able to mint tokens to a provided address and any user should be able to burn and transfer tokens.


* Firstly Open  "openzeppelin.com : https://wizard.openzeppelin.com/ " .


* //ERC-20 Contents
ERC-20 is a list of functions and events that must be implemented into a token to be considered ERC-20 compliant. These functions (called methods in the ERC) describe what must be included in the smart-contract-enabled token, while events describe an action. The functions a token must have are:
1 Ethereum Improvment Proposals. "ERC-20:Token Standard.".

* TotalSupply: The total number of tokens that will ever be issued.
* BalanceOf: The account balance of a token owner's account.
* Transfer: Automatically executes transfers of a specified number of tokens to a specified address for transactions using the token.
* TransferFrom: Automatically executes transfers of a specified number of tokens from a specified address using the token.
* Approve: Allows a spender to withdraw a set number of tokens from a specified account, up to a specific amount.
* Allowance: Returns a set number of tokens from a spender to the owner.

//Then ,The following functions are optional and are not required, but they enhance the token's usability:

  Token's name (optional)
  Its symbol (optional)
  Decimal points to use (optional) if you want to set you can .
  //contract Helloalexa is ERC20, ERC20Burnable, Ownable {
    constructor(address initialOwner)
        ERC20("helloalexa", "WHO")
        Ownable(initialOwner)
    {
        _mint(msg.sender, 10000 * 10 ** decimals());
    }


  // After that it you choose where you want to open .
     https://remix.ethereum.org/?#code=Ly8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVAovLyBDb21wYXRpYmxlIHdpdGggT3BlblplcHBlbGluIENv.
     I  choose remix .

  And then compile its after that deploy seee.

 // usage
 * ERC20 Standard: Implements basic ERC20 token functionality.
* ERC20Burnable: Adds the ability to burn tokens.
* Ownable: Adds ownership management.
* Initial Supply: Mints 10,000 tokens to the deployer.
* Minting: Allows the owner to mint new tokens.
* Burning: Allows the owner to burn tokens.


//License
This project is licensed under the MIT License. See the LICENSE file for detail



