
function Message(){
    //JSX (JavaScript XML) code
    const name='';
    if(name)
    return (
        <div>
            <h1>Hello {name}</h1>
        </div>
    )
    return <h1>Hello unknown</h1>
}
export default Message;