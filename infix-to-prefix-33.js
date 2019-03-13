infixToPrefix=function(infix) 
{ 
    /* Reverse String 
     * Replace ( with ) and vice versa 
     *  */
    let l = infix.length; 
  
    // Reverse infix 
    reverse(infix.begin(), infix.end()); 
  
    // Replace ( with ) and vice versa 
    for (let i = 0; i < l; i++) { 
  
        if (infix[i] == '(') { 
            infix[i] = ')'; 
            i++; 
        } 
        else if (infix[i] == ')') { 
            infix[i] = '('; 
            i++; 
        } 
    } 
  
    let prefix = infixToPostfix(infix); 
  
    // Reverse postfix 
    reverse(prefix.begin(), prefix.end()); 
  
    return prefix; 
} ;

function isOperator(c) 
{ 
    return (!isalpha(c) && !isdigit(c)); 
} ;
  
function getPriority(C) 
{ 
    if (C == '-' || C == '+') 
        return 1; 
    else if (C == '*' || C == '/') 
        return 2; 
    else if (C == '^') 
        return 3; 
    return 0; 
} ;
  
function infixToPostfix(infix) 
{ 
    infix = '(' + infix + ')'; 
    let l = infix.size(); 
    stack<char> char_stack; 
    let output; 
  
    for (let i = 0; i < l; i++) { 
  
        // If the scanned character is an  
        // operand, add it to output. 
        if (isalpha(infix[i]) || isdigit(infix[i])) 
            output += infix[i]; 
  
        // If the scanned character is an 
        // ‘(‘, push it to the stack. 
        else if (infix[i] == '(') 
            char_stack.push('('); 
  
        // If the scanned character is an 
        // ‘)’, pop and output from the stack  
        // until an ‘(‘ is encountered. 
        else if (infix[i] == ')') { 
  
            while (char_stack.top() != '(') { 
                output += char_stack.top(); 
                char_stack.pop(); 
            } 
  
            // Remove '(' from the stack 
            char_stack.pop();  
        } 
  
        // Operator found  
        else { 
              
            if (isOperator(char_stack.top())) { 
                while (getPriority(infix[i]) 
                   <= getPriority(char_stack.top())) { 
                    output += char_stack.top(); 
                    char_stack.pop(); 
                } 
  
                // Push current Operator on stack 
                char_stack.push(infix[i]); 
            } 
        } 
    } 
    return output; 
} ;

let s = ("(a-b/c)*(a/k-l)"); 
console.log(infixToPrefix(s)); 