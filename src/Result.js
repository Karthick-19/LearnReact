

const Result = ({secretNum,num}) => {
    let result;

    if(num){
        if(secretNum > num){
        result = 'Lower'
        }
        else if(secretNum < num){
            result = 'Higher'
        }
        else if(secretNum == num){
            result = 'You got it right'
        }
        else{
            result = 'Enter valid input'
        }
    }
    return <h2>You guessed: {result}</h2>
}

export default Result;