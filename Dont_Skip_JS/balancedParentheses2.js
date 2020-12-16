function balancedParentheses(str) {
    
    let stack = [];
    
    let openers = {
        '{': '}',
        '[': ']',
        '(': ')'
    }

    let closers = {
        '}': true,
        ']': true,
        ')': true
    }

    for (let i = 0; i < str.length; i++) {
        //traversing and storing one character of the string at a time
        let bracket = str[i];

        //if the character found in the openers map, push the corresponding closing bracket into stack 
        if (openers[bracket]) {
            stack.push(bracket);
        }
        //character found in the closers map, pop from stack
        else if (closers[bracket]){
            //return false if current character isn’t matching 
            //closed parenthesis for the last open parenthesis from the stack
            if (openers[stack.pop()] !== bracket) return false;
        }
    }
    //check if the stack is empty at the end
    return stack.length === 0;  
}
console.log(balancedParentheses("{[]()}" ));
console.log(balancedParentheses("{[(])}"));
console.log(balancedParentheses("{[}"));