function Icons ( {iconName, size, link} ) {
    return(
        <a href={link} target="_blank"> <img src={`/Icons/${iconName}.svg`} width={size}/></a>
    )
}


Icons.defaultProps = {
    size: "30px"
}

export default Icons;