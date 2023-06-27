export interface ChildProp{
    color:string
}

export const Child = ({color}:ChildProp) => {
    return(
        <div>{color}</div>
    )
}

export const FcChild: React.FC<ChildProp> = ({color}) => {
    return(
        <div>{color}</div>
    )
}
FcChild.defaultProps = {
    color:"blue"
}