'use strict'



/*task 5*/
const ask = (question, yes, no) => {
    if (confirm(question)) yes();
    else no();
}

ask("Do you agree?",
    () => alret('you agreed.'),
    () => alert('you canceled the execution')
);