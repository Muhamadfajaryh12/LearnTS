type HeadingProps ={
    children:String
}

export const Heading = (props:HeadingProps) =>{
    return(
        <div>
            <h1>{props.children}</h1>
        </div>
    )
}